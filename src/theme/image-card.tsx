"use client";

import { useState } from "react";
import { FaMaximize as Maximize2, FaCheck as Check } from "react-icons/fa6";

interface ImageCardProps {
  src: string;
  alt: string;
  onSelect: () => void;
  isSelected: boolean;
}

export default function ImageCard({
  src,
  alt,
  onSelect,
  isSelected,
}: ImageCardProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div className="relative group border-4 border-black bg-[#FFE850] p-2">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden border-2 border-black bg-white">
          <img src={src} alt={alt} className="object-cover w-full h-full" />
        </div>

        {/* Button Container */}
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => setIsZoomed(true)}
            className="flex-1 flex items-center justify-center gap-2 bg-black text-[#FFE850] px-4 py-2 text-sm font-mono hover:bg-[#FFE850] hover:text-black border-2 border-black transition-colors"
          >
            <Maximize2 className="w-4 h-4" />
            ZOOM
          </button>
          <button
            onClick={onSelect}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-mono border-2 border-black transition-colors ${
              isSelected
                ? "bg-black text-[#FFE850]"
                : "bg-[#FFE850] text-black hover:bg-black hover:text-[#FFE850]"
            }`}
          >
            <Check className="w-4 h-4" />
            {isSelected ? "SELECTED" : "SELECT"}
          </button>
        </div>
      </div>

      {/* Zoom Dialog */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#FFE850] p-4 border-4 border-black"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className="w-full h-auto border-2 border-black"
            />
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute -top-2 -right-2 bg-black text-[#FFE850] px-4 py-2 text-sm font-mono hover:bg-[#FFE850] hover:text-black border-2 border-black transition-colors"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
