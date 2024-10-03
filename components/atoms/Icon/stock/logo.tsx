import React from "react";
import { IconSVGProps } from "../type";

export default function SVG({ size, ...otherProps }: IconSVGProps) {
  return (
    <svg
      viewBox="0 0 87 51"
      height={size}
      width={(size * 87) / 51}
      fill="none"
      {...otherProps}
    >
      <path
        d="M79 21.5C86.8538 13.4185 79.6844 5.001 66.1823 5.001C52.6802 5.001 34.1786 5 23.7972 5C13.4158 5 5 14.1407 5 25.4164C5 36.6921 13.4158 45.8329 23.7972 45.8329C34.1786 45.8329 42.5944 36.6921 42.5944 25.4164C42.5944 24.4739 42.478 17.6582 37.4552 13.9832"
        stroke="black"
        strokeWidth="9"
      />
      <path
        d="M65.8468 24.4736C84.5 26 83.1274 45.8323 72.3294 45.8323C61.5315 45.8323 66.897 45.8323 55.2617 45.8323C55.2617 32.7658 55.2617 26.2325 55.2617 13.166"
        stroke="black"
        strokeWidth="9"
      />
    </svg>
  );
}
