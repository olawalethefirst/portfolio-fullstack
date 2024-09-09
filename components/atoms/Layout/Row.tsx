import { PropsWithChildren, HTMLProps } from "react";

export default function Row({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLProps<HTMLDivElement>>) {
  return (
    <div
      className={`flex flex-col tablet:flex-row gap-1.5 tablet:flex-row laptop:gap-2 ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
}
