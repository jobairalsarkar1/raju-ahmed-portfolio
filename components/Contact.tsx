"use client";

import { Facebook, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import vectorBg from "@/public/vector.png";

export default function ContactAndFooter() {
  return (
    <>
      {/* Upper Contact Section */}
      <div className="relative pt-16 md:pt-24 pb-48 md:pb-68 bg-[#F3F3F3]">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-stretch">
            {/* Left Side */}
            <div className="space-y-4 h-full flex flex-col">
              <div>
                <p className="text-lg md:text-2xl font-medium text-gray-600 tracking-wider mb-2">
                  Contact
                </p>

                <h2 className="text-[36px] sm:text-[48px] md:text-[80px] font-bold text-gray-900 leading-tight tracking-tighter">
                  Have a Project Idea
                  <br />
                  in Mind? Let's Get
                  <br />
                  Started
                </h2>
              </div>

              <div className="space-y-2 mt-auto">
                <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-gray-900">
                  Follow Me
                </h3>

                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-lg">
                  I'll schedule a call to discuss your idea. After discovery
                  sessions, I'll send a proposal, and upon approval, I'll get
                  started.
                </p>

                <div className="flex gap-3 sm:gap-4 pt-4">
                  {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-8 h-8 sm:w-9 sm:h-9 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition"
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-[20px] p-6 sm:p-8 md:p-10 h-full flex flex-col">
              <form className="space-y-6 sm:space-y-8 grow flex flex-col">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xl sm:text-2xl font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Ex. John Doe"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 text-lg sm:text-xl bg-[#F2F2F2] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#01E7A5]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xl sm:text-2xl font-medium text-gray-700 mb-2"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Ex. yourmail@example.com"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 text-lg sm:text-xl bg-[#F2F2F2] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#01E7A5]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="details"
                    className="block text-xl sm:text-2xl font-medium text-gray-700 mb-2"
                  >
                    Project Details*
                  </label>
                  <textarea
                    id="details"
                    rows={4}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 text-lg sm:text-xl bg-[#F2F2F2] rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-[#01E7A5]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#01E7A5] text-lg sm:text-xl text-white font-semibold py-3 sm:py-4 rounded-full hover:bg-[#01E7A5]/90"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Overlapping Violet Card */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-20 sm:-bottom-28 md:-bottom-32 w-[92%] sm:w-full pointer-events-none z-40">
          <div className="container mx-auto px-4 lg:px-8 xl:px-16">
            <div className="relative bg-[#D2C6FB] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={vectorBg}
                alt="Background wave"
                fill
                className="object-cover opacity-100"
              />

              <div className="relative z-10 px-6 sm:px-10 md:px-12 py-12 sm:py-16 md:py-20 text-center">
                <h2 className="text-[32px] sm:text-[48px] md:text-[70px] font-bold text-gray-900 mb-6 leading-tight tracking-tighter">
                  Let's Help Your Idea Come To Life
                </h2>
                <button className="inline-flex items-center gap-3 bg-black text-white text-lg sm:text-xl px-6 sm:px-8 py-3 rounded-full hover:bg-gray-900">
                  Let's Talk
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-black text-white pt-36 sm:pt-44 md:pt-48 pb-10 sm:pb-12 z-10">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="relative h-10 w-36 sm:h-11 sm:w-40">
              <Image
                src="/logo-white.png"
                alt="Raju Ahamed Logo"
                fill
                className="object-contain object-left"
              />
            </div>

            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6">
              <a className="text-gray-300 hover:text-white text-base sm:text-lg md:text-xl transition">
                Term Of Service
              </a>
              <div className="w-px h-5 bg-gray-200" />
              <a className="text-gray-300 hover:text-white text-base sm:text-lg md:text-xl transition">
                Policy Service
              </a>
              <div className="w-px h-5 bg-gray-200" />
              <a className="text-gray-300 hover:text-white text-base sm:text-lg md:text-xl transition">
                Cookie Policy
              </a>
            </div>
          </div>

          <div className="w-full h-px bg-gray-700 my-6"></div>

          <p className="text-gray-400 text-sm sm:text-base md:text-xl">
            © 2025 All rights reserved by Raju Ahamed.
          </p>
        </div>
      </footer>
    </>
  );
}
