"use client";

import { propertyLocationData } from "@/lib/data";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import PropertyLoactionCard from "./PropertyLoactionCard";
import Heading from "./shared/Heading";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const PropertyLocation = () => {
  const plugin = useRef(Autoplay({ delay: 2000 }));

  return (
    <div className="flex justify-center">
      <div className="padding-x flex flex-col justify-center my-[5rem]">
        <div className="flex flex-col items-center">
          <Heading>property location</Heading>
          <h1 className="text-primary-foreground text-center 640p:text-left text-[30px] 640p:text-[44px] font-semibold mt-4">
            Explore Our Property Location
          </h1>
        </div>

        <div className="w-full mt-8">
          <Carousel
            className="w-full"
            plugins={[plugin.current]}
            // onMouseEnter={plugin.current.stop}
            // onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-1 gap-4">
              {propertyLocationData.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/5"
                >
                  <PropertyLoactionCard {...item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <div className="hidden 640p:block ">
              <CarouselPrevious className="text-background bg-primary absolute -left-20" />
              <CarouselNext className="text-background bg-primary absolute -right-20" />
            </div> */}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PropertyLocation;
