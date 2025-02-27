import { featuredCardData, FeaturedProductionData } from "@/lib/data";
import FeatureBtn from "./FeatureBtn";
import Heading from "./shared/Heading";
import FeaturedCart from "./FeaturedCart";

const FreturedProduction = () => {
  return (
    <div className="flex h-fit pb-[5rem] flex-col items-center padding-x bg-secondary-foreground 640p:[4rem] mt-[4rem]">
      <div className="mt-20 flex flex-col items-center text-center">
        <Heading>Featured Properties</Heading>
        <h1 className="text-[35px] 1080p:text-[44px] text-primary-foreground font-semibold">
          Our Featured Properties
        </h1>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-5 640p:grid-cols-6">
        {FeaturedProductionData.map((item, i) => (
          <FeatureBtn key={i} label={item.label}>
            {item.icon}
            {item.name}
          </FeatureBtn>
        ))}
      </div>

      <div className="flex flex-col 640p:flex-row w-full justify-between mt-16 gap-6">
        {featuredCardData.map((item, i) => (
          <FeaturedCart key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FreturedProduction;
