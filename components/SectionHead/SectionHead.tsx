export interface SectionHeadProps {
  title: string;
}

export default function SectionHead({ title }: SectionHeadProps) {
  return <h2 className="text-2xl laptop:text-3xl text-bold">{title}</h2>;
}
