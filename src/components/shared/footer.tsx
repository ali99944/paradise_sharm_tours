import useGetServerData from "@/src/hooks/use-get-server-data"
import { getContactsData } from "@/src/server-actions/contacts-data-actions"
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { useCallback } from "react"
import { FaTiktok } from "react-icons/fa"
import { TextLoader } from "./text-loader"
import Image from "next/image"

export default function Footer() {
  const getContacts = useCallback(async () => {
    const contacts = await getContactsData()
    return contacts
  }, []) // Add `id` as a dependency

  const { data: contacts, isLoading: loading } = useGetServerData(getContacts, null)



  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div>
            <Link href="/" className="text-2xl font-bold mb-6 inline-block">
              <span className="text-white">Pradise</span>
              <span className="text-orange-400">Sharm</span>
              <span className="text-white">Tours  </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Discover your dream destination with our exclusive travel experiences. Let us help you create memories
              that last a lifetime.
            </p>
            {loading ? (
              <TextLoader />
            ) : (
              <div className="flex space-x-4">
              <Link href={contacts?.facebook_account ?? ''} className="bg-gray-800 p-2 rounded-full hover:bg-[#F15A29] hover:text-black transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href={contacts?.tiktok_account ?? ''} className="bg-gray-800 p-2 rounded-full hover:bg-[#F15A29] hover:text-black transition-colors">
                <FaTiktok className="h-5 w-5" />
              </Link>
              <Link href={contacts?.instagram_account ?? ''} className="bg-gray-800 p-2 rounded-full hover:bg-[#F15A29] hover:text-black transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
            )}
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
                {
                  loading ? (
                    <TextLoader />
                  ) : (
                    <span className="text-gray-400">{contacts?.city} - {contacts?.address}</span>
                  )
                }
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-orange-400 mt-0.5" />
                {
                  loading ? (
                    <TextLoader />
                  ) : (
                    <span className="text-gray-400">{contacts?.booking_phone}</span>
                  )
                }
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-orange-400 mt-0.5" />
                {
                  loading ? (
                    <TextLoader />
                  ) : (
                    <span className="text-gray-400">{contacts?.booking_email}</span>
                  )
                }
              </li>
            </ul>
          </div>

                {/* website logo */}
                <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold mb-6 inline-block">
                  <Image
                    src="/images/logo-text.png"
                    className="drop-shadow-xl shadow-white"
                    alt="Logo"
                    width={260}
                    height={260}
                    style={{
                      filter: 'drop-shadow(2px 2px 2px rgba(255, 255, 255, 0.3))',
                    }}
                  />
                </Link>
                </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-x-2 items-center">
              <Image src="/images/source-logo.png" className="h-full w-auto" alt="Next.js Logo" width={48} height={48} />
              <p className="text-gray-400 text-sm flex flex-col">
                <span>{new Date().getFullYear()} Paradise Sharm Tours. All rights reserved.</span>
                <span>
                  powered by <Link href="https://sourcemediaagency.com" className="hover:underline text-[#F15A29]">Source Media Agency</Link>
                </span>
              </p>
            </div>
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

