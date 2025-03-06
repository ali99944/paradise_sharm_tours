import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div>
            <Link href="/" className="text-2xl font-bold mb-6 inline-block">
              <span className="text-white">Travel</span>
              <span className="text-orange-400">Guide</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Discover your dream destination with our exclusive travel experiences. Let us help you create memories
              that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#F15A29] hover:text-black transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#F15A29] hover:text-black transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#F15A29] hover:text-black transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#F15A29] hover:text-black transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#F15A29]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#F15A29] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#F15A29] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-gray-400 hover:text-[#F15A29] transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-400 hover:text-[#F15A29] transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-[#F15A29] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#F15A29] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">Contact Info</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#F15A29]"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-0.5" />
                <span className="text-gray-400">123 Adventure Street, Travel City, TC 12345</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-orange-400 mt-0.5" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-orange-400 mt-0.5" />
                <span className="text-gray-400">info@travelguide.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">Newsletter</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#F15A29]"></span>
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive the latest travel deals and updates.
            </p>
            <div className="space-y-3">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-r-none bg-gray-800 border-gray-700 text-white"
                />
                <Button className="rounded-l-none bg-[#F15A29] hover:bg-orange-600">Subscribe</Button>
              </div>
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Travel Guide. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/terms" className="text-gray-400 hover:text-[#F15A29] text-sm">
                Terms & Conditions
              </Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-[#F15A29] text-sm">
                Privacy Policy
              </Link>
              <Link href="/faqs" className="text-gray-400 hover:text-[#F15A29] text-sm">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

