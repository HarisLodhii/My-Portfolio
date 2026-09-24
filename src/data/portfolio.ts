import {
  Code2,
  Palette,
  Plug,
  Megaphone,
  Handshake,
  Eye,
  Users,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export interface Competency {
  icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
}

export const competencies: Competency[] = [
  {
    icon: Code2,
    title: "Front-End Development",
    description:
      "Building responsive, performant interfaces with modern web technologies.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "UI Frameworks",
      "Responsive Layouts",
      "Hosting",
    ],
  },
  {
    icon: Palette,
    title: "UX & Interface Design",
    description:
      "Crafting human-centered interfaces grounded in Google UX principles.",
    skills: [
      "Google UX Principles",
      "Human-Centered Interfaces",
      "Custom Micro-interactions",
    ],
  },
  {
    icon: Plug,
    title: "Integration Engineering",
    description:
      "Connecting platforms and services for seamless user journeys.",
    skills: [
      "WhatsApp API Chat Navigation",
      "Embedded Google Maps iFrames",
      "Dynamic Link Trees",
    ],
  },
  {
    icon: Megaphone,
    title: "Brand Strategy & Marketing",
    description:
      "Architecting social presence and routing strategies for brands.",
    skills: [
      "Social Media Architecture",
      "Beacons/QR Link Routing",
      "Canva/Vector Collateral",
    ],
  },
  {
    icon: Handshake,
    title: "Business Development & Negotiation",
    description:
      "Driving results through live sales and stakeholder engagement.",
    skills: [
      "Live Event Sales",
      "Vendor Procurement",
      "Stakeholder Presentations",
    ],
  },
];

export type ProjectCategory = "web" | "design";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  tags: string[];
  description: string;
  image?: string;
  link?: string;
  detailsLink?: string;
}

export const webProjects: Project[] = [
  {
    id: "skydelivery",
    title: "SkyDelivery Service Landing Page",
    category: "web",
    tags: ["HTML/CSS", "Responsive UI", "Google Maps iFrame", "WhatsApp API"],
    description:
      "Conversion-focused logistics landing page featuring direct WhatsApp ordering and map integration.",
    image: "/images/skydelivery.png",
    link: "https://skydeliveryservices.netlify.app/",
  },
];

export const designProjects: Project[] = [
  {
    id: "hairaffairsss",
    title: "HairAffairsss Event & Brand Identity",
    category: "design",
    tags: ["Graphic Design", "Print Media", "Standies", "Social Growth"],
    description:
      "Promotional assets and print banners driving 32,000+ views and supporting live event pop-up sales.",
    image: "/images/hairaffairsss.png",
    link: "https://www.instagram.com/hairaffairsss.official/",
    detailsLink: "https://www.instagram.com/hairaffairsss.official/",
  },
];

export interface Metric {
  value: string;
  label: string;
  icon: LucideIcon;
}

export const metrics: Metric[] = [
  { value: "32,000+", label: "Organic Social Impressions", icon: Eye },
  { value: "1,500+", label: "Direct Customer Deals", icon: Users },
  { value: "100%", label: "Mobile Responsive Layouts", icon: Smartphone },
];

export const socialLinks = {
  email: "mailto:harisanwarlodhi@gmail.com",
  github: "https://github.com/HarisLodhii",
  linkedin: "https://www.linkedin.com/in/harisanwarlodhi/",
  fiverr: "https://www.fiverr.com/users/harisanwarlodhi/seller_dashboard",
  whatsapp: "https://wa.me/923088932260",
};
