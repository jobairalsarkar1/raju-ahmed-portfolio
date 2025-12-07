"use client";

import {
  Smartphone,
  Globe,
  LayoutDashboard,
  FileText,
  Database,
  Sparkles,
} from "lucide-react";

export default function Services() {
  const services = [
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
      icon: LayoutDashboard,
      bgClass: "bg-[#D0F0F8]",
      textClass: "text-blue-900",
    },
    {
      number: "04",
      title: "Landing Page Design",
      description:
        "Building high-converting landing pages with clean layouts and compelling visual storytelling.",
      icon: FileText,
      bgClass: "bg-[#F5F0D4]",
      textClass: "text-amber-900",
    },
    {
      number: "05",
      title: "SaaS Product Design",
      description:
        "Designing scalable SaaS interfaces that balance usability, aesthetics, and business goals seamlessly.",
      icon: Database,
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

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <p className="text-xl font-medium text-gray-600 tracking-wider mb-2">
        My Services
      </p>
      <div className="mb-16 md:flex md:items-start md:gap-8">
        <h2 className="text-[44px] font-bold text-gray-900 leading-tight md:w-[65%]">
          Crafting digital experiences that
          <br />
          transform your vision into reality
        </h2>

        <p className="mt-2 text-2xl text-gray-600 tracking-wide max-w-2xl mb-12 md:mb-0 md:w-[35%]">
          I craft user-centered designs and products that combine creativity,
          functionality, and innovation to deliver meaningful value.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.number}
              className={`${service.bgClass} rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300 border border-white/50`}
            >
              <div className="flex items-start flex-col gap-6">
                <div className="w-full flex items-center justify-between">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Icon className={`w-10 h-10 ${service.textClass} opacity-50`} />
                  </div>
                  <span
                    className={`text-[64px] font-bold ${service.textClass} opacity-40`}
                  >
                    {service.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xl text-gray-700 tracking-wide">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
