import React from "react";
import Heading from "./shared/Heading";

const PropertyLocation = () => {
  return (
    <div className="padding-x flex justify-center mt-[5rem]">
      <div className="flex flex-col items-center">
        <Heading>property location</Heading>
        <h1 className="text-primary-foreground text-[30px] 640p:text-[44px] font-semibold mt-4">
          Explore Our Property Location
        </h1>
      </div>
    </div>
  );
};

export default PropertyLocation;
