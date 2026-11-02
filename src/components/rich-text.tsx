import type { ReactNode } from "react";

export type TextSegment = {
  text: string;
  pink?: boolean;
  bold?: boolean;
};

export function RichText({
  segments,
  pinkClass = "text-[#ff4e94]",
  boldClass = "font-bold",
}: {
  segments: TextSegment[];
  pinkClass?: string;
  boldClass?: string;
}) {
  return (
    <>
      {segments.map((segment, index) => {
        const classes = [segment.pink ? pinkClass : "", segment.bold ? boldClass : ""]
          .filter(Boolean)
          .join(" ");
        return (
          <span key={index} className={classes || undefined}>
            {segment.text}
          </span>
        );
      })}
    </>
  );
}

export function RichParagraph({
  segments,
  className = "",
  pinkClass,
}: {
  segments: TextSegment[];
  className?: string;
  pinkClass?: string;
}) {
  return (
    <p className={className}>
      <RichText segments={segments} pinkClass={pinkClass} />
    </p>
  );
}

export function SectionHeading({
  segments,
  children,
  className = "",
  as: Tag = "h2",
  tone = "light",
}: {
  segments?: TextSegment[];
  children?: ReactNode;
  className?: string;
  as?: "h2" | "h3";
  tone?: "light" | "dark";
}) {
  const color = tone === "dark" ? "text-[#6a7282]" : "text-[#1e2939]";
  return (
    <Tag
      className={`text-center font-display text-[26px] leading-8 font-semibold tracking-[-1px] ${color} lg:text-[40px] lg:leading-[49px] ${className}`}
    >
      {segments ? <RichText segments={segments} /> : children}
    </Tag>
  );
}
