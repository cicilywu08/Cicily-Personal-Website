interface ProseHtmlProps {
  html: string;
  className?: string;
}

export default function ProseHtml({ html, className = "prose-custom" }: ProseHtmlProps) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
