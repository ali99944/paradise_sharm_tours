'use client'

import { useState, useRef, useCallback } from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, MessageCircle, Clock, Send, Facebook, Instagram, User, AtSign, Calendar, Headphones, CreditCard, HelpCircle, Star } from 'lucide-react'
import Navbar from "@/src/components/shared/navbar"
import { OverlayLoader } from "@/src/components/shared/overlay_loader"
import Footer from "@/src/components/shared/footer"
import useGetServerData from "@/src/hooks/use-get-server-data"
import { getAllFaqs } from "@/src/server-actions/faq-actions"
import { FaTiktok } from 'react-icons/fa'
import { getContactsData } from "@/src/server-actions/contacts-data-actions"
import Link from "next/link"
import useServerAction from "@/src/hooks/use-server-action"
import { createContactMessage } from "@/src/server-actions/contact-message-actions"


export default function ContactUsPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [activeTab] = useState('general')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: 'general'
  })
  const formRef = useRef<HTMLFormElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const createContactMessageAction = useServerAction(createContactMessage)


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')

    await createContactMessageAction.mutation(formData, {
      onSuccess() {
        setFormStatus('success')
        formRef.current?.reset()

        setTimeout(() => {
          setFormStatus('idle')
        }, 3000)
      },
      onFailure() {
        setFormStatus('error')
      }
    })
    
  }

  const scrollToMap = () => {
    mapRef.current?.scrollIntoView({ behavior: 'smooth' })
  }


  const { data: faqs, isLoading: isFaqsLoading } = useGetServerData(
    getAllFaqs, []
  )

  const getContacts = useCallback(async () => {
    const contacts = await getContactsData()
    return contacts
  }, []) // Add `id` as a dependency

  const { data: contacts, isLoading: loading } = useGetServerData(getContacts, null)

  const serviceIcons = {
    general: <MessageCircle className="h-5 w-5" />,
    booking: <Calendar className="h-5 w-5" />,
    support: <Headphones className="h-5 w-5" />,
    payment: <CreditCard className="h-5 w-5" />,
    feedback: <Star className="h-5 w-5" />
  }



  if(isFaqsLoading || loading) {
    return <OverlayLoader />
  }

  return (
    <div className="bg-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B468F] to-[#0E2A5F]">
          <div className="absolute inset-0 opacity-20"
               style={{
                 backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%239C92AC" fillOpacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
               }}
          ></div>
        </div>

        <div className="absolute right-0 top-0 h-full w-1/3 bg-[#F15A29] opacity-20 transform -skew-x-12"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <Badge className="mb-4 bg-[#F15A29] text-white px-3 py-1">WE&apos;RE HERE TO HELP</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl mb-8 text-white/90">
              Have questions about your next adventure? Our travel experts are here to help you plan the perfect trip.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#F15A29] hover:bg-[#E14A19] text-white"
                onClick={scrollToMap}
              >
                <MapPin className="mr-2 h-4 w-4" /> Find Our Location
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white/20"
                asChild
              >
                <a href={`tel:${contacts?.booking_phone}`}>
                  <Phone className="mr-2 h-4 w-4" /> Call Us Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

=
      </div>

      {/* Contact Cards Section */}
      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div>
              <Card className="overflow-hidden shadow-none border  transition-shadow duration-300 p-0">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${'bg-[#1B468F]'} rounded-full text-white`}>
                      {serviceIcons.general}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1B468F] mb-3">{'Our Emails'}</h3>
                        <div className="mb-2">
                          <p className="text-sm text-gray-500">{contacts?.support_email}</p>
                          <p className="font-medium">{contacts?.booking_email}</p>
                        </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
        <motion.div>
              <Card className="overflow-hidden shadow-none border  transition-shadow duration-300 p-0">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${'bg-[#1B468F]'} rounded-full text-white`}>
                      {serviceIcons.general}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1B468F] mb-3">{'Our phones'}</h3>
                        <div className="mb-2">
                          <p className="text-sm text-gray-500">{contacts?.support_phone}</p>
                          <p className="font-medium">{contacts?.booking_phone}</p>
                        </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
        <motion.div>
              <Card className="overflow-hidden shadow-none border  transition-shadow duration-300 p-0">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${'bg-[#1B468F]'} rounded-full text-white`}>
                      {serviceIcons.general}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1B468F] mb-3">{'Our Location'}</h3>
                        <div className="mb-2">
                          <p className="text-sm text-gray-500">{contacts?.city}</p>
                          <p className="font-medium">{contacts?.address}</p>
                        </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
        </div>
      </div>

      {/* Contact Form and Info Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <Badge className="mb-2 bg-[#1B468F] text-white">CONTACT US</Badge>
              <h2 className="text-3xl font-bold text-[#1B468F] mb-4">Let&apos;s Start a Conversation</h2>
              <p className="text-gray-600">
                Whether you have a question about our tours, need help with a booking, or want to share your feedback,
                we&apos;re here to help. Choose the department you&apos;d like to contact, and we&apos;ll make sure your message
                reaches the right team.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-[#F15A29]" />
                <h3 className="font-bold text-[#1B468F]">Working Hours</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Working Days:</span>
                  <span className="font-medium">{contacts?.working_days}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Working Hours</span>
                  <span className="font-medium">{contacts?.working_hours}</span>
                </div>
                {/* <div className="flex justify-between">
                  <span className="text-gray-600">Weekend:</span>
                  <span className="font-medium">{contacts?.weekend}</span>
                </div> */}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-[#1B468F] mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: <Facebook className="h-5 w-5" />, color: "bg-blue-600", link: contacts?.facebook_account },
                  { icon: <Instagram className="h-5 w-5" />, color: "bg-pink-600", link: contacts?.instagram_account },
                  { icon: <FaTiktok className="h-5 w-5" />, color: "bg-blue-700", link: contacts?.tiktok_account },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.link ?? ''}
                    className={`${social.color} p-3 rounded-full text-white hover:opacity-90 transition-opacity`}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-[#1B468F] text-white p-6 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F15A29] opacity-20 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#F15A29] opacity-20 rounded-full transform -translate-x-12 translate-y-12"></div>

              <h3 className="text-xl font-bold mb-4 relative z-10">Need Urgent Assistance?</h3>
              <p className="mb-6 relative z-10">
                Our emergency support line is available 24/7 for travelers currently on a tour with us.
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <Phone className="h-5 w-5 text-[#F15A29]" />
                <span className="font-bold">{contacts?.urgent_phone_number}</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-none  overflow-hidden">

              <CardContent className="p-6">
                <AnimatePresence mode="wait">
                  {formStatus === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center justify-center py-10 text-center"
                    >
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <img src="/images/logo-visual.png" alt="Travel Pal" className="w-20 h-20" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1B468F] mb-2">Thank You for Choosing Us!</h3>
                      <p className="text-gray-600 max-w-md">
                        We appreciate your trust in us and are honored to have you as our customer. We will get back to you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="flex items-center gap-2 mb-6">
                        {serviceIcons[activeTab as keyof typeof serviceIcons]}
                        <h2 className="text-xl font-bold text-[#1B468F]">
                          {activeTab === 'general' && 'How Can We Help You?'}
                          {activeTab === 'booking' && 'Book Your Adventure'}
                          {activeTab === 'support' && 'Need Assistance?'}
                        </h2>
                      </div>

                      <input
                        type="hidden"
                        name="service"
                        value={activeTab}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="John Doe"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="john@example.com"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+20 123 456 7890"
                              className="pl-10"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                            Subject <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="How can we help you?"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Please provide as much detail as possible..."
                          rows={5}
                          required
                        />
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="privacy"
                            type="checkbox"
                            className="h-4 w-4 text-[#1B468F] border-gray-300 rounded focus:ring-[#1B468F]"
                            required
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="privacy" className="text-gray-600">
                            I agree to the <Link href="#" className="text-[#1B468F] hover:underline">Privacy Policy</Link> and consent to being contacted regarding my inquiry.
                          </label>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#F15A29] hover:bg-[#E14A19] text-white"
                        disabled={formStatus === 'submitting'}
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" /> Send Message
                          </>
                        )}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-[#F15A29] text-white">FAQ</Badge>
            <h2 className="text-3xl font-bold text-[#1B468F] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our services. If you can&apos;t find what you&apos;re looking for,
              please don&apos;t hesitate to contact us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs?.length ? (
                faqs.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                      <div className="flex items-center gap-3 text-left">
                        <HelpCircle className="h-5 w-5 text-[#F15A29] flex-shrink-0" />
                        <span className="font-medium text-[#1B468F]">{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-0">
                      <div className="pl-8 text-gray-600">
                        {item.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 font-medium">No FAQs available currently. Please check back later.</p>
                </div>
              )}
            </Accordion>
          </div>
          <div className="mt-10 text-center">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <Link href={"/contact"}>
                <Button className="bg-[#1B468F] hover:bg-[#0A357E] text-white">
                  <Phone className="mr-2 h-4 w-4" /> contact us
                </Button>
              </Link>
            </div>
        </div>
      </div>

      {/* Map Section */}
      <div ref={mapRef} className="relative py-20">
        <div className="container mx-auto px-4 mb-12">
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-[#1B468F] text-white">LOCATION</Badge>
            <h2 className="text-3xl font-bold text-[#1B468F] mb-4">Find Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office in Sharm El Sheikh to meet our team and plan your next adventure in person.
            </p>
          </div>
        </div>

        <div className="relative h-[500px] w-full">
          <iframe
            src={contacts?.google_maps_link}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="absolute inset-0"
          ></iframe>

          <div className="absolute top-6 right-6 z-10 max-w-sm">
            <Card className="border-none shadow-sm p-0">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#F15A29] rounded-full text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-[#1B468F]">Paradise Sharm Tours</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {contacts?.address}, {contacts?.city}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
