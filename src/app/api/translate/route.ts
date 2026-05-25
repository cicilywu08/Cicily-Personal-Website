import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Translation is not configured (missing OPENAI_API_KEY)." },
      { status: 503 }
    );
  }

  try {
    const { html, title, location } = (await request.json()) as {
      html: string;
      title: string;
      location: string;
    };

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.3,
        messages: [
          {
            role: "system",
            content:
              "You translate Chinese personal essays to natural English. Preserve HTML tags and structure exactly (p, h2, blockquote). Return JSON only with keys: translatedTitle, translatedLocation, translatedBody.",
          },
          {
            role: "user",
            content: JSON.stringify({ title, location, html }),
          },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Translation request failed." }, { status: 502 });
    }

    const completion = await res.json();
    const text = completion.choices?.[0]?.message?.content;
    const parsed = JSON.parse(text) as {
      translatedTitle: string;
      translatedLocation: string;
      translatedBody: string;
    };

    return NextResponse.json({
      translatedTitle: parsed.translatedTitle,
      translatedLocation: parsed.translatedLocation,
      translatedBody: parsed.translatedBody,
    });
  } catch {
    return NextResponse.json({ error: "Translation failed." }, { status: 500 });
  }
}
