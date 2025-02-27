import Image from "next/image";
import React from "react";
import { IoShareSocialSharp } from "react-icons/io5";

const ExpertsCard = ({
  name,
  position,
}: {
  name: string;
  position: string;
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center relative">
        <div className="flex items-center justify-center ">
          <Image src="/experts.png" alt="expert" width={330} height={360} />
        </div>
        <div className="absolute text-background bg-primary-foreground h-12 w-12 rounded-full flex items-center justify-center cursor-pointer">
          <IoShareSocialSharp size={22} />
        </div>
      </div>
      <div className="text-center mt-4">
        <h1 className="text-[24px] text-primary-foreground font-semibold">
          {name}
        </h1>
        <p className="text-[18px] text-primary-foreground">{position}</p>
      </div>
    </div>
  );
};

export default ExpertsCard;
