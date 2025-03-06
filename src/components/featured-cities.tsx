"use client"

import { Button } from "@/components/ui/button"
import { Plane, Star } from "lucide-react"

export default function FeaturedCities() {
  const cities = [
    {
      name: "Sharm El Sheikh",
      image: "/images/designs/1.png",
      description: "Explore the stunning Red Sea beaches and vibrant coral reefs.",
      rating: 4.5,
    },
    {
      name: "Cairo",
      image: "/images/designs/2.png",
      description: "Discover the ancient pyramids and rich history of Egypt's capital.",
      rating: 4.7,
    },
    {
      name: "Luxor",
      image: "/images/designs/3.png",
      description: "Step back in time with the temples and tombs of the Pharaohs.",
      rating: 4.6,
    },
    {
      name: "Hurghada",
      image: "/images/designs/4.png",
      description: "Enjoy sun, sea, and sand in this bustling resort town.",
      rating: 4.4,
    },
  ]

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B468F]">Explore Egypt&apos;s Top Destinations</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From ancient wonders to modern marvels, Egypt has something for everyone. Start planning your trip today!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cities.map((city, index) => (
            <div key={index} className="bg-white rounded-lg border overflow-hidden transition-shadow">
              {/* Image with Overlay and City Name */}
              <div className="relative h-60">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                  <h3 className="text-xl font-semibold text-white">{city.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.round(city.rating) ? "text-[#F15A29]" : "text-gray-300"
                        }`}
                        fill={i < Math.round(city.rating) ? "#F15A29" : "transparent"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({city.rating})</span>
                </div>

                {/* Description with Line Clamp */}
                <p className="text-gray-600 mb-4 line-clamp-2">{city.description}</p>

                {/* Buttons */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-[#F15A29] hover:bg-[#E14A19] text-white">
                    <Plane className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                  <Button className="flex-1 bg-[#1B468F] hover:bg-[#0E2A5F] text-white">
                    Know More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
