"use client"

import { useState, useEffect } from "react"
import { CreditCard, Smartphone, QrCode, Share2, Edit, Download, Layers, Palette, Scan, Globe, Clock, BarChart, Check, Instagram, Facebook } from 'lucide-react'
import { motion } from "framer-motion"
import FloatingWhatsAppIcon from "@/src/components/shared/floating-whatsapp"
import Footer from "@/src/components/shared/footer"
import Navbar from "@/src/components/shared/navbar"
import { FaTiktok, FaWhatsapp } from "react-icons/fa"


export default function BusinessCards() {
  const [activeTab, setActiveTab] = useState("physical")
  const [selectedTemplate, setSelectedTemplate] = useState(0)
  const [isQrAnimating, setIsQrAnimating] = useState(false)

  // Templates for business cards
  const cardTemplates = [
    {
      name: "الكلاسيكي",
      bgColor: "bg-gradient-to-r from-gray-800 to-gray-900",
      textColor: "text-white",
      accentColor: "bg-orange-500",
    },
    {
      name: "الحديث",
      bgColor: "bg-gradient-to-r from-orange-500 to-orange-600",
      textColor: "text-black",
      accentColor: "bg-black",
    },
    {
      name: "المينيمال",
      bgColor: "bg-white",
      textColor: "text-black",
      accentColor: "bg-orange-500",
    },
    {
      name: "الإبداعي",
      bgColor: "bg-gradient-to-r from-purple-600 to-orange-500",
      textColor: "text-white",
      accentColor: "bg-white",
    },
  ]

  // QR code animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsQrAnimating(true)
      setTimeout(() => setIsQrAnimating(false), 2000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Features of digital business cards
  const digitalFeatures = [
    {
      icon: <Edit className="w-8 h-8 text-orange-500" />,
      title: "تحديث سهل",
      description: "قم بتحديث معلومات الاتصال الخاصة بك في أي وقت دون الحاجة لطباعة بطاقات جديدة"
    },
    {
      icon: <Share2 className="w-8 h-8 text-orange-500" />,
      title: "مشاركة فورية",
      description: "شارك بطاقتك الرقمية عبر البريد الإلكتروني أو الرسائل النصية أو وسائل التواصل الاجتماعي"
    },
    {
      icon: <BarChart className="w-8 h-8 text-orange-500" />,
      title: "تتبع الأداء",
      description: "تتبع عدد مرات مشاهدة بطاقتك وتفاعل العملاء معها"
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: "وصول عالمي",
      description: "يمكن الوصول إلى بطاقتك الرقمية من أي مكان في العالم"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "متاحة 24/7",
      description: "بطاقتك الرقمية متاحة على مدار الساعة طوال أيام الأسبوع"
    },
    {
      icon: <Scan className="w-8 h-8 text-orange-500" />,
      title: "سهولة المسح",
      description: "يمكن مسح رمز QR الخاص بك بسهولة باستخدام أي هاتف ذكي"
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <div className="absolute inset-0 bg-no-repeat bg-cover bg-center">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="h-screen bg-[url('https://sourcemediaagency.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-18-at-18.32.58_a1f6d76e.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="bg-black/60 w-full h-full flex flex-col justify-center items-center text-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-white mb-4">بطاقات الأعمال الاحترافية</h1>
            <p className="text-xl text-white max-w-2xl mb-8" dir="rtl">
              ارتقِ بعملك مع بطاقات أعمال مبتكرة تجمع بين التصميم الإبداعي وتقنية رمز QR للتواصل الرقمي
            </p>
          </motion.div>

          <div className="flex flex-row justify-center gap-4 z-50">
            <a href="#physical-cards">
              <button className="bg-orange-500 text-black px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 cursor-pointer font-bold">
                بطاقات تقليدية
              </button>
            </a>
            <a href="#digital-cards">
              <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300 cursor-pointer font-bold">
                بطاقات رقمية
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <section className="py-16 px-4" dir="rtl">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white/10 rounded-full p-1">
              <button
                className={`px-6 py-3 rounded-full font-bold ${
                  activeTab === "physical"
                    ? "bg-orange-500 text-black"
                    : "bg-transparent text-white hover:bg-white/5"
                }`}
                onClick={() => setActiveTab("physical")}
              >
                <CreditCard className="inline-block mr-2 h-5 w-5" />
                بطاقات تقليدية
              </button>
              <button
                className={`px-6 py-3 rounded-full font-bold ${
                  activeTab === "digital"
                    ? "bg-orange-500 text-black"
                    : "bg-transparent text-white hover:bg-white/5"
                }`}
                onClick={() => setActiveTab("digital")}
              >
                <Smartphone className="inline-block mr-2 h-5 w-5" />
                بطاقات رقمية
              </button>
            </div>
          </div>

          {/* Physical Business Cards Section */}
          {activeTab === "physical" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              id="physical-cards"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-orange-500 mb-6">بطاقات الأعمال التقليدية</h2>
                  <p className="text-lg mb-6">
                    بطاقات الأعمال التقليدية هي أداة تسويقية قوية تعكس هوية علامتك التجارية وتترك انطباعًا دائمًا. نقدم تصاميم مبتكرة وطباعة عالية الجودة لبطاقات أعمال تميزك عن منافسيك.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-orange-500 p-2 rounded-full ml-4 mt-1">
                        <Layers className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">خيارات متعددة للخامات</h3>
                        <p className="text-gray-300">ورق مقوى، بلاستيك، معدن، خشب وأكثر</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-orange-500 p-2 rounded-full ml-4 mt-1">
                        <Palette className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">تصاميم إبداعية</h3>
                        <p className="text-gray-300">تصاميم فريدة تعكس هوية علامتك التجارية</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-orange-500 p-2 rounded-full ml-4 mt-1">
                        <QrCode className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">دمج رموز QR</h3>
                        <p className="text-gray-300">ربط بطاقتك التقليدية بحضورك الرقمي</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>

                  {/* Card Preview */}
                  <div className="relative transform perspective-1000 rotate-6 hover:rotate-0 transition-transform duration-500 select-none">
                    <div className={`w-full aspect-[1.618/1] rounded-xl shadow-2xl overflow-hidden ${cardTemplates[selectedTemplate].bgColor}`}>
                      <div className="p-4 h-full flex flex-col justify-between">
                        <div>
                          <div className={`h-8 w-32 ${cardTemplates[selectedTemplate].accentColor} rounded-md mb-6`}></div>
                          <h3 className={`text-2xl font-bold ${cardTemplates[selectedTemplate].textColor}`}>source media</h3>
                          <p className={`text-sm mt-1 ${cardTemplates[selectedTemplate].textColor} opacity-80`}>تخصص تلميع براندات</p>
                        </div>
                        <div className="flex justify-between items-end">
                          <div>
                            <p className={`text-sm ${cardTemplates[selectedTemplate].textColor} opacity-80`}>sourcemedia61@gmail.com</p>
                            <p className={`text-sm ${cardTemplates[selectedTemplate].textColor} opacity-80`}>+201278183718</p>
                            <p className={`text-sm ${cardTemplates[selectedTemplate].textColor} opacity-80`}>sourcemediaagency.com</p>
                          </div>
                          <div className=" rounded-lg">
                          <div
                        className={`bg-white mx-auto p-1 rounded ${isQrAnimating ? 'animate-pulse' : ''}`}
                      >
                        <img src="/images/source_media_qrcode.png" alt="Digital Card QR Code" className="h-16 w-16" />
                      </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Templates Selection */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-center mb-8">اختر التصميم المناسب لك</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {cardTemplates.map((template, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer rounded-lg  transition-all duration-300 ${selectedTemplate === index ? 'ring-2 ring-orange-500' : ''}`}
                      onClick={() => setSelectedTemplate(index)}
                    >
                      <div className={`w-full aspect-[1.618/1] rounded-lg ${template.bgColor} flex items-center justify-center`}>
                        <span className={`font-bold ${template.textColor}`}>{template.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">جاهز لتصميم بطاقة عملك؟</h3>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                  دعنا نساعدك في إنشاء بطاقة أعمال تعكس احترافية علامتك التجارية وتترك انطباعًا لا يُنسى.
                </p>
                <a href="#contact">
                  <button className="bg-orange-500 text-black px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300 font-bold">
                    احصل على عرض سعر
                  </button>
                </a>
              </div>
            </motion.div>
          )}

          {/* Digital Business Cards Section */}
          {activeTab === "digital" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              id="digital-cards"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div className="order-2 md:order-1">
                  <div className="relative mx-auto w-[390px] h-[844px] bg-gray-900 rounded-[40px] shadow-xl overflow-hidden border-[8px] border-gray-800">
                    {/* Phone Notch */}
                    <div className="absolute -top-1 inset-x-0 h-8 bg-gray-800 rounded-b-lg"></div>
                    <div className="absolute -top-1 inset-x-0 h-1 bg-gray-800"></div>

                    {/* Digital Card UI */}
                    <div className="h-full pt-6 bg-gradient-to-b from-orange-500 to-orange-700 flex flex-col">
                      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                        <div className="flex items-center justify-center w-32 h-32 p-6 bg-black rounded-full mb-4 overflow-hidden">
                          <img
                            src="/images/logo.png"
                            alt="Digital Card Avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-white">source media</h3>
                        <p className="text-sm text-white/80 mb-4">تخصص تلميع براندات</p>

                        <div className="grid grid-cols-2 gap-2 w-full mb-6">
                          <div className="bg-black/20 p-2 rounded-lg text-white text-sm">
                            <p>الهاتف</p>
                          </div>
                          <div className="bg-black/20 p-2 rounded-lg text-white text-sm">
                            <p>البريد</p>
                          </div>
                          <div className="bg-black/20 p-2 rounded-lg text-white text-sm">
                            <p>الموقع</p>
                          </div>
                          <div className="bg-black/20 p-2 rounded-lg text-white text-sm">
                            <p>العنوان</p>
                          </div>
                        </div>

                        <div className="flex gap-3 mb-6">
                          <a href="https://www.facebook.com/sourcemediaagency/" target="_blank" rel="noopener noreferrer" className="bg-black/20 p-2 rounded-full">
                            <Facebook className="w-4 h-4 text-white" />
                          </a>
                          <a href="https://www.instagram.com/sourcemediaagency/" target="_blank" rel="noopener noreferrer" className="bg-black/20 p-2 rounded-full">
                            <Instagram className="w-4 h-4 text-white" />
                          </a>
                          <a href="https://www.tiktok.com/@sourcemediaagency" target="_blank" rel="noopener noreferrer" className="bg-black/20 p-2 rounded-full">
                            <FaTiktok className="w-4 h-4 text-white" />
                          </a>
                          <a href="https://wa.me/201278183718" target="_blank" rel="noopener noreferrer" className="bg-black/20 p-2 rounded-full">
                            <FaWhatsapp className="w-4 h-4 text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold text-orange-500 mb-6">بطاقات الأعمال الرقمية</h2>
                  <p className="text-lg mb-6">
                    بطاقات الأعمال الرقمية هي الطريقة العصرية للتواصل المهني. تتيح لك مشاركة معلوماتك بسهولة من خلال رمز QR يمكن مسحه بأي هاتف ذكي، مما يوفر تجربة تفاعلية غنية.
                  </p>

                  <div className="mb-6">
                    <h3 className="font-bold text-xl mb-4">كيف تعمل؟</h3>
                    <ol className="space-y-2 list-decimal list-inside text-gray-300">
                      <li>نقوم بإنشاء صفحة ويب مخصصة تحتوي على معلومات الاتصال الخاصة بك</li>
                      <li>ننشئ رمز QR فريد يرتبط بصفحتك الشخصية</li>
                      <li>يمكنك طباعة رمز QR على بطاقات تقليدية أو مشاركته رقميًا</li>
                      <li>عندما يقوم شخص ما بمسح الرمز، يتم توجيهه مباشرة إلى صفحة معلوماتك</li>
                    </ol>
                  </div>

                  <div className="flex gap-4 mb-8">
                    <button className="flex items-center gap-2 bg-orange-500 text-black px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300">
                      <Download className="h-5 w-5" />
                      حفظ جهات الاتصال
                    </button>
                    <button className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 transition duration-300">
                      <Share2 className="h-5 w-5" />
                      مشاركة
                    </button>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-center mb-8">مميزات البطاقات الرقمية</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {digitalFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="mb-4">{feature.icon}</div>
                      <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                      <p className="text-gray-300">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* QR Code Section */}
              <div className="bg-white/5 rounded-2xl p-8 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">قوة رمز QR</h3>
                    <p className="text-lg mb-6">
                      رموز QR تحول الطريقة التي نتبادل بها المعلومات. بمجرد مسح بسيط، يمكن للأشخاص الوصول إلى:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="bg-orange-500 p-1 rounded-full">
                          <Check className="h-4 w-4 text-black" />
                        </div>
                        معلومات الاتصال الكاملة
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="bg-orange-500 p-1 rounded-full">
                          <Check className="h-4 w-4 text-black" />
                        </div>
                        روابط مواقع التواصل الاجتماعي
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="bg-orange-500 p-1 rounded-full">
                          <Check className="h-4 w-4 text-black" />
                        </div>
                        معرض أعمالك
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="bg-orange-500 p-1 rounded-full">
                          <Check className="h-4 w-4 text-black" />
                        </div>
                        السيرة الذاتية والخبرات
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="bg-orange-500 p-1 rounded-full">
                          <Check className="h-4 w-4 text-black" />
                        </div>
                        خيارات التواصل المباشر
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-orange-500 blur-3xl opacity-20 rounded-full"></div>
                      <div
                        className={`bg-white mx-auto mb-8 p-1 rounded ${isQrAnimating ? 'animate-pulse' : ''}`}
                      >
                        <img src="/images/source_media_qrcode.png" alt="Digital Card QR Code" className="h-48 w-48" />
                      </div>
                      <div className="absolute -top-4 -right-4 bg-orange-500 text-black font-bold px-4 py-2 rounded-full text-sm animate-bounce">
                        امسح الآن!
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">جاهز للانتقال إلى العصر الرقمي؟</h3>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                  احصل على بطاقة أعمال رقمية مخصصة تعكس هويتك المهنية وتسهل التواصل مع عملائك.
                </p>
                <a href="#contact">
                  <button className="bg-orange-500 text-black px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300 font-bold">
                    ابدأ الآن
                  </button>
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4 bg-white/5" dir="rtl">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">مقارنة بين البطاقات التقليدية والرقمية</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-right"></th>
                  <th className="p-4 text-center bg-white/10 rounded-tl-none">البطاقات التقليدية</th>
                  <th className="p-4 text-center bg-orange-500 text-black rounded-tr-none">البطاقات الرقمية</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 font-bold">التكلفة</td>
                  <td className="p-4 text-center bg-white/10">تكلفة متكررة للطباعة</td>
                  <td className="p-4 text-center bg-orange-500/20">تكلفة لمرة واحدة</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">التحديث</td>
                  <td className="p-4 text-center bg-white/10">يتطلب إعادة الطباعة</td>
                  <td className="p-4 text-center bg-orange-500/20">تحديث فوري عبر الإنترنت</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">المعلومات</td>
                  <td className="p-4 text-center bg-white/10">محدودة بمساحة البطاقة</td>
                  <td className="p-4 text-center bg-orange-500/20">غير محدودة</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">الوسائط المتعددة</td>
                  <td className="p-4 text-center bg-white/10">غير متوفرة</td>
                  <td className="p-4 text-center bg-orange-500/20">صور، فيديو، روابط</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">التفاعل</td>
                  <td className="p-4 text-center bg-white/10">محدود</td>
                  <td className="p-4 text-center bg-orange-500/20">تفاعلي بالكامل</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">التأثير البيئي</td>
                  <td className="p-4 text-center bg-white/10">استهلاك الورق</td>
                  <td className="p-4 text-center bg-orange-500/20">صديق للبيئة</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">تحليلات الأداء</td>
                  <td className="p-4 text-center bg-white/10 rounded-bl-none">غير متوفرة</td>
                  <td className="p-4 text-center bg-orange-500/20 rounded-br-none">إحصائيات مفصلة</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4" dir="rtl">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">ماذا يقول عملاؤنا</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">أحمد محمد</h4>
                  <p className="text-sm text-gray-400">مدير تنفيذي</p>
                </div>
              </div>
              <p className="mb-4">
                &quot;بطاقات الأعمال الرقمية من Source Media غيرت طريقة تواصلي مع العملاء. الآن يمكنني مشاركة معلوماتي بسهولة ومتابعة من قام بالاطلاع عليها.&quot;
              </p>
              <div className="flex text-orange-500">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">سارة علي</h4>
                  <p className="text-sm text-gray-400">صاحبة مشروع</p>
                </div>
              </div>
              <p className="mb-4">
                &quot;الجمع بين البطاقة التقليدية مع رمز QR كان فكرة رائعة. عملائي يحبون التصميم الأنيق والقدرة على الوصول إلى معلوماتي الكاملة بمجرد مسح الرمز.&quot;
              </p>
              <div className="flex text-orange-500">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">محمد خالد</h4>
                  <p className="text-sm text-gray-400">مستشار تسويق</p>
                </div>
              </div>
              <p className="mb-4">
                &quot;أحب كيف يمكنني تحديث معلوماتي في أي وقت دون الحاجة لطباعة بطاقات جديدة. وفرت الكثير من المال والوقت مع الحفاظ على احترافية عالية.&quot;
              </p>
              <div className="flex text-orange-500">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white/5" dir="rtl">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">الأسئلة الشائعة</h2>

          <div className="space-y-6">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">كيف يعمل رمز QR على بطاقة العمل؟</h3>
              <p>
                يحتوي رمز QR على رابط مشفر يوجه الشخص الذي يقوم بمسحه إلى صفحة الويب الخاصة بك التي تحتوي على معلومات الاتصال والمحتوى الذي تريد مشاركته.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">هل يمكنني تحديث معلوماتي بعد إنشاء البطاقة الرقمية؟</h3>
              <p>
                نعم، يمكنك تحديث معلوماتك في أي وقت من خلال لوحة التحكم الخاصة بك. سيتم تحديث المعلومات فورًا دون الحاجة لتغيير رمز QR.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">هل أحتاج إلى تطبيق خاص لمسح رمز QR؟</h3>
              <p>
                لا، معظم الهواتف الذكية الحديثة تأتي مع ماسح QR مدمج في تطبيق الكاميرا. ما عليك سوى توجيه الكاميرا نحو الرمز وسيتم مسحه تلقائيًا.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">هل يمكنني الجمع بين البطاقة التقليدية والرقمية؟</h3>
              <p>
                بالتأكيد! نوصي بالجمع بين الاثنين للحصول على أفضل النتائج. يمكننا تصميم بطاقة تقليدية أنيقة تحتوي على رمز QR يربطها ببطاقتك الرقمية.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">هل يمكنني معرفة من قام بمسح بطاقتي الرقمية؟</h3>
              <p>
                نعم، توفر منصتنا إحصائيات مفصلة حول عدد مرات مسح بطاقتك، والمواقع الجغرافية، والأوقات، مما يساعدك على تتبع فعالية بطاقتك.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-orange-500 text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">جاهز لتطوير طريقة تواصلك المهني؟</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            سواء كنت تفضل البطاقات التقليدية، الرقمية، أو مزيج من الاثنين، نحن هنا لمساعدتك في إنشاء بطاقة أعمال تعكس هويتك المهنية وتساعدك على التواصل بفعالية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300 font-bold w-full sm:w-auto">
                تواصل معنا الآن
              </button>
            </a>
            <a href="#samples">
              <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 font-bold w-full sm:w-auto">
                مشاهدة نماذج أعمالنا
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
