"use client"

import { useState, useEffect, useRef } from "react"
import {
  FaUsers, FaAward, FaHandshake, FaGlobe, FaLightbulb,
  FaRocket, FaBolt, FaClock, FaThumbsUp, FaStar, FaQuoteRight
} from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Zap, CheckCircle, ListChecks, BookIcon, HeartIcon, LinkedinIcon, TwitterIcon, MailIcon, ChevronDown } from 'lucide-react'
import Navbar from "@/src/components/shared/navbar"
import FloatingWhatsAppIcon from "@/src/components/shared/floating-whatsapp"
import Footer from "@/src/components/shared/footer"

export default function AboutContent() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const speedometerRef = useRef<HTMLDivElement>(null)
  const [speedValue, setSpeedValue] = useState(0)



  // For the speedometer animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          let value = 0
          const interval = setInterval(() => {
            value += 1
            setSpeedValue(value)
            if (value >= 95) clearInterval(interval)
          }, 10)
        }
      },
      { threshold: 0.1 }
    )

    if (speedometerRef.current) {
      observer.observe(speedometerRef.current)
    }

    return () => {
      if (speedometerRef.current) {
        observer.unobserve(speedometerRef.current)
      }
    }
  }, [isVisible])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const teamMembers = [
    {
      name: "عبد السلام محمد",
      position: "مالك الشركة",
      image: "/placeholder.svg?height=300&width=300",
      bio: "خبرة أكثر من 10 سنوات في مجال التسويق الرقمي وإدارة الأعمال"
    },
    {
      name: "عبدالله يحيى",
      position: "مدير التسويق",
      image: "/placeholder.svg?height=300&width=300",
      bio: "متخصص في استراتيجيات التسويق الرقمي وحملات السوشيال ميديا"
    },
    {
      name: "علي طارق علي محمد",
      position: "مطور برمجيات",
      image: "/placeholder.svg?height=300&width=300",
      bio: "مبرمج محترف مع خبرة في تطوير المواقع والتطبيقات الإلكترونية"
    },
  ]

  const milestones = [
    {
      year: "2015",
      title: "تأسيس الشركة",
      description: "بداية رحلة Source Media Agency في عالم التسويق الرقمي",
      icon: <FaRocket className="text-orange-500" />
    },
    {
      year: "2017",
      title: "توسع الخدمات",
      description: "إضافة خدمات جديدة وتوسيع نطاق العمل ليشمل المزيد من المجالات",
      icon: <FaGlobe className="text-orange-500" />
    },
    {
      year: "2019",
      title: "التوسع الإقليمي",
      description: "بدء العمل في أسواق جديدة في دول الخليج والأسواق الدولية",
      icon: <FaHandshake className="text-orange-500" />
    },
    {
      year: "2021",
      title: "تطوير التكنولوجيا",
      description: "إطلاق منصات وأدوات تسويقية متطورة لخدمة العملاء بشكل أفضل",
      icon: <FaLightbulb className="text-orange-500" />
    },
    {
      year: "2023",
      title: "الوصول إلى 500 شركة",
      description: "تجاوز عدد الشركات التي تم خدمتها 500 شركة وأكثر من 30,000 عميل",
      icon: <FaUsers className="text-orange-500" />
    },
  ]

  const values = [
    {
      icon: <FaUsers className="w-12 h-12 text-orange-500" />,
      title: "التركيز على العميل",
      description: "نضع عملائنا في مقدمة أولوياتنا ونسعى دائماً لتجاوز توقعاتهم",
    },
    {
      icon: <FaAward className="w-12 h-12 text-orange-500" />,
      title: "الجودة والتميز",
      description: "نلتزم بتقديم أعلى مستويات الجودة في كل ما نقوم به",
    },
    {
      icon: <FaBolt className="w-12 h-12 text-orange-500" />,
      title: "السرعة والكفاءة",
      description: "نتميز بسرعة التنفيذ وكفاءة العمل مع الحفاظ على أعلى معايير الجودة",
    },
    {
      icon: <FaHandshake className="w-12 h-12 text-orange-500" />,
      title: "النزاهة والشفافية",
      description: "نؤمن بالصدق والشفافية في جميع تعاملاتنا مع العملاء والشركاء",
    },
    {
      icon: <FaGlobe className="w-12 h-12 text-orange-500" />,
      title: "الابتكار المستمر",
      description: "نسعى دائماً للتطوير والابتكار لمواكبة أحدث التقنيات والاتجاهات",
    },
    {
      icon: <FaLightbulb className="w-12 h-12 text-orange-500" />,
      title: "الإبداع والتفكير خارج الصندوق",
      description: "نشجع التفكير الإبداعي والحلول المبتكرة لتحقيق نتائج استثنائية",
    },
  ]

  const testimonials = [
    {
      name: "محمد أحمد",
      company: "شركة الفا للتجارة",
      text: "تعاملت مع Source Media لإدارة حملات التسويق الرقمي، وكانت سرعة التنفيذ مذهلة! خلال 24 ساعة فقط كانت الحملة جاهزة وبدأت في تحقيق نتائج.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    },
    {
      name: "سارة خالد",
      company: "مطعم الشرق",
      text: "أكثر ما أعجبني في التعامل مع Source Media هو سرعة الاستجابة وتنفيذ التعديلات. فريق محترف يقدر قيمة الوقت.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    },
    {
      name: "عمر محمود",
      company: "متجر ديجيتال",
      text: "كنت بحاجة إلى إطلاق حملة إعلانية بشكل عاجل، وتمكن فريق Source Media من إنجازها خلال ساعات قليلة وبجودة عالية.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    },
  ]

  const speedMetrics = [
    {
      title: "متوسط وقت الاستجابة",
      value: "30 دقيقة",
      icon: <FaClock className="text-orange-500" size={28} />,
    },
    {
      title: "تسليم المشاريع الصغيرة",
      value: "24 ساعة",
      icon: <FaRocket className="text-orange-500" size={28} />,
    },
    {
      title: "معدل رضا العملاء",
      value: "98%",
      icon: <FaThumbsUp className="text-orange-500" size={28} />,
    },
  ]

  const navItems = [
    { name: "قصتنا", href: "#our-story" },
    { name: "سرعة التنفيذ", href: "#speed-section" },
    { name: "فريقنا", href: "#our-team" },
    { name: "قيمنا", href: "#our-values" },
    { name: "تواصل معنا", href: "#contact" },
  ]


  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navbar */}
      <div className="absolute inset-0 bg-no-repeat bg-cover bg-center z-50">
        <Navbar />
      </div>

      {/* Mobile Navigation Menu */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="bg-orange-500 text-black p-3 rounded-full shadow-lg flex items-center justify-center"
        >
          <ChevronDown className={`transition-transform duration-300 ${showMobileMenu ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-md rounded-xl p-4 w-64 shadow-xl border border-orange-500/30"
            >
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block py-2 px-4 text-white hover:bg-orange-500 hover:text-black rounded-lg transition-colors text-center"
                      onClick={() => setShowMobileMenu(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hero Section with Animated Elements */}
      <div className="h-screen bg-[url('/images/covers/home.jpg')] bg-no-repeat bg-cover bg-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90 z-0"></div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-orange-500"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Speed Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-0.5 bg-orange-500 opacity-70"
              style={{
                top: `${Math.random() * 100}%`,
                left: '-10%',
                width: `${Math.random() * 20 + 10}%`,
              }}
              animate={{
                left: '120%',
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative w-full h-full flex flex-col justify-center items-center text-center p-4 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-orange-500 rounded-full opacity-20 blur-md animate-pulse"></div>
              <FaRocket className="text-orange-500 relative z-10" size={40} />
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            من نحن
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-2 mb-6"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-orange-500"></div>
            <div className="h-2 w-2 rounded-full bg-orange-500"></div>
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-orange-500"></div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-white max-w-2xl mb-8"
            dir="rtl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            نحن وكالة Source Media للدعايا والاعلان نقدم جميع خدمات التسويق عبر الانترنت منذ 2015.
            <span className="text-orange-400 font-bold"> نتميز بالسرعة والإبداع </span>
            في تنفيذ المشاريع وتحقيق نتائج استثنائية لعملائنا.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a href="#our-story">
              <button className="bg-orange-500 text-black px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 cursor-pointer font-bold flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40">
                <BookIcon size={18} />
                <span>قصتنا</span>
              </button>
            </a>
            <a href="#speed-section">
              <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300 cursor-pointer font-bold flex items-center gap-2 shadow-lg shadow-white/20 hover:shadow-white/40">
                <FaBolt className="text-orange-500" />
                <span>سرعة التنفيذ</span>
              </button>
            </a>
            <a href="#our-values">
              <button className="bg-transparent border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-black transition duration-300 cursor-pointer font-bold flex items-center gap-2">
                <HeartIcon size={18} />
                <span>قيمنا</span>
              </button>
            </a>
          </motion.div>


        </div>
      </div>

      {/* Speed Section - NEW */}
      <section id="speed-section" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-orange-500"
              style={{
                height: '2px',
                width: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                سرعة <span className="text-orange-500">التنفيذ</span>
              </h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-transparent to-orange-500"></div>
                <FaBolt className="text-orange-500" size={20} />
                <div className="h-1 w-12 bg-gradient-to-l from-transparent to-orange-500"></div>
              </div>
              <p className="text-xl max-w-3xl mx-auto text-gray-300" dir="rtl">
                نحن نفهم قيمة الوقت في عالم الأعمال، لذلك نلتزم بتقديم خدماتنا بأقصى سرعة ممكنة مع الحفاظ على أعلى
                معايير الجودة
              </p>
            </motion.div>
          </div>

          {/* Speedometer */}
          <div ref={speedometerRef} className="mb-20">
            <div className="max-w-md mx-auto bg-white/5 rounded-xl p-8 backdrop-blur-sm shadow-xl border border-white/10 hover:border-orange-500/30 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6 text-center text-orange-500">سرعة إنجاز المشاريع</h3>

              <div className="relative h-48 w-48 mx-auto mb-6">
                <svg className="w-full h-full" viewBox="0 0 120 120">
                  {/* Background circle */}
                  <circle cx="60" cy="60" r="54" fill="none" stroke="#4B5563" strokeWidth="12" />

                  {/* Progress circle */}
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="url(#speedGradient)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray="339.292"
                    strokeDashoffset={339.292 - (339.292 * speedValue) / 100}
                    transform="rotate(-90 60 60)"
                  />

                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F97316" />
                      <stop offset="100%" stopColor="#FDBA74" />
                    </linearGradient>
                  </defs>

                  {/* Center text */}
                  <text x="60" y="55" textAnchor="middle" fontSize="24" fontWeight="bold" fill="white">
                    {speedValue}%
                  </text>
                  <text x="60" y="75" textAnchor="middle" fontSize="10" fill="#D1D5DB">
                    سرعة الإنجاز
                  </text>
                </svg>
              </div>

              <p className="text-center text-lg" dir="rtl">
                نسبة المشاريع المنجزة قبل الموعد المحدد
              </p>
            </div>
          </div>

          {/* Speed Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {speedMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="bg-white/5 rounded-xl p-6 backdrop-blur-sm shadow-xl border border-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {metric.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{metric.title}</h3>
                <p className="text-3xl font-bold text-orange-500 text-center">{metric.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Process Timeline */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-12 text-orange-500">عملية العمل السريعة</h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500/20 via-orange-500 to-orange-500/20"></div>

              {/* Timeline Items */}
              <div className="space-y-16">
                {[
                  {
                    title: "استلام الطلب",
                    description: "نستلم طلبك ونقوم بتحليله خلال ساعات",
                    icon: <MessageSquare className="w-6 h-6" />,
                  },
                  {
                    title: "تحديد الاحتياجات",
                    description: "نحدد احتياجاتك بدقة ونضع خطة عمل سريعة",
                    icon: <ListChecks className="w-6 h-6" />,
                  },
                  {
                    title: "التنفيذ السريع",
                    description: "ننفذ المشروع بسرعة عالية مع الحفاظ على الجودة",
                    icon: <Zap className="w-6 h-6" />,
                  },
                  {
                    title: "المراجعة والتسليم",
                    description: "نراجع العمل ونسلمه في الوقت المحدد أو قبله",
                    icon: <CheckCircle className="w-6 h-6" />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col md:flex-row items-center"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className={`md:w-5/12 ${index % 2 === 0 ? "md:text-left" : "md:text-right"} mb-4 md:mb-0 order-2 ${index % 2 === 0 ? "md:order-1" : "md:order-3"}`}>
                      {(index % 2 === 0) && (
                        <div className="bg-white/5 p-6 rounded-lg shadow-lg border border-white/10 " dir="rtl">
                          <h4 className="text-xl font-bold text-orange-500">{item.title}</h4>
                          <p className="text-gray-300">{item.description}</p>
                        </div>
                      )}
                    </div>
                    <div className="w-full md:w-2/12 flex justify-center order-1 md:order-2 mb-4 md:mb-0">
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-black rounded-full w-12 h-12 flex items-center justify-center font-bold z-10">
                        {item.icon}
                      </div>
                    </div>
                    <div className={`md:w-5/12 ${index % 2 !== 0 ? "md:text-left" : "md:text-right"} order-3 ${index % 2 !== 0 ? "md:order-1" : "md:order-3"}`}>
                      {(index % 2 !== 0) && (
                        <div className="bg-white/5 p-6 rounded-lg shadow-lg border border-white/10 hover:border-orange-500/30 transition-all duration-300" dir="rtl">
                          <h4 className="text-xl font-bold text-orange-500">{item.title}</h4>
                          <p className="text-gray-300">{item.description}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials about Speed */}
      <section className="py-16 px-4 bg-white/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-10"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">ماذا يقول عملاؤنا عن سرعتنا</h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-orange-500"></div>
              <FaUsers className="text-orange-500" size={20} />
              <div className="h-1 w-12 bg-gradient-to-l from-transparent to-orange-500"></div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 rounded-xl p-8 backdrop-blur-sm shadow-xl border border-white/10 relative"
                  dir="rtl"
                >
                  <div className="absolute -top-6 right-8 text-orange-500 opacity-30">
                    <FaQuoteRight size={50} />
                  </div>

                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="md:w-1/4 flex flex-col items-center">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-orange-500 rounded-full opacity-20 blur-sm"></div>
                        <img
                          src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                          alt={testimonials[activeTestimonial].name}
                          className="w-24 h-24 rounded-full object-cover relative z-10 border-2 border-orange-500"
                        />
                      </div>
                      <h3 className="text-xl font-bold mt-4">{testimonials[activeTestimonial].name}</h3>
                      <p className="text-sm text-gray-400">{testimonials[activeTestimonial].company}</p>
                      <div className="flex mt-2">
                        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                          <FaStar key={i} className="text-orange-500" />
                        ))}
                      </div>
                    </div>

                    <div className="md:w-3/4">
                      <p className="text-xl text-gray-300 leading-relaxed">&quot;{testimonials[activeTestimonial].text}&quot;</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Testimonial Navigation */}
              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeTestimonial === index ? "bg-orange-500 w-8" : "bg-gray-500"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-16 px-4 bg-black relative overflow-hidden" dir="rtl">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-orange-500/20 to-transparent opacity-30"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">قصتنا</h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-orange-500"></div>
              <BookIcon className="text-orange-500" size={20} />
              <div className="h-1 w-12 bg-gradient-to-l from-transparent to-orange-500"></div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <motion.div
              className="md:w-1/2 flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="/images/logo.png"
                  alt="Source Media Agency Story"
                  className="rounded-lg shadow-lg w-72 h-72 relative z-10"
                />
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg mb-6">
                نحن وكالة Source Media للدعايا والاعلان نقدم جميع خدمات التسويق عبر الانترنت منذ 2015 وقد ساهمنا في
                الكثير من الاعمال في مختلف المجالات ووصلنا الي منصب كبير في مجالنا وقمنا بخدمة اكثر من 500 شركة واكثر من
                30000 عميل واستطعنا كسب ثقة كل الشركات والعملاء التي تم العمل معهم بواسطة شركتنا وهذا بشهادة من عملائنا
                بذالك.
              </p>
              <p className="text-lg">
                وهذا لايقتصر علي الشركات المحلية فقط فقذ استطعنا العمل قي اكثر من دولة من دول الخليج ودول اجنبية، ونسعى
                دائماً لتقديم أفضل الخدمات التسويقية المبتكرة التي تساعد عملائنا على النمو وتحقيق أهدافهم.
              </p>
            </motion.div>

          </div>

          {/* Vision & Mission */}
          <motion.div
            className="max-w-7xl mx-auto bg-white/5 rounded-lg p-8 backdrop-blur-sm shadow-xl border border-white/10 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/30 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-500 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-500">رؤيتنا</h3>
                </div>
                <p className="text-lg">
                  أن نكون الوكالة الرائدة في مجال التسويق الرقمي على مستوى المنطقة، ونقدم حلولاً مبتكرة تساعد الشركات
                  على النمو وتحقيق أهدافها في العالم الرقمي.
                </p>
              </div>

              <div className="bg-black/30 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-500 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-500">مهمتنا</h3>
                </div>
                <p className="text-lg">
                  تمكين الشركات والأفراد من تحقيق النجاح في العالم الرقمي من خلال تقديم خدمات تسويقية متكاملة ومبتكرة
                  تلبي احتياجاتهم وتتجاوز توقعاتهم بسرعة وكفاءة عالية.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Milestones */}
          <h3 className="text-3xl font-bold text-center mb-12 text-orange-500">محطات هامة في مسيرتنا</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500/20 via-orange-500 to-orange-500/20 -z-10"></div>

            {/* Milestone Items */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`md:w-5/12 ${index % 2 === 0 ? "md:text-left" : "md:text-right"} mb-4 md:mb-0 order-2 ${index % 2 === 0 ? "md:order-1" : "md:order-3"}`}>
                    {(index % 2 === 0) && (
                      <div className="bg-white/5 p-6 rounded-lg shadow-lg border border-white/10 hover:border-orange-500/30 transition-all duration-300">
                        <h4 className="text-xl font-bold text-orange-500">{milestone.title}</h4>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="w-full md:w-2/12 flex justify-center order-1 md:order-2 mb-4 md:mb-0">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-black rounded-full w-16 h-16 flex items-center justify-center font-bold z-10 shadow-lg shadow-orange-500/20">
                      <span className="text-lg">{milestone.year}</span>
                    </div>
                  </div>
                  <div className={`md:w-5/12 ${index % 2 !== 0 ? "md:text-left" : "md:text-right"} order-3 ${index % 2 !== 0 ? "md:order-1" : "md:order-3"}`}>
                    {(index % 2 !== 0) && (
                      <div className="bg-white/5 p-6 rounded-lg shadow-lg border border-white/10 hover:border-orange-500/30 transition-all duration-300">
                        <h4 className="text-xl font-bold text-orange-500">{milestone.title}</h4>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="our-team" className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">فريقنا</h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-orange-500"></div>
              <FaUsers className="text-orange-500" size={20} />
              <div className="h-1 w-12 bg-gradient-to-l from-transparent to-orange-500"></div>
            </div>
          </div>

          <p className="text-lg text-center max-w-3xl mx-auto mb-12" dir="rtl">
            يتكون فريقنا من خبراء متخصصين في مجالات التسويق الرقمي المختلفة، يجمعهم شغف الإبداع والابتكار وتقديم أفضل
            الحلول لعملائنا بسرعة وكفاءة.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white/5 rounded-lg overflow-hidden shadow-xl border border-white/10 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-orange-500 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <FaUsers className="text-black" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-orange-500 mt-4">{member.name}</h3>
                  <p className="text-gray-300 mb-4">{member.position}</p>
                  <p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{member.bio}</p>
                  <div className="mt-4 pt-4 border-t border-gray-700 flex justify-center gap-4">
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                      <LinkedinIcon size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                      <TwitterIcon size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                      <MailIcon size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section id="our-values" className="py-16 px-4 bg-black" dir="rtl">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">قيمنا</h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-orange-500"></div>
              <HeartIcon className="text-orange-500" size={20} />
              <div className="h-1 w-12 bg-gradient-to-l from-transparent to-orange-500"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white/5 p-6 rounded-lg shadow-lg text-center border border-white/10 hover:border-orange-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)"
                }}
              >
                <div className="flex justify-center mb-4 transform transition-transform duration-300 hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-orange-300 to-orange-400 text-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white"
              style={{
                height: '2px',
                width: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">هل أنت جاهز للعمل معنا؟</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              نحن هنا لمساعدتك في تحقيق أهدافك التسويقية وتنمية أعمالك بسرعة وكفاءة. تواصل معنا اليوم لبدء رحلة النجاح.
            </p>
            <a href="#contact">
              <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition duration-300 font-bold flex items-center gap-2 mx-auto shadow cursor-pointer shadow-black/20 hover:shadow-black/40">
                <FaBolt size={18} />
                <span>تواصل معنا الآن</span>
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <FloatingWhatsAppIcon />
    </div>
  )
}
