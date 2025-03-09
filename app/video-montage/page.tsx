"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Film,
  Camera,
  Edit,
  Play,
  ArrowRight,
  CheckCircle,
  Zap,
  Tv,
  Scissors,
  Volume2,
  Monitor,
  Instagram,
} from "lucide-react"
import { FaFilm, FaPlay } from "react-icons/fa"
import Footer from "@/src/components/shared/footer"
import Navbar from "@/src/components/shared/navbar"

// Service type definition
type VideoService = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  image: string
}

// Portfolio item type
type PortfolioItem = {
  id: string
  title: string
  category: string
  description: string
  thumbnail: string
  videoUrl?: string
}

export default function VideoMontage() {
  const [, setActiveVideo] = useState<PortfolioItem | null>(null)


  // Open video modal
  const openVideo = (item: PortfolioItem) => {
    setActiveVideo(item)
    document.body.style.overflow = 'hidden'
  }

  // Video services data
  const services: VideoService[] = [
    {
      id: "corporate-videos",
      title: "فيديوهات الشركات",
      description: "فيديوهات احترافية تعرض هوية شركتك وخدماتها ومنتجاتها بطريقة جذابة ومؤثرة",
      icon: <Monitor className="h-6 w-6 text-white" />,
      features: [
        "فيديوهات تعريفية للشركة",
        "عرض المنتجات والخدمات",
        "مقابلات مع فريق العمل",
        "جولات افتراضية في مقر الشركة",
        "فيديوهات تدريبية للموظفين",
        "فيديوهات للفعاليات والمؤتمرات"
      ],
      image: "/placeholder.svg?height=600&width=800"
    },
    {
      id: "social-media-videos",
      title: "فيديوهات السوشيال ميديا",
      description: "فيديوهات قصيرة وجذابة مصممة خصيصًا لمنصات التواصل الاجتماعي لزيادة التفاعل والوصول",
      icon: <Instagram className="h-6 w-6 text-white" />,
      features: [
        "فيديوهات قصيرة لـ Instagram و TikTok",
        "فيديوهات إعلانية للمنتجات",
        "فيديوهات تعليمية قصيرة",
        "فيديوهات الأسئلة والأجوبة",
        "فيديوهات المراجعات والشهادات",
        "فيديوهات الترويج للعروض والمسابقات"
      ],
      image: "/placeholder.svg?height=600&width=800"
    },
    {
      id: "advertising-videos",
      title: "فيديوهات إعلانية",
      description: "فيديوهات إعلانية مبتكرة تجذب انتباه الجمهور وتحفزهم على اتخاذ إجراء",
      icon: <Tv className="h-6 w-6 text-white" />,
      features: [
        "إعلانات تلفزيونية",
        "إعلانات للمنصات الرقمية",
        "إعلانات المنتجات والخدمات",
        "إعلانات العروض الترويجية",
        "إعلانات الفعاليات والمناسبات",
        "إعلانات توعوية"
      ],
      image: "/placeholder.svg?height=600&width=800"
    },
    {
      id: "motion-graphics",
      title: "موشن جرافيك",
      description: "تصميمات موشن جرافيك مبتكرة لتوضيح الأفكار المعقدة بطريقة بسيطة وجذابة",
      icon: <Film className="h-6 w-6 text-white" />,
      features: [
        "فيديوهات توضيحية للمنتجات",
        "فيديوهات تعليمية وشرح المفاهيم",
        "مقدمات وخواتم للفيديوهات",
        "إنفوجرافيك متحرك",
        "شعارات متحركة",
        "عناصر رسومية متحركة للفيديوهات"
      ],
      image: "/placeholder.svg?height=600&width=800"
    },
    {
      id: "video-editing",
      title: "مونتاج الفيديو",
      description: "خدمات مونتاج احترافية لتحويل اللقطات الخام إلى قصة مترابطة وجذابة",
      icon: <Scissors className="h-6 w-6 text-white" />,
      features: [
        "مونتاج الفيديوهات الاحترافية",
        "تصحيح الألوان وتحسين الصورة",
        "إضافة المؤثرات البصرية",
        "دمج الصوت والموسيقى",
        "إضافة النصوص والعناوين",
        "تحويل الفيديو إلى صيغ مختلفة"
      ],
      image: "/placeholder.svg?height=600&width=800"
    },
    {
      id: "aerial-filming",
      title: "تصوير جوي",
      description: "تصوير جوي احترافي باستخدام الدرونز لإضافة منظور فريد ومذهل لمشاريعك",
      icon: <Camera className="h-6 w-6 text-white" />,
      features: [
        "تصوير المباني والعقارات من الجو",
        "تصوير الفعاليات والمناسبات",
        "تصوير المناظر الطبيعية",
        "تصوير فيديوهات ترويجية للمدن",
        "تصوير المشاريع الإنشائية",
        "تصوير رياضي من زوايا مختلفة"
      ],
      image: "/placeholder.svg?height=600&width=800"
    }
  ]

  // Portfolio data
  const portfolioItems: PortfolioItem[] = [
    {
      id: "portfolio-1",
      title: "فيديو تعريفي لشركة تقنية",
      category: "فيديوهات الشركات",
      description: "فيديو تعريفي يعرض خدمات ومنتجات شركة تقنية رائدة في مجال البرمجيات",
      thumbnail: "/images/covers/video.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "portfolio-2",
      title: "إعلان تلفزيوني لمنتج غذائي",
      category: "فيديوهات إعلانية",
      description: "إعلان تلفزيوني مبتكر لمنتج غذائي جديد يستهدف الأسر السعودية",
      thumbnail: "/images/covers/video.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "portfolio-3",
      title: "فيديو موشن جرافيك توضيحي",
      category: "موشن جرافيك",
      description: "فيديو موشن جرافيك يشرح آلية عمل تطبيق جديد بطريقة مبسطة وجذابة",
      thumbnail: "/images/covers/video.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "portfolio-4",
      title: "فيديو ترويجي لمنتجع سياحي",
      category: "تصوير جوي",
      description: "فيديو ترويجي لمنتجع سياحي فاخر يتضمن لقطات جوية مذهلة للمنتجع والشاطئ",
      thumbnail: "/images/covers/video.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "portfolio-5",
      title: "سلسلة فيديوهات قصيرة لمنتج جديد",
      category: "فيديوهات السوشيال ميديا",
      description: "سلسلة فيديوهات قصيرة وجذابة لإطلاق منتج جديد على منصات التواصل الاجتماعي",
      thumbnail: "/images/covers/video.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "portfolio-6",
      title: "فيديو تقديمي لمؤتمر تقني",
      category: "مونتاج الفيديو",
      description: "فيديو تقديمي احترافي لمؤتمر تقني سنوي يجمع بين لقطات الفعالية والمقابلات",
      thumbnail: "/images/covers/video.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ]

  // Production process steps
  const productionSteps = [
    {
      title: "التخطيط والإعداد",
      description: "نحدد أهدافك ونطور فكرة الفيديو وكتابة السيناريو وإعداد خطة التصوير",
      icon: <Edit className="w-6 h-6" />
    },
    {
      title: "التصوير",
      description: "نقوم بتصوير المشاهد باستخدام معدات احترافية وفريق متخصص",
      icon: <Camera className="w-6 h-6" />
    },
    {
      title: "المونتاج",
      description: "نقوم بتجميع اللقطات وتحريرها وإضافة المؤثرات البصرية والصوتية",
      icon: <Scissors className="w-6 h-6" />
    },
    {
      title: "الصوت والموسيقى",
      description: "نضيف التعليق الصوتي والموسيقى والمؤثرات الصوتية المناسبة",
      icon: <Volume2 className="w-6 h-6" />
    },
    {
      title: "المراجعة والتعديل",
      description: "نراجع الفيديو معك ونجري التعديلات اللازمة حتى الوصول للنتيجة المطلوبة",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "التسليم النهائي",
      description: "نسلم الفيديو بالصيغة المطلوبة وبجودة عالية جاهزًا للنشر",
      icon: <Zap className="w-6 h-6" />
    }
  ]

    
  

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navbar */}
      <div className="absolute inset-0 bg-no-repeat bg-cover bg-center z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="h-screen bg-black relative overflow-hidden w-full">
        {/* Creative Background Elements */}
        <div className="absolute inset-0 overflow-hidden w-full">
          {/* Film Strip Elements */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-20 w-full bg-white/5 flex items-center justify-around"
              style={{
                top: `${i * 10}%`,
                left: 0,
                // transform: ' translateX(-10%)',
              }}
            >
              {[...Array(14)].map((_, j) => (
                <div key={j} className="h-12 w-16 bg-black/50 rounded-sm border border-white/10" />
              ))}
            </motion.div>
          ))}
          
          {/* Floating Camera Elements
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`camera-${i}`}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 30 - 15],
                rotate: [0, Math.random() * 20 - 10],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <div className="bg-orange-500/10 p-3 rounded-full backdrop-blur-sm border border-orange-500/20">
                {[<LucideCamera key={i} />, <Film key={i} />, <Video key={i} />, <Edit key={i} />][Math.floor(Math.random() * 4)]}
              </div>
            </motion.div>
          ))} */}
          
          {/* Glowing orbs */}
          {/* {[...Array(5)].map((_, i) => (
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
          ))} */}
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
              <FaFilm className="text-orange-500 relative z-10" size={50} />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            الفيديو <span className="text-orange-500">والمونتاج</span>
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
            نقدم خدمات إنتاج فيديو ومونتاج احترافية لتحويل أفكارك إلى محتوى مرئي مؤثر يحكي قصتك ويعزز تواجدك الرقمي.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a href="#services">
              <button className="bg-orange-500 text-black px-8 py-2 rounded-full hover:bg-orange-600 transition duration-300 cursor-pointer font-bold flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40">
                <span>استكشف خدماتنا</span>
                <ArrowRight size={18} />
              </button>
            </a>
            <a href="#portfolio">
              <button className="bg-transparent border-2 border-orange-500 text-orange-500 px-8 py-2 rounded-full hover:bg-orange-500 hover:text-black transition duration-300 cursor-pointer font-bold flex items-center gap-2">
                <span>معرض أعمالنا</span>
                <Play size={18} />
              </button>
            </a>
          </motion.div>
          
          {/* Animated Play Button */}
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <motion.div 
              className="relative w-16 h-16 flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-md" />
              <div className="absolute inset-0 border-2 border-orange-500 rounded-full" />
              <FaPlay className="text-orange-500 relative z-10 ml-1" size={20} />
            </motion.div>
          </motion.div>
          
        
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 relative overflow-hidden">

        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              خدمات الفيديو <span className="text-orange-500">والمونتاج</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-6 mx-auto" />
            <p className="text-xl max-w-3xl mx-auto text-gray-300" dir="rtl">
              نقدم مجموعة متكاملة من خدمات إنتاج الفيديو والمونتاج لتلبية احتياجات عملك وتحقيق رؤيتك
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Service Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-white/10 transition-all duration-300 relative z-10 h-full flex flex-col">
                  {/* Service Image */}
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={service.image || "/placeholder.svg"} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-4 right-4 bg-orange-500 p-3 rounded-full">
                      {service.icon}
                    </div>
                    
                    <div className="absolute bottom-4 right-4">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-gray-300 mb-4 text-right" dir="rtl">{service.description}</p>
                    
                    
    
                  </div>
                </div>
                
                {/* Animated Glow Effect on Hover */}
                {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 animate-tilt"></div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process Section */}
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
              عملية <span className="text-orange-500">الإنتاج</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-6 mx-auto" />
            <p className="text-xl max-w-3xl mx-auto text-gray-300" dir="rtl">
              نتبع منهجية عمل احترافية ومنظمة لضمان تقديم محتوى فيديو عالي الجودة يلبي توقعاتك
            </p>
          </motion.div>
          
          {/* Process Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500/20 via-orange-500 to-orange-500/20 z-0" />
            
            <div className="space-y-24">
              {productionSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Center Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-black rounded-full w-16 h-16 flex items-center justify-center shadow-lg shadow-orange-500/20">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content - Alternating Sides */}
                  <div className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'} ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                      <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-orange-500/30 transition-all duration-300" dir="rtl">
                        <h3 className="text-2xl font-bold text-orange-500 mb-2">{step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              معرض <span className="text-orange-500">أعمالنا</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-6 mx-auto" />
            <p className="text-xl max-w-3xl mx-auto text-gray-300" dir="rtl">
              نماذج من أعمالنا السابقة في مجال إنتاج الفيديو والمونتاج
            </p>
          </motion.div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => openVideo(item)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={item.thumbnail || "/placeholder.svg"} 
                    alt={item.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-orange-500 rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-black" />
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      {item.category}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      <Footer />
    </div>)
}
