import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Check, Edit, Map, Plus, Star, Trash } from "lucide-react";
import Link from "next/link";

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

export default function DashboardTours() {
    return (
            <div className="p-4 ">
        <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">Featured Experiences</h3>
        <Link href="/dashboard/create-tour">
        <Button>
            Create Tour
            <Plus className="w-4 h-4" />
        </Button>
        </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tourPackages.map((tour) => (
            <Card
              key={tour.id}
              className="group overflow-hidden rounded bg-white"
            >
              <div className="relative h-auto overflow-hidden">
                <img
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  className="object-cover group-hover:scale-105 h-full transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <Badge className="bg-white/90 text-gray-900">
                    {tour.duration}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-primary">{tour.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Map className="h-4 w-4 text-primary" />
                      {tour.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
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
              <CardFooter>
                <div className="flex items-center gap-x-2 justify-end w-full">
                    <Button className="w-full">
                        Edit
                        <Edit className="w-4 h-4" />
                    </Button>
                    <Button className="w-full bg-destructive hover:">
                        Delete
                        <Trash className="w-4 h-4" />
                    </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    )
}