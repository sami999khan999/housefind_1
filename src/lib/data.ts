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
