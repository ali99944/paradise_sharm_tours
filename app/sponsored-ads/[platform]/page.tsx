"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"

import {
  ArrowRight,
  BarChart2,
  CheckCircle,
  DollarSign,
  ExternalLink,
  Eye,
  Globe,
  Heart,
  Info,
  Layers,
  LineChart,
  MessageSquare,
  MousePointer,
  PieChart,
  Target,
  Users,
  Zap,
} from "lucide-react"
import { FaAd, FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Footer from "@/src/components/shared/footer"
import FloatingWhatsAppIcon from "@/src/components/shared/floating-whatsapp"
import Navbar from "@/src/components/shared/navbar"


// Platform type
type Platform = {
    id: string
    name: string
    icon: React.ReactNode
    color: string
    description: string
    userBase: string
    demographics: {
      ageGroups: { label: string; percentage: number }[]
      genderSplit: { male: number; female: number }
      topCountries: string[]
    }
    adFormats: AdFormat[]
    targetingOptions: string[]
    metrics: {
      avgCPC: string
      avgCPM: string
      avgCTR: string
      avgConversionRate: string
    }
    minimumBudget: string
    bestFor: string[]
  }
  
  // Ad Format type
  type AdFormat = {
    id: string
    name: string
    description: string
    image: string
    specs: {
      dimensions: string
      fileSize: string
      length?: string
      format: string
    }
    placements: string[]
    bestFor: string[]
    averageCost: string
    performanceStats: {
      engagement: number
      ctr: number
      conversionRate: number
    }
  }
  
  // Offer type
  type Offer = {
    id: string
    title: string
    description: string
    originalPrice: string
    discountedPrice: string
    features: string[]
    popular?: boolean
    limitedTime?: boolean
    endDate?: string
  }
  
  // Case Study type
  type CaseStudy = {
    id: string
    title: string
    client: string
    industry: string
    challenge: string
    solution: string
    results: {
      reach: string
      engagement: string
      conversion: string
      roi: string
    }
    image: string
  }
  
  // FAQ type
  type FAQ = {
    question: string
    answer: string
  }
  
  // Platforms data
  const platforms: { [key: string]: Platform } = {
    "instagram": {
      id: "instagram",
      name: "انستجرام",
      icon: <FaInstagram className="h-6 w-6" />,
      color: "from-purple-600 to-pink-500",
      description: "منصة انستجرام هي إحدى أكبر منصات التواصل الاجتماعي المرئية في العالم، مع أكثر من مليار مستخدم نشط شهرياً. تتيح المنصة للمعلنين الوصول إلى جمهور واسع من خلال محتوى مرئي جذاب وإعلانات تفاعلية.",
      userBase: "+1 مليار مستخدم نشط شهرياً",
      demographics: {
        ageGroups: [
          { label: "13-17", percentage: 8 },
          { label: "18-24", percentage: 30 },
          { label: "25-34", percentage: 32 },
          { label: "35-44", percentage: 16 },
          { label: "45-54", percentage: 9 },
          { label: "55+", percentage: 5 }
        ],
        genderSplit: { male: 48, female: 52 },
        topCountries: ["الولايات المتحدة", "الهند", "البرازيل", "إندونيسيا", "روسيا"]
      },
      adFormats: [
        {
          id: "story-ads",
          name: "إعلانات القصص",
          description: "إعلانات بملء الشاشة تظهر بين قصص المستخدمين، مثالية للمحتوى المرئي الجذاب والدعوات للعمل",
          image: "/placeholder.svg?height=400&width=200",
          specs: {
            dimensions: "1080 × 1920 بكسل",
            fileSize: "أقل من 30 ميجابايت",
            length: "حتى 15 ثانية",
            format: "JPG, PNG, MP4"
          },
          placements: ["بين قصص المستخدمين", "قصص المشاهير", "قصص العلامات التجارية"],
          bestFor: ["زيادة الوعي بالعلامة التجارية", "الترويج للعروض المحدودة", "استهداف جمهور الشباب"],
          averageCost: "$0.70 - $3.00 لكل ألف ظهور",
          performanceStats: {
            engagement: 5.2,
            ctr: 1.5,
            conversionRate: 1.2
          }
        },
        {
          id: "feed-ads",
          name: "إعلانات الفيد",
          description: "إعلانات تظهر في الصفحة الرئيسية للمستخدمين، تندمج بشكل طبيعي مع المحتوى العضوي",
          image: "/placeholder.svg?height=600&width=600",
          specs: {
            dimensions: "1080 × 1080 بكسل (مربع)",
            fileSize: "أقل من 30 ميجابايت",
            format: "JPG, PNG, MP4"
          },
          placements: ["الصفحة الرئيسية", "بين منشورات المستخدمين"],
          bestFor: ["عرض المنتجات", "بناء متابعين", "زيادة التفاعل"],
          averageCost: "$0.50 - $2.50 لكل ألف ظهور",
          performanceStats: {
            engagement: 3.8,
            ctr: 0.9,
            conversionRate: 0.8
          }
        },
        {
          id: "reels-ads",
          name: "إعلانات الريلز",
          description: "إعلانات فيديو قصيرة تظهر بين مقاطع الريلز، مثالية للمحتوى الإبداعي والترفيهي",
          image: "/placeholder.svg?height=400&width=200",
          specs: {
            dimensions: "1080 × 1920 بكسل",
            fileSize: "أقل من 30 ميجابايت",
            length: "حتى 30 ثانية",
            format: "MP4"
          },
          placements: ["بين مقاطع الريلز", "اكتشاف الريلز"],
          bestFor: ["استهداف جيل Z", "المحتوى الإبداعي", "الاتجاهات الحالية"],
          averageCost: "$0.90 - $3.50 لكل ألف ظهور",
          performanceStats: {
            engagement: 6.5,
            ctr: 1.8,
            conversionRate: 1.4
          }
        },
        {
          id: "explore-ads",
          name: "إعلانات الاستكشاف",
          description: "إعلانات تظهر في قسم الاستكشاف، تستهدف المستخدمين بناءً على اهتماماتهم",
          image: "/placeholder.svg?height=600&width=600",
          specs: {
            dimensions: "1080 × 1080 بكسل",
            fileSize: "أقل من 30 ميجابايت",
            format: "JPG, PNG, MP4"
          },
          placements: ["صفحة الاستكشاف", "بين المحتوى المقترح"],
          bestFor: ["اكتشاف المنتجات", "استهداف اهتمامات محددة", "زيادة الوصول"],
          averageCost: "$0.60 - $2.80 لكل ألف ظهور",
          performanceStats: {
            engagement: 4.2,
            ctr: 1.2,
            conversionRate: 1.0
          }
        },
        {
          id: "shopping-ads",
          name: "إعلانات التسوق",
          description: "إعلانات قابلة للتسوق تتيح للمستخدمين شراء المنتجات مباشرة من الإعلان",
          image: "/placeholder.svg?height=600&width=600",
          specs: {
            dimensions: "1080 × 1080 بكسل",
            fileSize: "أقل من 30 ميجابايت",
            format: "JPG, PNG"
          },
          placements: ["الفيد", "القصص", "صفحة التسوق"],
          bestFor: ["بيع المنتجات", "التجارة الإلكترونية", "عرض كتالوج المنتجات"],
          averageCost: "$0.80 - $3.20 لكل ألف ظهور",
          performanceStats: {
            engagement: 3.5,
            ctr: 1.6,
            conversionRate: 1.8
          }
        }
      ],
      targetingOptions: [
        "الموقع الجغرافي",
        "العمر",
        "الجنس",
        "الاهتمامات",
        "السلوك",
        "الجماهير المتشابهة",
        "إعادة الاستهداف",
        "المتابعين",
        "المستخدمين الذين تفاعلوا مع المحتوى"
      ],
      metrics: {
        avgCPC: "$0.70 - $1.00",
        avgCPM: "$5.00 - $7.50",
        avgCTR: "0.8% - 1.6%",
        avgConversionRate: "1.0% - 1.5%"
      },
      minimumBudget: "$5 يومياً",
      bestFor: [
        "العلامات التجارية المرئية",
        "منتجات الأزياء والجمال",
        "المطاعم والسياحة",
        "التجارة الإلكترونية",
        "المؤثرين والعلامات التجارية الشخصية"
      ]
    },
    "facebook": {
      id: "facebook",
      name: "فيسبوك",
      icon: <FaFacebook className="h-6 w-6" />,
      color: "from-blue-600 to-blue-400",
      description: "فيسبوك هي أكبر منصة تواصل اجتماعي في العالم مع أكثر من 2.8 مليار مستخدم نشط شهرياً. توفر المنصة للمعلنين مجموعة واسعة من خيارات الاستهداف وأنواع الإعلانات للوصول إلى جمهورهم المستهدف.",
      userBase: "+2.8 مليار مستخدم نشط شهرياً",
      demographics: {
        ageGroups: [
          { label: "13-17", percentage: 5 },
          { label: "18-24", percentage: 23 },
          { label: "25-34", percentage: 27 },
          { label: "35-44", percentage: 20 },
          { label: "45-54", percentage: 14 },
          { label: "55+", percentage: 11 }
        ],
        genderSplit: { male: 43, female: 57 },
        topCountries: ["الهند", "الولايات المتحدة", "إندونيسيا", "البرازيل", "المكسيك"]
      },
      adFormats: [
        {
          id: "image-ads",
          name: "إعلانات الصور",
          description: "إعلانات بسيطة تتكون من صورة واحدة مع نص ورابط، مثالية للرسائل البسيطة والمباشرة",
          image: "/placeholder.svg?height=600&width=600",
          specs: {
            dimensions: "1200 × 628 بكسل",
            fileSize: "أقل من 30 ميجابايت",
            format: "JPG, PNG"
          },
          placements: ["الصفحة الرئيسية", "العمود الجانبي", "الأجهزة المحمولة"],
          bestFor: ["زيادة الوعي بالعلامة التجارية", "الترويج للعروض", "زيادة حركة المرور للموقع"],
          averageCost: "$0.30 - $1.20 لكل نقرة",
          performanceStats: {
            engagement: 3.2,
            ctr: 0.9,
            conversionRate: 0.9
          }
        },
        {
          id: "video-ads",
          name: "إعلانات الفيديو",
          description: "إعلانات فيديو تظهر في الصفحة الرئيسية، مثالية للمحتوى الجذاب والقصص المؤثرة",
          image: "/placeholder.svg?height=600&width=600",
          specs: {
            dimensions: "1280 × 720 بكسل",
            fileSize: "أقل من 4 جيجابايت",
            length: "حتى 240 دقيقة",
            format: "MP4, MOV"
          },
          placements: ["الصفحة الرئيسية", "الفيديوهات المقترحة", "بين الفيديوهات"],
          bestFor: ["سرد القصص", "شرح المنتجات", "زيادة التفاعل"],
          averageCost: "$0.10 - $0.30 لكل مشاهدة",
          performanceStats: {
            engagement: 4.5,
            ctr: 1.2,
            conversionRate: 1.1
          }
        },
        {
          id: "carousel-ads",
          name: "إعلانات الكاروسيل",
          description: "إعلانات تتيح عرض حتى 10 صور أو فيديوهات في إعلان واحد، مثالية لعرض مجموعة من المنتجات",
          image: "/placeholder.svg?height=600&width=600",
          specs: {
            dimensions: "1080 × 1080 بكسل لكل صورة",
            fileSize: "أقل من 30 ميجابايت لكل صورة",
            format: "JPG, PNG, MP4"
          },
          placements: ["الصفحة الرئيسية", "الأجهزة المحمولة", "الأجهزة المكتبية"],
          bestFor: ["عرض مجموعة منتجات", "التجارة الإلكترونية", "سرد قصة متسلسلة"],
          averageCost: "$0.40 - $1.50 لكل نقرة",
          performanceStats: {
            engagement: 3.8,
            ctr: 1.4,
            conversionRate: 1.3
          }
        },
        {
          id: "collection-ads",
          name: "إعلانات المجموعات",
          description: "إعلانات تجمع بين فيديو أو صورة رئيسية مع منتجات قابلة للتسوق أسفلها",
          image: "/placeholder.svg?height=600&width=600",
          specs: {
            dimensions: "1200 × 628 بكسل للصورة الرئيسية",
            fileSize: "أقل من 30 ميجابايت",
            format: "JPG, PNG, MP4"
          },
          placements: ["الصفحة الرئيسية على الأجهزة المحمولة"],
          bestFor: ["التجارة الإلكترونية", "عرض كتالوج المنتجات", "زيادة المبيعات"],
          averageCost: "$0.50 - $1.80 لكل نقرة",
          performanceStats: {
            engagement: 3.5,
            ctr: 1.5,
            conversionRate: 1.6
          }
        },
        {
          id: "instant-experience-ads",
          name: "إعلانات التجربة الفورية",
          description: "إعلانات تفتح تجربة بملء الشاشة عند النقر عليها، تتيح للمستخدمين استكشاف العلامة التجارية",
          image: "/placeholder.svg?height=600&width=600",
          specs: {
            dimensions: "متنوعة",
            fileSize: "متنوعة",
            format: "JPG, PNG, MP4"
          },
          placements: ["الصفحة الرئيسية على الأجهزة المحمولة"],
          bestFor: ["تجارب العلامة التجارية الغامرة", "سرد القصص", "عرض المنتجات بالتفصيل"],
          averageCost: "$0.60 - $2.00 لكل نقرة",
          performanceStats: {
            engagement: 5.0,
            ctr: 1.3,
            conversionRate: 1.2
          }
        }
      ],
      targetingOptions: [
        "الموقع الجغرافي",
        "العمر",
        "الجنس",
        "اللغة",
        "الاهتمامات",
        "السلوك",
        "التعليم",
        "الوظيفة",
        "الحالة الاجتماعية",
        "الأحداث الحياتية",
        "الجماهير المتشابهة",
        "إعادة الاستهداف"
      ],
      metrics: {
        avgCPC: "$0.50 - $0.80",
        avgCPM: "$7.00 - $10.00",
        avgCTR: "0.9% - 1.8%",
        avgConversionRate: "0.9% - 1.4%"
      },
      minimumBudget: "$1 يومياً",
      bestFor: [
        "الشركات المحلية",
        "التجارة الإلكترونية",
        "الخدمات B2B",
        "التطبيقات والألعاب",
        "الفعاليات والمناسبات"
      ]
    },
    "tiktok": {
      id: "tiktok",
      name: "تيك توك",
      icon: <FaTiktok className="h-6 w-6" />,
      color: "from-black to-gray-800",
      description: "تيك توك هي منصة مقاطع فيديو قصيرة سريعة النمو مع أكثر من مليار مستخدم نشط شهرياً. تتيح المنصة للمعلنين الوصول إلى جمهور شاب من خلال محتوى إبداعي وترفيهي.",
      userBase: "+1 مليار مستخدم نشط شهرياً",
      demographics: {
        ageGroups: [
          { label: "13-17", percentage: 28 },
          { label: "18-24", percentage: 35 },
          { label: "25-34", percentage: 22 },
          { label: "35-44", percentage: 10 },
          { label: "45-54", percentage: 3 },
          { label: "55+", percentage: 2 }
        ],
        genderSplit: { male: 39, female: 61 },
        topCountries: ["الولايات المتحدة", "إندونيسيا", "البرازيل", "روسيا", "المكسيك"]
      },
      adFormats: [
        {
          id: "in-feed-ads",
          name: "إعلانات داخل الفيد",
          description: "إعلانات فيديو تظهر في الصفحة الرئيسية 'للك' وتندمج بشكل طبيعي مع المحتوى العضوي",
          image: "/placeholder.svg?height=400&width=200",
          specs: {
            dimensions: "1080 × 1920 بكسل",
            fileSize: "أقل من 500 ميجابايت",
            length: "9-15 ثانية",
            format: "MP4, MOV"
          },
          placements: ["الصفحة الرئيسية 'للك'"],
          bestFor: ["زيادة الوعي بالعلامة التجارية", "استهداف جيل Z", "المحتوى الإبداعي"],
          averageCost: "$10.00 - $15.00 لكل ألف ظهور",
          performanceStats: {
            engagement: 7.5,
            ctr: 1.6,
            conversionRate: 1.2
          }
        },
        {
          id: "topview-ads",
          name: "إعلانات العرض العلوي",
          description: "إعلانات فيديو بملء الشاشة تظهر عند فتح التطبيق، مما يضمن رؤية عالية",
          image: "/placeholder.svg?height=400&width=200",
          specs: {
            dimensions: "1080 × 1920 بكسل",
            fileSize: "أقل من 500 ميجابايت",
            length: "5-60 ثانية",
            format: "MP4, MOV"
          },
          placements: ["عند فتح التطبيق"],
          bestFor: ["إطلاق منتجات جديدة", "حملات كبيرة", "زيادة الوعي بالعلامة التجارية"],
          averageCost: "$50,000 - $65,000 لكل يوم",
          performanceStats: {
            engagement: 8.5,
            ctr: 2.0,
            conversionRate: 1.5
          }
        },
        {
          id: "branded-hashtag-challenge",
          name: "تحدي الهاشتاج المدعوم",
          description: "حملة تشجع المستخدمين على إنشاء محتوى حول هاشتاج معين، مما يخلق مشاركة واسعة",
          image: "/placeholder.svg?height=400&width=200",
          specs: {
            dimensions: "1080 × 1920 بكسل",
            fileSize: "أقل من 500 ميجابايت",
            length: "حتى 60 ثانية",
            format: "MP4, MOV"
          },
          placements: ["صفحة الاستكشاف", "صفحة التحديات"],
          bestFor: ["توليد محتوى المستخدم", "زيادة الوعي بالعلامة التجارية", "إطلاق منتجات جديدة"],
          averageCost: "$100,000 - $150,000 لكل تحدي",
          performanceStats: {
            engagement: 9.5,
            ctr: 2.2,
            conversionRate: 1.8
          }
        },
        {
          id: "branded-effects",
          name: "المؤثرات المدعومة",
          description: "مؤثرات AR مخصصة يمكن للمستخدمين استخدامها في مقاطع الفيديو الخاصة بهم",
          image: "/placeholder.svg?height=400&width=200",
          specs: {
            dimensions: "متنوعة",
            fileSize: "متنوعة",
            format: "متنوعة"
          },
          placements: ["مكتبة المؤثرات"],
          bestFor: ["تجارب تفاعلية", "زيادة الوعي بالعلامة التجارية", "توليد محتوى المستخدم"],
          averageCost: "$80,000 - $120,000 لكل مؤثر",
          performanceStats: {
            engagement: 8.0,
            ctr: 1.8,
            conversionRate: 1.3
          }
        }
      ],
      targetingOptions: [
        "الموقع الجغرافي",
        "العمر",
        "الجنس",
        "اللغة",
        "الاهتمامات",
        "سلوك المستخدم",
        "نوع الجهاز",
        "نظام التشغيل"
      ],
      metrics: {
        avgCPC: "$1.00 - $1.50",
        avgCPM: "$10.00 - $15.00",
        avgCTR: "1.5% - 3.0%",
        avgConversionRate: "1.1% - 1.7%"
      },
      minimumBudget: "$50 يومياً",
      bestFor: [
        "العلامات التجارية التي تستهدف جيل Z",
        "المحتوى الإبداعي والترفيهي",
        "التحديات والاتجاهات",
        "منتجات الأزياء والجمال",
        "الموسيقى والترفيه"
      ]
    },
    "twitter": {
      id: "twitter",
      name: "تويتر",
      icon: <FaTwitter className="h-6 w-6" />,
      color: "from-blue-500 to-blue-300",
      description: "تويتر هي منصة للتدوين المصغر مع أكثر من 330 مليون مستخدم نشط شهرياً. تتيح المنصة للمعلنين الوصول إلى جمهور مثقف ومؤثر من خلال محتوى موجز وفعال.",
      userBase: "+330 مليون مستخدم نشط شهرياً",
      demographics: {
        ageGroups: [
          { label: "13-17", percentage: 6 },
          { label: "18-24", percentage: 20 },
          { label: "25-34", percentage: 30 },
          { label: "35-44", percentage: 23 },
          { label: "45-54", percentage: 14 },
          { label: "55+", percentage: 7 }
        ],
        genderSplit: { male: 62, female: 38 },
        topCountries: ["الولايات المتحدة", "اليابان", "المملكة المتحدة", "البرازيل", "تركيا"]
      },
      adFormats: [
        {
          id: "promoted-tweets",
          name: "التغريدات المروجة",
          description: "تغريدات مدفوعة تظهر في الخلاصة الزمنية للمستخدمين المستهدفين، تبدو مثل التغريدات العادية",
          image: "/placeholder.svg?height=600&width=600",
          specs: {
            dimensions: "غير محدد",
            fileSize: "أقل من 15 ميجابايت للصور",
            length: "حتى 2 دقيقة و20 ثانية للفيديو",
            format: "JPG, PNG, GIF, MP4"
          },
          placements: ["الخلاصة الزمنية", "نتائج البحث", "الملفات الشخصية"],
          bestFor: ["مشاركة الأخبار", "المحتوى الموجز", "المشاركة في المحادثات الحالية"],
          averageCost: "$0.50 - $2.00 لكل تفاعل",
          performanceStats: {
            engagement: 2.5,
            ctr: 1.0,
            conversionRate: 0.9
          }
        },
        {
          id: "promoted-accounts",
          name: "الحسابات المروجة",
          description: "إعلانات تروج لحساب معين وتظهر في اقتراحات المتابعة وفي نتائج البحث",
          image: "/placeholder.svg?height=600&width=600",
          specs: {
            dimensions: "400 × 400 بكسل للصورة الشخصية",
            fileSize: "أقل من 2 ميجابايت",
            format: "JPG, PNG"
          },
          placements: ["اقتراحات المتابعة", "نتائج البحث"],
          bestFor: ["زيادة المتابعين", "بناء جمهور", "زيادة الوعي بالعلامة التجارية"],
          averageCost: "$2.00 - $4.00 لكل متابع جديد",
          performanceStats: {
            engagement: 1.8,
            ctr: 0.8,
            conversionRate: 0.7
          }
        },
        {
          id: "promoted-trends",
          name: "الترندات المروجة",
          description: "هاشتاج مدفوع يظهر في قائمة الترندات، مما يزيد من ظهور العلامة التجارية",
          image: "/placeholder.svg?height=600&width=600",
          specs: {
            dimensions: "غير محدد",
            fileSize: "غير محدد",
            format: "نص"
          },
          placements: ["قائمة الترندات", "الصفحة الرئيسية"],
          bestFor: ["إطلاق منتجات كبيرة", "الفعاليات", "الحملات الكبيرة"],
          averageCost: "$200,000+ لكل يوم",
          performanceStats: {
            engagement: 3.5,
            ctr: 1.2,
            conversionRate: 0.8
          }
        }
      ],
      targetingOptions: [
        "الموقع الجغرافي",
        "اللغة",
        "الكلمات المفتاحية",
        "الاهتمامات",
        "المتابعين المتشابهين",
        "السلوك",
        "الأحداث",
        "الأفلام والتلفزيون"
      ],
      metrics: {
        avgCPC: "$0.50 - $2.00",
        avgCPM: "$6.00 - $8.00",
        avgCTR: "1.0% - 2.0%",
        avgConversionRate: "0.8% - 1.2%"
      },
      minimumBudget: "$50 يومياً",
      bestFor: [
        "الأخبار والمحتوى الحالي",
        "B2B والخدمات المهنية",
        "التكنولوجيا والابتكار",
        "الفعاليات والمؤتمرات",
        "المحتوى السياسي والاجتماعي"
      ]
    },
    "youtube": {
      id: "youtube",
      name: "يوتيوب",
      icon: <FaYoutube className="h-6 w-6" />,
      color: "from-red-600 to-red-400",
      description: "يوتيوب هي أكبر منصة لمشاركة الفيديو في العالم مع أكثر من 2.3 مليار مستخدم نشط شهرياً. تتيح المنصة للمعلنين الوصول إلى جمهور واسع من خلال إعلانات فيديو متنوعة.",
      userBase: "+2.3 مليار مستخدم نشط شهرياً",
      demographics: {
        ageGroups: [
          { label: "13-17", percentage: 12 },
          { label: "18-24", percentage: 22 },
          { label: "25-34", percentage: 27 },
          { label: "35-44", percentage: 20 },
          { label: "45-54", percentage: 12 },
          { label: "55+", percentage: 7 }
        ],
        genderSplit: { male: 55, female: 45 },
        topCountries: ["الولايات المتحدة", "الهند", "البرازيل", "اليابان", "روسيا"]
      },
      adFormats: [
        {
          id: "skippable-ads",
          name: "إعلانات قابلة للتخطي",
          description: "إعلانات فيديو يمكن تخطيها بعد 5 ثوانٍ، تظهر قبل أو أثناء أو بعد الفيديو",
          image: "/placeholder.svg?height=600&width=600",
          specs: {
            dimensions: "1920 × 1080 بكسل",
            fileSize: "أقل من 1 جيجابايت",
            length: "12 ثانية إلى 3 دقائق",
            format: "MP4, MOV"
          },
          placements: ["قبل الفيديو", "أثناء الفيديو", "بعد الفيديو"],
          bestFor: ["سرد القصص", "الإعلانات التلفزيونية", "المحتوى الطويل"],
          averageCost: "$0.10 - $0.30 لكل مشاهدة",
          performanceStats: {
            engagement: 3.0,
            ctr: 1.0,
            conversionRate: 0.8
          }
        },
        {
          id: "non-skippable-ads",
          name: "إعلانات غير قابلة للتخطي",
          description: "إعلانات فيديو قصيرة لا يمكن تخطيها، تظهر قبل أو أثناء الفيديو",
          image: "/placeholder.svg?height=600&width=600",
          specs: {
            dimensions: "1920 × 1080 بكسل",
            fileSize: "أقل من 1 جيجابايت",
            length: "15-20 ثانية",
            format: "MP4, MOV"
          },
          placements: ["قبل الفيديو", "أثناء الفيديو"],
          bestFor: ["رسائل قصيرة ومباشرة", "زيادة الوعي بالعلامة التجارية", "الحملات ذات الميزانية العالية"],
          averageCost: "$0.15 - $0.40 لكل مشاهدة",
          performanceStats: {
            engagement: 2.5,
            ctr: 0.8,
            conversionRate: 0.7
          }
        },
        {
          id: "bumper-ads",
          name: "إعلانات المصدات",
          description: "إعلانات فيديو قصيرة جداً غير قابلة للتخطي، تظهر قبل الفيديو",
          image: "/placeholder.svg?height=600&width=600",
          specs: {
            dimensions: "1920 × 1080 بكسل",
            fileSize: "أقل من 1 جيجابايت",
            length: "6 ثوانٍ",
            format: "MP4, MOV"
          },
          placements: ["قبل الفيديو"],
          bestFor: ["رسائل قصيرة ومباشرة", "تعزيز حملات أكبر", "زيادة الوعي بالعلامة التجارية"],
          averageCost: "$5.00 - $10.00 لكل ألف ظهور",
          performanceStats: {
            engagement: 2.0,
            ctr: 0.7,
            conversionRate: 0.6
          }
        },
        {
          id: "overlay-ads",
          name: "إعلانات التراكب",
          description: "إعلانات نصية أو صور شفافة تظهر في الجزء السفلي من الفيديو",
          image: "/placeholder.svg?height=600&width=600",
          specs: {
            dimensions: "480 × 70 بكسل",
            fileSize: "أقل من 150 كيلوبايت",
            format: "JPG, PNG, GIF"
          },
          placements: ["أسفل الفيديو"],
          bestFor: ["دعوات للعمل", "الترويج للعروض", "تكلفة منخفضة"],
          averageCost: "$2.00 - $5.00 لكل ألف ظهور",
          performanceStats: {
            engagement: 1.5,
            ctr: 0.5,
            conversionRate: 0.4
          }
        },
        {
          id: "display-ads",
          name: "إعلانات العرض",
          description: "إعلانات صور تظهر على يمين الفيديو المقترح وفوق قائمة الاقتراحات",
          image: "/placeholder.svg?height=600&width=600",
          specs: {
            dimensions: "300 × 250 بكسل",
            fileSize: "أقل من 150 كيلوبايت",
            format: "JPG, PNG, GIF"
          },
          placements: ["يمين الفيديو", "فوق قائمة الاقتراحات"],
          bestFor: ["زيادة الوعي بالعلامة التجارية", "تكلفة منخفضة", "الترويج للعروض"],
          averageCost: "$2.00 - $5.00 لكل ألف ظهور",
          performanceStats: {
            engagement: 1.0,
            ctr: 0.4,
            conversionRate: 0.3
          }
        }
      ],
      targetingOptions: [
        "الموقع الجغرافي",
        "العمر",
        "الجنس",
        "الاهتمامات",
        "الموضوعات",
        "الكلمات المفتاحية",
        "المنتجات والخدمات",
        "قنوات وفيديوهات محددة",
        "الأحداث الحياتية"
      ],
      metrics: {
        avgCPC: "$0.10 - $0.30",
        avgCPM: "$10.00 - $15.00",
        avgCTR: "0.5% - 1.5%",
        avgConversionRate: "0.5% - 1.0%"
      },
      minimumBudget: "$10 يومياً",
      bestFor: [
        "المحتوى المرئي الطويل",
        "التعليم والشرح",
        "المراجعات والعروض التوضيحية",
        "الترفيه والموسيقى",
        "الألعاب والتكنولوجيا"
      ]
    },
    "google": {
      id: "google",
      name: "جوجل",
      icon: <Globe className="h-6 w-6" />,
      color: "from-green-500 to-green-300",
      description: "جوجل هي أكبر محرك بحث في العالم مع مليارات عمليات البحث يومياً. توفر منصة Google Ads للمعلنين الوصول إلى جمهور واسع بناءً على نوايا البحث والاهتمامات.",
      userBase: "+4 مليار مستخدم نشط شهرياً",
      demographics: {
        ageGroups: [
          { label: "13-17", percentage: 8 },
          { label: "18-24", percentage: 18 },
          { label: "25-34", percentage: 25 },
          { label: "35-44", percentage: 22 },
          { label: "45-54", percentage: 15 },
          { label: "55+", percentage: 12 }
        ],
        genderSplit: { male: 50, female: 50 },
        topCountries: ["الولايات المتحدة", "الهند", "البرازيل", "اليابان", "المملكة المتحدة"]
      },
      adFormats: [
        {
          id: "search-ads",
          name: "إعلانات البحث",
          description: "إعلانات نصية تظهر في نتائج البحث عند بحث المستخدمين عن كلمات مفتاحية محددة",
          image: "/placeholder.svg?height=600&width=600",
          specs: {
            dimensions: "غير محدد",
            fileSize: "غير محدد",
            format: "نص"
          },
          placements: ["أعلى نتائج البحث", "أسفل نتائج البحث"],
          bestFor: ["استهداف نوايا البحث", "زيادة حركة المرور للموقع", "زيادة المبيعات والعملاء المحتملين"],
          averageCost: "$1.00 - $5.00 لكل نقرة",
          performanceStats: {
            engagement: 2.0,
            ctr: 3.5,
            conversionRate: 2.5
          }
        },
        {
          id: "display-ads",
          name: "إعلانات العرض",
          description: "إعلانات صور تظهر على مواقع شبكة Google للإعلانات، تستهدف المستخدمين بناءً على اهتماماتهم",
          image: "/placeholder.svg?height=600&width=600",
          specs: {
            dimensions: "متعددة",
            fileSize: "أقل من 150 كيلوبايت",
            format: "JPG, PNG, GIF"
          },
          placements: ["مواقع شبكة Google للإعلانات", "التطبيقات", "اليوتيوب"],
          bestFor: ["زيادة الوعي بالعلامة التجارية", "إعادة الاستهداف", "الحملات البصرية"],
          averageCost: "$0.50 - $2.00 لكل ألف ظهور",
          performanceStats: {
            engagement: 1.5,
            ctr: 0.5,
            conversionRate: 0.5
          }
        },
        {
          id: "shopping-ads",
          name: "إعلانات التسوق",
          description: "إعلانات منتجات تظهر في نتائج البحث وتعرض صورة المنتج والسعر والعلامة التجارية",
          image: "/placeholder.svg?height=600&width=600",
          specs: {
            dimensions: "غير محدد",
            fileSize: "غير محدد",
            format: "متنوع"
          },
          placements: ["نتائج البحث", "علامة التبويب 'تسوق'", "اليوتيوب"],
          bestFor: ["بيع المنتجات", "التجارة الإلكترونية", "زيادة المبيعات"],
          averageCost: "$0.50 - $3.00 لكل نقرة",
          performanceStats: {
            engagement: 2.5,
            ctr: 1.5,
            conversionRate: 1.8
          }
        },
        {
          id: "video-ads",
          name: "إعلانات الفيديو",
          description: "إعلانات فيديو تظهر على يوتيوب ومواقع وتطبيقات شبكة Google للفيديو",
          image: "/placeholder.svg?height=600&width=600",
          specs: {
            dimensions: "1920 × 1080 بكسل",
            fileSize: "أقل من 1 جيجابايت",
            length: "متنوعة",
            format: "MP4, MOV"
          },
          placements: ["يوتيوب", "مواقع شبكة Google للفيديو"],
          bestFor: ["سرد القصص", "زيادة الوعي بالعلامة التجارية", "الترويج للمنتجات والخدمات"],
          averageCost: "$0.10 - $0.30 لكل مشاهدة",
          performanceStats: {
            engagement: 3.0,
            ctr: 1.0,
            conversionRate: 0.8
          }
        },
        {
          id: "app-promotion-ads",
          name: "إعلانات الترويج للتطبيقات",
          description: "إعلانات مصممة لزيادة تنزيلات التطبيقات، تظهر في نتائج البحث ومتجر Google Play وشبكة Google للإعلانات",
          image: "/placeholder.svg?height=600&width=600",
          specs: {
            dimensions: "متعددة",
            fileSize: "متنوع",
            format: "متنوع"
          },
          placements: ["نتائج البحث", "متجر Google Play", "شبكة Google للإعلانات", "يوتيوب"],
          bestFor: ["زيادة تنزيلات التطبيقات", "زيادة مشاركة المستخدمين", "الترويج للتطبيقات الجديدة"],
          averageCost: "$0.50 - $3.00 لكل تثبيت",
          performanceStats: {
            engagement: 2.0,
            ctr: 1.2,
            conversionRate: 1.5
          }
        }
      ],
      targetingOptions: [
        "الكلمات المفتاحية",
        "الموقع الجغرافي",
        "اللغة",
        "الجهاز",
        "الاهتمامات",
        "الموضوعات",
        "إعادة الاستهداف",
        "الجماهير المتشابهة",
        "البيانات الديموغرافية"
      ],
      metrics: {
        avgCPC: "$1.00 - $5.00",
        avgCPM: "$2.00 - $5.00",
        avgCTR: "1.5% - 3.5%",
        avgConversionRate: "1.0% - 3.0%"
      },
      minimumBudget: "$5 يومياً",
      bestFor: [
        "استهداف نوايا البحث",
        "التجارة الإلكترونية",
        "الخدمات المحلية",
        "B2B والخدمات المهنية",
        "الترويج للتطبيقات"
      ]
    }
  }
  
  // Special offers data
  const specialOffers: Offer[] = [
    {
      id: "starter-package",
      title: "باقة المبتدئين",
      description: "باقة مثالية للشركات الصغيرة والمتوسطة التي تبدأ رحلتها في الإعلانات المدفوعة",
      originalPrice: "3,000 ريال",
      discountedPrice: "1,999 ريال",
      features: [
        "إدارة حملة إعلانية على منصة واحدة",
        "ميزانية إعلانية بقيمة 1,000 ريال",
        "تصميم 5 إعلانات احترافية",
        "استهداف دقيق للجمهور",
        "تقرير أداء أسبوعي",
        "دعم فني لمدة شهر"
      ],
      limitedTime: true,
      endDate: "2025-04-30"
    },
    {
      id: "growth-package",
      title: "باقة النمو",
      description: "باقة متكاملة للشركات التي تسعى لتوسيع نطاق وصولها وزيادة مبيعاتها",
      originalPrice: "7,500 ريال",
      discountedPrice: "4,999 ريال",
      features: [
        "إدارة حملات إعلانية على 3 منصات",
        "ميزانية إعلانية بقيمة 3,000 ريال",
        "تصميم 10 إعلانات احترافية",
        "استهداف متقدم للجمهور",
        "إعادة استهداف الزوار",
        "تحسين مستمر للحملات",
        "تقرير أداء أسبوعي مفصل",
        "دعم فني لمدة 3 أشهر"
      ],
      popular: true,
      limitedTime: true,
      endDate: "2025-04-30"
    },
    {
      id: "premium-package",
      title: "الباقة المتميزة",
      description: "باقة شاملة للشركات الكبيرة والعلامات التجارية التي تسعى لتحقيق نتائج استثنائية",
      originalPrice: "15,000 ريال",
      discountedPrice: "9,999 ريال",
      features: [
        "إدارة حملات إعلانية على جميع المنصات",
        "ميزانية إعلانية بقيمة 7,000 ريال",
        "تصميم إعلانات غير محدود",
        "استهداف متقدم مع تحليل البيانات",
        "استراتيجية إعلانية متكاملة",
        "تحليل المنافسين",
        "اختبار A/B للإعلانات",
        "تقارير أداء يومية مفصلة",
        "مدير حساب مخصص",
        "دعم فني لمدة 6 أشهر"
      ],
      limitedTime: true,
      endDate: "2025-04-30"
    }
  ]
  
  // Case studies data
  const caseStudies: { [key: string]: CaseStudy[] } = {
    "instagram": [
      {
        id: "instagram-case-1",
        title: "زيادة مبيعات منتجات التجميل",
        client: "شركة بيوتي لاين",
        industry: "مستحضرات التجميل",
        challenge: "كانت شركة بيوتي لاين تواجه صعوبة في الوصول إلى جمهورها المستهدف وزيادة مبيعاتها عبر الإنترنت",
        solution: "قمنا بتطوير استراتيجية إعلانية متكاملة على انستجرام تشمل إعلانات القصص وإعلانات الفيد وإعلانات التسوق، مع استهداف دقيق للنساء المهتمات بمنتجات التجميل",
        results: {
          reach: "+500,000",
          engagement: "+25,000",
          conversion: "+1,200",
          roi: "+320%"
        },
        image: "/placeholder.svg?height=600&width=800"
      },
      {
        id: "instagram-case-2",
        title: "إطلاق مطعم جديد",
        client: "مطعم فلافورز",
        industry: "المطاعم",
        challenge: "كان مطعم فلافورز يحتاج إلى بناء وعي بالعلامة التجارية وجذب العملاء لفرعه الجديد",
        solution: "قمنا بتصميم حملة إعلانية على انستجرام تستهدف سكان المنطقة المحيطة بالمطعم، مع التركيز على إعلانات القصص وإعلانات الفيد التي تعرض أطباق المطعم الشهية",
        results: {
          reach: "+200,000",
          engagement: "+15,000",
          conversion: "+800",
          roi: "+250%"
        },
        image: "/placeholder.svg?height=600&width=800"
      }
    ],
    "facebook": [
      {
        id: "facebook-case-1",
        title: "زيادة مبيعات متجر إلكتروني",
        client: "متجر تيك شوب",
        industry: "التجارة الإلكترونية",
        challenge: "كان متجر تيك شوب يسعى لزيادة مبيعاته عبر الإنترنت وتحسين معدل التحويل",
        solution: "قمنا بتطوير استراتيجية إعلانية على فيسبوك تشمل إعلانات الكاروسيل وإعلانات المجموعات، مع استهداف المهتمين بالتكنولوجيا وإعادة استهداف زوار الموقع",
        results: {
          reach: "+800,000",
          engagement: "+35,000",
          conversion: "+2,500",
          roi: "+380%"
        },
        image: "/placeholder.svg?height=600&width=800"
      },
      {
        id: "facebook-case-2",
        title: "الترويج لدورات تعليمية",
        client: "أكاديمية المستقبل",
        industry: "التعليم",
        challenge: "كانت أكاديمية المستقبل تحتاج إلى زيادة عدد المسجلين في دوراتها التعليمية عبر الإنترنت",
        solution: "قمنا بتصميم حملة إعلانية على فيسبوك تستهدف الطلاب والمهنيين الراغبين في تطوير مهاراتهم، مع التركيز على إعلانات الفيديو وإعلانات الصور",
        results: {
          reach: "+600,000",
          engagement: "+28,000",
          conversion: "+1,800",
          roi: "+300%"
        },
        image: "/placeholder.svg?height=600&width=800"
      }
    ],
    "tiktok": [
      {
        id: "tiktok-case-1",
        title: "إطلاق منتج جديد للشباب",
        client: "شركة سبورت ستايل",
        industry: "الأزياء الرياضية",
        challenge: "كانت شركة سبورت ستايل تحتاج إلى الترويج لمجموعتها الجديدة من الملابس الرياضية للشباب",
        solution: "قمنا بتطوير حملة إعلانية على تيك توك تشمل إعلانات داخل الفيد وتحدي هاشتاج مدعوم، مع التعاون مع مؤثرين في مجال الرياضة واللياقة البدنية",
        results: {
          reach: "+1,200,000",
          engagement: "+150,000",
          conversion: "+3,500",
          roi: "+420%"
        },
        image: "/placeholder.svg?height=600&width=800"
      }
    ],
    "twitter": [
      {
        id: "twitter-case-1",
        title: "الترويج لمؤتمر تقني",
        client: "شركة تيك كونفرنس",
        industry: "الفعاليات التقنية",
        challenge: "كانت شركة تيك كونفرنس تحتاج إلى زيادة عدد المسجلين في مؤتمرها التقني السنوي وزيادة الوعي بالحدث",
        solution: "قمنا بتطوير حملة إعلانية على تويتر تستهدف المهتمين بالتكنولوجيا والابتكار، مع التركيز على التغريدات المروجة والترندات المدفوعة خلال الأسابيع التي تسبق المؤتمر",
        results: {
          reach: "+400,000",
          engagement: "+25,000",
          conversion: "+1,200",
          roi: "+280%"
        },
        image: "/placeholder.svg?height=600&width=800"
      }
    ],
    "youtube": [
      {
        id: "youtube-case-1",
        title: "الترويج لتطبيق تعليمي",
        client: "شركة إديوكيشن آب",
        industry: "التعليم والتكنولوجيا",
        challenge: "كانت شركة إديوكيشن آب تحتاج إلى زيادة عدد تنزيلات تطبيقها التعليمي الجديد",
        solution: "قمنا بتطوير حملة إعلانية على يوتيوب تشمل إعلانات قابلة للتخطي وإعلانات المصدات، مع استهداف الطلاب وأولياء الأمور المهتمين بالتعليم الإلكتروني",
        results: {
          reach: "+900,000",
          engagement: "+45,000",
          conversion: "+5,000",
          roi: "+350%"
        },
        image: "/placeholder.svg?height=600&width=800"
      }
    ],
    "google": [
      {
        id: "google-case-1",
        title: "زيادة عملاء شركة عقارية",
        client: "شركة هوم إستيت",
        industry: "العقارات",
        challenge: "كانت شركة هوم إستيت تحتاج إلى زيادة عدد العملاء المحتملين لمشاريعها العقارية الجديدة",
        solution: "قمنا بتطوير حملة إعلانية على جوجل تشمل إعلانات البحث وإعلانات العرض، مع استهداف الباحثين عن العقارات في المناطق المستهدفة",
        results: {
          reach: "+300,000",
          engagement: "+18,000",
          conversion: "+850",
          roi: "+320%"
        },
        image: "/placeholder.svg?height=600&width=800"
      }
    ]
  }
  
  // FAQ data
  const faqs: { [key: string]: FAQ[] } = {
    "instagram": [
      {
        question: "ما هي أفضل أنواع الإعلانات على انستجرام؟",
        answer: "تعتمد أفضل أنواع الإعلانات على أهدافك التسويقية. إعلانات القصص مثالية للمحتوى المرئي الجذاب والدعوات للعمل، بينما إعلانات الفيد مناسبة لعرض المنتجات وبناء المتابعين. إعلانات الريلز فعالة للمحتوى الإبداعي واستهداف جيل Z، وإعلانات التسوق مثالية للتجارة الإلكترونية."
      },
      {
        question: "ما هي الميزانية المناسبة للإعلان على انستجرام؟",
        answer: "الميزانية المناسبة تختلف حسب أهدافك وحجم جمهورك المستهدف. يمكنك البدء بميزانية يومية تتراوح بين 5-10 دولارات للاختبار، ثم زيادتها تدريجياً بناءً على النتائج. للحملات الأكبر، ننصح بميزانية شهرية لا تقل عن 500 دولار للحصول على نتائج ملموسة."
      },
      {
        question: "كيف يمكنني قياس نجاح حملتي الإعلانية على انستجرام؟",
        answer: "يمكنك قياس نجاح حملتك من خلال متابعة مؤشرات الأداء الرئيسية مثل الوصول والانطباعات ومعدل التفاعل ومعدل النقر ومعدل التحويل والعائد على الاستثمار. توفر منصة إعلانات فيسبوك (التي تدير إعلانات انستجرام) تقارير مفصلة عن هذه المؤشرات."
      },
      {
        question: "ما هي أفضل الممارسات لإعلانات انستجرام؟",
        answer: "أفضل الممارسات تشمل: استخدام صور وفيديوهات عالية الجودة، كتابة نصوص قصيرة وجذابة، استخدام دعوات للعمل واضحة، استهداف دقيق للجمهور، اختبار عدة إصدارات من الإعلان، والتركيز على القيمة التي تقدمها للمستخدم بدلاً من مجرد الترويج للمنتج."
      },
      {
        question: "هل يمكنني استهداف جمهور منافسي على انستجرام؟",
        answer: "لا يمكنك استهداف متابعي منافسيك بشكل مباشر، ولكن يمكنك إنشاء جماهير متشابهة بناءً على جمهورك الحالي، أو استهداف المستخدمين بناءً على اهتماماتهم التي قد تتداخل مع اهتمامات متابعي منافسيك."
      }
    ],
    "facebook": [
      {
        question: "ما هي أفضل أنواع الإعلانات على فيسبوك؟",
        answer: "تعتمد أفضل أنواع الإعلانات على أهدافك التسويقية. إعلانات الصور مناسبة للرسائل البسيطة، وإعلانات الفيديو فعالة لسرد القصص، وإعلانات الكاروسيل مثالية لعرض مجموعة من المنتجات، وإعلانات المجموعات مناسبة للتجارة الإلكترونية."
      },
      {
        question: "كيف يمكنني تحسين معدل التحويل في إعلانات فيسبوك؟",
        answer: "لتحسين معدل التحويل، ركز على: استهداف دقيق للجمهور، تصميم إعلانات جذابة، كتابة نصوص مقنعة، استخدام صفحات هبوط مخصصة، اختبار A/B للإعلانات، وتحسين تجربة المستخدم على موقعك."
      },
      {
        question: "ما هي ميزة الجماهير المتشابهة في فيسبوك؟",
        answer: "الجماهير المتشابهة هي ميزة تتيح لك استهداف مستخدمين جدد يشبهون عملاءك الحاليين في اهتماماتهم وسلوكهم الشرائي. تستخدم فيسبوك خوارزميات متقدمة لتحديد هؤلاء المستخدمين، مما يزيد من فرص نجاح حملتك الإعلانية."
      },
      {
        question: "هل يمكنني استهداف مستخدمين محددين على فيسبوك؟",
        answer: "نعم، يمكنك استهداف مستخدمين محددين من خلال: الاستهداف الديموغرافي (العمر، الجنس، الموقع)، الاستهداف حسب الاهتمامات والسلوك، إعادة استهداف زوار موقعك، استهداف قائمة عملائك الحاليين (Custom Audiences)، واستهداف الجماهير المتشابهة."
      },
      {
        question: "ما هو الحد الأدنى للميزانية اليومية على فيسبوك؟",
        answer: "الحد الأدنى للميزانية اليومية على فيسبوك هو 1 دولار، ولكن للحصول على نتائج فعالة، ننصح بميزانية يومية لا تقل عن 5-10 دولارات للاختبار، وزيادتها تدريجياً بناءً على النتائج."
      }
    ],
    "tiktok": [
      {
        question: "هل تيك توك مناسب لجميع أنواع الأعمال؟",
        answer: "تيك توك مناسب بشكل خاص للعلامات التجارية التي تستهدف الجمهور الشاب (13-34 سنة) وتلك التي يمكنها تقديم محتوى إبداعي وترفيهي. الصناعات التي تنجح بشكل خاص تشمل الأزياء والجمال والترفيه والطعام والتكنولوجيا. ومع ذلك، مع الإبداع المناسب، يمكن لمعظم الأعمال الاستفادة من المنصة."
      },
      {
        question: "ما هي أفضل الممارسات لإعلانات تيك توك؟",
        answer: "أفضل الممارسات تشمل: إنشاء محتوى أصلي يناسب أسلوب المنصة، استخدام موسيقى جذابة، الحفاظ على قصر الفيديو (15 ثانية مثالية)، التركيز على المحتوى الترفيهي بدلاً من البيعي المباشر، المشاركة في التحديات الشائعة، والتعاون مع مؤثري تيك توك."
      },
      {
        question: "كم تكلف حملة تحدي الهاشتاج المدعوم على تيك توك؟",
        answer: "تبدأ تكلفة حملة تحدي الهاشتاج المدعوم على تيك توك من حوالي 100,000 دولار، وقد تصل إلى 150,000 دولار أو أكثر اعتماداً على نطاق الحملة ومدتها. هذا النوع من الحملات مناسب للعلامات التجارية الكبيرة ذات الميزانيات التسويقية العالية."
      },
      {
        question: "كيف يمكنني قياس نجاح حملتي الإعلانية على تيك توك؟",
        answer: "يمكنك قياس نجاح حملتك من خلال متابعة مؤشرات الأداء الرئيسية مثل عدد المشاهدات، معدل التفاعل (الإعجابات، التعليقات، المشاركات)، معدل النقر، معدل إكمال الفيديو، عدد المشاركات في التحدي (للحملات التي تتضمن تحديات)، ومعدل التحويل والعائد على الاستثمار."
      },
      {
        question: "هل يمكنني استهداف فئات عمرية محددة على تيك توك؟",
        answer: "نعم، يمكنك استهداف فئات عمرية محددة على تيك توك، بالإضافة إلى استهداف حسب الجنس والموقع الجغرافي واللغة والاهتمامات وسلوك المستخدم ونوع الجهاز. ومع ذلك، ضع في اعتبارك أن غالبية مستخدمي تيك توك هم من الفئة العمرية 13-34 سنة."
      }
    ],
    "twitter": [
      {
        question: "ما هي أفضل أنواع الإعلانات على تويتر؟",
        answer: "تعتمد أفضل أنواع الإعلانات على أهدافك التسويقية. التغريدات المروجة مناسبة لمشاركة الأخبار والمحتوى الموجز، والحسابات المروجة مثالية لزيادة المتابعين، والترندات المروجة فعالة للحملات الكبيرة والفعاليات."
      },
      {
        question: "هل تويتر مناسب للأعمال الصغيرة؟",
        answer: "نعم، يمكن للأعمال الصغيرة الاستفادة من تويتر، خاصة تلك التي تعمل في مجالات الأخبار والتكنولوجيا والترفيه والرياضة والسياسة. يمكنك البدء بميزانية صغيرة واستهداف جمهور محدد للحصول على نتائج فعالة من حيث التكلفة."
      },
      {
        question: "كيف يمكنني استهداف المستخدمين على تويتر؟",
        answer: "يمكنك استهداف المستخدمين على تويتر بناءً على: الموقع الجغرافي، اللغة، الكلمات المفتاحية، الاهتمامات، المتابعين المتشابهين، السلوك، الأحداث، والأفلام والبرامج التلفزيونية التي يتابعونها."
      },
      {
        question: "ما هي ميزة الكلمات المفتاحية في إعلانات تويتر؟",
        answer: "ميزة الكلمات المفتاحية تتيح لك استهداف المستخدمين الذين يبحثون عن كلمات محددة أو يستخدمونها في تغريداتهم أو يتفاعلون مع تغريدات تحتوي على هذه الكلمات. هذه الميزة مفيدة لاستهداف المستخدمين المهتمين بمواضيع محددة أو الذين يبحثون عن منتجات أو خدمات معينة."
      },
      {
        question: "كم تكلف الترندات المروجة على تويتر؟",
        answer: "تبدأ تكلفة الترندات المروجة على تويتر من حوالي 200,000 دولار لليوم الواحد، وقد تختلف حسب البلد والمنطقة. هذا النوع من الإعلانات مناسب للعلامات التجارية الكبيرة والحملات ذات الميزانيات العالية."
      }
    ],
    "youtube": [
      {
        question: "ما هي أفضل أنواع الإعلانات على يوتيوب؟",
        answer: "تعتمد أفضل أنواع الإعلانات على أهدافك التسويقية. الإعلانات القابلة للتخطي مناسبة لسرد القصص والمحتوى الطويل، والإعلانات غير القابلة للتخطي فعالة للرسائل القصيرة والمباشرة، وإعلانات المصدات مثالية للرسائل القصيرة جداً، وإعلانات التراكب وإعلانات العرض مناسبة للتكلفة المنخفضة."
      },
      {
        question: "كيف يمكنني تحسين معدل المشاهدة الكاملة لإعلاناتي على يوتيوب؟",
        answer: "لتحسين معدل المشاهدة الكاملة، ركز على: جذب الانتباه في أول 5 ثوانٍ، إنشاء محتوى مثير للاهتمام ومفيد، الحفاظ على قصر الإعلان (30 ثانية أو أقل مثالية)، استهداف دقيق للجمهور، واستخدام سرد قصصي جذاب."
      },
      {
        question: "هل يمكنني استهداف قنوات أو فيديوهات محددة على يوتيوب؟",
        answer: "نعم، يمكنك استهداف قنوات أو فيديوهات محددة على يوتيوب من خلال استهداف المواضع. يمكنك أيضاً استهداف المستخدمين بناءً على اهتماماتهم وسلوكهم وبياناتهم الديموغرافية والكلمات المفتاحية التي يبحثون عنها."
      },
      {
        question: "ما هي تكلفة الإعلان على يوتيوب؟",
        answer: "تختلف تكلفة الإعلان على يوتيوب حسب نوع الإعلان وطريقة الدفع. للإعلانات القابلة للتخطي، تدفع عادةً عندما يشاهد المستخدم 30 ثانية أو الإعلان كاملاً (CPV)، وتتراوح التكلفة بين 0.10-0.30 دولار لكل مشاهدة. لإعلانات العرض والتراكب، تدفع عادةً لكل ألف ظهور (CPM)، وتتراوح التكلفة بين 2.00-5.00 دولار."
      },
      {
        question: "ما هي أفضل الممارسات لإعلانات يوتيوب؟",
        answer: "أفضل الممارسات تشمل: جذب الانتباه في أول 5 ثوانٍ، استخدام صور وفيديوهات عالية الجودة، إضافة ترجمات نصية، استخدام دعوات للعمل واضحة، استهداف دقيق للجمهور، اختبار عدة إصدارات من الإعلان، والتركيز على القيمة التي تقدمها للمشاهد."
      }
    ],
    "google": [
      {
        question: "ما هي أفضل أنواع الإعلانات على جوجل؟",
        answer: "تعتمد أفضل أنواع الإعلانات على أهدافك التسويقية. إعلانات البحث مناسبة لاستهداف نوايا البحث وزيادة المبيعات، وإعلانات العرض فعالة لزيادة الوعي بالعلامة التجارية، وإعلانات التسوق مثالية للتجارة الإلكترونية، وإعلانات الفيديو مناسبة لسرد القصص، وإعلانات الترويج للتطبيقات فعالة لزيادة تنزيلات التطبيقات."
      },
      {
        question: "كيف يمكنني تحسين جودة إعلاناتي على جوجل؟",
        answer: "لتحسين جودة إعلاناتك، ركز على: اختيار كلمات مفتاحية ذات صلة، كتابة نصوص إعلانية جذابة ومرتبطة بالكلمات المفتاحية، استخدام صفحات هبوط مخصصة ومرتبطة بالإعلان، تحسين تجربة المستخدم على موقعك، واختبار عدة إصدارات من الإعلان."
      },
      {
        question: "ما هو مؤشر جودة الإعلان في جوجل؟",
        answer: "مؤشر جودة الإعلان هو مقياس يتراوح من 1 إلى 10 يستخدمه جوجل لتقييم جودة إعلاناتك. يعتمد على عدة عوامل مثل معدل النقر المتوقع، ملاءمة الإعلان، وتجربة صفحة الهبوط. كلما ارتفع مؤشر الجودة، انخفضت تكلفة النقرة وتحسن ترتيب الإعلان."
      },
      {
        question: "ما هي استراتيجيات المزايدة في جوجل؟",
        answer: "تشمل استراتيجيات المزايدة في جوجل: المزايدة اليدوية (تحدد أقصى مبلغ مستعد لدفعه لكل نقرة)، المزايدة التلقائية (يحدد جوجل المزايدة لتحقيق أهدافك)، المزايدة للحصول على أقصى عدد من النقرات، المزايدة للحصول على أقصى عدد من التحويلات، والمزايدة لتحقيق هدف العائد على الإنفاق الإعلاني."
      },
      {
        question: "كيف يمكنني تتبع التحويلات في إعلانات جوجل؟",
        answer: "يمكنك تتبع التحويلات من خلال إعداد تتبع التحويلات في حساب Google Ads الخاص بك. يتضمن ذلك تحديد الإجراءات التي تعتبرها تحويلات (مثل عمليات الشراء أو تعبئة نموذج أو الاتصال)، وإضافة كود تتبع التحويلات إلى موقعك. يمكنك أيضاً ربط حساب Google Analytics بحساب Google Ads لتتبع التحويلات."
      }
    ]
  }

// Types are imported from the data file

export default function PlatformAdsPage() {
  const params = useParams()
  const router = useRouter()
  const platformId = params.platform as string

  // Get platform data
  const platform = platforms[platformId]

  // If platform doesn't exist, redirect to sponsored ads page
  useEffect(() => {
    if (!platform) {
      router.push("/sponsored-ads")
    }
  }, [platform, router])

  // States
  const [, setActiveAdFormat] = useState<string | null>(null)
  const [showAdFormatDetails, setShowAdFormatDetails] = useState<boolean>(false)
  const [selectedAdFormat, setSelectedAdFormat] = useState<AdFormat | null>(null)
  const [activeCaseStudy, setActiveCaseStudy] = useState<number>(0)
  const [countdownDays, setCountdownDays] = useState<number>(0)
  const [countdownHours, setCountdownHours] = useState<number>(0)
  const [countdownMinutes, setCountdownMinutes] = useState<number>(0)

  // Refs
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 50, 100])

  // Handle ad format click
  const handleAdFormatClick = (adFormat: AdFormat) => {
    setSelectedAdFormat(adFormat)
    setShowAdFormatDetails(true)
  }

  // Update countdown timer
  useEffect(() => {
    if (specialOffers[0]?.endDate) {
      const updateCountdown = () => {
        const endDate = new Date(specialOffers[0].endDate!)
        const now = new Date()
        const difference = endDate.getTime() - now.getTime()

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24))
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

          setCountdownDays(days)
          setCountdownHours(hours)
          setCountdownMinutes(minutes)
        }
      }

      updateCountdown()
      const interval = setInterval(updateCountdown, 60000)
      return () => clearInterval(interval)
    }
  }, [])

  // Auto-rotate case studies
  useEffect(() => {
    if (caseStudies[platformId]?.length > 1) {
      const interval = setInterval(() => {
        setActiveCaseStudy((prev) => (prev + 1) % caseStudies[platformId].length)
      }, 8000)
      return () => clearInterval(interval)
    }
  }, [platformId])

  if (!platform) {
    return null // Will redirect in useEffect
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
          {/* Platform-specific gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-10`}></div>

          {/* Animated Elements */}
          <div className="absolute inset-0">
            {/* Platform Icon Animation */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`icon-${i}`}
                className="absolute opacity-5"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `scale(${Math.random() * 0.5 + 0.5})`,
                }}
                animate={{
                  y: [0, Math.random() * 50 - 25],
                  opacity: [0.05, 0.1, 0.05],
                  rotate: [0, Math.random() * 20 - 10],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                {React.cloneElement(platform.icon as React.ReactElement)}
              </motion.div>
            ))}

            {/* Ad Frame Animation */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`frame-${i}`}
                className={`absolute rounded-lg border-2 border-${platformId === "instagram" ? "pink" : platformId === "facebook" ? "blue" : platformId === "tiktok" ? "gray" : platformId === "twitter" ? "blue" : platformId === "youtube" ? "red" : "green"}-500/30 backdrop-blur-sm`}
                style={{
                  width: `${Math.random() * 200 + 150}px`,
                  height: `${Math.random() * 150 + 100}px`,
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                  opacity: 0.3,
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.4, 0.2],
                  rotate: [0, Math.random() * 5 - 2.5, 0],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: i * 0.5,
                }}
              >
                {/* Ad Content Simulation */}
                <div className="absolute inset-2">
                  <div className="w-full h-2 bg-white/20 rounded-full mb-2"></div>
                  <div className="w-3/4 h-2 bg-white/20 rounded-full mb-4"></div>
                  <div className="w-full h-12 bg-white/10 rounded-md mb-2"></div>
                  <div className="flex justify-between items-center">
                    <div className="w-8 h-8 rounded-full bg-white/20"></div>
                    <div className="w-16 h-6 rounded-full bg-white/30"></div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Metrics Animation */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`metric-${i}`}
                className="absolute"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * 30 - 15],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: Math.random() * 8 + 7,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                {
                  [
                    <LineChart key="line" className="text-white/40" size={Math.random() * 20 + 15} />,
                    <BarChart2 key="bar" className="text-white/40" size={Math.random() * 20 + 15} />,
                    <PieChart key="pie" className="text-white/40" size={Math.random() * 20 + 15} />,
                    <Target key="target" className="text-white/40" size={Math.random() * 20 + 15} />,
                    <Eye key="eye" className="text-white/40" size={Math.random() * 20 + 15} />,
                    <Heart key="heart" className="text-white/40" size={Math.random() * 20 + 15} />,
                    <MousePointer key="mouse" className="text-white/40" size={Math.random() * 20 + 15} />,
                  ][Math.floor(Math.random() * 7)]
                }
              </motion.div>
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
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${platform.color} rounded-full opacity-20 blur-md animate-pulse`}
              ></div>
              <div className="relative z-10">
                {React.cloneElement(platform.icon as React.ReactElement)}
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            إعلانات{" "}
            <span className={`bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>{platform.name}</span>
          </motion.h1>

          <motion.div
            className={`h-1 w-24 bg-gradient-to-r ${platform.color} rounded-full mb-6 mx-auto`}
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
            {platform.description}
          </motion.p>

          {/* Platform Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="text-center">
              <motion.div
                className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent flex items-center gap-2 justify-center`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              >
                <Users size={24} className="text-white" />
                <span>{platform.userBase}</span>
              </motion.div>
              <div className="text-sm text-white/70">عدد المستخدمين النشطين</div>
            </div>

            <div className="text-center">
              <motion.div
                className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent flex items-center gap-2 justify-center`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.3 }}
              >
                <Target size={24} className="text-white" />
                <span>{platform.metrics.avgCTR}</span>
              </motion.div>
              <div className="text-sm text-white/70">متوسط معدل النقر</div>
            </div>

            <div className="text-center">
              <motion.div
                className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent flex items-center gap-2 justify-center`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.6 }}
              >
                <DollarSign size={24} className="text-white" />
                <span>{platform.metrics.avgConversionRate}</span>
              </motion.div>
              <div className="text-sm text-white/70">متوسط معدل التحويل</div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a href="#ad-formats">
              <button
                className={`bg-gradient-to-r ${platform.color} text-white px-8 py-4 rounded-full hover:opacity-90 transition duration-300 cursor-pointer font-bold flex items-center gap-2 shadow-lg`}
              >
                <span>أنواع الإعلانات</span>
                <ArrowRight size={18} />
              </button>
            </a>
            <a href="#special-offers">
              <button className="bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-full hover:bg-white/10 transition duration-300 cursor-pointer font-bold flex items-center gap-2">
                <span>العروض الخاصة</span>
                <Zap size={18} />
              </button>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <motion.div
              className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-1"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            >
              <motion.div className={`w-1 h-3 bg-gradient-to-r ${platform.color} rounded-full`}></motion.div>
            </motion.div>
            <p className="text-white/50 text-xs mt-2">اسحب للأسفل</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Platform Overview Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              نظرة عامة على{" "}
              <span className={`bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                {platform.name}
              </span>
            </h2>
            <div className={`h-1 w-24 bg-gradient-to-r ${platform.color} rounded-full mb-6 mx-auto`} />
            <p className="text-xl max-w-3xl mx-auto text-gray-300" dir="rtl">
              تعرف على خصائص منصة {platform.name} وجمهورها وإمكانياتها الإعلانية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              {/* Targeting Options */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-right" dir="rtl">
                  <Target className="inline-block mr-2 text-white" size={24} />
                  خيارات الاستهداف
                </h3>
                <div className="grid grid-cols-2 gap-3 text-right" dir="rtl">
                  {platform.targetingOptions.map((option, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className={`ml-2 h-4 w-4 text-gradient-to-r ${platform.color}`} />
                      <span className="text-sm">{option}</span>
                    </div>
                  ))}
                </div>
              </div>

            {/* Best For & Targeting */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Best For */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-right" dir="rtl">
                  <Target className="inline-block mr-2 text-white" size={24} />
                  أفضل استخدام لـ
                </h3>
                <div className="flex flex-wrap gap-2 justify-end">
                  {platform.bestFor.map((item, index) => (
                    <div key={index} className="flex items-center bg-white/10 rounded-full px-4 py-2">
                      <span className="text-sm">{item}</span>
                      <CheckCircle className={`ml-2 h-4 w-4 text-gradient-to-r ${platform.color}`} />
                    </div>
                  ))}
                </div>
              </div>



              {/* Metrics */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-right" dir="rtl">
                  <BarChart2 className="inline-block mr-2 text-white" size={24} />
                  مؤشرات الأداء
                </h3>
                <div className="grid grid-cols-2 gap-6 text-right" dir="rtl">
                  <div>
                    <div className="text-sm text-white/70 mb-1">متوسط تكلفة النقرة</div>
                    <div className="text-lg font-semibold">{platform.metrics.avgCPC}</div>
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">متوسط تكلفة الألف ظهور</div>
                    <div className="text-lg font-semibold">{platform.metrics.avgCPM}</div>
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">متوسط معدل النقر</div>
                    <div className="text-lg font-semibold">{platform.metrics.avgCTR}</div>
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">متوسط معدل التحويل</div>
                    <div className="text-lg font-semibold">{platform.metrics.avgConversionRate}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Minimum Budget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 max-w-md mx-auto text-center"
          >
            <h3 className="text-xl font-bold mb-2">الحد الأدنى للميزانية</h3>
            <div className={`text-2xl font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
              {platform.minimumBudget}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ad Formats Section */}
      <section id="ad-formats" className="py-20 bg-black/50 relative overflow-hidden">
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
              أنواع{" "}
              <span className={`bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>الإعلانات</span>
            </h2>
            <div className={`h-1 w-24 bg-gradient-to-r ${platform.color} rounded-full mb-6 mx-auto`} />
            <p className="text-xl max-w-3xl mx-auto text-gray-300" dir="rtl">
              تعرف على أنواع الإعلانات المتاحة على منصة {platform.name} ومواصفاتها وأفضل استخداماتها
            </p>
          </motion.div>

          {/* Ad Formats Tabs */}
          <Tabs defaultValue={platform.adFormats[0].id} className="w-full max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 bg-transparent h-auto mb-8">
              {platform.adFormats.map((adFormat) => (
                <TabsTrigger
                  key={adFormat.id}
                  value={adFormat.id}
                  className={`data-[state=active]:bg-gradient-to-r ${platform.color} data-[state=active]:text-white py-3 px-4 rounded-lg text-sm`}
                  onClick={() => setActiveAdFormat(adFormat.id)}
                >
                  {adFormat.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {platform.adFormats.map((adFormat) => (
              <TabsContent key={adFormat.id} value={adFormat.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Ad Format Image */}
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={adFormat.image || "/placeholder.svg"}
                      alt={adFormat.name}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70`}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div
                        className={`inline-block bg-gradient-to-r ${platform.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-2`}
                      >
                        {adFormat.averageCost}
                      </div>
                    </div>
                  </div>
                  </div>
                  {/* Ad Format Details */}
                  <div className="space-y-6 text-right" dir="rtl">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{adFormat.name}</h3>
                      <p className="text-gray-300">{adFormat.description}</p>
                    </div>

                    {/* Specs */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <Layers className="ml-2 h-5 w-5" />
                        المواصفات الفنية
                      </h4>
                      <div className="grid grid-cols-2 gap-4 bg-white/5 p-4 rounded-lg">
                        <div>
                          <div className="text-sm text-white/70 mb-1">الأبعاد</div>
                          <div className="text-sm font-medium">{adFormat.specs.dimensions}</div>
                        </div>
                        <div>
                          <div className="text-sm text-white/70 mb-1">حجم الملف</div>
                          <div className="text-sm font-medium">{adFormat.specs.fileSize}</div>
                        </div>
                        {adFormat.specs.length && (
                          <div>
                            <div className="text-sm text-white/70 mb-1">المدة</div>
                            <div className="text-sm font-medium">{adFormat.specs.length}</div>
                          </div>
                        )}
                        <div>
                          <div className="text-sm text-white/70 mb-1">الصيغة</div>
                          <div className="text-sm font-medium">{adFormat.specs.format}</div>
                        </div>
                      </div>
                    </div>

                    {/* Placements */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <Target className="ml-2 h-5 w-5" />
                        أماكن الظهور
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {adFormat.placements.map((placement, index) => (
                          <Badge key={index} className="bg-white/10 hover:bg-white/20 text-white">
                            {placement}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Best For */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <CheckCircle className="ml-2 h-5 w-5" />
                        أفضل استخدام لـ
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {adFormat.bestFor.map((item, index) => (
                          <Badge key={index} className={`bg-gradient-to-r ${platform.color} text-white`}>
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Performance Stats */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <BarChart2 className="ml-2 h-5 w-5" />
                        مؤشرات الأداء
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white/5 p-3 rounded-lg text-center">
                          <div className="text-sm text-white/70 mb-1">التفاعل</div>
                          <div className="text-lg font-semibold">{adFormat.performanceStats.engagement}%</div>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg text-center">
                          <div className="text-sm text-white/70 mb-1">معدل النقر</div>
                          <div className="text-lg font-semibold">{adFormat.performanceStats.ctr}%</div>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg text-center">
                          <div className="text-sm text-white/70 mb-1">معدل التحويل</div>
                          <div className="text-lg font-semibold">{adFormat.performanceStats.conversionRate}%</div>
                        </div>
                      </div>
                    </div>

                    <Button
                      className={`bg-gradient-to-r ${platform.color} text-white w-full`}
                      onClick={() => handleAdFormatClick(adFormat)}
                    >
                      طلب عرض سعر
                      <ArrowRight className="mr-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              قصص <span className={`bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>نجاح</span>
            </h2>
            <div className={`h-1 w-24 bg-gradient-to-r ${platform.color} rounded-full mb-6 mx-auto`} />
            <p className="text-xl max-w-3xl mx-auto text-gray-300" dir="rtl">
              تعرف على قصص نجاح عملائنا في استخدام إعلانات {platform.name}
            </p>
          </motion.div>

          {caseStudies[platformId] && caseStudies[platformId].length > 0 ? (
            <div className="relative">
              <AnimatePresence mode="wait">
                {caseStudies[platformId].map(
                  (caseStudy, index) =>
                    index === activeCaseStudy && (
                      <motion.div
                        key={caseStudy.id}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                      >
                        {/* Case Study Image */}
                        <div className="relative overflow-hidden rounded-lg">
                          <img
                            src={caseStudy.image || "/placeholder.svg"}
                            alt={caseStudy.title}
                            className="w-full h-auto object-cover rounded-lg"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70`}
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <div
                              className={`inline-block bg-gradient-to-r ${platform.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-2`}
                            >
                              {caseStudy.industry}
                            </div>
                          </div>
                        </div>

                        {/* Case Study Details */}
                        <div className="space-y-6 text-right" dir="rtl">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
                            <p className="text-gray-300">العميل: {caseStudy.client}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold mb-2 flex items-center">
                              <Info className="ml-2 h-5 w-5" />
                              التحدي
                            </h4>
                            <p className="text-gray-300">{caseStudy.challenge}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold mb-2 flex items-center">
                              <CheckCircle className="ml-2 h-5 w-5" />
                              الحل
                            </h4>
                            <p className="text-gray-300">{caseStudy.solution}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold mb-3 flex items-center">
                              <BarChart2 className="ml-2 h-5 w-5" />
                              النتائج
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              <div className="bg-white/5 p-3 rounded-lg text-center">
                                <div className="text-sm text-white/70 mb-1">الوصول</div>
                                <div className="text-lg font-semibold">{caseStudy.results.reach}</div>
                              </div>
                              <div className="bg-white/5 p-3 rounded-lg text-center">
                                <div className="text-sm text-white/70 mb-1">التفاعل</div>
                                <div className="text-lg font-semibold">{caseStudy.results.engagement}</div>
                              </div>
                              <div className="bg-white/5 p-3 rounded-lg text-center">
                                <div className="text-sm text-white/70 mb-1">التحويل</div>
                                <div className="text-lg font-semibold">{caseStudy.results.conversion}</div>
                              </div>
                              <div className="bg-white/5 p-3 rounded-lg text-center">
                                <div className="text-sm text-white/70 mb-1">العائد على الاستثمار</div>
                                <div className="text-lg font-semibold">{caseStudy.results.roi}</div>
                              </div>
                            </div>
                          </div>

                          <Button className={`bg-gradient-to-r ${platform.color} text-white`}>
                            طلب استشارة مجانية
                            <ArrowRight className="mr-2 h-4 w-4" />
                          </Button>
                        </div>
                      </motion.div>
                    ),
                )}
              </AnimatePresence>

              {/* Case Study Navigation */}
              {caseStudies[platformId].length > 1 && (
                <div className="flex justify-center mt-8 gap-2">
                  {caseStudies[platformId].map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === activeCaseStudy ? `bg-gradient-to-r ${platform.color} w-6` : "bg-white/30"
                      }`}
                      onClick={() => setActiveCaseStudy(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center text-gray-400">لا توجد قصص نجاح متاحة حالياً لهذه المنصة</div>
          )}
        </div>
      </section>

      {/* Special Offers Section */}
      <section id="special-offers" className="py-20 bg-black/50 relative overflow-hidden">
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
              عروض <span className={`bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>خاصة</span>
            </h2>
            <div className={`h-1 w-24 bg-gradient-to-r ${platform.color} rounded-full mb-6 mx-auto`} />
            <p className="text-xl max-w-3xl mx-auto text-gray-300" dir="rtl">
              استفد من عروضنا الخاصة على خدمات إدارة إعلانات {platform.name}
            </p>

            {/* Countdown Timer */}
            {specialOffers[0]?.limitedTime && (
              <div className="mt-8 flex flex-col items-center">
                <div className="text-white/70 mb-2">ينتهي العرض خلال</div>
                <div className="flex gap-4">
                  <div className="bg-white/10 rounded-lg p-3 min-w-[80px]">
                    <div className="text-2xl font-bold">{countdownDays}</div>
                    <div className="text-xs text-white/70">يوم</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 min-w-[80px]">
                    <div className="text-2xl font-bold">{countdownHours}</div>
                    <div className="text-xs text-white/70">ساعة</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 min-w-[80px]">
                    <div className="text-2xl font-bold">{countdownMinutes}</div>
                    <div className="text-xs text-white/70">دقيقة</div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {specialOffers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div
                  className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                    offer.popular ? `border-2 border-gradient-to-r ${platform.color}` : "border-white/10"
                  } h-full flex flex-col`}
                >
                  {offer.popular && (
                    <div className="absolute top-0 right-8 transform -translate-y-1/2">
                      <div
                        className={`bg-gradient-to-r ${platform.color} text-white text-xs font-bold px-4 py-1 rounded-full`}
                      >
                        الأكثر طلباً
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{offer.description}</p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold">{offer.discountedPrice}</span>
                      <span className="text-lg text-gray-400 line-through">{offer.originalPrice}</span>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="space-y-3 mb-6 text-right" dir="rtl">
                      {offer.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle
                            className={`ml-2 h-5 w-5 text-gradient-to-r ${platform.color} shrink-0 mt-0.5`}
                          />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    className={`${
                      offer.popular
                        ? `bg-gradient-to-r ${platform.color} text-white`
                        : "bg-white/10 hover:bg-white/20 text-white"
                    } w-full mt-4`}
                  >
                    احصل على العرض
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Glow Effect for Popular */}
                {offer.popular && (
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${platform.color} rounded-xl blur opacity-20`}
                  ></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              الأسئلة{" "}
              <span className={`bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>الشائعة</span>
            </h2>
            <div className={`h-1 w-24 bg-gradient-to-r ${platform.color} rounded-full mb-6 mx-auto`} />
            <p className="text-xl max-w-3xl mx-auto text-gray-300" dir="rtl">
              إجابات على الأسئلة الشائعة حول إعلانات {platform.name}
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full" dir="rtl">
              {faqs[platformId]?.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="text-right text-lg font-medium py-4">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-right">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">لم تجد إجابة على سؤالك؟</p>
            <Button className={`bg-gradient-to-r ${platform.color} text-white`}>
              تواصل معنا
              <MessageSquare className="mr-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`inline-block bg-gradient-to-r ${platform.color} p-4 rounded-full mb-6`}>
                <FaAd className="text-white" size={24} />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                هل أنت جاهز لبدء حملتك الإعلانية على {platform.name}؟
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                تواصل معنا اليوم للحصول على استشارة مجانية وخطة إعلانية مخصصة لعملك
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact-us">
                  <button
                    className={`bg-gradient-to-r ${platform.color} text-white px-8 py-4 rounded-full hover:opacity-90 transition duration-300 font-bold flex items-center gap-2 shadow-lg transform hover:-translate-y-1`}
                  >
                    <span>احصل على عرض سعر</span>
                    <ArrowRight size={18} />
                  </button>
                </Link>
                <Link href="/our-work">
                  <button className="bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-full hover:bg-white/10 transition duration-300 font-bold flex items-center gap-2 transform hover:-translate-y-1">
                    <span>استعرض أعمالنا</span>
                    <ExternalLink size={18} />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ad Format Details Dialog */}
      <Dialog open={showAdFormatDetails} onOpenChange={setShowAdFormatDetails}>
        <DialogContent className="bg-black/90 border border-white/10 text-white max-w-4xl" dir="rtl">
          {selectedAdFormat && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedAdFormat.name}</DialogTitle>
                <DialogDescription className="text-gray-300">{selectedAdFormat.description}</DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <div>
                  <img
                    src={selectedAdFormat.image || "/placeholder.svg"}
                    alt={selectedAdFormat.name}
                    className="w-full h-auto object-cover rounded-lg"
                  />

                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">المواصفات الفنية</h4>
                      <div className="grid grid-cols-2 gap-4 bg-white/5 p-4 rounded-lg">
                        <div>
                          <div className="text-sm text-white/70 mb-1">الأبعاد</div>
                          <div className="text-sm font-medium">{selectedAdFormat.specs.dimensions}</div>
                        </div>
                        <div>
                          <div className="text-sm text-white/70 mb-1">حجم الملف</div>
                          <div className="text-sm font-medium">{selectedAdFormat.specs.fileSize}</div>
                        </div>
                        {selectedAdFormat.specs.length && (
                          <div>
                            <div className="text-sm text-white/70 mb-1">المدة</div>
                            <div className="text-sm font-medium">{selectedAdFormat.specs.length}</div>
                          </div>
                        )}
                        <div>
                          <div className="text-sm text-white/70 mb-1">الصيغة</div>
                          <div className="text-sm font-medium">{selectedAdFormat.specs.format}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">أماكن الظهور</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedAdFormat.placements.map((placement, index) => (
                        <Badge key={index} className="bg-white/10 hover:bg-white/20 text-white">
                          {placement}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">أفضل استخدام لـ</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedAdFormat.bestFor.map((item, index) => (
                        <Badge key={index} className={`bg-gradient-to-r ${platform.color} text-white`}>
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">متوسط التكلفة</h4>
                    <div className="text-xl font-bold">{selectedAdFormat.averageCost}</div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">مؤشرات الأداء</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white/5 p-3 rounded-lg text-center">
                        <div className="text-sm text-white/70 mb-1">التفاعل</div>
                        <div className="text-lg font-semibold">{selectedAdFormat.performanceStats.engagement}%</div>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg text-center">
                        <div className="text-sm text-white/70 mb-1">معدل النقر</div>
                        <div className="text-lg font-semibold">{selectedAdFormat.performanceStats.ctr}%</div>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg text-center">
                        <div className="text-sm text-white/70 mb-1">معدل التحويل</div>
                        <div className="text-lg font-semibold">{selectedAdFormat.performanceStats.conversionRate}%</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      className={`bg-gradient-to-r ${platform.color} text-white w-full`}
                      onClick={() => setShowAdFormatDetails(false)}
                    >
                      طلب عرض سعر
                      <ArrowRight className="mr-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <Footer />
      <FloatingWhatsAppIcon />
    </div>
  )
}

