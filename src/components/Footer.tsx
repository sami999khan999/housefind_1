import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import Logo from "./Logo";
import { FaEarthAfrica, FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";

const Footer = () => {
  const posts = Array(6).fill("/posts.png");

  const currentYear = new Date().getFullYear();

  return (
    <div className=" bg-secondary-foreground padding-x pt-[16rem]">
      <div className="flex justify-between">
        <div className="flex flex-col justify-start items-start gap-5">
          <Logo />
          <p className="w-[20rem] text-primary-foreground text-lg">
            As HouseBox's lead negotiator, Chris brings years of experience in
            securing the best deals both.
          </p>
          <div className="text-primary-foreground flex gap-4">
            <Link
              href={"/"}
              className="bg-white w-9 aspect-square rounded-full flex items-center justify-center"
            >
              <FaFacebookF size={19} />
            </Link>
            <Link
              href={"/"}
              className="bg-white w-9 aspect-square rounded-full flex items-center justify-center"
            >
              <FaLinkedinIn size={19} />
            </Link>
            <Link
              href={"/"}
              className="bg-white w-9 aspect-square rounded-full flex items-center justify-center"
            >
              <AiFillInstagram size={19} />
            </Link>
            <Link
              href={"/"}
              className="bg-white w-9 aspect-square rounded-full flex items-center justify-center"
            >
              <FaYoutube size={19} />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-2xl text-primary-foreground font-bold tracking-wide">
            Quick Links
          </h2>
          <div className="text-[16px] text-primary-foreground tracking-wide space-y-4 font-medium mt-4">
            <p>Home</p>
            <p>Listing</p>
            <p>Properties</p>
            <p>Our Blog</p>
            <p>Dashboard</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl text-primary-foreground font-bold tracking-wide">
            Contact Us
          </h2>
          <div className="text-[16px] text-primary-foreground tracking-wide space-y-4 font-medium mt-4">
            <div className="flex items-center gap-3">
              <FaPhoneAlt size={20} /> Home
            </div>
            <div className="flex items-center gap-3">
              <FaLocationDot size={20} /> Listing
            </div>
            <div className="flex items-center gap-3">
              <IoMdMail size={20} /> Properties
            </div>
            <div className="flex items-center gap-3">
              <FaEarthAfrica size={20} /> Our Blog
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl text-primary-foreground font-bold tracking-wide  mb-4">
            Instagram Posts
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {posts.map((post, index) => (
              <div key={index}>
                <Image
                  src={post}
                  width={100}
                  height={100}
                  alt={`post-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border border-gray-300 mt-14 mb-8"></div>

      <div className="text-center text-primary-foreground text-xl mb-8">
        ©Copyright {currentYear} - Blackrise Themes. All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
