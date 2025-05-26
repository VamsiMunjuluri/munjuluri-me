import Image from "next/image";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-gray-100 overflow-hidden">
      {/* Background Beams behind everything */}

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="
      relative
      w-[1120px] h-[1080px]
      mx-auto
      md:w-full md:h-full
    "
        >
          <BackgroundBeams />
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative min-h-screen z-10 flex flex-col pt-16">
        <main className=" flex flex-col max-w-5xl mx-auto p-8 md:p-16">
          <div className="text-center">
            <div className="relative w-[240px] h-[240px] mx-auto group">
              {/* 🔄 Rotating circular text ring */}
              <svg
                viewBox="0 0 240 240"
                className="absolute top-0 left-0 w-full h-full animate-spin-slow pointer-events-none"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="
              M 120,120
              m -110,0
              a 110,110 0 1,1 220,0
              a 110,110 0 1,1 -220,0
            "
                    fill="none"
                  />
                </defs>
                <text
                  fill="white"
                  fontSize="9"
                  fontFamily="sans-serif"
                  letterSpacing="2"
                >
                  <textPath
                    xlinkHref="#circlePath"
                    startOffset="0%"
                    textLength="690"
                  >
                    • click me • click me • click me • click me • click me •
                    click me • click me • click me • click me • click me • click
                    me •
                  </textPath>
                </text>
              </svg>

              {/* 🖼 Dual images: hover effect */}
              <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden border-2 border-gray-500">
                {/* Static image */}
                <Image
                  src="/images/portrait-dev-resized.jpg"
                  alt="Vamsi"
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  draggable={false}
                />
                {/* Hover image */}
                <Image
                  src="/images/portrait-dev-ghibli-resized.jpg"
                  alt="Ghibli Vamsi"
                  fill
                  className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  draggable={false}
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold mt-6 p-4 mb-4">
              Hello, I&apos;m Vamsi Munjuluri
            </h1>
            <p className="text-lg mb-8">
              Developer by code, photographer by heart.
            </p>

            <h2 className="text-2xl font-bold mb-6">Explore My Work</h2>
            <div className="flex justify-center gap-8 flex-wrap">
              <a
                href="https://dev.munjuluri.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-lg font-medium"
              >
                Developer Portfolio
              </a>
              <a
                href="https://lens.munjuluri.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-700 text-lg font-medium"
              >
                Photography Portfolio
              </a>
            </div>
          </div>
          {/*<Footer className="" />*/}
        </main>
      </div>
    </div>
  );
}
