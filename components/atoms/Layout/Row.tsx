import {PropsWithChildren} from 'react'

export default function Row({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-1.5 tablet:flex-row laptop:gap-2">{children}</div>
  );
}
