import { aboutClosing, aboutParagraphs } from "@/data/about";

export default function AboutNarrative() {
  return (
    <article className="about-narrative">
      {aboutParagraphs.map((text, i) => (
        <p key={i} className="about-narrative__p">
          {text}
        </p>
      ))}
      <p className="about-narrative__p">{aboutClosing}</p>
    </article>
  );
}
