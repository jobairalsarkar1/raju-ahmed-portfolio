import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="ttext-xl font-medium text-gray-600 tracking-wider mb-2">
            Portfolio
          </p>
          <h2 className="text-[44px] font-bold text-gray-900 leading-tight mt-2">
            My Selected Works
          </h2>
        </div>

        {/* Projects Grid */}
        {/* Replace this comment with your projects grid implementation */}

        {/* Pagination + CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-20">
          {/* Pagination */}
          <div className="flex items-center gap-4 order-2 sm:order-1 mt-8 sm:mt-0">
            <button className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-[#6E46FF] hover:border-[#6E46FF] hover:text-white transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-[#6E46FF] text-white flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <div className="w-14 h-14 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm">
                2
              </div>
              <div className="w-14 h-14 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm">
                3
              </div>
              <span className="text-gray-500 px-2">...</span>
              <div className="w-14 h-14 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm">
                20
              </div>
            </div>

            <button className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-[#6E46FF] hover:border-[#6E46FF] hover:text-white transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* View All Button */}
          <a
            href="#"
            className="order-1 sm:order-2 inline-flex items-center gap-3 bg-[#6E46FF] hover:bg-[#6E46FF]/80 text-white font-semibold text-[20px] px-8 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All My Portfolio Works
            <ArrowUpRight className="w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
  );
}
