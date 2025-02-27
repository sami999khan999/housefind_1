import { formatNumber } from "@/lib/utils";
import Image from "next/image";
import { BsTextarea } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { Button } from "./ui/button";

type Property = {
  title: string;
  location: string;
  price: number;
  facilities: {
    bed: number;
    bath: number;
    area: number;
  };
};

const FeaturedCart = ({ item }: { item: Property }) => {
  return (
    <div className="w-full">
      <div className="rounded-t-2xl overflow-hidden relative">
        <Image
          src={"/featured-card-img.png"}
          width={416}
          height={303}
          alt="card-img"
          className="w-full"
        />
        <div className="absolute top-4 left-4 flex gap-3 text-[16px] font-medium cursor-pointer">
          <div className="bg-background rounded-sm text-primary-foreground w-fit px-4 py-1.5">
            Featured
          </div>
          <div className="bg-background rounded-sm text-primary-foreground w-fit px-4 py-1.5">
            For Sale
          </div>
        </div>
      </div>
      <div className="px-4 py-6 rounded-b-xl bg-background shadow-md">
        <div className="space-y-3">
          <h2 className="text-primary-foreground text-[24px] font-medium tracking-wide">
            {item.title}
          </h2>
          <p className="text-muted text-[16px] font-semibold">
            {item.location}
          </p>

          <div className="text-[16px] text-muted flex gap-4">
            <div className="flex items-center justify-center gap-2 border rounded-full  w-fit px-4 py-2">
              <IoBedOutline size={20} /> x{item.facilities.bed}
            </div>
            <div className="flex items-center justify-center gap-2 border rounded-full  w-fit px-4 py-2">
              <LuBath size={20} /> x{item.facilities.bath}
            </div>
            <div className="flex items-center justify-center gap-2 border rounded-full  w-fit px-4 py-2">
              <BsTextarea size={20} /> {item.facilities.area} sq
            </div>
          </div>
        </div>

        <div className="border-t my-8"></div>

        <div className="flex justify-between items-center">
          <Button className="text-foreground text-[16px] font-normal px-6 hover:bg-primary-foreground hover:text-secondary-foreground tracking-wider">
            ${formatNumber(item.price)}
          </Button>
          <div className="text-primary-foreground w-10 flex items-center justify-center aspect-square rounded-full bg-slate-300">
            <GoHeart size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCart;
