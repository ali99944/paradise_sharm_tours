"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function PromotionalSection() {
  return (
    <div className="bg-gradient-to-r from-[#1B468F] to-[#0E2A5F] py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready for Your Next Adventure?
        </h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
          Book your dream trip today and enjoy exclusive discounts! Don’t miss out on our limited-time offers.
        </p>
        <Link href="#tours-section">
          <Button className="bg-[#F15A29] hover:bg-[#E14A19] text-white text-lg px-8 py-6 rounded cursor-pointer">
            Book With Us Now
          </Button>
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <svg
          className="absolute top-0 left-0 h-full w-1/2 text-white/10"
          fill="none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C40,33 66,52 75,100 L100,100 L100,0 Z" fill="currentColor" />
        </svg>
        <svg
          className="absolute bottom-0 right-0 h-full w-1/2 text-white/10 transform rotate-180"
          fill="none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C40,33 66,52 75,100 L100,100 L100,0 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
