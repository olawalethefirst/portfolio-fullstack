import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function ProjectImagesCarousel({
  imagesUrl,
}: {
  imagesUrl: string[];
}) {
  return (
    <Carousel className="w-full flex gap-4 items-center">
      <CarouselPrevious className="static flex-none" />

      <CarouselContent containerClassName="w-full overflow-hidden">
        {imagesUrl.map((imageUrl, index) => (
          <CarouselItem key={imageUrl + index}>
            <div className="p-1">
              <Card className="border-0">
                <CardContent className="flex aspect-square relative items-center justify-center p-6">
                  <Image
                    alt={"project image"}
                    src={imageUrl}
                    layout="fill"
                    className="object-cover scale-95 hover:scale-100 active:scale-95 cursor-pointer transition-all ease-out duration-300"
                    priority={true}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNext className="static flex-none" />
    </Carousel>
  );
}
