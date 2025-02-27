import React from "react";
import { Button } from "./ui/button";
import { RiArrowRightUpFill } from "react-icons/ri";

interface BestFeaturedItemCardProps {
  title: string;
  location: string;
  price: number;
  priceAfterDiscount: number;
}

const BestFeaturedItemCard: React.FC<BestFeaturedItemCardProps> = ({
  title,
  location,
  price,
  priceAfterDiscount,
}) => {
  return (
    <div className="bg-white 640p:w-[416px] w-full h-[304px] 640p:px-9 px-6 rounded-2xl shadow-lg flex flex-col justify-center gap-4">
      <p className="text-[18px] text-[#C4B098] line-clamp-1">{location}</p>
      <h3 className="text-[30px] 640p:text-[40px] font-semibold text-primary-foreground line-clamp-1">
        {title}
      </h3>
      <div className=" flex items-center gap-3">
        <p className="text-primary-foreground line-through text-[16px] 640p:text-[20px]">
          ${price.toLocaleString()}
        </p>
        <p className="text-[20px] 640p:text-[24px] font-bold text-[#C4B098]">
          ${priceAfterDiscount.toLocaleString()}
        </p>
      </div>

      <Button className="w-fit text-foreground py-7 text-base">
        Schedule Visit <RiArrowRightUpFill size={20} />
      </Button>
    </div>
  );
};

export default BestFeaturedItemCard;
