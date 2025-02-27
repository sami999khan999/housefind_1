"use client";

import { bestFeaturedItemData } from "@/lib/data";
import { RiArrowRightUpFill } from "react-icons/ri";
import BestFeaturedItemCard from "./BestFeaturedItemCard";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const BestFeaturedItems = () => {
  return (
    <div className="bg-hero bg-cover bg-center h-full flex justify-center">
      <div className=" padding-x py-[6rem] flex flex-col 640p:flex-row gap-6 640p:gap-0 justify-between">
        <div className="flex flex-col items-center 640p:items-start gap-4">
          <h2 className="!text-background text-lg 640p:text-xl bg-white/15 backdrop-blur-sm px-6 py-1 rounded-md font-normal tracking-wide text-opacity-10 w-fit">
            Our best featured item
          </h2>
          <h1 className="text-[30px] 640p:text-[48px] w-[20rem] font-semibold text-background leading-tight">
            Our Featured Items
          </h1>
          <p className="w-fit 640p:w-[25rem] text-background text-center 640p:text-left">
            At HouseBox, we’re redefining the way peoples find, sell, and invest
            in properties, our mission.
          </p>
          <Button className="text-foreground hover:bg-primary-foreground mt-2 text-base py-5 px-6 w-fit">
            See All Properties <RiArrowRightUpFill size={20} />
          </Button>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="w-full max-w-md 640p:mr-[4rem]"
          >
            <CarouselContent className="-mt-1 h-[304px]">
              {bestFeaturedItemData.map((item, index) => (
                <CarouselItem key={index} className="pt-1 md:basis-1/2">
                  <BestFeaturedItemCard {...item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden 640p:flex absolute text-primary-foreground -right-8  top-1/2 transform -translate-y-1/2 640p:flex-col">
              <CarouselPrevious className="bg-background text-5xl mb-6 absolute -top-14" />
              <CarouselNext className="bg-background text-5xl absolute top-8" />
            </div>
            {/* <div className="640p:hidden text-primary-foreground">
            <CarouselPrevious className="bg-background  absolute -top-16" />
            <CarouselNext className="bg-background  absolute -bottom-16" />
          </div> */}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BestFeaturedItems;
