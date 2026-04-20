import { useInView } from "@/hooks";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const BlurText = ({ text, className = "", delay = 0 }: BlurTextProps) => {
  const [ref, inView] = useInView(0.1);

  return (
    <span
      ref={ref as React.RefObject<HTMLSpanElement>}
      className={`blur-text ${className} ${inView ? "in-view" : ""}`}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="blur-char"
          style={{ animationDelay: `${delay + i * 0.02}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};
