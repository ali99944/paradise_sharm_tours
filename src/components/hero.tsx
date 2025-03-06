"use client"

// import { useState } from "react"

export default function HeroSection() {
  // const [date, setDate] = useState<Date | undefined>(new Date("2024-01-12"))

  return (
    <div className="relative overflow-hidden min-h-[80vh] bg-[url('/images/cover.png')] bg-cover bg-top object-top">
        <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#F15A29] drop-shadow-xl">
              Let&apos;s Plan An
              <br />
              <span className="text-[#F15A29] ">Adventure</span> Trip
            </h1>
            <p className="text-[#173972] text-lg max-w-md">
              Discover your dream destination with our exclusive travel experiences.
            </p>


          </div>

        </div>
      </div>

    </div>
  );
}
