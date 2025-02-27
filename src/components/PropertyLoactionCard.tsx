import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

interface PropertyLocationCardProps {
  location: string;
  properties: number;
}

const PropertyLocationCard: React.FC<PropertyLocationCardProps> = ({
  location,
  properties,
}) => {
  return (
    <div className="relative full h-[291px] overflow-hidden rounded-lg">
      <Image
        src="/property-location.png"
        alt="property location"
        fill
        className="object-cover"
      />
      <p className="absolute text-[16px] top-5 right-5 text-primary-foreground bg-background w-10 h-10 rounded-full font-bold text-center flex items-center justify-center">
        {properties}
      </p>
      <Button className="absolute bg-background text-xl py-6 w-[85%] bottom-4 left-1/2 transform -translate-x-1/2 hover:bg-primary-foreground hover:text-background">
        {location}
      </Button>
    </div>
  );
};

export default PropertyLocationCard;
