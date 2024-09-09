import { PropsWithChildren, HTMLProps } from "react";

export default function Col({
  children,
  className,
}: PropsWithChildren<HTMLProps<HTMLDivElement>>) {
  return <div className={`flex-1 ${className || ""}`}>{children}</div>;
}
