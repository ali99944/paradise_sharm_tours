"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Clock, Check, Gift, Plus, EuroIcon } from "lucide-react"
import Navbar from "@/src/components/shared/navbar"
import Footer from "@/src/components/shared/footer"
import useGetServerData from "@/src/hooks/use-get-server-data"
import { getTourById } from "@/src/server-actions/tour-actions"
import { useParams } from "next/navigation"
import { OverlayLoader } from "@/src/components/shared/overlay_loader"
import { useCallback } from "react"
import Link from "next/link"

export default function TourDetails() {
  const { id } = useParams()

  // Use `useCallback` to memoize the `getTourData` function
  const getTourData = useCallback(async () => {
    const tour = await getTourById(Number(id))
    return tour
  }, [id]) // Add `id` as a dependency

  const { data: tour, isLoading: loading } = useGetServerData(getTourData, null)

  if (loading) {
    return <OverlayLoader />
  }

  return (
    <div className="bg-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#1B468F] to-[#0E2A5F] pt-24 pb-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Explore <span className="text-[#F15A29]">{tour?.name}</span>
              </h1>
              <p className="text-white/90 text-lg max-w-full">
                {tour?.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-[#F15A29]" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Location</h3>
                    <p className="text-white">{tour?.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <EuroIcon className="h-6 w-6 text-[#F15A29]" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Price per person</h3>
                    <p className="text-white">{tour?.price_per_person}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6 text-[#F15A29]" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Duration</h3>
                    <p className="text-white">{tour?.duration} Days</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6 text-[#F15A29]" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Tour Hours</h3>
                    <p className="text-white">From 10:00 AM to 5:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Includes Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">What&apos;s Included</h3>
                <div className="space-y-2">
                  {tour?.includes?.map((include, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#F15A29]" />
                      <p className="text-white">{include.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Offers Section */}
              {
                (tour?.special_offers?.length ?? 0) > 0 && (
                  <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Special Offers</h3>
                <div className="space-y-2">
                  {tour?.special_offers?.map((offer, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Gift className="h-4 w-4 text-[#F15A29]" />
                      <div>
                        <p className="text-white font-medium">{offer.name}</p>
                        <p className="text-white/80">{offer.description}</p>
                        <p className="text-white/80">Price: ${offer.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
                )
              }

              {/* Addons Section */}
              {
                (tour?.addons?.length ?? 0) > 0 && (
                  <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Addons</h3>
                <div className="space-y-2">
                  {tour?.addons?.map((addon, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Plus className="h-4 w-4 text-[#F15A29]" />
                      <div>
                        <p className="text-white font-medium">{addon.name}</p>
                        <p className="text-white/80">{addon.description}</p>
                        <p className="text-white/80">Price: ${addon.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
                )
              }

              {/* BOOK NOW Button */}
              <Link href="/contact" className="mt-4 flex items-center justify-end">
                <Button className="w-full md:w-auto bg-[#F15A29] hover:bg-[#E14A19] text-white">Contact us and Book now</Button>
              </Link>
            </div>

            <div className="relative">
              <div className="relative z-0">
                <img
                  src={tour?.main_image}
                  alt="Hurghada"
                  width={800}
                  height={360}
                  className="rounded-lg object-cover"
                />

                <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 mt-4">
                  {tour?.gallery_images?.map((image, index) => (
                    <div key={index} className="rounded overflow-hidden">
                      <img
                        src={image.src}
                        alt={`Hurghada ${index + 1}`}
                        className="w-full h-30 object-fit"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative SVG */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
          <svg
            className="absolute right-0 top-0 h-full w-1/2 text-white/10 transform translate-x-1/3"
            fill="none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C40,33 66,52 75,100 L100,100 L100,0 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <Footer />
    </div>
  )
}