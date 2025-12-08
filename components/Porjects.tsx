"use client";

import { useState } from "react";
import { projects } from "@/lib/constants";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";

// Calculate total pages based on projects per page
const PROJECTS_PER_PAGE = 4;
const TOTAL_PAGES = Math.ceil(projects.length / PROJECTS_PER_PAGE);

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Calculate projects for current page
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, endIndex);

  // Handle pagination
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= TOTAL_PAGES) {
      setCurrentPage(page);
    }
  };

  // Handle project click (open slider)
  const handleProjectClick = (index: number) => {
    const globalIndex = startIndex + index;
    setCurrentProjectIndex(globalIndex);
    setIsSliderOpen(true);
  };

  // Handle View All click
  const handleViewAllClick = () => {
    setCurrentProjectIndex(0);
    setIsSliderOpen(true);
  };

  // Navigation in slider
  const goToPreviousProject = () => {
    setCurrentProjectIndex((prev) =>
      prev > 0 ? prev - 1 : projects.length - 1
    );
  };

  const goToNextProject = () => {
    setCurrentProjectIndex((prev) =>
      prev < projects.length - 1 ? prev + 1 : 0
    );
  };

  // Close slider
  const closeSlider = () => {
    setIsSliderOpen(false);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isSliderOpen) return;

    if (e.key === "Escape") {
      closeSlider();
    } else if (e.key === "ArrowLeft") {
      goToPreviousProject();
    } else if (e.key === "ArrowRight") {
      goToNextProject();
    }
  };

  // Generate pagination numbers
  const getPaginationNumbers = () => {
    const numbers = [];
    const maxVisible = 4;

    if (TOTAL_PAGES <= maxVisible + 2) {
      // Show all pages if total is small
      for (let i = 1; i <= TOTAL_PAGES; i++) {
        numbers.push(i);
      }
    } else {
      // Always show first page
      numbers.push(1);

      // Calculate start and end of middle range
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(TOTAL_PAGES - 1, currentPage + 1);

      // Adjust if at boundaries
      if (currentPage <= 2) {
        end = maxVisible;
      } else if (currentPage >= TOTAL_PAGES - 1) {
        start = TOTAL_PAGES - maxVisible + 1;
      }

      // Add ellipsis after first page if needed
      if (start > 2) {
        numbers.push("...");
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        if (i > 1 && i < TOTAL_PAGES) {
          numbers.push(i);
        }
      }

      // Add ellipsis before last page if needed
      if (end < TOTAL_PAGES - 1) {
        numbers.push("...");
      }

      // Always show last page
      numbers.push(TOTAL_PAGES);
    }

    return numbers;
  };

  return (
    <>
      <div className="bg-white py-16" onKeyDown={handleKeyDown}>
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xl font-medium text-gray-600 tracking-wider mb-2">
              Portfolio
            </p>
            <h2 className="text-[44px] font-bold text-gray-900 leading-tight mt-2">
              My Selected Works
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {currentProjects.map((project, index) => (
              <div
                key={startIndex + index}
                onClick={() => handleProjectClick(index)}
                className="group relative overflow-hidden rounded-[20px] shadow-lg cursor-pointer"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[460px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Bottom Gradient Overlay */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-8 
                  bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                >
                  <div className="flex items-start justify-between w-full">
                    {/* Text */}
                    <div>
                      <h3 className="text-white text-[32px] font-semibold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-xl">
                        {project.category}
                      </p>
                    </div>

                    {/* Circle Icon Button */}
                    <div
                      className="w-18 h-18 rounded-full bg-black backdrop-blur-md text-white border border-white/40 
                      flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black"
                    >
                      <ArrowUpRight className="w-8 h-8" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination + CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-20">
            {/* Pagination */}
            <div className="flex items-center gap-4 order-2 sm:order-1 mt-8 sm:mt-0">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all
                  ${
                    currentPage === 1
                      ? "border-gray-200 text-gray-300 cursor-not-allowed"
                      : "border-gray-300 hover:bg-[#6E46FF] hover:border-[#6E46FF] hover:text-white"
                  }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3">
                {getPaginationNumbers().map((page, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      typeof page === "number" && handlePageChange(page)
                    }
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-sm font-semibold
                      ${
                        page === "..."
                          ? "cursor-default text-gray-500"
                          : page === currentPage
                          ? "bg-[#6E46FF] text-white"
                          : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                      }`}
                    disabled={page === "..."}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === TOTAL_PAGES}
                className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all
                  ${
                    currentPage === TOTAL_PAGES
                      ? "border-gray-200 text-gray-300 cursor-not-allowed"
                      : "border-gray-300 hover:bg-[#6E46FF] hover:border-[#6E46FF] hover:text-white"
                  }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* View All Button */}
            <button
              onClick={handleViewAllClick}
              className="order-1 sm:order-2 inline-flex items-center justify-center gap-3 bg-[#6E46FF] hover:bg-[#6E46FF]/80 text-white font-semibold text-[20px] px-8 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All My Portfolio Works
              <ArrowUpRight className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Popup Slider */}
      {isSliderOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={closeSlider}
          />

          {/* Slider Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeSlider}
              className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPreviousProject();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNextProject();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Project Content */}
            <div
              className="relative w-full max-w-6xl h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Project Image */}
              <div className="h-2/3 relative">
                <img
                  src={projects[currentProjectIndex].image}
                  alt={projects[currentProjectIndex].title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Project Details */}
              <div className="h-1/3 p-8 md:p-12 overflow-y-auto">
                <div className="w-full">
                  <div className="w-full flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                        {projects[currentProjectIndex].title}
                      </h3>
                      <p className="text-xl text-gray-600">
                        {projects[currentProjectIndex].category}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-extrabold text-violet-400 mb-2">
                        {currentProjectIndex + 1} / {projects.length}
                      </div>
                      <button
                        onClick={() => {
                          window.open(
                            projects[currentProjectIndex].link || "#",
                            "_blank"
                          );
                        }}
                        className="inline-flex items-center gap-2 bg-[#6E46FF] hover:bg-[#6E46FF]/80 text-white font-semibold py-2 px-6 rounded-full"
                      >
                        Visit Project
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed">
                    {projects[currentProjectIndex].description ||
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
