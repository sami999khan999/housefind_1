import About from "@/components/About";
import BestFeaturedItems from "@/components/BestFeaturedItems";
import Experts from "@/components/Experts";
import FeedBack from "@/components/FeedBack";
import Footer from "@/components/Footer";
import FreturedProduction from "@/components/FreturedProduction";
import Hero from "@/components/Hero";
import PropertyLocation from "@/components/PropertyLocation";
import { StepsToBuy } from "@/components/StepsToBuy";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <About />
      <FreturedProduction />
      <StepsToBuy />
      <BestFeaturedItems />
      <PropertyLocation />
      <FeedBack />
      <Experts />
      <Footer />
    </Suspense>
  );
};

export default page;
