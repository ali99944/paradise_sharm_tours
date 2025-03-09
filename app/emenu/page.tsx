"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  QrCode,
  Smartphone,
  FileText,
  ShoppingCart,
  CreditCard,
  Edit,
  Clock,
  BarChart2,
  Check,
  Settings,
  Globe,
  Filter,
  PlusCircle,
  Trash2,
  RefreshCw,
  Palette,
  LayoutGrid,
  Image,
  ChevronRight,
  MessageSquare,
  Zap,
  DollarSign,
} from "lucide-react"
import { FaUtensils, FaQrcode } from "react-icons/fa"
import FloatingWhatsAppIcon from "@/src/components/shared/floating-whatsapp"
import Footer from "@/src/components/shared/footer"
import Navbar from "@/src/components/shared/navbar"
import CartPageMockup from "./mockups/cart-mockup"
import PaymentPageMockup from "./mockups/payment-mockup"
import OrderReceivedMockup from "./mockups/order-recieved-mockup"
import ProductDetailsMockup from "./mockups/product-details-mockup"
import ControlPanelMockup from "./mockups/control-panel-mockup"

export default function EMenuPage() {
  const [activeTab, setActiveTab] = useState("simple")
  const [selectedTemplate, setSelectedTemplate] = useState(0)
  const [isQrAnimating, setIsQrAnimating] = useState(false)
  const [activeCategory, setActiveCategory] = useState("main")
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [showMockupDetails, setShowMockupDetails] = useState(false)

  const mockupRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: mockupRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 0])

  // QR code animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsQrAnimating(true)
      setTimeout(() => setIsQrAnimating(false), 2000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Menu templates
  const menuTemplates = [
    {
      name: "الكلاسيكي",
      bgColor: "bg-white",
      textColor: "text-black",
      accentColor: "bg-orange-500",
      headerColor: "bg-orange-500",
    },
    {
      name: "الداكن",
      bgColor: "bg-gray-900",
      textColor: "text-white",
      accentColor: "bg-orange-500",
      headerColor: "bg-gray-800",
    },
    {
      name: "الأنيق",
      bgColor: "bg-gradient-to-b from-gray-50 to-gray-100",
      textColor: "text-gray-800",
      accentColor: "bg-emerald-500",
      headerColor: "bg-emerald-500",
    },
    {
      name: "الحيوي",
      bgColor: "bg-gradient-to-r from-purple-600 to-blue-500",
      textColor: "text-white",
      accentColor: "bg-yellow-400",
      headerColor: "bg-purple-700",
    },
  ]

  // Menu categories
  const menuCategories = [
    { id: "main", name: "الأطباق الرئيسية" },
    { id: "appetizers", name: "المقبلات" },
    { id: "desserts", name: "الحلويات" },
    { id: "drinks", name: "المشروبات" },
  ]

  // Menu items
  const menuItems = {
    main: [
      {
        id: 1,
        name: "برجر لحم أنجوس",
        description: "برجر لحم أنجوس مع جبنة شيدر وصلصة خاصة",
        price: "65 ريال",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 2,
        name: "ستيك تندرلوين",
        description: "ستيك تندرلوين مشوي مع صلصة الفطر",
        price: "120 ريال",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 3,
        name: "باستا ألفريدو",
        description: "باستا كريمية مع دجاج وفطر",
        price: "55 ريال",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    appetizers: [
      {
        id: 4,
        name: "سلطة سيزر",
        description: "خس روماني مع صلصة سيزر وقطع خبز محمص",
        price: "35 ريال",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 5,
        name: "حلقات البصل المقلية",
        description: "حلقات بصل مقرمشة مع صلصة خاصة",
        price: "25 ريال",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    desserts: [
      {
        id: 6,
        name: "تشيز كيك",
        description: "تشيز كيك مع صلصة التوت",
        price: "30 ريال",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 7,
        name: "براوني بالآيس كريم",
        description: "براوني شوكولاتة ساخنة مع آيس كريم فانيليا",
        price: "35 ريال",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    drinks: [
      {
        id: 8,
        name: "عصير برتقال طازج",
        description: "عصير برتقال طبيعي 100%",
        price: "20 ريال",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 9,
        name: "موكا فرابتشينو",
        description: "قهوة باردة مع شوكولاتة وكريمة مخفوقة",
        price: "25 ريال",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  }

  // E-Menu benefits
  const eMenuBenefits = [
    {
      icon: <Edit className="w-8 h-8 text-orange-500" />,
      title: "تحديث فوري",
      description: "قم بتحديث القائمة والأسعار في أي وقت دون الحاجة لإعادة الطباعة",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: "تجربة تفاعلية",
      description: "قائمة تفاعلية مع صور عالية الجودة وأوصاف مفصلة للأطباق",
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-orange-500" />,
      title: "تحليلات وإحصائيات",
      description: "تتبع الأطباق الأكثر طلباً وسلوك العملاء لتحسين عروضك",
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: "متعدد اللغات",
      description: "دعم متعدد اللغات لخدمة جميع العملاء من مختلف الجنسيات",
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "توفير الوقت",
      description: "تقليل وقت انتظار العملاء وتسريع عملية الطلب والدفع",
    },
    {
      icon: <Palette className="w-8 h-8 text-orange-500" />,
      title: "تخصيص كامل",
      description: "تخصيص مظهر القائمة لتتناسب مع هوية مطعمك البصرية",
    },
  ]

  // FAQs
  const faqs = [
    {
      question: "كيف يعمل نظام القائمة الإلكترونية؟",
      answer:
        "يعمل نظام القائمة الإلكترونية من خلال رمز QR يتم وضعه على طاولات المطعم. يقوم العميل بمسح الرمز باستخدام هاتفه الذكي ليتم توجيهه مباشرة إلى قائمة المطعم الرقمية. يمكن للعميل تصفح الأقسام المختلفة، مشاهدة صور الأطباق، قراءة الأوصاف، ومعرفة الأسعار. في النسخة الكاملة، يمكن للعميل إضافة الأطباق إلى سلة التسوق وإتمام عملية الطلب والدفع إلكترونياً.",
    },
    {
      question: "هل يمكنني تحديث القائمة بنفسي؟",
      answer:
        "نعم، نوفر لك لوحة تحكم سهلة الاستخدام تمكنك من تحديث القائمة بنفسك في أي وقت. يمكنك إضافة أطباق جديدة، تعديل الأسعار، تغيير الصور، تحديث الأوصاف، وإدارة الأقسام. جميع التغييرات تظهر فوراً على القائمة الإلكترونية دون الحاجة لأي تدخل تقني.",
    },
    {
      question: "هل يحتاج العملاء إلى تنزيل تطبيق لاستخدام القائمة الإلكترونية؟",
      answer:
        "لا، هذه إحدى المميزات الرئيسية لنظامنا. لا يحتاج العملاء إلى تنزيل أي تطبيق. القائمة الإلكترونية تعمل من خلال متصفح الويب في الهاتف الذكي. ما عليهم سوى مسح رمز QR باستخدام كاميرا الهاتف ليتم توجيههم مباشرة إلى القائمة.",
    },
    {
      question: "ما الفرق بين القائمة البسيطة والقائمة الكاملة؟",
      answer:
        "القائمة البسي��ة توفر عرضاً للأطباق مع الأسعار والصور والأوصاف، مقسمة حسب الفئات. أما القائمة الكاملة فتضيف إمكانية الطلب المباشر، سلة التسوق، الدفع الإلكتروني، وميزات إضافية مثل الطلبات الخاصة، اختيار الإضافات، وتتبع حالة الطلب.",
    },
    {
      question: "هل يمكن تخصيص مظهر القائمة لتتناسب مع هوية مطعمي؟",
      answer:
        "بالتأكيد! نوفر خيارات تخصيص واسعة تشمل الألوان، الخطوط، التخطيط، وإضافة شعار المطعم وصوره. يمكنك اختيار قالب من مجموعة قوالبنا الجاهزة أو تخصيص قالب فريد يعكس هوية علامتك التجارية.",
    },
    {
      question: "هل يمكن للعملاء طلب الطعام مباشرة من القائمة الإلكترونية؟",
      answer:
        "نعم، في نسخة القائمة الكاملة، يمكن للعملاء اختيار الأطباق وإضافتها إلى سلة التسوق وإتمام عملية الطلب والدفع إلكترونياً. يتم إرسال الطلبات مباشرة إلى نظام المطعم لتحضيرها وتقديمها للعميل.",
    },
    {
      question: "هل يمكن استخدام القائمة الإلكترونية بدون إنترنت؟",
      answer:
        "القائمة الإلكترونية تتطلب اتصالاً بالإنترنت للوصول إليها لأول مرة، ولكن بعض أجزاء القائمة يمكن تخزينها مؤقتاً على الجهاز للاستخدام حتى مع اتصال إنترنت ضعيف. نوصي بتوفير شبكة Wi-Fi للعملاء لضمان تجربة سلسة.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <div className="absolute inset-0 bg-no-repeat bg-cover bg-center z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="h-screen bg-[url('/placeholder.svg?height=1080&width=1920')] bg-no-repeat bg-cover bg-center">
        <div className="bg-black/70 w-full h-full flex flex-col justify-center items-center text-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-orange-500 rounded-full opacity-20 blur-md animate-pulse"></div>
                <FaQrcode className="text-orange-500 relative z-10" size={60} />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">القائمة الإلكترونية الذكية</h1>
            <p className="text-xl text-white max-w-2xl mb-8" dir="rtl">
              ارتقِ بتجربة مطعمك مع قائمة إلكترونية تفاعلية تعمل برمز QR وتمنح عملاءك تجربة طعام استثنائية
            </p>
          </motion.div>

          <div className="flex flex-row justify-center gap-4 z-50">
            <a href="#simple-menu">
              <button className="bg-orange-500 text-black px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 cursor-pointer font-bold">
                القائمة البسيطة
              </button>
            </a>
            <a href="#full-menu">
              <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300 cursor-pointer font-bold">
                القائمة الكاملة
              </button>
            </a>
          </div>
          
        </div>
      </div>

      {/* Why E-Menu Section */}
      <section className="py-20 px-4 relative overflow-hidden" dir="rtl">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">لماذا <span className="text-orange-500">القائمة الإلكترونية</span>؟</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-6 mx-auto" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              القائمة الإلكترونية هي الحل العصري لمطعمك، توفر تجربة سلسة لعملائك وتمنحك مرونة وتحكم كاملين
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eMenuBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-colors duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-orange-500 mb-2">25%</div>
              <p className="text-gray-300">زيادة في متوسط قيمة الطلب</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-orange-500 mb-2">15%</div>
              <p className="text-gray-300">تقليل في وقت خدمة العملاء</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
              <p className="text-gray-300">رضا العملاء من التجربة التفاعلية</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 px-4 bg-white/5" dir="rtl">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white/10 rounded-full p-1">
              <button
                className={`px-6 py-3 rounded-full font-bold ${
                  activeTab === "simple"
                    ? "bg-orange-500 text-black"
                    : "bg-transparent text-white hover:bg-white/5"
                }`}
                onClick={() => setActiveTab("simple")}
              >
                <FileText className="inline-block ml-2 h-5 w-5" />
                القائمة البسيطة
              </button>
              <button
                className={`px-6 py-3 rounded-full font-bold ${
                  activeTab === "full"
                    ? "bg-orange-500 text-black"
                    : "bg-transparent text-white hover:bg-white/5"
                }`}
                onClick={() => setActiveTab("full")}
              >
                <ShoppingCart className="inline-block ml-2 h-5 w-5" />
                القائمة الكاملة
              </button>
            </div>
          </div>

          {/* Simple E-Menu Section */}
          {activeTab === "simple" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              id="simple-menu"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-orange-500 mb-6">القائمة الإلكترونية البسيطة</h2>
                  <p className="text-lg mb-6">
                    القائمة الإلكترونية البسيطة هي الحل المثالي للمطاعم التي تبحث عن طريقة سهلة وفعالة لعرض قائمة الطعام رقمياً. تتيح لعملائك تصفح الأطباق بسهولة من خلال هواتفهم الذكية.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-orange-500 p-2 rounded-full ml-4 mt-1">
                        <QrCode className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">رمز QR سهل المسح</h3>
                        <p className="text-gray-300">يمكن وضعه على الطاولات أو في أي مكان في المطعم</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-orange-500 p-2 rounded-full ml-4 mt-1">
                        <LayoutGrid className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">تصنيف الأطباق</h3>
                        <p className="text-gray-300">عرض الأطباق مقسمة حسب الفئات لسهولة التصفح</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-orange-500 p-2 rounded-full ml-4 mt-1">
                        <Image className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">صور عالية الجودة</h3>
                        <p className="text-gray-300">عرض صور جذابة للأطباق مع أوصاف مفصلة</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-orange-500 p-2 rounded-full ml-4 mt-1">
                        <Globe className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">دعم متعدد اللغات</h3>
                        <p className="text-gray-300">عرض القائمة بلغات متعددة لخدمة جميع العملاء</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>

                  {/* Phone Mockup */}
                  <div className="relative mx-auto w-[280px] h-[580px] bg-gray-900 rounded-[40px] shadow-xl overflow-hidden border-[8px] border-gray-800">
                    {/* Phone Notch */}
                    <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-lg"></div>
                    
                    {/* Menu UI */}
                    <div className="h-full pt-6 overflow-hidden">
                      {/* Restaurant Header */}
                      <div className={`${menuTemplates[selectedTemplate].headerColor} p-4 text-center`}>
                        <div className="w-16 h-16 bg-white rounded-full mx-auto mb-2 flex items-center justify-center">
                          <FaUtensils className="text-gray-800" size={30} />
                        </div>
                        <h3 className={`text-xl font-bold ${menuTemplates[selectedTemplate].textColor === 'text-black' ? 'text-black' : 'text-white'}`}>مطعم الذواقة</h3>
                        <p className={`text-sm ${menuTemplates[selectedTemplate].textColor === 'text-black' ? 'text-black/70' : 'text-white/70'}`}>المأكولات العالمية</p>
                      </div>
                      
                      {/* Categories */}
                      <div className={`${menuTemplates[selectedTemplate].bgColor} h-full`}>
                        <div className="flex overflow-hidden p-2 space-x-2 space-x-reverse">
                          {menuCategories.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => setActiveCategory(category.id)}
                              className={`px-3 py-2 rounded-full text-sm whitespace-nowrap ${
                                activeCategory === category.id
                                  ? `${menuTemplates[selectedTemplate].accentColor} ${menuTemplates[selectedTemplate].textColor === 'text-black' ? 'text-white' : 'text-black'}`
                                  : `bg-gray-200/10 ${menuTemplates[selectedTemplate].textColor}`
                              }`}
                            >
                              {category.name}
                            </button>
                          ))}
                        </div>
                        
                        {/* Menu Items */}
                        <div className={`p-4 overflow-hidden ${menuTemplates[selectedTemplate].textColor}`} style={{ height: "calc(100% - 120px)" }}>
                          {menuItems[activeCategory as keyof typeof menuItems].map((item) => (
                            <div key={item.id} className="mb-4 bg-black/10 rounded-lg p-3 flex">
                              <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                              <div className="mr-3 flex-1">
                                <h4 className="font-bold">{item.name}</h4>
                                <p className="text-sm opacity-70">{item.description}</p>
                                <div className="mt-1 font-bold text-orange-500">{item.price}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* QR Code */}
                  <div className="absolute -bottom-10 -right-10 transform rotate-12">
                    <div
                      className={`bg-white p-2 rounded ${isQrAnimating ? 'animate-pulse' : ''}`}
                    >
                      <img src="/images/source_media_qrcode.png" alt="QR Code" className="h-20 w-20" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Templates Selection */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-center mb-8">اختر التصميم المناسب لمطعمك</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {menuTemplates.map((template, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer rounded-lg transition-all duration-300 ${selectedTemplate === index ? 'ring-2 ring-orange-500' : ''}`}
                      onClick={() => setSelectedTemplate(index)}
                    >
                      <div className={`w-full aspect-video rounded-lg ${template.bgColor} flex items-center justify-center`}>
                        <span className={`font-bold ${template.textColor}`}>{template.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                  <div className="bg-orange-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Edit className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">سهولة التحديث</h3>
                  <p className="text-gray-300">
                    قم بتحديث القائمة والأسعار في أي وقت من خلال لوحة التحكم البسيطة. التغييرات تظهر فوراً لعملائك.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                  <div className="bg-orange-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">متوافقة مع جميع الأجهزة</h3>
                  <p className="text-gray-300">
                    تعمل القائمة الإلكترونية على جميع الهواتف الذكية والأجهزة اللوحية دون الحاجة لتنزيل تطبيق.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                  <div className="bg-orange-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">تخصيص كامل</h3>
                  <p className="text-gray-300">
                    خصص مظهر القائمة لتتناسب مع هوية مطعمك البصرية من خلال اختيار الألوان والخطوط والتخطيط.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">جاهز لتحويل قائمة مطعمك إلى تجربة رقمية؟</h3>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                  احصل على قائمة إلكترونية بسيطة وسهلة الاستخدام تعرض أطباقك بطريقة جذابة وعصرية.
                </p>
                <a href="#contact">
                  <button className="bg-orange-500 text-black px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300 font-bold">
                    احصل على عرض سعر
                  </button>
                </a>
              </div>
            </motion.div>
          )}

          {/* Full E-Menu Section */}
          {activeTab === "full" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              id="full-menu"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div className="order-2 md:order-1">
                  <div className="relative mx-auto w-[280px] h-[580px] bg-gray-900 rounded-[40px] shadow-xl overflow-hidden border-[8px] border-gray-800">
                    {/* Phone Notch */}
                    <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-lg"></div>
                    
                    {/* Menu UI */}
                    <div className="h-full pt-6 overflow-hidden">
                      {/* Restaurant Header */}
                      <div className={`${menuTemplates[selectedTemplate].headerColor} p-4 text-center`}>
                        <div className="w-16 h-16 bg-white rounded-full mx-auto mb-2 flex items-center justify-center">
                          <FaUtensils className="text-gray-800" size={30} />
                        </div>
                        <h3 className={`text-xl font-bold ${menuTemplates[selectedTemplate].textColor === 'text-black' ? 'text-black' : 'text-white'}`}>مطعم الذواقة</h3>
                        <p className={`text-sm ${menuTemplates[selectedTemplate].textColor === 'text-black' ? 'text-black/70' : 'text-white/70'}`}>المأكولات العالمية</p>
                      </div>
                      
                      {/* Categories */}
                      <div className={`${menuTemplates[selectedTemplate].bgColor} h-full`}>
                        <div className="flex overflow-hidden p-2 space-x-2 space-x-reverse">
                          {menuCategories.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => setActiveCategory(category.id)}
                              className={`px-3 py-2 rounded-full text-sm whitespace-nowrap ${
                                activeCategory === category.id
                                  ? `${menuTemplates[selectedTemplate].accentColor} ${menuTemplates[selectedTemplate].textColor === 'text-black' ? 'text-white' : 'text-black'}`
                                  : `bg-gray-200/10 ${menuTemplates[selectedTemplate].textColor}`
                              }`}
                            >
                              {category.name}
                            </button>
                          ))}
                        </div>
                        
                        {/* Menu Items with Add to Cart */}
                        <div className={`p-4 overflow-hidden ${menuTemplates[selectedTemplate].textColor}`} style={{ height: "calc(100% - 170px)" }}>
                          {menuItems[activeCategory as keyof typeof menuItems].map((item) => (
                            <div key={item.id} className="mb-4 bg-black/10 rounded-lg p-3">
                              <div className="flex">
                                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                                <div className="mr-3 flex-1">
                                  <h4 className="font-bold">{item.name}</h4>
                                  <p className="text-sm opacity-70">{item.description}</p>
                                  <div className="mt-1 font-bold text-orange-500">{item.price}</div>
                                </div>
                              </div>
                              <div className="mt-2 flex justify-end">
                                <button className={`${menuTemplates[selectedTemplate].accentColor} ${menuTemplates[selectedTemplate].textColor === 'text-black' ? 'text-white' : 'text-black'} px-3 py-1 rounded-full text-sm flex items-center`}>
                                  <PlusCircle className="h-4 w-4 ml-1" />
                                  إضافة للسلة
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Cart Button */}
                        <div className={`absolute bottom-0 left-0 right-0 p-4 ${menuTemplates[selectedTemplate].headerColor} ${menuTemplates[selectedTemplate].textColor === 'text-black' ? 'text-black' : 'text-white'}`}>
                          <button className="w-full bg-white text-black py-2 rounded-full font-bold flex items-center justify-center">
                            <ShoppingCart className="h-5 w-5 ml-2" />
                            عربة التسوق (3)
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold text-orange-500 mb-6">القائمة الإلكترونية الكاملة</h2>
                  <p className="text-lg mb-6">
                    القائمة الإلكترونية الكاملة هي حل متكامل يتيح لعملائك تصفح القائمة، إضافة الأطباق إلى سلة التسوق، وإتمام عملية الطلب والدفع إلكترونياً، مما يوفر تجربة طعام سلسة ومريحة.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-orange-500 p-2 rounded-full ml-4 mt-1">
                        <ShoppingCart className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">سلة تسوق متكاملة</h3>
                        <p className="text-gray-300">إمكانية إضافة الأطباق إلى السلة وتعديل الكميات</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-orange-500 p-2 rounded-full ml-4 mt-1">
                        <CreditCard className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">الدفع الإلكتروني</h3>
                        <p className="text-gray-300">دعم طرق دفع متعددة لإتمام الطلب بسهولة</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-orange-500 p-2 rounded-full ml-4 mt-1">
                        <MessageSquare className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">طلبات خاصة</h3>
                        <p className="text-gray-300">إمكانية إضافة ملاحظات وطلبات خاصة لكل طبق</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-orange-500 p-2 rounded-full ml-4 mt-1">
                        <BarChart2 className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">تحليلات متقدمة</h3>
                        <p className="text-gray-300">تتبع الطلبات والمبيعات وسلوك العملاء</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="max-w-7xl mx-auto flex gap-x-4 items mb-8">
              <CartPageMockup />
              <PaymentPageMockup />
              <OrderReceivedMockup />
              <ProductDetailsMockup />
              </div>

              <ControlPanelMockup />

              {/* Additional Features */}
              <div className="mb-16 mt-16">
                <h3 className="text-2xl font-bold text-center mb-8">مميزات إضافية في القائمة الكاملة</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                    <div className="bg-orange-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                      <Filter className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">تصفية وبحث</h3>
                    <p className="text-gray-300">
                      إمكانية البحث عن الأطباق وتصفيتها حسب السعر أو المكونات أو التصنيفات الغذائية.
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                    <div className="bg-orange-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                      <Clock className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">تتبع الطلبات</h3>
                    <p className="text-gray-300">
                      يمكن للعملاء تتبع حالة طلباتهم في الوقت الفعلي من التحضير وحتى التقديم.
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                    <div className="bg-orange-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">عروض خاصة</h3>
                    <p className="text-gray-300">
                      إمكانية إضافة عروض وخصومات خاصة تظهر للعملاء أثناء تصفح القائمة.
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                    <div className="bg-orange-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                      <RefreshCw className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">طلب متكرر</h3>
                    <p className="text-gray-300">
                      يمكن للعملاء حفظ طلباتهم المفضلة وإعادة طلبها بسهولة في زيارات لاحقة.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">ارتقِ بتجربة مطعمك مع القائمة الإلكترونية الكاملة</h3>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                  احصل على نظام متكامل يجمع بين عرض القائمة وإدارة الطلبات والدفع الإلكتروني.
                </p>
                <a href="#contact">
                  <button className="bg-orange-500 text-black px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300 font-bold">
                    طلب عرض سعر
                  </button>
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Control Panel Section */}
      <section className="py-20 px-4" dir="rtl" ref={mockupRef}>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">لوحة <span className="text-orange-500">التحكم</span></h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-6 mx-auto" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              لوحة تحكم سهلة الاستخدام تمكنك من إدارة قائمتك الإلكترونية بكل سهولة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-orange-500 mb-6">تحكم كامل في قائمتك</h3>
              <p className="text-lg mb-6">
                نوفر لك لوحة تحكم سهلة الاستخدام تمكنك من إدارة قائمتك الإلكترونية بنفسك. يمكنك تحديث الأطباق والأسعار، إضافة صور جديدة، تعديل الأوصاف، وتنظيم الفئات بكل سهولة.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-orange-500 p-2 rounded-full ml-4 mt-1">
                    <Edit className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">تحديث سهل وسريع</h4>
                    <p className="text-gray-300">قم بتحديث القائمة في أي وقت، والتغييرات تظهر فوراً</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-500 p-2 rounded-full ml-4 mt-1">
                    <LayoutGrid className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">إدارة الفئات</h4>
                    <p className="text-gray-300">إنشاء وتعديل وترتيب فئات الطعام بسهولة</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-500 p-2 rounded-full ml-4 mt-1">
                    <Palette className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">تخصيص المظهر</h4>
                    <p className="text-gray-300">تخصيص ألوان وتصميم القائمة لتناسب هوية مطعمك</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-500 p-2 rounded-full ml-4 mt-1">
                    <BarChart2 className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">تقارير وإحصائيات</h4>
                    <p className="text-gray-300">تتبع أداء القائمة والأطباق الأكثر طلباً</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setShowMockupDetails(!showMockupDetails)}
                className="bg-white/10 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition duration-300 flex items-center gap-2"
              >
                <span>عرض المزيد من التفاصيل</span>
                <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${showMockupDetails ? 'rotate-90' : ''}`} />
              </button>
            </div>
            
            <motion.div
              style={{ opacity, y }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
            >
              {/* Control Panel Mockup */}
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                {/* Header */}
                <div className="bg-gray-800 p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <FaUtensils className="text-orange-500 mr-2" size={20} />
                    <span className="font-bold">لوحة تحكم المطعم</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="bg-gray-700 p-2 rounded-full">
                      <Settings className="h-5 w-5 text-gray-300" />
                    </button>
                    <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Sidebar and Content */}
                <div className="flex">
                  {/* Sidebar */}
                  <div className="w-1/4 bg-gray-800 p-4 space-y-4">
                    <div className="bg-orange-500 text-black p-2 rounded flex items-center">
                      <LayoutGrid className="h-5 w-5 ml-2" />
                      <span>القائمة</span>
                    </div>
                    
                    <div className="text-gray-300 p-2 rounded flex items-center">
                      <Settings className="h-5 w-5 ml-2" />
                      <span>الإعدادات</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="w-3/4 p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold">إدارة القائمة</h3>
                      <button className="bg-orange-500 text-black px-3 py-1 rounded-lg text-sm flex items-center">
                        <PlusCircle className="h-4 w-4 ml-1" />
                        إضافة طبق
                      </button>
                    </div>
                    
                    {/* Categories Tabs */}
                    <div className="flex mb-4 border-b border-gray-700">
                      {menuCategories.map((category) => (
                        <button
                          key={category.id}
                          className={`px-4 py-2 ${activeCategory === category.id ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-400'}`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                    
                    {/* Menu Items */}
                    <div className="space-y-3">
                      {menuItems[activeCategory as keyof typeof menuItems].map((item) => (
                        <div key={item.id} className="bg-gray-800 p-3 rounded-lg flex justify-between items-center">
                          <div className="flex items-center">
                            <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-10 h-10 rounded object-cover" />
                            <div className="mr-3">
                              <h4 className="font-bold">{item.name}</h4>
                              <div className="text-sm text-orange-500">{item.price}</div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button className="bg-gray-700 p-2 rounded">
                              <Edit className="h-4 w-4 text-gray-300" />
                            </button>
                            <button className="bg-gray-700 p-2 rounded">
                              <Trash2 className="h-4 w-4 text-gray-300" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Additional Control Panel Details */}
          <AnimatePresence>
            {true && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                    <h4 className="text-xl font-bold mb-4">إدارة الأطباق</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-orange-500 ml-2 flex-shrink-0" />
                        <span>إضافة وتعديل وحذف الأطباق</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-orange-500 ml-2 flex-shrink-0" />
                        <span>تحميل صور عالية الجودة</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-orange-500 ml-2 flex-shrink-0" />
                        <span>تحديد الأسعار والخيارات</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-orange-500 ml-2 flex-shrink-0" />
                        <span>إضافة معلومات تفصيلية</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                    <h4 className="text-xl font-bold mb-4">تخصيص المظهر</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-orange-500 ml-2 flex-shrink-0" />
                        <span>اختيار الألوان والخطوط</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-orange-500 ml-2 flex-shrink-0" />
                        <span>تخصيص شعار وصور المطعم</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-orange-500 ml-2 flex-shrink-0" />
                        <span>تغيير تخطيط القائمة</span>
                      </li>

                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-orange-500 ml-2 flex-shrink-0" />
                        <span>إضافة صور خلفية مخصصة</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                    <h4 className="text-xl font-bold mb-4">التقارير والإحصائيات</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-orange-500 ml-2 flex-shrink-0" />
                        <span>تتبع الأطباق الأكثر طلباً</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-orange-500 ml-2 flex-shrink-0" />
                        <span>إحصائيات المبيعات اليومية</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-orange-500 ml-2 flex-shrink-0" />
                        <span>تحليل سلوك العملاء</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-orange-500 ml-2 flex-shrink-0" />
                        <span>تصدير التقارير بصيغ متعددة</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-lg mb-4">
                    لوحة التحكم سهلة الاستخدام ولا تتطلب أي خبرة تقنية. يمكنك إدارة قائمتك الإلكترونية بنفسك في أي وقت ومن أي مكان.
                  </p>
                  <button className="bg-orange-500 text-black px-6 py-2 rounded-lg hover:bg-orange-600 transition duration-300">
                    طلب عرض توضيحي
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
  </section>
  ;<section className="py-16 px-4 bg-white/5" dir="rtl">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          مقارنة بين <span className="text-orange-500">القائمة الورقية والإلكترونية</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-6 mx-auto" />
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          اكتشف الفرق بين القائمة الورقية التقليدية والقائمة الإلكترونية الحديثة
        </p>
      </motion.div>

      <div className="overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-4 text-right"></th>
              <th className="p-4 text-center bg-white/10 rounded-tl-lg">القائمة ال��رقية</th>
              <th className="p-4 text-center bg-orange-500 text-black rounded-tr-lg">القائمة الإلكترونية</th>
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
              <td className="p-4 font-bold">المحتوى</td>
              <td className="p-4 text-center bg-white/10">محدود بمساحة الورقة</td>
              <td className="p-4 text-center bg-orange-500/20">غير محدود</td>
            </tr>
            <tr>
              <td className="p-4 font-bold">الصور</td>
              <td className="p-4 text-center bg-white/10">محدودة وغير عالية الجودة</td>
              <td className="p-4 text-center bg-orange-500/20">صور عالية الجودة غير محدودة</td>
            </tr>
            <tr>
              <td className="p-4 font-bold">التفاعل</td>
              <td className="p-4 text-center bg-white/10">غير تفاعلية</td>
              <td className="p-4 text-center bg-orange-500/20">تفاعلية بالكامل</td>
            </tr>
            <tr>
              <td className="p-4 font-bold">تعدد اللغات</td>
              <td className="p-4 text-center bg-white/10">يتطلب قوائم منفصلة</td>
              <td className="p-4 text-center bg-orange-500/20">تبديل سهل بين اللغات</td>
            </tr>
            <tr>
              <td className="p-4 font-bold">الطلب والدفع</td>
              <td className="p-4 text-center bg-white/10">يتطلب تدخل النادل</td>
              <td className="p-4 text-center bg-orange-500/20">طلب ودفع ذاتي</td>
            </tr>
            <tr>
              <td className="p-4 font-bold">التأثير البيئي</td>
              <td className="p-4 text-center bg-white/10">استهلاك الورق</td>
              <td className="p-4 text-center bg-orange-500/20">صديقة للبيئة</td>
            </tr>
            <tr>
              <td className="p-4 font-bold">تحليلات الأداء</td>
              <td className="p-4 text-center bg-white/10 rounded-bl-lg">غير متوفرة</td>
              <td className="p-4 text-center bg-orange-500/20 rounded-br-lg">إحصائيات مفصلة</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Benefits Summary */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm p-6 rounded-xl"
        >
          <div className="bg-orange-500 text-black p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Clock className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">توفير الوقت والجهد</h3>
          <p className="text-gray-300">
            تقليل وقت انتظار العملاء وتسريع عملية الطلب والدفع، مما يزيد من كفاءة المطعم ويحسن تجربة العملاء.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm p-6 rounded-xl"
        >
          <div className="bg-orange-500 text-black p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <DollarSign className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">زيادة المبيعات</h3>
          <p className="text-gray-300">
            زيادة متوسط قيمة الطلب من خلال عرض الأطباق بطريقة جذابة وتقديم توصيات وعروض مخصصة للعملاء.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm p-6 rounded-xl"
        >
          <div className="bg-orange-500 text-black p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <BarChart2 className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">رؤى وتحليلات</h3>
          <p className="text-gray-300">
            الحصول على بيانات قيمة حول سلوك العملاء وتفضيلاتهم، مما يساعد في اتخاذ قرارات أفضل لتطوير العمل.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
  ;<section className="py-20 px-4 relative overflow-hidden" dir="rtl">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          كيف تعمل <span className="text-orange-500">القائمة الإلكترونية</span>؟
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-6 mx-auto" />
        <p className="text-xl text-white/80 max-w-3xl mx-auto">تجربة سلسة وبسيطة لعملائك من البداية إلى النهاية</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-center"
        >
          <div className="bg-orange-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
            <QrCode className="h-8 w-8 text-orange-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">1. مسح رمز QR</h3>
          <p className="text-gray-300">يقوم العميل بمسح رمز QR الموجود على الطاولة باستخدام كاميرا الهاتف الذكي.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-center"
        >
          <div className="bg-orange-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
            <Smartphone className="h-8 w-8 text-orange-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">2. تصفح القائمة</h3>
          <p className="text-gray-300">
            يتم توجيه العميل إلى القائمة الإلكترونية حيث يمكنه تصفح الأطباق والفئات المختلفة.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-center"
        >
          <div className="bg-orange-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
            <ShoppingCart className="h-8 w-8 text-orange-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">3. الطلب والدفع</h3>
          <p className="text-gray-300">
            يختار العميل الأطباق المطلوبة ويضيفها إلى السلة ثم يقوم بإتمام عملية الطلب والدفع.
          </p>
        </motion.div>
      </div>

      {/* QR Code Showcase */}
      <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">رمز QR - بوابة القائمة الإلكترونية</h3>
            <p className="text-lg mb-6">
              رمز QR هو الطريقة الأسهل والأسرع للوصول إلى القائمة الإلكترونية. يمكن وضعه على:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="bg-orange-500 p-1 rounded-full">
                  <Check className="h-4 w-4 text-black" />
                </div>
                طاولات المطعم
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-orange-500 p-1 rounded-full">
                  <Check className="h-4 w-4 text-black" />
                </div>
                واجهة المطعم
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-orange-500 p-1 rounded-full">
                  <Check className="h-4 w-4 text-black" />
                </div>
                المنشورات الإعلانية
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-orange-500 p-1 rounded-full">
                  <Check className="h-4 w-4 text-black" />
                </div>
                وسائل التواصل الاجتماعي
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-orange-500 p-1 rounded-full">
                  <Check className="h-4 w-4 text-black" />
                </div>
                بطاقات العمل
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500 blur-3xl opacity-20 rounded-full"></div>
              <div className={`bg-white mx-auto mb-8 p-4 rounded-lg ${isQrAnimating ? "animate-pulse" : ""}`}>
                <img src="/images/source_media_qrcode.png" alt="QR Code" className="h-48 w-48" />
                <div className="text-center mt-2 text-black font-bold">امسح للاطلاع على القائمة</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-orange-500 text-black font-bold px-4 py-2 rounded-full text-sm animate-bounce">
                جرب الآن!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  ;<section className="py-16 px-4 bg-white/5" dir="rtl">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          ماذا يقول <span className="text-orange-500">عملاؤنا</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-6 mx-auto" />
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          تجارب حقيقية من مطاعم استخدمت القائمة الإلكترونية وشهدت تحسناً في أدائها
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-full mr-4"></div>
            <div>
              <h4 className="font-bold">أحمد محمد</h4>
              <p className="text-sm text-gray-400">مدير مطعم الذواقة</p>
            </div>
          </div>
          <p className="mb-4">
            &quot;القائمة الإلكترونية غيرت طريقة عمل مطعمنا بالكامل. لاحظنا زيادة في متوسط قيمة الطلب بنسبة 25% وتقليل
            وقت خدمة العملاء. العملاء يحبون تجربة تصفح القائمة على هواتفهم.&quot;
          </p>
          <div className="flex text-orange-500">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-full mr-4"></div>
            <div>
              <h4 className="font-bold">سارة علي</h4>
              <p className="text-sm text-gray-400">صاحبة كافيه الصباح</p>
            </div>
          </div>
          <p className="mb-4">
            &quot;كنا نعاني من تكلفة طباعة القوائم بشكل متكرر بسبب تغيير الأسعار. القائمة الإلكترونية وفرت علينا هذه
            التكلفة وأعطتنا مرونة في تحديث القائمة في أي وقت. العملاء معجبون بالصور عالية الجودة للأطباق.&quot;
          </p>
          <div className="flex text-orange-500">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-full mr-4"></div>
            <div>
              <h4 className="font-bold">خالد عبدالله</h4>
              <p className="text-sm text-gray-400">مدير مطعم البحر الأزرق</p>
            </div>
          </div>
          <p className="mb-4">
            &quot;القائمة الإلكترونية الكاملة مع نظام الطلب والدفع كانت نقلة نوعية لمطعمنا. قللنا من عدد النادلين وزادت
            سرعة خدمة العملاء. التقارير والإحصائيات ساعدتنا في فهم تفضيلات العملاء وتحسين عروضنا.&quot;
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
  ;<section className="py-16 px-4" dir="rtl">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          الأسئلة <span className="text-orange-500">الشائعة</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-6 mx-auto" />
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          إجابات على الأسئلة الأكثر شيوعاً حول القائمة الإلكترونية
        </p>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden"
          >
            <button
              className="w-full p-6 text-right flex justify-between items-center"
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
            >
              <h3 className="text-xl font-bold">{faq.question}</h3>
              <ChevronRight
                className={`h-5 w-5 transition-transform duration-300 ${activeFaq === index ? "rotate-90" : ""}`}
              />
            </button>
            <AnimatePresence>
              {activeFaq === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-300">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  ;<section className="py-16 px-4 bg-orange-500 text-black">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">جاهز لتحويل قائمة مطعمك إلى تجربة رقمية؟</h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        سواء كنت تفضل القائمة البسيطة أو الكاملة، نحن هنا لمساعدتك في إنشاء قائمة إلكترونية تناسب احتياجات مطعمك وتحسن
        تجربة عملائك.
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
  <Footer />
      <FloatingWhatsAppIcon />
  </div>
  )
}

