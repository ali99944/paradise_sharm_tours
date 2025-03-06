'use client'

import { useCallback } from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Clock, Star, Award, Heart, Globe, Compass, Smile, Target, Phone, Mail} from 'lucide-react'
import Navbar from "@/src/components/shared/navbar"
import Link from "next/link"
import PromotionalSection from "@/src/components/promotional_section"
import Footer from "@/src/components/shared/footer"
import { getContactsData } from "@/src/server-actions/contacts-data-actions"
import useGetServerData from "@/src/hooks/use-get-server-data"
import { OverlayLoader } from "@/src/components/shared/overlay_loader"


export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passion",
      description: "We're passionate about creating unforgettable travel experiences."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Authenticity",
      description: "We showcase the real Egypt, beyond the tourist attractions."
    },
    {
      icon: <Smile className="h-6 w-6" />,
      title: "Customer Focus",
      description: "Your satisfaction and happiness are our top priorities."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Responsibility",
      description: "We're committed to sustainable and ethical tourism practices."
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: "Innovation",
      description: "We continuously improve our tours with new experiences."
    }
  ]

  const getContacts = useCallback(async () => {
    const contacts = await getContactsData()
    return contacts
  }, []) // Add `id` as a dependency

  const { data: contacts, isLoading: loading } = useGetServerData(getContacts, null)

  if(loading) {
    return <OverlayLoader />
  }

  return (
    <div className="bg-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
        >
          <img 
            src="/images/designs/1.png" 
            alt="About Paradise Sharm Tours"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
        </motion.div>
        

        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge className="mb-4 bg-[#F15A29] text-white px-3 py-1">ESTABLISHED 2010</Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Our Journey to Excellence</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Discover the passion, people, and purpose behind Paradise Sharm Tours
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-[#F15A29] hover:bg-[#E14A19] text-white">
                Explore Our Tours
              </Button>
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white/20">
                Meet Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "10K+", label: "Happy Travelers", icon: <Users className="h-8 w-8" /> },
              { value: "12+", label: "Years Experience", icon: <Calendar className="h-8 w-8" /> },
              { value: "100+", label: "Unique Tours", icon: <Compass className="h-8 w-8" /> },
              { value: "4.9", label: "Average Rating", icon: <Star className="h-8 w-8" /> }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center"
              >
                <div className="bg-[#F15A29]/10 p-4 rounded-full mb-4 text-[#F15A29]">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-[#1B468F]">{stat.value}</div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-2 bg-[#1B468F] text-white">OUR STORY</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B468F] mb-6">
                A Passion for Authentic <span className="text-[#F15A29]">Egyptian</span> Experiences
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  At Paradise Sharm Tours, we believe that travel is more than just visiting new places—it&apos;s about creating
                  memories that last a lifetime. Founded in 2010, our mission has been to provide exceptional travel
                  experiences that showcase the beauty and culture of Egypt.
                </p>
                <p>
                  What began as a small operation in Sharm El Sheikh has grown into one of Egypt&apos;s most trusted tour operators,
                  but our core values remain the same: authenticity, excellence, and a deep love for sharing our country&apos;s treasures.
                </p>
                <p>
                  From the stunning beaches of the Red Sea to the ancient wonders of Luxor and the bustling streets of Cairo,
                  we are dedicated to helping you discover the best of what Egypt has to offer, with experiences tailored to your interests.
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="h-20 w-20 rounded-full overflow-hidden">
                  <img 
                    src="/images/logo-visual.png" 
                    alt="Founder" 
                    width={160} 
                    height={160}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-[#1B468F]">Ahmed Hassan</div>
                  <div className="text-[#F15A29]">Founder & CEO</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
            >
              <div className="relative z-10 rounded-lg overflow-hidden">
                <img 
                  src="/images/designs/1.png" 
                  alt="Our Story" 
                  width={800} 
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 rounded-lg bg-[#F15A29]/20 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-1/2 h-1/2 rounded-lg bg-[#1B468F]/20 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>


      {/* Our Values Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-2 bg-[#1B468F] text-white">OUR VALUES</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B468F]">What Drives Us</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do, from planning your itinerary to ensuring every detail of your journey is perfect.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values?.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-4 transition-shadow"
              >
                <div className="bg-[#F15A29]/10 p-4 rounded-full inline-block text-[#F15A29] mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1B468F] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      {/* CTA Section */}
      <PromotionalSection />

      {/* Location Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-2 bg-[#1B468F] text-white">VISIT US</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B468F] mb-6">Our Location</h2>
              <p className="text-gray-600 mb-6">
                We are based in the heart of ${contacts?.address}, ${contacts?.city}&apos;s premier resort destination. 
                Our central location makes it easy for you to find us and start planning your dream Egyptian adventure.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#F15A29]/10 p-3 rounded-full text-[#F15A29] mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1B468F]">Address</h3>
                    <p className="text-gray-600">${contacts?.address} - ${contacts?.city}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#F15A29]/10 p-3 rounded-full text-[#F15A29] mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1B468F]">Phone</h3>
                    <p className="text-gray-600">{contacts?.booking_phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#F15A29]/10 p-3 rounded-full text-[#F15A29] mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1B468F]">Email</h3>
                    <p className="text-gray-600">{contacts?.booking_email}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#F15A29]/10 p-3 rounded-full text-[#F15A29] mt-1">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1B468F]">Opening Hours</h3>
                    <p className="text-gray-600">${contacts?.working_days}: ${contacts?.working_hours}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Link href="#" className="bg-[#1B468F] hover:bg-[#0A357E] text-white px-4 py-2 rounded-full flex items-center gap-2">
                  <span>Get Directions</span>
                </Link>
                <Link href="/contact" className="bg-[#F15A29] hover:bg-[#E14A19] text-white px-4 py-2 rounded-full flex items-center gap-2">
                  <span>Contact Us</span>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src={contacts?.google_maps_link}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="w-full"
                ></iframe>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-lg bg-[#1B468F]/10 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
