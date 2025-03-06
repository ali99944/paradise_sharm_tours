"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react"

export default function ContactUs() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B468F]">Contact Us</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to us! Our team is here to help you plan your next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <Input id="name" type="text" placeholder="Your Name" className="mt-1" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message..." className="mt-1" rows={5} />
              </div>

              <Button type="submit" className="w-full bg-[#F15A29] hover:bg-[#E14A19] text-white">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information and Map */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#1B468F] rounded-full text-white">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1B468F]">Our Office</h3>
                <p className="text-gray-600">123 Adventure Lane, Sharm El Sheikh, Egypt</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#1B468F] rounded-full text-white">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1B468F]">Call Us</h3>
                <p className="text-gray-600">+20 123 456 7890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#1B468F] rounded-full text-white">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1B468F]">Email Us</h3>
                <p className="text-gray-600">info@paradisesharmtours.com</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B468F] hover:text-[#F15A29] transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B468F] hover:text-[#F15A29] transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B468F] hover:text-[#F15A29] transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>

            {/* Embedded Map */}
            <div className="mt-8 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13719.63979922153!2d34.328283!3d27.915283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1453382d5e5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sSharm%20El%20Sheikh%2C%20Egypt!5e0!3m2!1sen!2sus!4v1633025000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
