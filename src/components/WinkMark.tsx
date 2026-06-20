interface Props {
  size?: number;
  variant?: "light" | "dark";
  className?: string;
}

// >;) terminal wink mark. Light = white square w/ dark glyph. Dark = inverse.
export function WinkMark({ size = 48, variant = "light", className }: Props) {
  const bg = variant === "light" ? "#FFFFFF" : "#0A0A0A";
  const fg = variant === "light" ? "#0A0A0A" : "#FFFFFF";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 hover:scale-110 hover:brightness-125 cursor-pointer ${className ?? ""}`}
      aria-label="HackingPal"
    >
      <rect width="120" height="120" rx="24" fill={bg} />
      <text
        x="60"
        y="78"
        textAnchor="middle"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontWeight="700"
        fontSize="58"
        fill={fg}
        letterSpacing="-2"
      >
        <tspan>{"\u003E"}</tspan>
        <tspan className="wink-eye">;</tspan>
        <tspan>)</tspan>
      </text>
    </svg>
  );
}
