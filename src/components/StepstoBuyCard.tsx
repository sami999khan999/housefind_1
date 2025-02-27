import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const StepstoBuyCard = ({ btnText }: { btnText: string }) => {
  return (
    <div className="w-full bg-gray-100 py-8 rounded-xl flex flex-col gap-8 items-center px-4 640p:px-0 ">
      <div className="w-full mx-auto flex justify-center px-4 640p:px-8">
        <Image
          src={"/steps-to-but.png"}
          width={356}
          height={200}
          alt="steps-to-but"
        />
      </div>

      <Button className="bg-background text-primary-foreground text-lg 640p:text-2xl px-8 py-7 my-4 hover:bg-primary-foreground hover:text-background">
        {btnText}
      </Button>
    </div>
  );
};

export default StepstoBuyCard;
