import { NextResponse } from "next/server";
import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), ".data");
const LIKES_FILE = path.join(DATA_DIR, "likes.json");

async function getCount(): Promise<number> {
  try {
    const raw = await readFile(LIKES_FILE, "utf-8");
    const data = JSON.parse(raw) as { count: number };
    return typeof data.count === "number" ? data.count : 0;
  } catch {
    return 0;
  }
}

async function setCount(count: number): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(LIKES_FILE, JSON.stringify({ count }), "utf-8");
}

export async function GET() {
  const count = await getCount();
  return NextResponse.json({ count });
}

export async function POST() {
  const count = (await getCount()) + 1;
  await setCount(count);
  return NextResponse.json({ count });
}
