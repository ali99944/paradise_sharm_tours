"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Map, Star, Users, Heart, Check, Shield } from 'lucide-react';



const tourPackages = [
  {
    id: 1,
    title: "Greek Islands Explorer",
    description: "Discover the magic of Santorini, Mykonos, and Crete in this luxury island-hopping adventure.",
    price: 2499,
    duration: "10 Days",
    location: "Greece",
    rating: 4.9,
    reviews: 128,
    image: "https://wp-themes.com/wp-content/themes/fse-tour-booking/assets/images/banner.png",
    category: ["popular", "luxury"],
    amenities: ["Luxury Hotels", "Guided Tours", "Ferry Transfers", "Meals Included"],
    groupSize: "12",
    featured: true
  },
  {
    id: 2,
    title: "Machu Picchu Trek",
    description: "Experience the ancient wonder of Machu Picchu with our expert guides on this unforgettable trek.",
    price: 1899,
    duration: "7 Days",
    location: "Peru",
    rating: 4.8,
    reviews: 95,
    image: "https://wp-themes.com/wp-content/themes/fse-tour-booking/assets/images/banner.png",
    category: ["adventure", "popular"],
    amenities: ["Camping Equipment", "Porter Service", "Meals", "Train Return"],
    groupSize: "8",
    featured: true
  },
  {
    id: 3,
    title: "Japanese Culture Tour",
    description: "Immerse yourself in Japanese culture with tea ceremonies, temple stays, and culinary experiences.",
    price: 3299,
    duration: "12 Days",
    location: "Japan",
    rating: 4.9,
    reviews: 156,
    image: "https://wp-themes.com/wp-content/themes/fse-tour-booking/assets/images/banner.png",
    category: ["cultural", "luxury"],
    amenities: ["Traditional Ryokan", "Bullet Train Pass", "Tea Ceremony", "Local Guide"],
    groupSize: "10",
    featured: false
  },
  {
    id: 4,
    title: "Safari Adventure",
    description: "Witness the great migration and big five on this premium African safari experience.",
    price: 4599,
    duration: "8 Days",
    location: "Tanzania",
    rating: 5.0,
    reviews: 89,
    image: "https://wp-themes.com/wp-content/themes/fse-tour-booking/assets/images/banner.png",
    category: ["adventure", "luxury"],
    amenities: ["Luxury Lodges", "Game Drives", "Bush Meals", "Flight Transfers"],
    groupSize: "6",
    featured: true
  },
  {
    id: 5,
    title: "Mediterranean Cruise",
    description: "Explore the best of Italy, Croatia, and Montenegro on this luxury Mediterranean cruise.",
    price: 2899,
    duration: "9 Days",
    location: "Mediterranean",
    rating: 4.7,
    reviews: 112,
    image: "https://wp-themes.com/wp-content/themes/fse-tour-booking/assets/images/banner.png",
    category: ["luxury"],
    amenities: ["Balcony Cabin", "All-Inclusive", "Shore Excursions", "Entertainment"],
    groupSize: "Limited",
    featured: false
  },
  {
    id: 6,
    title: "Himalayan Expedition",
    description: "Trek through the breathtaking Himalayan landscapes and experience local mountain culture.",
    price: 2199,
    duration: "14 Days",
    location: "Nepal",
    rating: 4.8,
    reviews: 76,
    image: "https://wp-themes.com/wp-content/themes/fse-tour-booking/assets/images/banner.png",
    category: ["adventure"],
    amenities: ["Mountain Guides", "Equipment", "Permits", "Local Homestays"],
    groupSize: "8",
    featured: false
  }
];

export default function TourPackages() {
  const featuredTours = tourPackages.filter(tour => tour.featured);

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredTours.map((tour) => (
              <Card
                key={tour.id}
                className="group overflow-hidden border-none rounded p-0 bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      View Details
                    </Button>
                  </div>
                  <img
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.title}
                    className="object-cover group-hover:scale-105 h-full transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 z-20 bg-orange-500">
                    Featured
                  </Badge>
                  <div className="absolute bottom-4 left-4 z-20">
                    <Badge className="bg-white/90 text-gray-900">
                      {tour.duration}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-orange-500">{tour.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Map className="h-4 w-4 text-orange-500" />
                        {tour.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-500">
                        ${tour.price}
                      </div>
                      <div className="text-sm text-gray-600">per person</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium text-black">{tour.rating}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      ({tour.reviews} reviews)
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {tour.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="h-4 w-4 text-orange-500" />
                        {amenity}
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
