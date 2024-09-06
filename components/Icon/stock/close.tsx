import React from "react";
import { IconSVGProps } from "../type";

export default function SVG({
  color = "#100C0D",
  size = 30,
  ...otherProps
}: IconSVGProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="4px"
      height={size}
      width={size}
      {...otherProps}
    >
      <title />
      <g id="cross">
        <line className="cls-1" x1="7" x2="25" y1="7" y2="25" />
        <line className="cls-1" x1="7" x2="25" y1="25" y2="7" />
      </g>
    </svg>
  );
}
