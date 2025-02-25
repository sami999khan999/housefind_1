"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import Image from "next/image";
import { countries } from "@/lib/data";

const Navbar = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0].name);

  return (
    <nav>
      {/* Top navigation bar */}
      <div className="padding-x bg-[#737373] text-background h-[55px] flex justify-between items-center tracking-wide">
        {/* Left section: Contact Information */}
        <div className="left flex gap-4">
          {/* Email */}
          <div className="flex items-center gap-2">
            <IoMdMail size={22} />
            <p>housebox@gmail.com</p>
          </div>

          <div className="border border-secondary h-[22px]"></div>

          {/* Phone */}
          <div className="flex gap-2">
            <FaPhoneAlt size={22} />
            <p>(234) 345-4574</p>
          </div>

          <div className="border-[0.25px] border-secondary h-[22px]"></div>

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
            <SelectTrigger className="w-[100px] bg-transparent text-background outline-none border-none hover:outline-[1px] duration-150 px-0 text-xl rounded-sm">
              <SelectValue placeholder="Select Country " />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              {countries.map((country) => (
                <SelectItem
                  key={country.name}
                  value={country.name}
                  className="flex items-center gap-4 text-xl"
                >
                  <img
                    src={country.flag}
                    alt="flag"
                    className="w-7 h-7 inline-block mr-3"
                  />
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="border border-secondary h-[22px]"></div>

          {/* Sign In Link */}
          <div>
            <Link href={"/"}>SIGN IN</Link>
          </div>
        </div>
      </div>

      <div className="padding-x h-[90px] flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <Image src={"/logo.png"} width={55.8} height={51} alt="logo" />
          <p className="text-2xl text-primary-foreground font-bold tracking-wide">
            HOUSEFIND
          </p>
        </div>

        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
