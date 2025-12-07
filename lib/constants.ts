import {
  BarChart3,
  Dock,
  Globe,
  Laptop,
  Smartphone,
  Sparkles,
} from "lucide-react";

export const services = [
  {
    number: "01",
    title: "Mobile App Design",
    description:
      "Delivering intuitive and visually polished mobile interfaces that engage users and elevate your brand.",
    icon: Smartphone,
    bgClass: "bg-[#E1D9FF]",
    textClass: "text-purple-900",
  },
  {
    number: "02",
    title: "Website Design",
    description:
      "Designing modern, responsive, and user-centered websites that perform beautifully across all devices.",
    icon: Globe,
    bgClass: "bg-[#F8DBF4]",
    textClass: "text-pink-900",
  },
  {
    number: "03",
    title: "Dashboard Design",
    description:
      "Creating clear, data-driven dashboards with meaningful insights and intuitive information hierarchy.",
    icon: BarChart3,
    bgClass: "bg-[#D0F0F8]",
    textClass: "text-blue-900",
  },
  {
    number: "04",
    title: "Landing Page Design",
    description:
      "Building high-converting landing pages with clean layouts and compelling visual storytelling.",
    icon: Laptop,
    bgClass: "bg-[#F5F0D4]",
    textClass: "text-amber-900",
  },
  {
    number: "05",
    title: "SaaS Product Design",
    description:
      "Designing scalable SaaS interfaces that balance usability, aesthetics, and business goals seamlessly.",
    icon: Dock,
    bgClass: "bg-[#E2F0E5]",
    textClass: "text-green-900",
  },
  {
    number: "06",
    title: "App/Website Redesign",
    description:
      "Revamping outdated products with a fresh, modern visual direction and improved user experience.",
    icon: Sparkles,
    bgClass: "bg-[#FDE3DD]",
    textClass: "text-rose-900",
  },
];

export const faqs = [
  {
    question: "What is your working process like?",
    answer:
      "I begin by having a conversation with you to learn about your goals and project expectations. Then I create initial design directions for you to review. After your feedback, I refine the designs until they meet your vision. Once everything is approved, I deliver all final assets and files.",
  },
  {
    question: "How can I choose the right plan for my project?",
    answer:
      "You can choose based on project size and needs. Starter is perfect for landing pages, Standard for mobile apps or small websites, and Premium for SaaS products or complex dashboards. I’m happy to guide you!",
  },
  {
    question: "What does the prototyping service include?",
    answer:
      "Interactive prototypes in Figma with clickable flows, micro-interactions, responsive breakpoints, and user testing-ready links so you can experience the design before development.",
  },
  {
    question: "How long will the project take to complete?",
    answer:
      "Landing pages: 5–7 days • Mobile App / Website: 2–3 weeks • SaaS Dashboard: 4–6 weeks. Timelines are confirmed after we discuss your exact requirements.",
  },
  {
    question: "In which formats will my final designs be delivered?",
    answer:
      "You’ll receive organized Figma files, design system documentation, Zeplin/Avocode link (if needed), plus exported assets in PNG, SVG, PDF, and a complete style guide.",
  },
];
