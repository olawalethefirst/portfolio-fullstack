import SectionHead from "@/components/atoms/SectionHead/SectionHead";
import PublicationCard, {
  PublicationCardProps,
} from "@/components/PublicationCard/PublicationCard";

interface PublicationProps {
  publications: PublicationCardProps[];
}
export default function Publications({ publications }: PublicationProps) {
  return (
    <div className="laptop:mt-30 p-2 laptop:p-0">
      <SectionHead title="Ventures" />

      <div className="mt-5 tablet:ml-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
        {publications.map((publication, index) => (
          <PublicationCard key={String(index)} {...publication} />
        ))}
      </div>
    </div>
  );
}
