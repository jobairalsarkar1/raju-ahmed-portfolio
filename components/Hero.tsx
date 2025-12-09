import { Download, Dribbble, Facebook, Figma, Linkedin } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative bg-gray-50 py-28 min-h-screen overflow-hidden">
      {/* CENTER PERSON IMAGE */}
      <div className="absolute inset-0 bottom-20 flex items-center justify-center pointer-events-none">
        <Image
          src="/person.png"
          alt="Person"
          width={620}
          height={620}
          className="object-contain z-10"
          priority
        />
      </div>

      {/* White Gradient Overlay (bottom fade) */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-linear-to-t from-white to-transparent z-30"></div>

      {/* Bottom Social Icons */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex items-center gap-6 text-xl font-medium text-[#1E1E1E]">
        <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gray-200 rounded-full">
          <div className="w-6 h-6 bg-gray-800 rounded-lg flex items-center justify-center">
            <Dribbble className="w-4.5 h-4.5 text-gray-50" />
          </div>
          <span className="text-gray-800">Facebook</span>
        </div>
        <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gray-200 rounded-full">
          <div className="w-6 h-6 bg-gray-800 rounded-lg flex items-center justify-center">
            <Linkedin className="w-4.5 h-4.5 text-gray-50" />
          </div>
          <span className="text-gray-800">LinkedIn</span>
        </div>
        <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gray-200 rounded-full">
          <div className="w-6 h-6 bg-gray-800 rounded-lg flex items-center justify-center">
            <Figma className="w-4.5 h-4.5 text-gray-50" />
          </div>
          <span className="text-gray-800">Figma</span>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-30 h-full container mx-auto px-4 lg:px-8 xl:px-16 flex items-center justify-between">
        {/* Left */}
        <div className="mt-28">
          <p className="text-[#4E4E4E] text-[64px] leading-[1.05]">
            Hey There,
          </p>

          <h1 className="text-[100px] text-[#1E1E1E] font-semibold leading-[1.4]">
            I'm RAJU
          </h1>

          <button className="my-8 px-8 py-2.5 text-xl flex items-center justify-center gap-2 rounded-full bg-[#6E46FF] text-white text-[20px] font-semibold hover:bg-[#6E46FF]/90 transition">
            <span className="tracking-wide">View My Resume</span>
            <Download className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-12">
            <div>
              <h1 className="text-[72px] font-medium leading-none">3+</h1>
              <span className="text-2xl">Years</span>
            </div>
            <div>
              <h1 className="text-[72px] font-medium leading-none">50+</h1>
              <span className="text-2xl">Projects</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="mt-28 text-right">
          <h1 className="text-[100px] font-semibold text-[#1E1E1E] leading-[1.05]">
            UI/UX <br /> Designer
          </h1>

          <p className="text-2xl text-[#4E4E4E] py-8 mb-4 leading-[1.4]">
            Solving real problems through <br /> better user experience.
          </p>

          <div className="text-lg text-[#1E1E1E] flex items-center gap-3 justify-end">
            <div className="w-4.5 h-4.5 bg-gray-300 rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
            </div>
            <span>Available for new opportunities.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
