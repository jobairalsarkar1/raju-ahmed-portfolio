import Image from "next/image";
import profilePic from "@/public/person.png";

export default function About() {
  return (
    <div className="bg-[#F3F3F3] py-16">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-xl font-medium text-gray-600 tracking-wider mb-2">
            About Me
          </p>
          <h2 className="text-[44px] font-bold text-gray-900 leading-tight mt-2">
            Elevating Design Standards Since 2023
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image + Name */}
          <div className="flex flex-col items-center lg:items-start overflow-hidden sm:overflow-visible">
            <div className="relative group w-[580px] aspect-[4/2.5]">
              {/* Bottom Card */}
              <div className="absolute inset-0 bg-white rounded-2xl transition-all duration-500 ease-out z-0 translate-x-2 translate-y-2 group-hover:-rotate-3 group-hover:-translate-x-4 group-hover:translate-y-4 group-hover:scale-[1.03]"></div>

              <div className="absolute inset-0 bg-[#DBDBDB] rounded-2xl overflow-hidden transition-all duration-500 ease-out z-10 group-hover:rotate-3 group-hover:translate-x-3 group-hover:-translate-y-3">
                <Image
                  src={profilePic}
                  alt="Raju Ahamed"
                  fill
                  className="object-cover grayscale"
                  priority
                />
              </div>
            </div>

            <div className="mt-10 text-center lg:text-left">
              <h3 className="text-[32px] font-bold text-gray-900">
                Raju Ahamed
              </h3>
              <p className="text-2xl text-gray-600">UI/UX Designer</p>
            </div>
          </div>

          {/* Right: Bio + Experience */}
          <div className="space-y-12">
            <div className="w-full">
              <p className="text-2xl text-gray-700 leading-relaxed">
                Hi, I'm Raju, a passionate UI/UX Designer with over 3 years of
                experience designing engaging and user-friendly interfaces for
                mobile apps and websites. I specialize in creating intuitive,
                interactive, and dynamic user experiences. My design philosophy
                is <span className="font-semibold">"Simple is smart"</span> and
                I always prioritize creating simple, clean, and aesthetically
                pleasing designs.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="px-4 border-l-2 border-gray-300">
              <h3 className="text-[32px] font-bold text-gray-900 mb-8">
                My Working Experience
              </h3>

              <div className="space-y-4">
                {/* Experience Item 1 */}
                <div className="flex items-center justify-between border-b-2 border-gray-300 pb-4">
                  <p className="text-2xl font-semibold text-gray-900">
                    UI/UX Designer
                  </p>
                  <p className="text-[20px] text-gray-500">SM Technology</p>
                  <p className="text-2xl font-medium text-gray-900">
                    July - Dec 2025
                  </p>
                </div>

                {/* Experience Item 2 */}
                <div className="flex items-center justify-between border-b-2 border-gray-300 pb-2">
                  <p className="text-2xl font-semibold text-gray-900">
                    UI/UX Designer
                  </p>
                  <p className="text-[20px] text-gray-500">Behance</p>
                  <p className="text-2xl font-medium text-gray-900">
                    Jan 2023 - Present
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
