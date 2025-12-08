"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About Me", href: "#about" },
    { label: "Portfolio", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 bg-transparent">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="grid grid-cols-3 items-center">
            {/* Mobile: Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 -ml-2"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="mt-2 flex items-center md:justify-start mx-auto md:mx-0"
            >
              <Image
                src="/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="h-11 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 justify-center">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  scroll={true}
                  className="text-sm lg:text-[20px] tracking-wide font-semibold hover:text-[#6E46FF] transition whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex justify-end">
              <Link
                href="#contact"
                scroll={true}
                className="pl-8 pr-6 py-2.5 flex items-center justify-center gap-2 rounded-full bg-[#6E46FF] text-white text-[20px] font-semibold hover:bg-[#6E46FF]/90 transition"
              >
                <span className="tracking-wide">Let&apos;s Talk</span>
                <ArrowUpRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-xl p-6 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="flex items-start justify-start md:mr-auto md:mx-0 mt-1.5"
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={24}
              height={24}
              className="h-7 w-auto"
            />
          </Link>

          <button onClick={() => setOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Dynamic Mobile Nav */}
        <div className="flex flex-col gap-6 text-base font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll={true}
              onClick={() => setOpen(false)}
              className="tracking-wide"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contact"
            scroll={true}
            onClick={() => setOpen(false)}
            className="mt-4 pl-6 pr-5 py-2 rounded-full bg-[#6E46FF] text-white flex items-center justify-center gap-2"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </>
  );
}
