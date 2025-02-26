import Image from "next/image";
import React from "react";
import Heading from "./shared/Heading";
import { aboutDetails } from "@/lib/data";
import { Button } from "./ui/button";
import { RiArrowRightUpFill } from "react-icons/ri";

const About = () => {
  return (
    <div className="padding-x 640p:h-full 1080p:h-[85vh] flex flex-col 640p:flex-row mt-[4rem] 1080p:mt-[10rem]">
      <div className="640p:w-[60%] 640p:flex hidden ">
        <div className="bg-about bg-cover bg-center 640p:h-[508px] 640p:w-[508px] 1080p:h-[636px] 1080p:w-[636px] relative ">
          <Image
            src={"/about/image-2.png"}
            width={100}
            height={100}
            alt="about-image-2"
            className="absolute bg-background p-3 rounded-2xl -top-20 right-0 1080p:w-[470px] 1080p:h-[260px] 640p:w-[400px] 640p:h-[200px]"
          />
          <div className="1080p:w-[292px] 1080p:h-[134px] 640p:w-[233.6px] 640p:h-[107.2px] bg-white flex items-center justify-center flex-col z-50 absolute 1080p:top-[110px] 1080p:-right-20 640p:top-[60px] 640p:-right-20 rounded-lg shadow-md gap-3">
            <p className="text-primary-foreground 1080p:text-2xl 640p:text-base font-semibold">
              Our Happy Customers
            </p>
            <Image
              src={"/about/customers.png"}
              width={236}
              height={56}
              alt="cucotmers"
              className="1080p:w-[236px] 1080p:h-[56px] 640p:w-[190px] 640p:h-[45px]"
            />
          </div>
        </div>
      </div>
      <div className="640p:w-[40%] flex flex-col gap-8 items-center 640p:items-start">
        <div className="flex flex-col gap-2 items-center 640p:items-start">
          <Heading>About Housebox</Heading>
          <h2 className="text-primary-foreground text-[34px] 640p:text-[44px] font-bold w-full 640p:w-[25rem] leading-tight text-center 640p:text-left">
            Embrace the Elegance Our Exclusive Property
          </h2>
          <p className="text-primary-foreground w-fit 640p:w-[474.68px] text-[18px] text-center 640p:text-left">
            At HouseBox, we’re redefining the way people find, sell, and invest
            in properties. Our mission is to simplify real a estate by provide
            innovative solutions, expert guidance.
          </p>
        </div>

        <div className="border-y-2 flex text-primary-foreground justify-between 640p:w-[474.68px] px-4 py-8 w-full">
          <div className="flex flex-col items-center">
            <p className="640p:text-4xl text-2xl font-semibold">
              {aboutDetails.homeSold}
            </p>
            <p className="640p:w-fit text-xs font-medium 640p:text-base">
              Home Soled
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="640p:text-4xl text-2xl font-semibold">
              {aboutDetails.happyClients}
            </p>
            <p className="640p:w-fit text-xs font-medium 640p:text-base">
              Happy Clients
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="640p:text-4xl text-2xl font-semibold">
              {aboutDetails.satisfactionRate}
            </p>
            <p className=" 640p:w-fit text-xs font-medium 640p:text-base">
              Satisfaction Rate
            </p>
          </div>
        </div>

        <Button className="w-fit py-6 px-5 text-foreground tracking-wide text-base hover:bg-primary-foreground">
          See All Properties <RiArrowRightUpFill size={20} />
        </Button>
      </div>
    </div>
  );
};

export default About;
