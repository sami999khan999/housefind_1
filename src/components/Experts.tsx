import { expertData } from "@/lib/data";
import { RiArrowRightUpFill } from "react-icons/ri";
import ExpertsCard from "./ExpertsCard";
import Heading from "./shared/Heading";
import { Button } from "./ui/button";

const Experts = () => {
  return (
    <div className="padding-x h-fit 1080p:h-[110vh] 640p:h-[157vh] relative">
      <div className="flex items-center flex-col mt-[5rem]">
        <Heading>Experts Behind HouseBox</Heading>
        <h1 className="text-primary-foreground 640p:w-[30rem] text-[30px] 640p:text-[44px] font-semibold text-center mt-4">
          The HouseBox Dream Team
        </h1>
      </div>

      <div className="flex flex-col 640p:flex-row gap-6 1080p:gap-0 justify-between mt-10 640p:pb-[10rem] pb-[4rem]">
        {expertData.map((item, i) => (
          <ExpertsCard {...item} key={i} />
        ))}
      </div>

      <div className="bg-primary 640p:rounded-[3rem] rounded-[2rem] -bottom-36 w-full flex flex-col 640p:flex-row justify-between 640p:h-[21rem] overflow-hidden">
        <div className="640p:px-12 px-8 py-12 space-y-5">
          <h2 className="text-foreground 640p:w-[24rem] text-[27px] 640p:text-[44px] font-semibold text-center 640p:text-left leading-tight">
            Step Into Your Dream Home with HouseBox
          </h2>
          <p className="text-foreground 640p:w-[32rem] tracking-wide text-center 640p:text-left">
            {`At HouseBox, we believe your next home is more than just a place -
            it's where your future begins you're buy.`}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-[#4D5FA5] w-[468px] aspect-square rounded-full flex justify-center items-center">
            <div className="h-[386px] aspect-square bg-[#47589E] rounded-full flex justify-center items-center">
              <div className="h-[294px] aspect-square bg-[#3F5096] rounded-full flex justify-center items-center">
                <Button className="text-foreground py-6 px-6 hover:bg-primary-foreground">
                  Find Your Dream Home <RiArrowRightUpFill size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
