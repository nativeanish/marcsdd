import { FaClock } from "react-icons/fa6";

export default function ComingSoonCard() {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-black rotate-2 transform transition-transform group-hover:rotate-0"></div>
      <div className="relative bg-[#FFE850] p-6 border-4 border-black transition-transform transform group-hover:-translate-y-2 h-full flex flex-col justify-center items-center">
        <FaClock className="w-20 h-20 mb-6 text-black animate-pulse" />
        <h2 className="text-3xl font-bold font-mono text-black text-center mb-4">
          MORE THEMES COMING SOON
        </h2>
        <p className="text-xl mb-6 text-center">
          Stay tuned for exciting new designs!
        </p>
        <div className="border-2 border-black bg-black text-[#FFE850] px-6 py-3 font-mono text-lg animate-bounce">
          STAY TUNED!
        </div>
        <div className="relative bottom-0 left-0 w-full h-2 bg-black animate-shimmer"></div>
      </div>
    </div>
  );
}
