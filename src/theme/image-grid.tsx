"use client";

import { useState } from "react";
import ImageCard from "./image-card";
import ComingSoonCard from "./coming-soon-card";

const SAMPLE_IMAGES = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=400",
    alt: "Sample image 1",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=400",
    alt: "Sample image 2",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=400",
    alt: "Sample image 3",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=400",
    alt: "Sample image 4",
  },
];

export default function ImageGrid() {
  const [selectedImages, setSelectedImages] = useState<number[]>([]);

  const toggleSelect = (id: number) => {
    setSelectedImages((prev) =>
      prev.includes(id)
        ? prev.filter((imageId) => imageId !== id)
        : [...prev, id]
    );
  };
  return (
    <div className="p-4 bg-[#FFE850] min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {SAMPLE_IMAGES.map((image) => (
          <ImageCard
            key={image.id}
            src={image.src}
            alt={image.alt}
            onSelect={() => toggleSelect(image.id)}
            isSelected={selectedImages.includes(image.id)}
          />
        ))}
        <ComingSoonCard />
      </div>
    </div>
  );
}
