import { Download, Dribbble, Facebook, Figma, Linkedin } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative bg-gray-50 py-8 sm:py-28 min-h-screen overflow-hidden">
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

      {/* White Gradient Overlay (deeper bottom fade) */}
      <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-white/95 via-white/60 to-transparent z-20" />

      {/* DESKTOP SOCIAL LABELS */}
      <div className="hidden md:flex absolute bottom-20 left-1/2 -translate-x-1/2 z-30 items-center gap-6 text-xl font-medium text-[#1E1E1E]">
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

      {/* MOBILE RIGHT-SIDE VERTICAL ICONS */}
      <div className="md:hidden absolute top-1/2 right-4 -translate-y-1/2 z-40 flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center shadow-lg">
          <Dribbble className="w-6 h-6 text-white" />
        </div>
        <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center shadow-lg">
          <Linkedin className="w-6 h-6 text-white" />
        </div>
        <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center shadow-lg">
          <Figma className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-30 h-full container mx-auto px-4 lg:px-8 xl:px-16 flex flex-col md:flex-row items-center justify-between md:items-start pt-16 md:pt-0">
        {/* LEFT TEXT */}
        <div className="mt-10 md:mt-28 text-center md:text-left">
          <p className="text-[#4E4E4E] text-[48px] md:text-[64px] leading-[1.05]">
            Hey There,
          </p>

          <h1 className="text-[70px] md:text-[100px] text-[#1E1E1E] font-semibold leading-[1.2]">
            I'm RAJU
          </h1>

          <button className="my-8 px-8 py-2.5 text-lg md:text-xl flex items-center justify-center gap-2 rounded-full bg-[#6E46FF] text-white font-semibold hover:bg-[#6E46FF]/90 transition mx-auto md:mx-0">
            <span className="tracking-wide">View My Resume</span>
            <Download className="w-6 h-6" />
          </button>

          <div className="flex items-center justify-center md:justify-start gap-12">
            <div>
              <h1 className="text-[60px] md:text-[72px] font-medium leading-none">
                3+
              </h1>
              <span className="text-xl md:text-2xl">Years</span>
            </div>
            <div>
              <h1 className="text-[60px] md:text-[72px] font-medium leading-none">
                50+
              </h1>
              <span className="text-xl md:text-2xl">Projects</span>
            </div>
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="mt-16 md:mt-28 text-center md:text-right">
          <h1 className="text-[70px] md:text-[100px] font-semibold text-[#1E1E1E] leading-[1.1]">
            UI/UX <br /> Designer
          </h1>

          <p className="text-xl md:text-2xl text-[#4E4E4E] py-6 mb-4 leading-[1.4]">
            Solving real problems through <br /> better user experience.
          </p>

          <div className="text-lg text-[#1E1E1E] flex items-center gap-3 justify-center md:justify-end">
            <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
            </div>
            <span>Available for new opportunities.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
