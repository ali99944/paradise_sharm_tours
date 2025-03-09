"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ChevronRight, MessageSquare, Globe, ExternalLink, Phone } from "lucide-react"
import { FaRocket, FaBrain, FaFilm, FaCode, FaUtensils } from "react-icons/fa"
import Navbar from "@/src/components/shared/navbar"
import Footer from "@/src/components/shared/footer"
import FloatingWhatsAppIcon from "@/src/components/shared/floating-whatsapp"

// Service type definition
type Service = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  link: string
}

// Project type definition
type Project = {
  id: string
  title: string
  category: string
  description: string
  image: string
  link: string
}

// Testimonial type definition
type Testimonial = {
  id: string
  name: string
  company: string
  text: string
  image: string
  rating: number
}

export default function Home() {
  const [activeService, setActiveService] = useState<string | null>(null)
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"],
//   })

//   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])
//   const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9])
//   const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 50, 100])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  // Services data
  const services: Service[] = [
    {
      id: "programming-solutions",
      title: "اعلانات ممولة",
      description: "خدمات التسويق الذكي والفيديو والمونتاج والبرمجة والتصاميم والتطبيقات لمساعدة عملك على النمو",
      icon: <FaCode className="h-6 w-6" />,
      color: "from-blue-600 to-cyan-500",
      link: "/programming-solutions",
    },
    {
      id: "intelligent-marketing",
      title: "انشاء مواقع",
      description: "استراتيجيات تسويقية ذكية مدعومة بالبيانات والتحليلات لمساعدة عملك على النمو",
      icon: <FaBrain className="h-6 w-6" />,
      color: "from-purple-600 to-pink-500",
      link: "/intelligent-marketing-service",
    },
    {
      id: "followers-increase",
      title: "زيادة متابعين",
      description: "نقدم خدمات تسويقية متكاملة لزيادة متابعين لموقعك الالكتروني وتحسين تواجدك الرقمي",
      icon: <Globe className="h-6 w-6" />,
      color: "from-green-600 to-emerald-500",
      link: "/followers-increase-service",
    },
    {
      id: "video-montage",
      title: "الفيديو والمونتاج",
      description: "خدمات إنتاج فيديو ومونتاج احترافية لتحويل أفكارك إلى محتوى مرئي مؤثر",
      icon: <FaFilm className="h-6 w-6" />,
      color: "from-red-600 to-orange-500",
      link: "/video-montage",
    },
    {
      id: "business-cards",
      title: "بطاقات أعمال رقمية",
      description: "بطاقات أعمال رقمية مع رموز QR لمشاركة معلومات التواصل بطريقة عصرية وفعالة",
      icon: <Globe className="h-6 w-6" />,
      color: "from-green-600 to-emerald-500",
      link: "/business-cards",
    },
    {
      id: "emenu",
      title: "قائمة إلكترونية",
      description: "قائمة إلكترونية متكاملة لمطاعمك مع إمكانية تحويلها إلى تطبيق جوال",
      icon: <FaUtensils className="h-6 w-6" />,
      color: "from-yellow-600 to-orange-500",
      link: "/emenu",
    },
    
  ]

  // Projects data
  const projects: Project[] = [
    {
      id: "project-1",
      title: "تطوير موقع إلكتروني لشركة عقارية",
      category: "حلول برمجية",
      description: "تصميم وتطوير موقع إلكتروني متكامل لشركة عقارية رائدة في المملكة العربية السعودية",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      id: "project-2",
      title: "حملة تسويقية لإطلاق منتج جديد",
      category: "التسويق الذكي",
      description: "استراتيجية تسويقية متكاملة لإطلاق منتج جديد في السوق السعودي حققت نتائج استثنائية",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      id: "project-3",
      title: "فيديو تعريفي لشركة تقنية",
      category: "الفيديو والمونتاج",
      description: "إنتاج فيديو تعريفي احترافي لشركة تقنية رائدة يعرض خدماتها ومنتجاتها بطريقة إبداعية",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      id: "project-4",
      title: "بطاقات أعمال رقمية لفريق مبيعات",
      category: "بطاقات أعمال رقمية",
      description: "تصميم وتطوير بطاقات أعمال رقمية لفريق مبيعات مكون من 50 موظف في شركة كبرى",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
  ]

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: "testimonial-1",
      name: "محمد أحمد",
      company: "شركة الفا للتجارة",
      text: "تعاملت مع Source Media لإدارة حملات التسويق الرقمي، وكانت سرعة التنفيذ مذهلة! خلال 24 ساعة فقط كانت الحملة جاهزة وبدأت في تحقيق نتائج.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      id: "testimonial-2",
      name: "سارة خالد",
      company: "مطعم الشرق",
      text: "أكثر ما أعجبني في التعامل مع Source Media هو سرعة الاستجابة وتنفيذ التعديلات. فريق محترف يقدر قيمة الوقت.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      id: "testimonial-3",
      name: "عمر محمود",
      company: "متجر ديجيتال",
      text: "كنت بحاجة إلى إطلاق حملة إعلانية بشكل عاجل، وتمكن فريق Source Media من إنجازها خلال ساعات قليلة وبجودة عالية.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
  ]

  // Stats data
  const stats = [
    { label: "عميل", value: "+30,000" },
    { label: "شركة", value: "+500" },
    { label: "دول", value: "+10" },
    { label: "سنوات خبرة", value: "+8" },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navbar */}
      <div className="absolute inset-0 bg-no-repeat bg-cover bg-center z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div ref={heroRef} className="h-screen relative overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Grid Lines */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={`h-line-${i}`}
                className="absolute h-px bg-orange-200/80 w-full"
                style={{ top: `${i * 5}%` }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  width: ["0%", "100%", "0%"],
                  left: ["0%", "0%", "100%"],
                }}
                transition={{
                  duration: Math.random() * 8 + 12,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: Math.random() * 5,
                }}
              />
            ))}
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={`v-line-${i}`}
                className="absolute w-px bg-orange-200/80 h-full"
                style={{ left: `${i * 5}%` }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  height: ["0%", "100%", "0%"],
                  top: ["0%", "0%", "100%"],
                }}
                transition={{
                  duration: Math.random() * 8 + 12,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>

          {/* Floating Elements */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`float-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                background: `rgba(249, 115, 22, ${Math.random() * 0.3 + 0.1})`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}

          {/* Glowing orbs */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full bg-orange-500/10 blur-3xl"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative w-full h-full flex flex-col justify-center items-center text-center p-4 z-10"
        //   style={{ opacity, scale, y }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-orange-500 rounded-full opacity-20 blur-md animate-pulse"></div>
              <FaRocket className="text-orange-500 relative z-10" size={50} />
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Source <span className="text-orange-500">Media</span> Agency
          </motion.h1>

          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-6 mx-auto"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "6rem", opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-8"
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
            <a href="#services">
              <button className="bg-orange-500 text-black px-8 py-2 rounded-full hover:bg-orange-600 transition duration-300 cursor-pointer font-bold flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40">
                <span>خدماتنا</span>
                <ArrowRight size={18} />
              </button>
            </a>
            <a href="#projects">
              <button className="bg-transparent border-2 border-orange-500 text-orange-500 px-8 py-2 rounded-full hover:bg-orange-500 hover:text-black transition duration-300 cursor-pointer font-bold flex items-center gap-2">
                <span>أعمالنا</span>
                <ExternalLink size={18} />
              </button>
            </a>
          </motion.div>

          {/* Animated Stats Counter */}
          <motion.div
            className="absolute bottom-20 left-0 right-0 flex justify-center gap-8 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-orange-500"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: index,
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>


        </motion.div>
      </div>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-20 relative overflow-hidden">
        {/* Background Elements */}


        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              خدماتنا <span className="text-orange-500">المتميزة</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-6 mx-auto" />
            <p className="text-xl max-w-3xl mx-auto text-gray-300" dir="rtl">
              نقدم مجموعة متكاملة من الخدمات الإبداعية المصممة خصيصًا لتلبية احتياجات عملك وتحقيق أهدافك
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <Link href={service.link}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-white/10 group-hover:border-white/30 transition-all duration-300 relative z-10 h-full">
                    <div className={`bg-gradient-to-r ${service.color} p-2 flex items-center justify-between`}>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="bg-white/20 p-2 rounded-full">{service.icon}</div>
                    </div>

                    <div className="p-6 relative">
                      <p className="text-gray-300 mb-6 text-right" dir="rtl">
                        {service.description}
                      </p>

                      <div className="flex justify-end">
                        <div className="flex items-center text-orange-500 hover:text-orange-400 transition-colors gap-1 group-hover:gap-2 duration-300">
                          <span>المزيد</span>
                          <ChevronRight size={16} />
                        </div>
                      </div>
                    </div>

                    {/* Hover Animation */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                      initial={{ width: 0 }}
                      animate={{
                        width: activeService === service.id ? "100%" : "0%",
                        opacity: activeService === service.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </Link>

                {/* Animated Glow Effect on Hover */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 animate-tilt`}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Brief Section */}
      <section className="py-20 bg-black/50 relative overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">
        <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-right text-orange-500" dir="rtl">
                من نحن
              </h2>
              <p className="text-lg mb-6 text-right" dir="rtl">
                نحن وكالة Source Media للدعايا والاعلان نقدم جميع خدمات التسويق عبر الانترنت منذ 2015 وقد ساهمنا في
                الكثير من الاعمال في مختلف المجالات ووصلنا الي منصب كبير في مجالنا وقمنا بخدمة اكثر من 500 شركة واكثر من
                30000 عميل واستطعنا كسب ثقة كل الشركات والعملاء التي تم العمل معهم بواسطة شركتنا وهذا بشهادة من عملائنا
                بذالك.
              </p>
              <p className="text-lg text-right" dir="rtl">
                وهذا لايقتصر علي الشركات المحلية فقط فقذ استطعنا العمل قي اكثر من دولة من دول الخليج ودول اجنبية، ونسعى
                دائماً لتقديم أفضل الخدمات التسويقية المبتكرة التي تساعد عملائنا على النمو وتحقيق أهدافهم.
              </p>

              <div className="mt-8 flex justify-end">
                <Link href="/about-us">
                  <button className="bg-orange-500 text-black px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 cursor-pointer font-bold flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40">
                    <span>اقرأ المزيد عنا</span>
                  </button>
                </Link>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              أحدث <span className="text-orange-500">أعمالنا</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-6 mx-auto" />
            <p className="text-xl max-w-3xl mx-auto text-gray-300" dir="rtl">
              نماذج من أعمالنا المميزة التي نفخر بها ونعتز بثقة عملائنا
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={project.link}>
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                        {project.category}
                      </div>
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-orange-500 rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                        <ExternalLink className="h-6 w-6 text-black" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/projects">
              <button className="bg-transparent border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full hover:bg-orange-500 hover:text-black transition duration-300 cursor-pointer font-bold flex items-center gap-2 mx-auto">
                <span>عرض جميع الأعمال</span>
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              آراء <span className="text-orange-500">عملائنا</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-6 mx-auto" />
            <p className="text-xl max-w-3xl mx-auto text-gray-300" dir="rtl">
              نفخر بثقة عملائنا ونسعد بمشاركة تجاربهم معنا
            </p>
          </motion.div>

          {/* Testimonials Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <AnimatePresence mode="wait">
                {testimonials.map(
                  (testimonial, index) =>
                    activeTestimonial === index && (
                      <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/10 relative"
                        dir="rtl"
                      >
                        <div className="absolute -top-6 right-8 text-orange-500 opacity-30">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>

                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                          <div className="md:w-1/4 flex flex-col items-center">
                            <div className="relative">
                              <div className="absolute -inset-1 bg-orange-500 rounded-full opacity-20 blur-sm"></div>
                              <img
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                className="w-24 h-24 rounded-full object-cover relative z-10 border-2 border-orange-500"
                              />
                            </div>
                            <h3 className="text-xl font-bold mt-4">{testimonial.name}</h3>
                            <p className="text-sm text-gray-400">{testimonial.company}</p>
                            <div className="flex mt-2">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <svg
                                  key={i}
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-orange-500"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>

                          <div className="md:w-3/4">
                            <p className="text-xl text-gray-300 leading-relaxed">&quot;{testimonial.text}&quot;</p>
                          </div>
                        </div>
                      </motion.div>
                    ),
                )}
              </AnimatePresence>

              {/* Navigation Dots */}
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

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-orange-500/20" />

          {/* Animated Particles */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
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
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-md rounded-2xl p-10 border border-orange-500/20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-block bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-full mb-6">
                <MessageSquare className="text-black" size={24} />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">هل أنت جاهز لبدء مشروعك معنا؟</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                تواصل معنا اليوم لمناقشة مشروعك وكيف يمكننا مساعدتك في تحقيق أهدافك. نحن هنا لتحويل أفكارك إلى واقع.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact-us">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-black px-8 py-4 rounded-full hover:from-orange-600 hover:to-orange-700 transition duration-300 font-bold flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transform hover:-translate-y-1">
                    <span>تواصل معنا الآن</span>
                    <ArrowRight size={18} />
                  </button>
                </Link>
                <a href="https://wa.me/+201278183718">
                  <button className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition duration-300 font-bold flex items-center gap-2 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transform hover:-translate-y-1">
                    <span>واتساب</span>
                    <Phone size={18} />
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <FloatingWhatsAppIcon />
    </div>
  )
}

