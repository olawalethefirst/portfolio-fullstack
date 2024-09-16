import SectionHead from "../SectionHead/SectionHead";
import ServiceCard from "../PublicationCard/PublicationCard";

export default function Publications({ publications }) {
  return (
    <div className="laptop:mt-30 p-2 laptop:p-0">
      <SectionHead title="Publications" />

      <div className="mt-5 tablet:ml-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
        {publications.map((service, index) => (
          <ServiceCard
            key={index}
            name={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
