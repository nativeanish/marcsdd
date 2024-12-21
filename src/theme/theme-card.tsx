"use client";
import { FaMaximize as Maximize2, FaCheck as Check } from "react-icons/fa6";

import { useState } from "react";

interface ThemeCardProps {
  title: string;
  description: string;
  image: string;
  isSelected: boolean;
  onSelect: () => void;
}

export default function ThemeCard({
  title,
  description,
  image,
  isSelected,
  onSelect,
}: ThemeCardProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div className="group relative">
        <div className="absolute inset-0 bg-black rotate-2 transform transition-all duration-300 group-hover:rotate-0"></div>
        <div className="relative bg-white p-6 border-4 border-black transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-xl">
          <h2 className="text-3xl font-bold mb-2 font-mono transition-all duration-300 group-hover:scale-105 origin-left">
            {title}
          </h2>
          <p className="text-lg mb-4 text-gray-700 transition-all duration-300 group-hover:translate-x-2">
            {description}
          </p>
          <div className="aspect-square overflow-hidden border-2 border-black mb-6">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110"
            />
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setIsZoomed(true)}
              className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 text-lg font-mono hover:bg-[#FFE850] hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              <Maximize2 className="w-5 h-5" />
              ZOOM
            </button>
            <button
              onClick={onSelect}
              className={`flex-1 flex items-center justify-center gap-2 py-3 text-lg font-mono transition-all duration-300 transform hover:scale-105 ${
                isSelected
                  ? "bg-[#FFE850] text-black"
                  : "bg-black text-white hover:bg-[#FFE850] hover:text-black"
              }`}
            >
              <Check className="w-5 h-5" />
              {isSelected ? "SELECTED" : "SELECT"}
            </button>
          </div>
        </div>
      </div>

      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-white p-6 border-4 border-black animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-auto border-2 border-black"
            />
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute -top-5 -right-5 bg-black text-white px-6 py-3 text-lg font-mono hover:bg-[#FFE850] hover:text-black border-2 border-black transition-all duration-300 transform hover:scale-105"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
