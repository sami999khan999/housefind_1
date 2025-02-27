import About from "@/components/About";
import BestFeaturedItems from "@/components/BestFeaturedItems";
import FeedBack from "@/components/FeedBack";
import FreturedProduction from "@/components/FreturedProduction";
import Hero from "@/components/Hero";
import PropertyLocation from "@/components/PropertyLocation";
import { StepsToBuy } from "@/components/StepsToBuy";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <FreturedProduction />
      <StepsToBuy />
      <BestFeaturedItems />
      <PropertyLocation />
      <FeedBack />
    </div>
  );
};

export default page;
