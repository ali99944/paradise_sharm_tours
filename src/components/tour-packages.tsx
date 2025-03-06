"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Map, Star, Users, Heart, Check, Shield, ChevronRight } from 'lucide-react';
import Link from "next/link";
import useGetServerData from "../hooks/use-get-server-data";
import { getAllTours } from "../server-actions/tour-actions";
import { GridCardLoader } from "./shared/grid_card_loader";


export default function TourPackages() {
  const { data, isLoading } = useGetServerData(getAllTours, [])

  if(isLoading) {
    return <GridCardLoader />
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
             <span className="text-orange-500">Popular Tour Packages</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium travel experiences.
            From adventure expeditions to luxury getaways, find your perfect journey.
          </p>
        </div>

        {/* Featured Tours Slider */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Featured Experiences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.map((tour) => (
              <Card
                key={tour.id}
                className="group overflow-hidden border-none rounded p-0 bg-white"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 justify-end">
                    <Link href={`/tours/${tour.id}`}>
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      View Details
                      <ChevronRight className="w-4 h-4 " />
                    </Button>
                    </Link>
                  </div>
                  <img
                    src={tour.main_image || "/placeholder.svg"}
                    alt={tour.name}
                    className="object-cover group-hover:scale-105 aspect-square w-full transition-transform duration-300"
                  />

                  <div className="absolute bottom-4 left-4 z-20">
                    <Badge className="bg-white/90 text-gray-900">
                      {tour.duration} days
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-orange-500">{tour.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Map className="h-4 w-4 text-orange-500" />
                        {tour.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-500">
                        ${tour.price_per_person}
                      </div>
                      <div className="text-sm text-gray-600">per person</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {tour.includes.map((include, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="h-4 w-4 text-orange-500" />
                        {include.name}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>



        {/* Why Choose Us */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-orange-500">
              Why Choose Our Tour Packages?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide exceptional travel experiences with attention to every detail
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Small Groups",
                description: "Travel with like-minded people in groups of 12 or fewer"
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Expert Guides",
                description: "Knowledgeable local guides who know every destination"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Safe Travel",
                description: "Your safety and comfort are our top priorities"
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Best Value",
                description: "Competitive prices for unforgettable experiences"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-4 rounded bg-white shadow-sm transition-shadow"
              >
                <div className="inline-block p-4 rounded-full bg-orange-100 text-orange-500 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold mb-2 text-orange-600">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
