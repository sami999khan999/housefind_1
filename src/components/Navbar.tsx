"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries, navDropdownData } from "@/lib/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown, IoMdMail } from "react-icons/io";
import { RiArrowRightUpFill } from "react-icons/ri";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Navbar = () => {
  // State to manage selected country in dropdown
  const [selectedCountry, setSelectedCountry] = useState(countries[0].name);

  return (
    <nav className="320p:hidden 640p:block">
      {/* Top navigation bar with contact info and country selector */}
      <div className="bg-[#737373] flex justify-center">
        <div className="padding-x  text-background h-[55px] flex justify-between items-center tracking-wide">
          {/* Left section: Contact Information */}
          <div className="left flex gap-4">
            {/* Email */}
            <div className="flex items-center gap-2">
              <IoMdMail size={22} />
              <p>housebox@gmail.com</p>
            </div>

            <div className="ceperator"></div>

            {/* Phone */}
            <div className="flex gap-2">
              <FaPhoneAlt size={22} />
              <p>(234) 345-4574</p>
            </div>

            <div className="ceperator"></div>

            {/* Location */}
            <div className="flex gap-2">
              <FaMapMarkerAlt size={22} fill="white" />
              <p>(234) 345-4574</p>
            </div>
          </div>

          {/* Right section: Country Select & Sign In */}
          <div className="flex gap-4 items-center justify-center">
            {/* Country Selector (ShadCN Select) */}
            <Select
              value={selectedCountry}
              onValueChange={(value) => setSelectedCountry(value)}
            >
              <SelectTrigger className="w-[100px] bg-transparent text-background outline-none border-none duration-150 px-0 text-xl rounded-sm ">
                <SelectValue placeholder="Select Country " />
              </SelectTrigger>
              <SelectContent className="bg-white text-primary-foreground">
                {countries.map((country) => (
                  <SelectItem
                    key={country.name}
                    value={country.name}
                    className="flex items-center gap-4 text-xl"
                  >
                    <Image
                      src={country.flag}
                      alt="flag"
                      width={30}
                      height={30}
                      className="inline-block mr-3"
                    />
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="ceperator"></div>

            {/* Sign In Link */}
            <div>
              <Link href={"/"}>SIGN IN</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="flex justify-center">
        <div className="padding-x h-[90px] flex items-center justify-between">
          <Logo />
          {/* Navigation Menu with Dropdowns */}
          <div className="flex gap-2 z-50">
            {navDropdownData.map((dropdown) => (
              <DropdownMenu key={dropdown.name}>
                <DropdownMenuTrigger className="bg-transparent text-primary-foreground border-none px-3 py-1 rounded-sm outline-none cursor-pointer font-semibold tracking-wide flex items-center justify-center gap-1 hover:bg-foreground duration-100">
                  {dropdown.name}
                  <IoIosArrowDown />
                </DropdownMenuTrigger>

                {/* Dropdown Menu Content */}
                <DropdownMenuContent className="bg-white text-primary-foreground text-xl space-y-1 rounded-tr-[10px] rounded-bl-[10px] border border-secondary shadow-sm shadow-primary-foreground">
                  {dropdown.item.map((item, i) => (
                    <DropdownMenuItem
                      key={item.link}
                      className={`outline-none hover:bg-primary hover:text-secondary-foreground  ${
                        i === 0 ? "rounded-tr-[10px]" : "rounded-none"
                      } ${
                        i === dropdown.item.length - 1
                          ? "rounded-bl-[10px]"
                          : "rounded-none"
                      }`}
                    >
                      <a
                        href={item.link}
                        className="text-lg px-4 outline-none "
                      >
                        {item.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* Search & View Listing Button */}
          <div className="text-primary-foreground flex items-center justify-center gap-4">
            {/* Search Icon */}
            <div>
              <BiSearch size={30} />
            </div>
            <div className="ceperator h-[30px]"></div>

            {/* View Listing Button */}
            <Button className="flex items-center justify-center text-secondary-foreground px-6 py-7 text-base gap-3 hover:bg-primary-foreground">
              <p>View Listing</p>
              <RiArrowRightUpFill className="inline-block w-10 h-10" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
