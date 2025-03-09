"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ChevronRight, Download, ExternalLink, Heart, MessageSquare, Zap } from "lucide-react"
import { FaFigma, FaInstagram, FaLayerGroup, FaPaintBrush } from "react-icons/fa"
import { CardLoader } from "@/src/components/shared/loaders"
import Footer from "@/src/components/shared/footer"
import FloatingWhatsAppIcon from "@/src/components/shared/floating-whatsapp"
import Navbar from "@/src/components/shared/navbar"

// Design category type
type DesignCategory = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  image: string
}

// Design project type
type DesignProject = {
  id: string
  title: string
  category: string
  description: string
  image: string
  likes: number
  views: number
  featured?: boolean
}

export default function DesignsPage() {
  const [, setActiveCategory] = useState<string>("all")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [, setHoveredProject] = useState<string | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 50, 100])

  // Design categories
  const designCategories: DesignCategory[] = [
    {
      id: "social-media",
      title: "تصاميم السوشيال ميديا",
      description: "تصاميم إبداعية لمنصات التواصل الاجتماعي تجذب الجمهور وتعزز تفاعلهم",
      icon: <FaInstagram className="h-6 w-6" />,
      color: "from-purple-600 to-pink-500",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "logos",
      title: "تصميم الشعارات",
      description: "شعارات فريدة ومميزة تعكس هوية علامتك التجارية وتترك انطباعاً لا يُنسى",
      icon: <FaLayerGroup className="h-6 w-6" />,
      color: "from-blue-600 to-cyan-500",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "branding",
      title: "الهوية البصرية",
      description: "هوية بصرية متكاملة تعزز حضور علامتك التجارية وتميزها عن المنافسين",
      icon: <FaPaintBrush className="h-6 w-6" />,
      color: "from-orange-600 to-amber-500",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "ui-ux",
      title: "تصميم واجهات المستخدم",
      description: "واجهات مستخدم جذابة وسهلة الاستخدام تحسن تجربة المستخدم وتزيد من معدلات التحويل",
      icon: <FaFigma className="h-6 w-6" />,
      color: "from-green-600 to-emerald-500",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "motion-graphics",
      title: "موشن جرافيك",
      description: "تصاميم متحركة تجذب الانتباه وتوصل رسالتك بطريقة مبتكرة وملفتة",
      icon: <Zap className="h-6 w-6" />,
      color: "from-yellow-600 to-amber-500",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "print-design",
      title: "تصاميم المطبوعات",
      description: "تصاميم احترافية للمطبوعات تشمل البروشورات والكتالوجات وبطاقات العمل والمزيد",
      icon: <Download className="h-6 w-6" />,
      color: "from-red-600 to-rose-500",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "packaging",
      title: "تصميم العبوات",
      description: "تصاميم مبتكرة للعبوات والتغليف تجذب العملاء وتعزز قيمة المنتج",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "from-teal-600 to-emerald-500",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "illustrations",
      title: "الرسوم التوضيحية",
      description: "رسوم توضيحية فريدة تضيف لمسة إبداعية وتساعد في توصيل الأفكار بشكل مرئي جذاب",
      icon: <Heart className="h-6 w-6" />,
      color: "from-indigo-600 to-violet-500",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  // Design projects
  const designProjects: DesignProject[] = [
    {
      id: "project-1",
      title: "تصميم هوية بصرية لشركة تقنية",
      category: "branding",
      description: "هوية بصرية متكاملة لشركة تقنية ناشئة تشمل الشعار والألوان والخطوط وتطبيقات الهوية",
      image: "/placeholder.svg?height=600&width=800",
      likes: 245,
      views: 1820,
      featured: true,
    },
    {
      id: "project-2",
      title: "تصاميم انستجرام لمطعم",
      category: "social-media",
      description: "سلسلة من التصاميم الإبداعية لحساب مطعم على انستجرام لعرض الأطباق والعروض",
      image: "/placeholder.svg?height=600&width=800",
      likes: 189,
      views: 1240,
    },
    {
      id: "project-3",
      title: "شعار لشركة عقارية",
      category: "logos",
      description: "تصميم شعار مميز لشركة عقارية يعكس قيم الشركة ويترك انطباعاً قوياً",
      image: "/placeholder.svg?height=600&width=800",
      likes: 312,
      views: 2150,
      featured: true,
    },
    {
      id: "project-4",
      title: "واجهة مستخدم لتطبيق صحي",
      category: "ui-ux",
      description: "تصميم واجهة مستخدم سهلة الاستخدام وجذابة لتطبيق متابعة الصحة واللياقة",
      image: "/placeholder.svg?height=600&width=800",
      likes: 276,
      views: 1980,
    },
    {
      id: "project-5",
      title: "تصاميم سوشيال ميديا لحملة إعلانية",
      category: "social-media",
      description: "مجموعة من التصاميم الإبداعية لحملة إعلانية على منصات التواصل الاجتماعي",
      image: "/placeholder.svg?height=600&width=800",
      likes: 198,
      views: 1560,
    },
    {
      id: "project-6",
      title: "هوية بصرية لمتجر إلكتروني",
      category: "branding",
      description: "هوية بصرية متكاملة لمتجر إلكتروني تشمل الشعار والألوان وتصميم الموقع",
      image: "/placeholder.svg?height=600&width=800",
      likes: 231,
      views: 1790,
    },
  ]
  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
    setIsLoading(true)
    setActiveCategory(categoryId)

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
    }, 800)
  }


  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navbar */}
      <div className="absolute inset-0 bg-no-repeat bg-cover bg-center z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div ref={heroRef} className="h-screen relative overflow-hidden pt-20">
        {/* Creative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Gradient Mesh */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute h-full w-full">
              {/* Animated gradient orbs */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`orb-${i}`}
                  className="absolute rounded-full bg-gradient-to-r from-orange-500 to-amber-300 blur-3xl"
                  style={{
                    width: `${Math.random() * 400 + 200}px`,
                    height: `${Math.random() * 400 + 200}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: 0.15,
                  }}
                  animate={{
                    x: [0, Math.random() * 100 - 50, 0],
                    y: [0, Math.random() * 100 - 50, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: Math.random() * 20 + 15,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Honeycomb Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="honeycomb"
                  width="50"
                  height="86.6"
                  patternUnits="userSpaceOnUse"
                  patternTransform="scale(3)"
                >
                  <path
                    d="M25 0 L50 43.3 L25 86.6 L0 43.3 Z"
                    fill="none"
                    stroke="rgba(249, 115, 22, 0.5)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#honeycomb)" />
            </svg>
          </div>

          {/* Animated Lines */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`line-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent w-full"
                style={{ top: `${i * 10 + Math.random() * 5}%` }}
                animate={{
                  x: ["-100%", "100%"],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: i * 2,
                }}
              />
            ))}
          </div>

          {/* Design Elements */}
          <div className="absolute inset-0">
            {/* Floating Design Tools */}
            <motion.div
              className="absolute top-1/4 left-1/4 bg-orange-500/10 backdrop-blur-sm p-3 rounded-lg border border-orange-500/30"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <FaPaintBrush className="text-orange-500 h-6 w-6" />
            </motion.div>

            <motion.div
              className="absolute top-2/3 right-1/4 bg-orange-500/10 backdrop-blur-sm p-3 rounded-lg border border-orange-500/30"
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
            >
              <FaLayerGroup className="text-orange-500 h-6 w-6" />
            </motion.div>

            <motion.div
              className="absolute bottom-1/4 right-1/3 bg-orange-500/10 backdrop-blur-sm p-3 rounded-lg border border-orange-500/30"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 2,
              }}
            >
              <FaFigma className="text-orange-500 h-6 w-6" />
            </motion.div>

            {/* Decorative circles */}
            {[...Array(24)].map((_, i) => (
              <motion.div
                key={`circle-${i}`}
                className="absolute rounded-full border border-orange-500/60"
                style={{
                  width: `${Math.random() * 100 + 50}px`,
                  height: `${Math.random() * 100 + 50}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: Math.random() * 10 + 15,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="relative w-full h-full flex flex-col justify-center items-center text-center p-4 z-10"
          style={{ opacity, scale, y }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-orange-500 rounded-full opacity-20 blur-md animate-pulse"></div>
              <FaPaintBrush className="text-orange-500 relative z-10" size={50} />
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            تصاميم <span className="text-orange-500">إبداعية</span>
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
            نقدم تصاميم إبداعية تجمع بين الجمال والوظيفة لتعزيز حضور علامتك التجارية وجذب جمهورك المستهدف.
            <span className="text-orange-400 font-bold"> نبتكر تصاميم فريدة </span>
            تعكس هوية علامتك التجارية وتميزها عن المنافسين.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a href="#categories">
              <button className="bg-orange-500 text-black px-8 py-2 rounded-full hover:bg-orange-600 transition duration-300 cursor-pointer font-bold flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40">
                <span>استكشف التصاميم</span>
                <ArrowRight size={18} />
              </button>
            </a>
            <a href="#portfolio">
              <button className="bg-transparent border-2 border-orange-500 text-orange-500 px-8 py-2 rounded-full hover:bg-orange-500 hover:text-black transition duration-300 cursor-pointer font-bold flex items-center gap-2">
                <span>معرض الأعمال</span>
                <ExternalLink size={18} />
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Design Categories Section */}
      <section id="categories" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              خدمات <span className="text-orange-500">التصميم</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-6 mx-auto" />
            <p className="text-xl max-w-3xl mx-auto text-gray-300" dir="rtl">
              نقدم مجموعة متنوعة من خدمات التصميم الإبداعية لتلبية احتياجات عملك
            </p>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {designCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 "
              >
                <div className="relative h-64 overflow-hidden">
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <img
                      src={'/images/covers/designs.jpg'}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-between">
                    <div
                      className={`bg-gradient-to-r bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-105 transition-transform duration-300`}
                    >
                      {category.icon}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{category.description}</p>
                      <Link href={`#portfolio`} onClick={() => handleCategoryChange(category.id)}>
                        <div className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors gap-1 group-hover:gap-2 duration-300">
                          <span>عرض الأعمال</span>
                          <ChevronRight size={16} />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-black/50 relative overflow-hidden">
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
              معرض <span className="text-orange-500">الأعمال</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-6 mx-auto" />
            <p className="text-xl max-w-3xl mx-auto text-gray-300" dir="rtl">
              استعرض أحدث أعمالنا في مجال التصميم
            </p>
          </motion.div>

          {/* Projects Grid */}
          {isLoading ? (
            <CardLoader count={4} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {designProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 ">
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 z-20">
                        <div className="bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                          <Zap size={12} />
                          <span>مميز</span>
                        </div>
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={'/images/covers/designs.jpg'}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      
                    </div>

                    {/* Content */}
                    <div className="p-4 text-right">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                    </div>
                  </div>

                </motion.div>
              ))}
            </div>
          )}

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <button className="bg-transparent border-2 border-orange-500 text-orange-500 px-8 py-2 rounded-full hover:bg-orange-500 hover:text-black transition duration-300 cursor-pointer font-bold flex items-center gap-2 mx-auto">
              <span>عرض المزيد</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Design Process Section */}


      {/* Call to Action */}
      <section className="py-20 bg-black/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-orange-500/20">
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

              <h2 className="text-3xl md:text-4xl font-bold mb-4">هل أنت جاهز لبدء مشروع التصميم الخاص بك؟</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                تواصل معنا اليوم لمناقشة احتياجاتك التصميمية وكيف يمكننا مساعدتك في تحقيق رؤيتك الإبداعية.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact-us">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-black px-8 py-2 rounded-full hover:from-orange-600 hover:to-orange-700 transition duration-300 font-bold flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/20 cursor-pointer">
                    <span>احصل على عرض سعر</span>
                    <ArrowRight size={18} />
                  </button>
                </Link>
                <Link href="/portfolio">
                  <button className="bg-transparent border-2 border-orange-500 text-orange-500 px-8 py-2 rounded-full hover:bg-orange-500 hover:text-black transition duration-300 font-bold flex items-center gap-2 cursor-pointer">
                    <span>استعرض المزيد من الأعمال</span>
                    <ExternalLink size={18} />
                  </button>
                </Link>
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

