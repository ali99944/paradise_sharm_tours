"use client"

import { motion } from "framer-motion"

import { Code, Globe, QrCode, Layout, FileText, ShoppingCart, Coffee, ArrowRight, Zap, MessageSquare } from 'lucide-react'
import { FaRocket, FaCode } from "react-icons/fa"
import Footer from "@/src/components/shared/footer"
import Navbar from "@/src/components/shared/navbar"
import FloatingWhatsAppIcon from "@/src/components/shared/floating-whatsapp"

// Solution type definition
type Solution = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  image: string
}

export default function ProgrammingSolutions() {

  // Solutions data
  const solutions: Solution[] = [
    {
      id: "websites",
      title: "مواقع الويب",
      description: "مواقع ويب احترافية مخصصة لتلبية احتياجات عملك وتعزيز تواجدك الرقمي",
      icon: <Globe className="h-6 w-6 text-orange-500" />,
      features: [
        "تصميم متجاوب يعمل على جميع الأجهزة",
        "تحسين محركات البحث (SEO)",
        "لوحة تحكم سهلة الاستخدام",
        "تكامل مع وسائل التواصل الاجتماعي",
        "تحليلات وتقارير أداء الموقع",
        "دعم فني مستمر"
      ],
      image: "/images/covers/designs.jpg",
    },
    {
      id: "landing-pages",
      title: "صفحات الهبوط",
      description: "صفحات هبوط مخصصة لحملاتك التسويقية لزيادة معدلات التحويل وجذب العملاء",
      icon: <Layout className="h-6 w-6 text-orange-500" />,
      features: [
        "تصميم جذاب يركز على التحويل",
        "نماذج اتصال وحجز مدمجة",
        "تحسين لمعدلات التحويل",
        "سرعة تحميل عالية",
        "متوافقة مع الجوال",
        "تتبع وتحليل أداء الصفحة"
      ],
      image: "/images/covers/designs.jpg",
    },
    {
      id: "e-menus",
      title: "قوائم طعام إلكترونية",
      description: "قوائم طعام رقمية مع رموز QR لتحسين تجربة العملاء في المطاعم والمقاهي",
      icon: <Coffee className="h-6 w-6 text-orange-500" />,
      features: [
        "تصميم جذاب وسهل الاستخدام",
        "رموز QR سهلة المسح",
        "تحديث فوري للأسعار والأصناف",
        "صور عالية الجودة للأطباق",
        "خيارات تصفية وبحث متقدمة",
        "متوافقة مع جميع الأجهزة"
      ],
      image: "/images/covers/designs.jpg",
    },
    {
      id: "business-cards",
      title: "بطاقات أعمال رقمية",
      description: "بطاقات أعمال رقمية مع رموز QR لمشاركة معلومات التواصل بطريقة عصرية وفعالة",
      icon: <QrCode className="h-6 w-6 text-orange-500" />,
      features: [
        "تصميم احترافي قابل للتخصيص",
        "رمز QR سهل المسح",
        "مشاركة سهلة عبر الرسائل والبريد الإلكتروني",
        "تحديث المعلومات بشكل فوري",
        "إحصائيات حول عدد مرات المسح",
        "تكامل مع جهات الاتصال في الهاتف"
      ],
      image: "/images/covers/designs.jpg",
    },
    {
      id: "portfolios",
      title: "معارض الأعمال",
      description: "معارض أعمال احترافية لعرض مشاريعك وخبراتك بطريقة جذابة ومؤثرة",
      icon: <FileText className="h-6 w-6 text-orange-500" />,
      features: [
        "تصميم احترافي يعكس هويتك",
        "عرض المشاريع بطريقة جذابة",
        "سهولة التنقل والتصفح",
        "متوافق مع جميع الأجهزة",
        "تكامل مع وسائل التواصل الاجتماعي",
        "نماذج تواصل مدمجة"
      ],
      image: "/images/covers/designs.jpg",
    },
    {
      id: "e-commerce",
      title: "متاجر إلكترونية",
      description: "متاجر إلكترونية متكاملة لبيع منتجاتك وخدماتك عبر الإنترنت بكل سهولة",
      icon: <ShoppingCart className="h-6 w-6 text-orange-500" />,
      features: [
        "تصميم جذاب وسهل الاستخدام",
        "نظام إدارة منتجات متكامل",
        "بوابات دفع آمنة ومتعددة",
        "نظام إدارة المخزون",
        "تقارير وإحصائيات المبيعات",
        "تكامل مع وسائل التواصل الاجتماعي"
      ],
      image: "/images/covers/designs.jpg",
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navbar */}
      <div className="absolute inset-0 bg-no-repeat bg-cover bg-center z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="h-screen bg-black relative overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated code lines */}
          
          {/* Floating code symbols */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`symbol-${i}`}
              className="absolute text-orange-500/20 font-mono"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 14 + 10}px`,
              }}
              animate={{
                y: [0, Math.random() * 50 - 25],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {["</>", "{}", "[]", "//", "**", "==", "=>"][Math.floor(Math.random() * 7)]}
            </motion.div>
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
              <FaCode className="text-orange-500 relative z-10" size={50} />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            حلولنا البرمجية
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
            نقدم مجموعة متكاملة من الحلول البرمجية المبتكرة لتلبية احتياجات عملك وتعزيز تواجدك الرقمي. 
            من المواقع الإلكترونية إلى تطبيقات الجوال، نحن هنا لتحويل أفكارك إلى واقع رقمي متميز.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a href="#solutions">
              <button className="bg-orange-500 text-black px-8 py-4 rounded-full hover:bg-orange-600 transition duration-300 cursor-pointer font-bold flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40">
                <span>استكشف حلولنا</span>
                <ArrowRight size={18} />
              </button>
            </a>
          </motion.div>
          

        </div>
      </div>

      {/* Creative Solutions Section */}
      <section id="solutions" className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-orange-500/5"
              style={{
                height: '1px',
                width: '100%',
                top: `${i * 10}%`,
                left: 0,
                transform: 'rotate(-5deg)',
              }}
            />
          ))}
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-orange-500/5 to-transparent opacity-50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              حلولنا <span className="text-orange-500">البرمجية</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-6 mx-auto" />
            <p className="text-xl max-w-3xl mx-auto text-gray-300" dir="rtl">
              نقدم مجموعة متنوعة من الحلول البرمجية المصممة خصيصًا لتلبية احتياجات عملك وتحقيق أهدافك
            </p>
          </motion.div>

          {/* Creative Hexagonal Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Hexagon Shape with Gradient Border */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-1" /> */}
                
                <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-white/10 transition-all duration-300 relative z-10">
                  {/* Solution Image with Overlay */}
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={solution.image || "/placeholder.svg"} 
                      alt={solution.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full border border-orange-500/30 group-hover:border-orange-500 transition-all duration-300">
                      {solution.icon}
                    </div>

                    {/* Title On Image */}
                    <div className="absolute bottom-4 left-4 text-lg font-bold text-white bg-black/50 px-2 py-1 rounded">
                      {solution.title}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 relative">
                    <p className="text-gray-300 mb-4 text-right" dir="rtl">{solution.description}</p>
                  </div>
                </div>
                
                {/* Animated Glow Effect on Hover */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Showcase Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Shapes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`shape-${i}`}
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
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div 
                className="w-24 h-24 md:w-32 md:h-32 bg-orange-500/5 backdrop-blur-sm rounded-lg border border-orange-500/10"
                style={{ transform: `rotate(${Math.random() * 45}deg)` }}
              />
            </motion.div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                نحول <span className="text-orange-500">أفكارك</span> إلى <span className="text-orange-500">واقع</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-6 mx-auto" />
              <p className="text-xl text-gray-300" dir="rtl">
                فريقنا من المطورين المحترفين جاهز لتحويل رؤيتك إلى حلول برمجية مبتكرة
              </p>
            </motion.div>
            
            {/* Creative Process Flow */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500/20 via-orange-500 to-orange-500/20 z-0" />
              
              <div className="space-y-24">
                {[
                  {
                    title: "استماع وفهم",
                    description: "نستمع إلى احتياجاتك ونفهم متطلبات مشروعك بدقة",
                    icon: <MessageSquare className="w-6 h-6" />,
                    color: "from-orange-500 to-orange-600",
                  },
                  {
                    title: "تصميم وإبداع",
                    description: "نصمم حلولًا مبتكرة تلبي احتياجاتك وتتجاوز توقعاتك",
                    icon: <Layout className="w-6 h-6" />,
                    color: "from-orange-600 to-orange-500",
                  },
                  {
                    title: "تطوير وبرمجة",
                    description: "نطور حلولًا برمجية عالية الجودة باستخدام أحدث التقنيات",
                    icon: <Code className="w-6 h-6" />,
                    color: "from-orange-500 to-orange-400",
                  },
                  {
                    title: "إطلاق ودعم",
                    description: "نطلق مشروعك ونقدم الدعم المستمر لضمان نجاحه",
                    icon: <Zap className="w-6 h-6" />,
                    color: "from-orange-400 to-orange-500",
                  },
                ].map((step, index) => (
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
                      <div className={`bg-gradient-to-br ${step.color} text-black rounded-full w-16 h-16 flex items-center justify-center shadow-lg shadow-orange-500/20`}>
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
        </div>
      </section>

      {/* Creative Call to Action */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 to-orange-400/20" />
          
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
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Speed Lines */}
          {/* {[...Array(15)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-0.5 bg-orange-500 opacity-30"
              style={{
                top: `${Math.random() * 100}%`,
                left: "-10%",
                width: `${Math.random() * 20 + 10}%`,
              }}
              animate={{
                left: "120%",
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: Math.random() * 2,
              }}
            />
          ))} */}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto bg-black/50 backdrop-blur-md rounded-2xl p-10 border border-orange-500/20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-block bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-full mb-6">
                <FaRocket className="text-black" size={24} />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">هل أنت جاهز لتحويل فكرتك إلى واقع؟</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                نحن هنا لمساعدتك في تحقيق رؤيتك وتطوير حلول برمجية تلبي احتياجاتك وتتجاوز توقعاتك. تواصل معنا اليوم لبدء رحلة النجاح.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact-us">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-black px-8 py-2 rounded-full hover:from-orange-600 hover:to-orange-700 transition duration-300 font-bold flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/20">
                    <span>تواصل معنا الآن</span>
                    <ArrowRight size={18} />
                  </button>
                </a>
                <a href="https://wa.me/+201278183718">
                  <button className="bg-green-500 text-white px-8 py-2 rounded-full hover:bg-green-600 transition duration-300 font-bold flex items-center gap-2 shadow-lg shadow-green-500/20 hover:shadow-green-500/20">
                    <span>واتساب</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
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
