export const SITE = {
  name: "Queen Creek Window Cleaning",
  tagline: "Professional Window Washing in Queen Creek, AZ",
  domain: "https://queencreekwindowcleaning.com",
  phone: "(480) 737-0850",
  phoneRaw: "4807370850",
  email: "info@queencreekwindowcleaning.com",
  address: {
    street: "Queen Creek",
    city: "Queen Creek",
    state: "Arizona",
    stateAbbr: "AZ",
    zip: "85142",
  },
  serviceArea: "Queen Creek, AZ and surrounding areas",
  affiliateNote:
    "Service requests may be fulfilled by the Arizona Window Washing Pros network of trusted local professionals.",
  hours: "Mon–Sat 7am–6pm",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  {
    href: "#",
    label: "Services",
    children: [
      { href: "/indoor-window-cleaning", label: "Indoor Window Cleaning" },
      { href: "/outdoor-window-cleaning", label: "Outdoor Window Cleaning" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/reviews", label: "Reviews" },
  { href: "#our-work", label: "Our Work" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICE_AREAS = [
  "Queen Creek",
  "San Tan Valley",
  "Gilbert",
  "Chandler",
  "Mesa",
  "Apache Junction",
  "Florence",
  "Maricopa",
] as const;
