"use client";

import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { BiSearch } from "react-icons/bi";
import { RiArrowRightUpFill } from "react-icons/ri";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import { navDropdownData } from "@/lib/data";

const MobileNav = () => {
  return (
    <div className="bg-background h-[3.8rem] 640p:hidden w-full flex items-center justify-between px-4">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Image src="/logo.png" width={35} height={30} alt="logo" />
        <p className="text-xl text-primary-foreground font-bold tracking-wide">
          HOUSEFIND
        </p>
      </div>

      {/* Menu Button (Opens Sidebar) */}
      <Sheet>
        <SheetTrigger className="text-primary-foreground">
          <IoIosMenu size={30} />
        </SheetTrigger>

        {/* Sidebar Content */}
        <SheetContent side="left" className="bg-background w-64 p-5">
          {/* Logo Inside Sidebar */}
          <div className="flex items-center gap-2 mb-6">
            <Image src="/logo.png" width={35} height={30} alt="logo" />
            <p className="text-xl text-primary-foreground font-bold tracking-wide">
              HOUSEFIND
            </p>
          </div>

          {/* Navigation Menu */}
          <div className="flex flex-col gap-3">
            {navDropdownData.map((dropdown) => (
              <div key={dropdown.name} className="group">
                <button className="w-full text-left flex items-center justify-between text-primary-foreground font-semibold py-2">
                  {dropdown.name}
                  <IoIosArrowDown />
                </button>
                <div className="hidden w-full border-b">
                  <div className="ml-4 mt-1 space-y-2">
                    {dropdown.item.map((item) => (
                      <Link
                        key={item.link}
                        href={item.link}
                        className="block text-base font-medium text-primary-foreground hover:text-secondary-foreground"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Search & View Listing */}
          <div className="mt-6 flex flex-col gap-4">
            <div className="text-primary-foreground flex items-center gap-3">
              <BiSearch size={25} />
              <span>Search</span>
            </div>

            <Button className="w-full flex items-center justify-center text-secondary-foreground px-6 py-3 text-base gap-3 hover:bg-primary-foreground">
              <p>View Listing</p>
              <RiArrowRightUpFill className="w-6 h-6" />
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
