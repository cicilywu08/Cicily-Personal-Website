import { aboutClosing, aboutParagraphs } from "@/data/about";

/** Pull-quote paragraph index (short reflective line) */
const PULL_QUOTE_INDEX = 1;

export default function AboutNarrative() {
  return (
    <article className="about-narrative">
      {aboutParagraphs.map((text, i) => {
        if (i === PULL_QUOTE_INDEX) {
          return (
            <p key={i} className="about-narrative__pull">
              {text}
            </p>
          );
        }
        return (
          <p key={i} className="about-narrative__p">
            {text}
          </p>
        );
      })}
      <p className="about-narrative__closing">{aboutClosing}</p>
    </article>
  );
}
