import { BsBuildings, BsHousesFill } from "react-icons/bs";
import { FaHouseChimney } from "react-icons/fa6";
import { LuBuilding2 } from "react-icons/lu";
import { PiBuildingApartment, PiWarehouseThin } from "react-icons/pi";

export const countries = [
  { name: "US", flag: "/countries/us.png" },
  { name: "CA", flag: "/countries/ca.png" },
  { name: "BD", flag: "/countries/bd.png" },
  { name: "IN", flag: "/countries/in.png" },
];

export const navDropdownData = [
  {
    name: "Home",
    item: [
      { name: "Item 1", link: "/home/item1" },
      { name: "Item 2", link: "/home/item2" },
      { name: "Item 3", link: "/home/item3" },
    ],
  },
  {
    name: "Pages",
    item: [
      { name: "Web Development", link: "/services/web-development" },
      { name: "App Development", link: "/services/app-development" },
      { name: "SEO Services", link: "/services/seo" },
    ],
  },
  {
    name: "Listing",
    item: [
      { name: "Our Story", link: "/about-us/our-story" },
      { name: "Our Team", link: "/about-us/our-team" },
      { name: "Careers", link: "/about-us/careers" },
    ],
  },
  {
    name: "Properties",
    item: [
      { name: "Support", link: "/contact/support" },
      { name: "Sales", link: "/contact/sales" },
      { name: "General Inquiries", link: "/contact/general" },
    ],
  },
  {
    name: "Dashboard",
    item: [
      { name: "Support", link: "/contact/support" },
      { name: "Sales", link: "/contact/sales" },
      { name: "General Inquiries", link: "/contact/general" },
    ],
  },
  {
    name: "Blogs",
    item: [
      { name: "Support", link: "/contact/support" },
      { name: "Sales", link: "/contact/sales" },
      { name: "General Inquiries", link: "/contact/general" },
    ],
  },
];

export const searchParamaData = {
  forSale: [
    {
      name: "status",
      value: [{ name: "Available" }, { name: "Sold Out" }, { name: "Pending" }],
    },
    {
      name: "Labels",
      value: [
        { name: "Hot Deal" },
        { name: "New Listing" },
        { name: "Discounted" },
      ],
    },
    {
      name: "Type",
      value: [{ name: "Apartment" }, { name: "Condo" }, { name: "Townhouse" }],
    },
  ],
  forRent: [
    {
      name: "status",
      value: [
        { name: "Available" },
        { name: "Occupied" },
        { name: "Reserved" },
      ],
    },
    {
      name: "Labels",
      value: [
        { name: "Short Term" },
        { name: "Long Term" },
        { name: "Furnished" },
      ],
    },
    {
      name: "Type",
      value: [{ name: "Villa" }, { name: "Studio" }, { name: "Penthouse" }],
    },
  ],
};

export const aboutDetails = {
  homeSold: "0K",
  happyClients: "0K",
  satisfactionRate: "0K",
};

export const FeaturedProductionData = [
  {
    name: "For Sale",
    icon: <FaHouseChimney />,
    label: "forSale",
  },
  {
    name: "Villas",
    icon: <PiWarehouseThin />,
    label: "villas",
  },
  {
    name: "Apartments",
    icon: <PiBuildingApartment />,
    label: "apartments",
  },
  {
    name: "Houses",
    icon: <BsHousesFill />,
    label: "houses",
  },
  {
    name: "Condos",
    icon: <LuBuilding2 />,
    label: "condos",
  },
  {
    name: "Retail",
    icon: <BsBuildings />,
    label: "retail",
  },
];

export const featuredCardData = [
  {
    title: "Luxury Suite Villa",
    location: "Los Angeles City, CA, USA",
    price: 49999,
    facilities: { bed: 12, bath: 16, area: 800 },
  },
  {
    title: "Oceanfront Penthouse",
    location: "Miami Beach, FL, USA",
    price: 70000,
    facilities: { bed: 8, bath: 10, area: 1200 },
  },
  {
    title: "Mountain View Mansion",
    location: "Aspen, CO, USA",
    price: 950000,
    facilities: { bed: 10, bath: 12, area: 1500 },
  },
];

export const bestFeaturedItemData = [
  {
    title: "Moon Light Villa",
    location: "60002 Just Mead East Alfonso",
    price: 1900000,
    priceAfterDiscount: 1800000,
  },
  {
    title: "Sunset Bay Mansion",
    location: "405 Ocean Drive, Miami Beach, FL",
    price: 2500000,
    priceAfterDiscount: 2350000,
  },
  {
    title: "Royal Garden Estate",
    location: "78 King’s Avenue, Beverly Hills, CA",
    price: 3200000,
    priceAfterDiscount: 3100000,
  },
];
