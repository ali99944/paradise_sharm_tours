"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Calendar, CreditCard, Plane, HelpCircle, ShieldCheck, Map, Clock, ThumbsUp, ThumbsDown, MessageCircle, ChevronRight, ArrowRight, Phone, Mail, Star, Sparkles, Compass, FileText, Percent, Globe } from 'lucide-react'
import Navbar from "@/src/components/shared/navbar"
import Footer from "@/src/components/shared/footer"
import Link from "next/link"


export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredFaqs, setFilteredFaqs] = useState<FAQItem[]>([])
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)
  const [helpfulFaqs, setHelpfulFaqs] = useState<string[]>([])
  const [unhelpfulFaqs, setUnhelpfulFaqs] = useState<string[]>([])
  const searchRef = useRef<HTMLDivElement>(null)

  // FAQ categories
  const categories = [
    { id: "all", label: "All Questions", icon: <HelpCircle className="h-4 w-4" /> },
    { id: "booking", label: "Booking & Reservations", icon: <Calendar className="h-4 w-4" /> },
    { id: "payment", label: "Payment & Pricing", icon: <CreditCard className="h-4 w-4" /> },
    { id: "tours", label: "Tour Information", icon: <Map className="h-4 w-4" /> },
    { id: "travel", label: "Travel Requirements", icon: <Plane className="h-4 w-4" /> },
    { id: "cancellation", label: "Cancellations & Changes", icon: <Clock className="h-4 w-4" /> },
    { id: "during", label: "During Your Trip", icon: <Compass className="h-4 w-4" /> },
    { id: "safety", label: "Safety & Insurance", icon: <ShieldCheck className="h-4 w-4" /> },
  ]

  // FAQ data
  const faqData: FAQItem[] = [
    {
      id: "booking-1",
      question: "How do I book a tour with Paradise Sharm Tours?",
      answer: "Booking a tour with us is easy! You can book directly through our website by selecting your desired tour, choosing your dates, and following the checkout process. Alternatively, you can contact our booking team via email or phone for personalized assistance. We recommend booking in advance, especially during peak seasons, to ensure availability.",
      category: "booking",
      popular: true,
    },
    {
      id: "booking-2",
      question: "How far in advance should I book my tour?",
      answer: "We recommend booking your tour at least 2-3 months in advance, especially during peak season (October to April). For popular destinations or special events, booking 4-6 months ahead is advisable. Last-minute bookings are possible based on availability, but early booking ensures you get your preferred dates and often better rates.",
      category: "booking",
      popular: false,
    },
    {
      id: "booking-3",
      question: "Can I make changes to my booking after confirmation?",
      answer: "Yes, you can make changes to your booking subject to availability and our change policy. Changes requested more than 30 days before departure are usually accommodated with minimal or no fees. Changes within 30 days may incur additional charges. Please contact our customer service team as soon as possible if you need to make any changes.",
      category: "booking",
      popular: false,
    },
    {
      id: "booking-4",
      question: "Is there a minimum number of participants required for a tour?",
      answer: "Most of our group tours require a minimum of 4 participants to operate. If the minimum is not met, we'll offer you alternatives such as a private tour (possibly with a surcharge), joining another departure date, or a full refund. For private tours, there is no minimum requirement beyond your own party.",
      category: "booking",
      popular: false,
    },
    {
      id: "payment-1",
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including major credit cards (Visa, MasterCard, American Express), bank transfers, and PayPal. All online payments are processed through secure, encrypted systems. For certain destinations, we also offer the option to pay a deposit online and the remaining balance in cash upon arrival.",
      category: "payment",
      popular: true,
    },
    {
      id: "payment-2",
      question: "Do I need to pay the full amount when booking?",
      answer: "For most tours, a 25% deposit is required at the time of booking to secure your reservation, with the remaining balance due 30 days before your tour start date. For bookings made within 30 days of departure, full payment is required. Some special promotions or last-minute deals may require full payment at the time of booking.",
      category: "payment",
      popular: true,
    },
    {
      id: "payment-3",
      question: "Are there any hidden costs or additional fees?",
      answer: "We pride ourselves on transparency. The price you see includes all services listed in the tour description. However, some tours may have optional activities or experiences that are not included in the base price. Additional costs that are not typically included are personal expenses, some meals (as specified in the itinerary), travel insurance, and international airfare unless explicitly stated.",
      category: "payment",
      popular: false,
    },
    {
      id: "payment-4",
      question: "Do you offer any discounts or special promotions?",
      answer: "Yes, we offer various discounts including early bird specials (10-15% off when booking 6+ months in advance), group discounts (5-10% for groups of 6 or more), returning customer discounts (5% for previous clients), and seasonal promotions. We also occasionally offer last-minute deals on tours with available spaces. Sign up for our newsletter to stay informed about special offers.",
      category: "payment",
      popular: false,
    },
    {
      id: "tours-1",
      question: "What types of tours do you offer?",
      answer: "We offer a wide range of tours including cultural and historical tours, adventure tours, beach and diving experiences, desert safaris, Nile cruises, and custom private tours. Our experiences range from single-day excursions to multi-week comprehensive journeys throughout Egypt. We cater to various interests, age groups, and physical activity levels.",
      category: "tours",
      popular: true,
    },
    {
      id: "tours-2",
      question: "What is included in a typical tour package?",
      answer: "Our standard tour packages typically include accommodation, transportation within Egypt (as specified in the itinerary), English-speaking guides, entrance fees to attractions, and some meals (usually breakfast and select other meals as noted in the itinerary). Some tours also include additional experiences like Nile cruises, desert camping, or special cultural activities.",
      category: "tours",
      popular: false,
    },
    {
      id: "tours-3",
      question: "How large are your tour groups?",
      answer: "Our standard group tours typically have 8-16 participants to ensure a personalized experience. Some specialized tours may have smaller group sizes (4-10 people), particularly for adventure activities or exclusive experiences. We also offer private tours for those who prefer a more customized experience with just their travel companions.",
      category: "tours",
      popular: false,
    },
    {
      id: "tours-4",
      question: "Can you accommodate special dietary requirements?",
      answer: "Yes, we can accommodate most dietary requirements including vegetarian, vegan, gluten-free, and halal options. Please inform us of any dietary restrictions or allergies at the time of booking so we can make appropriate arrangements. For very specific dietary needs, we recommend providing details in advance to ensure proper accommodation throughout your tour.",
      category: "tours",
      popular: false,
    },
    {
      id: "travel-1",
      question: "Do I need a visa to visit Egypt?",
      answer: "Most visitors to Egypt require a visa. Many nationalities can obtain a visa on arrival at Egyptian airports for approximately $25 USD, or apply for an e-visa online before travel. Some nationalities require a visa obtained from an Egyptian embassy or consulate before arrival. We recommend checking the latest visa requirements for your specific nationality well in advance of your trip.",
      category: "travel",
      popular: true,
    },
    {
      id: "travel-2",
      question: "Are there any vaccination requirements for Egypt?",
      answer: "There are no mandatory vaccinations required for entry to Egypt from most countries, but it's recommended to be up-to-date on routine vaccines (MMR, diphtheria-tetanus-pertussis, varicella, polio, and flu). Some travelers may consider hepatitis A, hepatitis B, and typhoid vaccinations. We recommend consulting with a travel health professional 4-8 weeks before your trip for personalized advice.",
      category: "travel",
      popular: false,
    },
    {
      id: "travel-3",
      question: "What is the best time of year to visit Egypt?",
      answer: "The best time to visit Egypt is during the cooler months from October to April when temperatures are more comfortable for sightseeing. December and January are peak season with the mildest temperatures but also the largest crowds. May to September can be extremely hot, especially in Upper Egypt (Luxor, Aswan), but offers fewer crowds and lower rates. Coastal areas like Sharm El Sheikh are pleasant year-round.",
      category: "travel",
      popular: true,
    },
    {
      id: "travel-4",
      question: "What should I pack for my trip to Egypt?",
      answer: "For Egypt, pack lightweight, breathable clothing that covers shoulders and knees (especially for visiting religious sites). Include a sun hat, sunglasses, sunscreen, comfortable walking shoes, and a light jacket or sweater for evenings (especially in winter or for air-conditioned places). For beach destinations, regular swimwear is acceptable at resort beaches. A small daypack, reusable water bottle, and basic first aid supplies are also recommended.",
      category: "travel",
      popular: false,
    },
    {
      id: "cancellation-1",
      question: "What is your cancellation policy?",
      answer: "Our standard cancellation policy offers a full refund (minus processing fees) for cancellations made 60+ days before departure. Cancellations 30-59 days before departure receive a 50% refund. Cancellations less than 30 days before departure are non-refundable. We strongly recommend purchasing travel insurance to protect against unexpected cancellations. Different terms may apply for special promotions or custom tours.",
      category: "cancellation",
      popular: true,
    },
    {
      id: "cancellation-2",
      question: "Can I reschedule my tour instead of cancelling?",
      answer: "Yes, we offer flexible rescheduling options. Changes made 30+ days before departure can usually be accommodated at no additional cost, subject to availability. Rescheduling requests within 30 days of departure may incur change fees. If the new tour date is priced differently, you'll either need to pay the difference or receive a credit/refund for the difference.",
      category: "cancellation",
      popular: false,
    },
    {
      id: "cancellation-3",
      question: "What happens if Paradise Sharm Tours cancels my tour?",
      answer: "In the rare event that we need to cancel a tour (due to insufficient participants, safety concerns, or extraordinary circumstances), you'll be offered either a full refund, credit toward a future tour (often with added value), or an alternative tour date or itinerary. We typically make such decisions at least 30 days before departure, except in cases of force majeure.",
      category: "cancellation",
      popular: false,
    },
    {
      id: "cancellation-4",
      question: "Do you recommend travel insurance?",
      answer: "Yes, we strongly recommend comprehensive travel insurance for all our guests. A good policy should cover trip cancellation/interruption, medical expenses, emergency evacuation, and lost luggage. This is especially important for international travel where your home health insurance may not provide coverage. We can suggest insurance providers, or you can arrange coverage through your preferred insurance company.",
      category: "cancellation",
      popular: false,
    },
    {
      id: "during-1",
      question: "How can I stay connected during my trip?",
      answer: "Egypt has good mobile coverage in cities and tourist areas. You can purchase a local SIM card upon arrival (passport required) for affordable data and calls. Many hotels, restaurants, and cafes offer free Wi-Fi. For those preferring not to get a local SIM, international roaming or portable Wi-Fi devices are alternatives. We recommend informing your mobile provider about your travel plans before departure.",
      category: "during",
      popular: false,
    },
    {
      id: "during-2",
      question: "What is the tipping culture in Egypt?",
      answer: "Tipping (baksheesh) is an important part of Egyptian culture. For guides and drivers, $10-15 per day for guides and $5-10 per day for drivers is customary. In restaurants, 10-15% is appropriate if service isn't included. Small tips ($1-2) are expected for hotel porters, housekeeping, and washroom attendants. Having small denominations of Egyptian pounds is helpful for tipping throughout your journey.",
      category: "during",
      popular: true,
    },
    {
      id: "during-3",
      question: "Will there be free time during the tour?",
      answer: "Yes, our itineraries typically include designated free time for personal exploration, relaxation, or optional activities. The amount varies by tour type – cultural tours might include a few hours each day or occasional half-days, while beach or resort-based tours offer more substantial free time. Your guide can provide recommendations for activities during these periods based on your interests.",
      category: "during",
      popular: false,
    },
    {
      id: "during-4",
      question: "What happens if I have an emergency during my tour?",
      answer: "In case of emergency, your tour guide is your first point of contact and is trained to handle various situations. All guides carry first aid kits and have contact information for local medical facilities. We provide a 24/7 emergency contact number for all guests. For medical emergencies, we can assist in arranging appropriate medical care. This is another reason why comprehensive travel insurance is essential.",
      category: "during",
      popular: false,
    },
    {
      id: "safety-1",
      question: "Is Egypt safe for tourists?",
      answer: "Egypt is generally safe for tourists, especially in major tourist destinations which have enhanced security measures. Like any destination, it's important to exercise normal precautions regarding personal belongings and be aware of your surroundings. We continuously monitor safety conditions and would never operate tours in areas with security concerns. Our experienced guides are also trained to prioritize guest safety throughout the journey.",
      category: "safety",
      popular: true,
    },
    {
      id: "safety-2",
      question: "What safety measures do you implement on your tours?",
      answer: "Safety is our top priority. We work only with licensed, experienced drivers and regularly maintained vehicles. Our guides receive safety training and carry first aid kits. We follow established routes and avoid areas with travel advisories. For adventure activities, we use quality equipment and certified instructors. We maintain communication with local authorities and continuously monitor conditions in all our destinations.",
      category: "safety",
      popular: false,
    },
    {
      id: "safety-3",
      question: "Are your tours suitable for travelers with mobility issues?",
      answer: "We offer tours with varying levels of physical activity. Many cultural and historical tours can be adapted for travelers with mobility limitations, though some ancient sites have unavoidable stairs or uneven terrain. Our private tours offer the most flexibility for accommodation of mobility needs. Please inform us of any mobility concerns during booking so we can recommend appropriate tours and make necessary arrangements.",
      category: "safety",
      popular: false,
    },
    {
      id: "safety-4",
      question: "What health precautions should I take when visiting Egypt?",
      answer: "We recommend drinking only bottled water, using hand sanitizer regularly, and being cautious with street food. Protect yourself from the sun with high-SPF sunscreen, a hat, and sunglasses. Bring any prescription medications you need (in original containers with prescriptions). Consider packing basic over-the-counter remedies for minor issues like upset stomach, headaches, or allergies. Travel insurance with medical coverage is strongly advised.",
      category: "safety",
      popular: false,
    },
  ]

  // Popular FAQs
  const popularFaqs = faqData.filter(faq => faq.popular)

  // Filter FAQs based on search and category
  useEffect(() => {
    let filtered = faqData

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(faq => faq.category === activeCategory)
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        faq =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query)
      )
    }

    setFilteredFaqs(filtered)
  }, [searchQuery, activeCategory])

  // Handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setSearchQuery("")
  }

  // Handle feedback
  const handleFeedback = (id: string, isHelpful: boolean) => {
    if (isHelpful) {
      setHelpfulFaqs(prev => [...prev.filter(faqId => faqId !== id), id])
      setUnhelpfulFaqs(prev => prev.filter(faqId => faqId !== id))
    } else {
      setUnhelpfulFaqs(prev => [...prev.filter(faqId => faqId !== id), id])
      setHelpfulFaqs(prev => prev.filter(faqId => faqId !== id))
    }
  }

  // Scroll to search results
  const scrollToSearch = () => {
    searchRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#1B468F] to-[#0E2A5F] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F15A29] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F15A29] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 bg-[#F15A29] text-white px-3 py-1">KNOWLEDGE BASE</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-white/90 mb-8">
                Find answers to common questions about our tours, booking process, and travel in Egypt.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="pl-12 pr-4 py-6 rounded-full bg-white/90 backdrop-blur-sm text-black shadow-lg border-0 w-full"
                />
                <Button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-[#F15A29] hover:bg-[#E14A19] text-white"
                  onClick={scrollToSearch}
                >
                  Search
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap justify-center gap-2"
            >
              <span className="text-white/80">Popular searches:</span>
              {["booking", "cancellation", "visa", "payment", "safety"].map((term, index) => (
                <Badge
                  key={index}
                  className="bg-white/20 hover:bg-white/30 text-white cursor-pointer"
                  onClick={() => setSearchQuery(term)}
                >
                  {term}
                </Badge>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#1B468F]">Browse by Category</h2>
          <p className="text-gray-600 mt-2">Select a category to find specific answers to your questions</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.slice(1).map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ y: -5 }}
              className="cursor-pointer"
              onClick={() => handleCategoryChange(category.id)}
            >
              <Card className={`border-2 h-full ${activeCategory === category.id ? 'border-[#F15A29]' : 'border-gray-100'} hover:border-[#F15A29] transition-colors`}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className={`p-3 rounded-full ${activeCategory === category.id ? 'bg-[#F15A29] text-white' : 'bg-gray-100 text-[#1B468F]'} mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="font-medium text-[#1B468F]">{category.label}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popular Questions Section */}
      {searchQuery === "" && activeCategory === "all" && (
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="h-6 w-6 text-[#F15A29]" />
              <h2 className="text-2xl font-bold text-[#1B468F]">Most Popular Questions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularFaqs.map((faq) => (
                <Card key={faq.id} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="mt-1 bg-[#F15A29]/10 p-2 rounded-full h-fit">
                        <HelpCircle className="h-5 w-5 text-[#F15A29]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1B468F] mb-2">{faq.question}</h3>
                        <p className="text-gray-600 line-clamp-3">{faq.answer}</p>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-[#F15A29] mt-2"
                          onClick={() => {
                            setActiveCategory(faq.category)
                            setExpandedFaq(faq.id)
                            setTimeout(() => {
                              document.getElementById(faq.id)?.scrollIntoView({ behavior: 'smooth' })
                            }, 100)
                          }}
                        >
                          Read full answer <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FAQ Listing Section */}
      <div ref={searchRef} className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Category Sidebar */}
          <div className="md:w-1/4">
            <div className="sticky top-24 bg-white rounded-lg border p-4">
              <h3 className="font-bold text-[#1B468F] mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${
                      activeCategory === category.id
                        ? "bg-[#1B468F] text-white"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    {category.icon}
                    <span>{category.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-[#1B468F] mb-4">Need More Help?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#F15A29]/10 p-2 rounded-full">
                      <MessageCircle className="h-4 w-4 text-[#F15A29]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#1B468F]">Live Chat</h4>
                      <p className="text-sm text-gray-600">Chat with our support team</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#F15A29]/10 p-2 rounded-full">
                      <Mail className="h-4 w-4 text-[#F15A29]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#1B468F]">Email Us</h4>
                      <p className="text-sm text-gray-600">support@paradisesharmtours.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#F15A29]/10 p-2 rounded-full">
                      <Phone className="h-4 w-4 text-[#F15A29]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#1B468F]">Call Us</h4>
                      <p className="text-sm text-gray-600">+20 123 456 7890</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="md:w-3/4">
            {searchQuery && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-[#1B468F]">
                  <span className="font-medium">Search results for:</span> &quot;{searchQuery}&quot;
                </p>
                <p className="text-gray-600">Found {filteredFaqs.length} results</p>
              </div>
            )}

            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <div className="bg-white p-4 rounded-full inline-block mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-[#1B468F] mb-2">No results found</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  We couldn&apos;t find any FAQs matching your search. Try different keywords or browse by category.
                </p>
                <Button
                  className="bg-[#1B468F] hover:bg-[#0A357E] text-white"
                  onClick={() => {
                    setSearchQuery("")
                    setActiveCategory("all")
                  }}
                >
                  Clear Search
                </Button>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-[#1B468F] mb-6">
                  {activeCategory === "all"
                    ? "All Questions"
                    : categories.find(c => c.id === activeCategory)?.label}
                </h2>

                <Accordion
                  type="single"
                  collapsible
                  className="space-y-4"
                  value={expandedFaq || undefined}
                  onValueChange={setExpandedFaq}
                >
                  {filteredFaqs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      id={faq.id}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                        <div className="flex items-center gap-3 text-left">
                          <div className={`p-2 rounded-full ${
                            faq.category === "booking" ? "bg-blue-100 text-blue-600" :
                            faq.category === "payment" ? "bg-green-100 text-green-600" :
                            faq.category === "tours" ? "bg-purple-100 text-purple-600" :
                            faq.category === "travel" ? "bg-amber-100 text-amber-600" :
                            faq.category === "cancellation" ? "bg-red-100 text-red-600" :
                            faq.category === "during" ? "bg-teal-100 text-teal-600" :
                            "bg-gray-100 text-gray-600"
                          }`}>
                            {faq.category === "booking" ? <Calendar className="h-4 w-4" /> :
                             faq.category === "payment" ? <CreditCard className="h-4 w-4" /> :
                             faq.category === "tours" ? <Map className="h-4 w-4" /> :
                             faq.category === "travel" ? <Plane className="h-4 w-4" /> :
                             faq.category === "cancellation" ? <Clock className="h-4 w-4" /> :
                             faq.category === "during" ? <Compass className="h-4 w-4" /> :
                             faq.category === "safety" ? <ShieldCheck className="h-4 w-4" /> :
                             <HelpCircle className="h-4 w-4" />}
                          </div>
                          <span className="font-medium text-[#1B468F]">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 pt-0">
                        <div className="pl-9">
                          <p className="text-gray-600 mb-4">{faq.answer}</p>

                          <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <span className="text-sm text-gray-500">Was this helpful?</span>
                              <Button
                                variant="outline"
                                size="sm"
                                className={`flex items-center gap-1 ${helpfulFaqs.includes(faq.id) ? 'bg-green-50 text-green-600 border-green-200' : ''}`}
                                onClick={() => handleFeedback(faq.id, true)}
                              >
                                <ThumbsUp className="h-4 w-4" /> Yes
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className={`flex items-center gap-1 ${unhelpfulFaqs.includes(faq.id) ? 'bg-red-50 text-red-600 border-red-200' : ''}`}
                                onClick={() => handleFeedback(faq.id, true)}
                              >
                                <ThumbsDown className="h-4 w-4" /> No
                              </Button>
                            </div>

                            <Badge className="bg-gray-100 text-gray-600 hover:bg-gray-200">
                              {categories.find(c => c.id === faq.category)?.label}
                            </Badge>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Resources Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-[#1B468F] text-white">RESOURCES</Badge>
            <h2 className="text-3xl font-bold text-[#1B468F] mb-4">Helpful Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore these additional resources to help plan your perfect Egyptian adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FileText className="h-6 w-6" />,
                title: "Travel Guides",
                description: "Comprehensive guides to help you prepare for your Egyptian adventure",
                link: "#",
                color: "bg-blue-500"
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Destination Information",
                description: "Detailed information about the destinations we visit",
                link: "#",
                color: "bg-emerald-500"
              },
              {
                icon: <Percent className="h-6 w-6" />,
                title: "Special Offers",
                description: "Current promotions and special deals on our most popular tours",
                link: "#",
                color: "bg-amber-500"
              },
            ].map((resource, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-md">
                <div className={`h-2 ${resource.color}`}></div>
                <CardContent className="p-6">
                  <div className={`p-3 ${resource.color} rounded-full text-white inline-block mb-4`}>
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1B468F] mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Button variant="link" className="p-0 h-auto text-[#F15A29]" asChild>
                    <Link href={resource.link}>
                      Explore <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Still Have Questions Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-[#1B468F] text-white rounded-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F15A29] opacity-20 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F15A29] opacity-20 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-white/90 max-w-xl">
                Can&apos;t find the answer you&apos;re looking for? Our friendly team is here to help you with any questions or concerns.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-[#1B468F] hover:bg-gray-100">
                <MessageCircle className="mr-2 h-5 w-5" /> Live Chat
              </Button>
              <Button size="lg" className="bg-[#F15A29] hover:bg-[#E14A19] text-white">
                <Mail className="mr-2 h-5 w-5" /> Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-[#F15A29] text-white">TESTIMONIALS</Badge>
            <h2 className="text-3xl font-bold text-[#1B468F] mb-4">What Our Travelers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read about the experiences of travelers who have explored Egypt with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                location: "London, UK",
                image: "/placeholder.svg?height=100&width=100",
                quote: "The FAQ section was incredibly helpful in preparing for my trip. All my questions were answered before I even had to ask!",
                rating: 5
              },
              {
                name: "Michael Chen",
                location: "Toronto, Canada",
                image: "/placeholder.svg?height=100&width=100",
                quote: "I was concerned about safety in Egypt, but the information provided put my mind at ease. My trip was smooth and worry-free.",
                rating: 5
              },
              {
                name: "Elena Rodriguez",
                location: "Madrid, Spain",
                image: "/placeholder.svg?height=100&width=100",
                quote: "The booking process was simple and transparent. No hidden fees or surprises - exactly what was promised in the FAQs.",
                rating: 4
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-[#1B468F]">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <Badge className="mb-2 bg-[#1B468F] text-white">STAY UPDATED</Badge>
              <h2 className="text-3xl font-bold text-[#1B468F] mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Get travel tips, destination guides, and exclusive offers delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow"
                />
                <Button className="bg-[#F15A29] hover:bg-[#E14A19] text-white whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#F15A29]/20 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#1B468F]/20 rounded-full"></div>
                <div className="bg-gray-50 p-6 rounded-full">
                  <Mail className="h-16 w-16 text-[#1B468F]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Types
interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  popular: boolean;
}
