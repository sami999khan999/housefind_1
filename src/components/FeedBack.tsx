import { feedbackData } from "@/lib/data";
import FeedbackCard from "./FeedbackCard";
import Heading from "./shared/Heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const FeedBack = () => {
  return (
    <div className="padding-x bg-secondary-foreground py-[5rem]">
      <div>
        <div className="flex flex-col items-center 640p:items-start mb-8">
          <Heading>feedback/testimonial</Heading>
          <h1 className="text-[30px] 640p:text-[44px] text-primary-foreground text-center 640p:text-left font-semibold mt-2">
            A Legacy Of Happy Clients
          </h1>
        </div>
        <Carousel className="w-full">
          <CarouselContent>
            {feedbackData.map((item, index) => (
              <CarouselItem key={index} className="w-full">
                <FeedbackCard {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden 640p:flex absolute -top-16 right-10">
            <CarouselPrevious className="text-background bg-primary absolute -left-20" />
            <CarouselNext className="text-background bg-primary absolute " />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default FeedBack;
