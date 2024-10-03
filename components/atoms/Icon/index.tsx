import React, { useCallback, lazy, Suspense } from "react";
import { IconSVGProps } from "./type";

const createIcon = (iconPathName: string) =>
  lazy(() => import(`./stock/${iconPathName}`));

export default function Icon({
  name,
  ...other
}: { name: string } & IconSVGProps) {
  const Icon = createIcon(name);

  return (
    <Suspense>
      <Icon {...other} />
    </Suspense>
  );
}
