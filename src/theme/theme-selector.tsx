"use client";
import "./index.css";
import { useState, useEffect } from "react";
import ThemeCard from "./theme-card";
import ComingSoonCard from "./coming-soon-card";

const THEMES = [
  {
    id: 1,
    title: "Neon Nights",
    description: "Vibrant and electric",
    image: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg",
  },
  {
    id: 2,
    title: "Pastel Dream",
    description: "Soft and soothing",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    title: "Monochrome Madness",
    description: "Bold black and white",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    title: "Retro Vibes",
    description: "Nostalgic and fun",
    image: "/placeholder.svg?height=400&width=400",
  },
];

export default function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFE850] p-8">
      <header
        className={`mb-16 text-center transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h1 className="text-7xl font-black text-black mb-4 relative inline-block">
          <span className="relative z-10">Select Your Vibe</span>
          <span
            className={`absolute -bottom-2 left-0 w-full h-6 bg-black -skew-x-6 transform -rotate-1 transition-all duration-1000 ${
              isLoaded ? "scale-x-100" : "scale-x-0"
            }`}
          ></span>
        </h1>
        <p
          className={`text-2xl font-mono mt-4 transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Choose a theme and let's get creative!
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {THEMES.map((theme, index) => (
          <div
            key={theme.id}
            className={`transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <ThemeCard
              title={theme.title}
              description={theme.description}
              image={theme.image}
              isSelected={selectedTheme === theme.id}
              onSelect={() => setSelectedTheme(theme.id)}
            />
          </div>
        ))}
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{ transitionDelay: `${THEMES.length * 200}ms` }}
        >
          <ComingSoonCard />
        </div>
      </div>
    </div>
  );
}
