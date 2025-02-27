import React from "react";
import Heading from "./shared/Heading";
import StepstoBuyCard from "./StepstoBuyCard";

export const StepsToBuy = () => {
  return (
    <div className="flex justify-center">
      <div className="padding-x  flex flex-col my-[5rem] items-center ">
        <Heading>3 step to buy sell property</Heading>
        <h1 className="text-[30px] 640p:text-[44px] text-primary-foreground font-semibold mt-2 text-center">
          See How Realton Can Help
        </h1>

        <div className="flex flex-col 640p:flex-row w-full justify-between gap-9 mt-[4rem] ">
          <StepstoBuyCard btnText="Buy A Property" />
          <StepstoBuyCard btnText="Sell A Property" />
          <StepstoBuyCard btnText="Rent A Property" />
        </div>
      </div>
    </div>
  );
};
