import Image from "next/image";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";

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
      <div className="relative z-10 flex flex-col min-h-screen md:min-h-[100dvh]">
        <main className="flex-grow max-w-5xl mx-auto p-8 md:p-16">
          <section className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/portrait.jpg"
                alt="Vamsi Munjuluri"
                width={200}
                height={200}
                className="rounded-full object-cover border-2 border-gray-500"
              />
            </div>
            <h1 className="text-4xl font-bold mt-6 mb-4">
              Hello, I&apos;m Vamsi Munjuluri
            </h1>
            <p className="text-lg">Developer by code, photographer by heart.</p>
          </section>

          <section className="text-center mt-16 mb-16">
            <h2 className="text-3xl font-bold mb-8">Explore My Work</h2>
            <div className="flex justify-center gap-8">
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
          </section>
        </main>

        <footer className="text-center p-8 text-gray-500">
          &copy; 2025 Vamsi Munjuluri. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
