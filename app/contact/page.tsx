"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle, ChevronDown, ChevronUp, MessageCircle } from "lucide-react"
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa"
import Footer from "@/src/components/shared/footer"
import FloatingWhatsAppIcon from "@/src/components/shared/floating-whatsapp"
import Navbar from "@/src/components/shared/navbar"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ContactUs() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      // Reset form after success
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const faqs = [
    {
      question: "ما هي خدمات التسويق التي تقدمونها؟",
      answer:
        "نقدم مجموعة واسعة من خدمات التسويق الرقمي بما في ذلك إدارة وسائل التواصل الاجتماعي، الإعلانات الممولة، تصميم المواقع، تصميم الهوية البصرية، إنتاج الفيديو، وخدمات التسويق الذكي.",
    },
    {
      question: "كيف يمكنني البدء في العمل معكم؟",
      answer:
        "يمكنك التواصل معنا من خلال نموذج الاتصال في هذه الصفحة، أو الاتصال بنا مباشرة عبر الهاتف أو البريد الإلكتروني. سنقوم بترتيب اجتماع لمناقشة احتياجاتك وتقديم خطة تسويقية مخصصة لك.",
    },
    {
      question: "هل تقدمون خدماتكم خارج المملكة العربية السعودية؟",
      answer:
        "نعم، نحن نقدم خدماتنا في جميع دول الخليج وبعض الدول الأجنبية. لدينا خبرة في العمل مع عملاء من مختلف البلدان والثقافات.",
    },
    {
      question: "كم تستغرق مدة تنفيذ حملة تسويقية؟",
      answer:
        "تختلف مدة تنفيذ الحملات التسويقية حسب نوعها وحجمها. عادة ما تستغرق الحملات البسيطة من أسبوع إلى أسبوعين، بينما قد تستغرق الحملات الأكبر والأكثر تعقيدًا من شهر إلى ثلاثة أشهر.",
    },
    {
      question: "هل تقدمون تقارير أداء للحملات التسويقية؟",
      answer:
        "نعم، نقدم تقارير أداء دورية مفصلة لجميع الحملات التسويقية. تتضمن هذه التقارير مؤشرات الأداء الرئيسية والنتائج المحققة والتوصيات للتحسين المستمر.",
    },
  ]
  const heroRef = useRef<HTMLDivElement>(null)


    // Particle animation for hero section
    const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number; speed: number; opacity: number }>
  >([])

  useEffect(() => {
    if (heroRef.current) {
      const width = heroRef.current.offsetWidth
      const height = heroRef.current.offsetHeight

      const newParticles = Array.from({ length: 100 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
      }))

      setParticles(newParticles)
    }

    return () => {
      setParticles([])
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white"
      ref={heroRef}
    >
      {/* Navbar */}
      <div className="absolute inset-0 z-10 bg-no-repeat bg-cover bg-center">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div
        className="relative h-screen overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-background">
          {/* Animated Particles */}
          {particles.map((particle, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-orange-500"
              style={{
                width: particle.size,
                height: particle.size,
                opacity: particle.opacity,
                x: particle.x,
                y: particle.y,
              }}
              animate={{
                y: [particle.y, particle.y - 100 * particle.speed],
                opacity: [particle.opacity, 0],
              }}
              transition={{
                duration: 5 / particle.speed,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          ))}

          {/* Grid Pattern */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={`row-${i}`}
                className="w-full h-px bg-orange-500/50"
                style={{ top: `${(i + 1) * (100 / 24)}%`, position: "absolute", left: 0, right: 0 }}
              />
            ))}
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={`col-${i}`}
                className="h-full w-px bg-orange-500/50"
                style={{ left: `${(i + 1) * (100 / 24)}%`, position: "absolute", top: 0, bottom: 0 }}
              />
            ))}
          </div>


          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="w-64 h-64 rounded-full border border-orange-500/20 opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 180, 270, 360],
                borderColor: ["rgba(249, 115, 22, 0.2)", "rgba(249, 115, 22, 0.3)", "rgba(249, 115, 22, 0.2)"],
              }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center mb-6">
              <motion.div
                className="relative"
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="absolute -inset-1 bg-orange-500 rounded-full opacity-20 blur-md"></div>
                <div className="relative bg-orange-500 text-white p-3 rounded-full">
                  <MessageCircle size={30} />
                </div>
              </motion.div>
            </div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              تواصل <span className="text-orange-500">معنا</span>
            </motion.h1>

            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-6 mx-auto"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "6rem", opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
              dir="rtl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق أهدافك التسويقية. فريقنا المتخصص جاهز للاستماع إليك
              وتقديم الحلول المناسبة لاحتياجاتك.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <a href="#contact-form">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-black gap-2 rounded-full px-6">
                  <MessageSquare size={18} />
                  <span>راسلنا</span>
                </Button>
              </a>
              <a href="https://wa.me/+201278183718">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600 gap-2 rounded-full px-6"
                >
                  <FaWhatsapp size={18} />
                  <span>واتساب</span>
                </Button>
              </a>
            </motion.div>
          </motion.div>


        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 relative -mt-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Card */}
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm shadow-md">
              <div className="bg-orange-500 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">اتصل بنا</h3>
              <p className="text-center text-gray-300 mb-4">نحن متاحون للرد على استفساراتك</p>
              <p className="text-center text-orange-500 font-bold">+966 123 456 789</p>
            </div>

            {/* Email Card */}
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm shadow-md">
              <div className="bg-orange-500 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">البريد الإلكتروني</h3>
              <p className="text-center text-gray-300 mb-4">راسلنا عبر البريد الإلكتروني</p>
              <p className="text-center text-orange-500 font-bold">info@sourcemedia.com</p>
            </div>

            {/* Location Card */}
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm shadow-md">
              <div className="bg-orange-500 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">موقعنا</h3>
              <p className="text-center text-gray-300 mb-4">زورنا في مكتبنا</p>
              <p className="text-center text-orange-500 font-bold" dir="rtl">
                المملكة العربية السعودية، الرياض
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section id="contact-form" className="py-16 px-4 bg-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Contact Form */}
            <div className="lg:w-7/12">
              <div className="bg-white/10 rounded-lg p-4 shadow-xl">
                <h2 className="text-3xl font-bold mb-6 text-orange-500 text-right" dir="rtl">
                  أرسل لنا رسالة
                </h2>

                {formStatus === "success" ? (
                  <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 text-center">
                    <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
                    <h3 className="text-xl font-bold mb-2">تم إرسال رسالتك بنجاح!</h3>
                    <p className="text-gray-300">سنقوم بالرد عليك في أقرب وقت ممكن.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} dir="rtl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          الاسم
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          البريد الإلكتروني
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        الموضوع
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        الرسالة
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="bg-orange-500 text-black font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 w-full flex items-center justify-center gap-2"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                          <span>جاري الإرسال...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>إرسال الرسالة</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:w-5/12">
              {/* Working Hours */}
              <div className="bg-white/10 rounded-lg p-6 shadow-xl mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-orange-500" size={24} />
                  <h3 className="text-xl font-bold">ساعات العمل</h3>
                </div>
                <ul className="space-y-3" dir="rtl">
                  <li className="flex justify-between">
                    <span>الأحد - الخميس</span>
                    <span>9:00 صباحاً - 6:00 مساءً</span>
                  </li>
                  <li className="flex justify-between">
                    <span>الجمعة</span>
                    <span>مغلق</span>
                  </li>
                  <li className="flex justify-between">
                    <span>السبت</span>
                    <span>10:00 صباحاً - 2:00 مساءً</span>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="bg-white/10 rounded-lg p-6 shadow-xl mb-8">
                <h3 className="text-xl font-bold mb-4 text-right" dir="rtl">
                  تابعنا على وسائل التواصل الاجتماعي
                </h3>
                <div className="flex justify-center gap-6">
                  <a
                    href="#"
                    className="bg-white/20 hover:bg-orange-500 text-white hover:text-black p-3 rounded-full transition duration-300"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="#"
                    className="bg-white/20 hover:bg-orange-500 text-white hover:text-black p-3 rounded-full transition duration-300"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="#"
                    className="bg-white/20 hover:bg-orange-500 text-white hover:text-black p-3 rounded-full transition duration-300"
                  >
                    <FaTiktok size={24} />
                  </a>
                  <a
                    href="https://wa.me/+201278183718"
                    className="bg-white/20 hover:bg-green-500 text-white hover:text-white p-3 rounded-full transition duration-300"
                  >
                    <FaWhatsapp size={24} />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white/10 rounded-lg p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-right" dir="rtl">
                  موقعنا على الخريطة
                </h3>
                <div className="rounded-lg overflow-hidden h-64 bg-gray-800 flex items-center justify-center">
                  {/* Replace with actual map embed */}
                  <div className="text-center p-4">
                    <MapPin className="mx-auto mb-2 text-orange-500" size={32} />
                    <p>خريطة تفاعلية ستظهر هنا</p>
                    <p className="text-sm text-gray-400">يمكنك استبدال هذا بخريطة Google Maps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-500">الأسئلة الشائعة</h2>

          <div className="space-y-4" dir="rtl">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-right flex items-center justify-between focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  {activeAccordion === index ? (
                    <ChevronUp className="text-orange-500" size={20} />
                  ) : (
                    <ChevronDown className="text-orange-500" size={20} />
                  )}
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeAccordion === index ? "max-h-96 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-300 to-orange-400 text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">جاهز لبدء مشروعك التسويقي؟</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            نحن متحمسون للعمل معك وتحقيق أهدافك التسويقية. تواصل معنا اليوم لبدء رحلة النجاح.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact-form">
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300 font-bold flex items-center gap-2">
                <MessageSquare size={18} />
                <span>تواصل معنا</span>
              </button>
            </a>
            <a href="https://wa.me/+201278183718">
              <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition duration-300 font-bold flex items-center gap-2">
                <FaWhatsapp size={18} />
                <span>واتساب</span>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <FloatingWhatsAppIcon />
    </div>
  )
}

