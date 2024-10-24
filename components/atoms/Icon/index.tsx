import React, { lazy, Suspense, useMemo } from "react";
import { IconSVGProps } from "./type";

export default function Icon({
  name,
  ...otherProps
}: { name: string } & IconSVGProps) {
  try {
    const Icon = require(`./stock/${name}`).default;

    if (Icon) {
      return <Icon {...otherProps} />;
    }
  } catch {
    console.error(`Icon: ${name} not found`);

  }

  return null;
}
