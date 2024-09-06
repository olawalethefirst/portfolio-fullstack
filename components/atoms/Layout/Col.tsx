import { PropsWithChildren } from "react";

export default function Col({ children }: PropsWithChildren) {
  return <div className="flex-1">{children}</div>;
}
