"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react'
import { FaRocket, FaChartLine, FaSearchDollar, FaUsers } from "react-icons/fa"
import Footer from "@/src/components/shared/footer"
import FloatingWhatsAppIcon from "@/src/components/shared/floating-whatsapp"
import Navbar from "@/src/components/shared/navbar"

// Service type definition
type MarketingService = {
  id: string
  title: string
  description: string
  longDescription: string
  icon: React.ReactNode
  benefits: string[]
  process: {
    title: string
    description: string
  }[]
  tools: string[]
  faqs: {
    question: string
    answer: string
  }[]
  pricing: {
    title: string
    price: string
    features: string[]
    recommended?: boolean
  }[]
}

export default function ServiceDetails() {
  const params = useParams()
  const router = useRouter()
  const [service, setService] = useState<MarketingService | null>(null)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  // Toggle accordion
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  // Handle form submission
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

  // Marketing services data
  const services: Record<string, MarketingService> = {
    "social-media": {
      id: "social-media",
      title: "إدارة وسائل التواصل الاجتماعي",
      description: "استراتيجيات ذكية لإدارة منصات التواصل الاجتماعي وزيادة التفاعل وبناء جمهور مستهدف",
      longDescription: "نقدم خدمات إدارة وسائل التواصل الاجتماعي المتكاملة التي تساعد علامتك التجارية على النمو وزيادة التفاعل وبناء جمهور مستهدف. نستخدم استراتيجيات مدعومة بالبيانات لتحقيق أقصى استفادة من وجودك على منصات التواصل الاجتماعي المختلفة مثل فيسبوك وانستجرام وتويتر ولينكد إن وتيك توك.",
      icon: <FaUsers className="h-10 w-10 text-white" />,
      benefits: [
        "زيادة الوعي بالعلامة التجارية وبناء جمهور مستهدف",
        "تحسين التفاعل مع المنشورات وزيادة المتابعين",
        "إنشاء محتوى إبداعي يعكس هوية علامتك التجارية",
        "تحليل أداء المنصات وتحسين الاستراتيجيات",
        "إدارة الإعلانات المدفوعة بكفاءة لتحقيق أفضل النتائج",
        "بناء علاقات قوية مع العملاء والمتابعين"
      ],
      process: [
        {
          title: "تحليل الوضع الحالي",
          description: "نقوم بتحليل شامل لحسابات التواصل الاجتماعي الخاصة بك والمنافسين وتحديد نقاط القوة والضعف والفرص"
        },
        {
          title: "تطوير الاستراتيجية",
          description: "نضع استراتيجية متكاملة تتضمن أهداف واضحة وخطة محتوى وجدول نشر وميزانية إعلانية"
        },
        {
          title: "إنشاء المحتوى",
          description: "نقوم بإنشاء محتوى إبداعي جذاب يتناسب مع جمهورك المستهدف ويعكس هوية علامتك التجارية"
        },
        {
          title: "النشر والتفاعل",
          description: "ننشر المحتوى حسب الجدول المحدد ونتفاعل مع الجمهور ونرد على التعليقات والرسائل"
        },
        {
          title: "إدارة الإعلانات",
          description: "نصمم ونطلق حملات إعلانية مستهدفة لتحقيق أهدافك التسويقية بأقل تكلفة ممكنة"
        },
        {
          title: "التحليل والتحسين",
          description: "نراقب أداء المنصات ونحلل البيانات ونقدم تقارير دورية ونحسن الاستراتيجية باستمرار"
        }
      ],
      tools: [
        "Buffer", "Hootsuite", "Sprout Social", "Canva", "Adobe Creative Suite", "Facebook Ads Manager", "Google Analytics", "Brandwatch"
      ],
      faqs: [
        {
          question: "كم مرة يجب أن أنشر على وسائل التواصل الاجتماعي؟",
          answer: "يختلف معدل النشر المثالي حسب المنصة وجمهورك المستهدف. بشكل عام، نوصي بالنشر 3-5 مرات أسبوعياً على فيسبوك، 1-2 مرة يومياً على انستجرام، و3-5 مرات يومياً على تويتر. سنقوم بتحديد الجدول الأمثل لعلامتك التجارية بناءً على تحليل البيانات."
        },
        {
          question: "هل تقومون بإنشاء المحتوى أم يجب علينا توفيره؟",
          answer: "نقدم خدمة إنشاء المحتوى الكاملة بما في ذلك التصوير والتصميم وكتابة النصوص. يمكننا أيضاً العمل مع المحتوى الذي توفره إذا كنت تفضل ذلك."
        },
        {
          question: "كيف تقيسون نجاح استراتيجية التواصل الاجتماعي؟",
          answer: "نقيس النجاح من خلال مجموعة من مؤشرات الأداء الرئيسية (KPIs) مثل نمو المتابعين، معدل التفاعل، الوصول، النقرات، التحويلات، والعائد على الاستثمار (ROI). نقدم تقارير شهرية مفصلة تظهر التقدم نحو تحقيق أهدافك."
        },
        {
          question: "هل تقدمون خدمات إدارة الإعلانات المدفوعة؟",
          answer: "نعم، نقدم خدمات إدارة الإعلانات المدفوعة على جميع منصات التواصل الاجتماعي. نقوم بتصميم وإطلاق وإدارة وتحسين الحملات الإعلانية لتحقيق أفضل النتائج بأقل تكلفة ممكنة."
        }
      ],
      pricing: [
        {
          title: "الباقة الأساسية",
          price: "1,500 ريال / شهرياً",
          features: [
            "إدارة منصتين اجتماعيتين",
            "8 منشورات شهرياً لكل منصة",
            "تصميم المحتوى الأساسي",
            "التفاعل مع الجمهور",
            "تقرير أداء شهري"
          ]
        },
        {
          title: "الباقة المتقدمة",
          price: "3,000 ريال / شهرياً",
          recommended: true,
          features: [
            "إدارة 4 منصات اجتماعية",
            "15 منشوراً شهرياً لكل منصة",
            "تصميم محتوى احترافي",
            "جلسة تصوير شهرية",
            "إدارة الإعلانات المدفوعة",
            "التفاعل اليومي مع الجمهور",
            "تقارير أداء أسبوعية وشهرية"
          ]
        },
        {
          title: "الباقة الاحترافية",
          price: "5,000 ريال / شهرياً",
          features: [
            "إدارة جميع المنصات الاجتماعية",
            "محتوى يومي لكل منصة",
            "تصميم محتوى احترافي متميز",
            "جلستي تصوير شهرياً",
            "إدارة الإعلانات المدفوعة المتقدمة",
            "استراتيجية محتوى متكاملة",
            "التفاعل الفوري مع الجمهور",
            "تقارير أداء مفصلة أسبوعية وشهرية"
          ]
        }
      ]
    },
    "seo": {
      id: "seo",
      title: "تحسين محركات البحث (SEO)",
      description: "استراتيجيات ذكية لتحسين ظهور موقعك في نتائج البحث وزيادة الزيارات العضوية",
      longDescription: "نقدم خدمات تحسين محركات البحث (SEO) الشاملة التي تساعد موقعك على تحقيق مراتب متقدمة في نتائج البحث وزيادة الزيارات العضوية. نستخدم أحدث التقنيات والاستراتيجيات المتوافقة مع خوارزميات محركات البحث لتحسين ظهور موقعك وجذب الزوار المهتمين بمنتجاتك أو خدماتك.",
      icon: <FaSearchDollar className="h-10 w-10 text-white" />,
      benefits: [
        "زيادة الظهور في نتائج البحث وتحسين الترتيب",
        "زيادة حركة المرور العضوية إلى موقعك",
        "تحسين معدل التحويل وزيادة المبيعات",
        "بناء سمعة قوية على الإنترنت",
        "تحسين تجربة المستخدم وسهولة الاستخدام",
        "تحليل المنافسين واستغلال الفرص"
      ],
      process: [
        {
          title: "تدقيق SEO الشامل",
          description: "نقوم بتحليل شامل لموقعك الحالي وتحديد نقاط القوة والضعف والفرص للتحسين"
        },
        {
          title: "بحث الكلمات المفتاحية",
          description: "نحدد الكلمات المفتاحية الأكثر فعالية والأقل تنافسية في مجال عملك"
        },
        {
          title: "تحسين الموقع الداخلي",
          description: "نحسن هيكلة الموقع والعناوين والمحتوى والصور والروابط الداخلية وسرعة التحميل"
        },
        {
          title: "تحسين الموقع الخارجي",
          description: "نبني روابط خلفية عالية الجودة من مواقع موثوقة ونحسن حضورك على الإنترنت"
        },
        {
          title: "تحسين المحتوى",
          description: "ننشئ محتوى عالي الجودة مُحسّن لمحركات البحث ويلبي احتياجات المستخدمين"
        },
        {
          title: "المراقبة والتحسين",
          description: "نراقب أداء موقعك باستمرار ونجري التعديلات اللازمة لتحسين النتائج"
        }
      ],
      tools: [
        "SEMrush", "Ahrefs", "Google Analytics", "Google Search Console", "Moz", "Screaming Frog", "Yoast SEO", "PageSpeed Insights"
      ],
      faqs: [
        {
          question: "كم من الوقت يستغرق تحسين محركات البحث لرؤية النتائج؟",
          answer: "تحسين محركات البحث هو استراتيجية طويلة المدى. عادة ما تبدأ في رؤية بعض التحسينات خلال 3-6 أشهر، ولكن النتائج الكبيرة قد تستغرق 6-12 شهراً. تعتمد السرعة على عوامل مثل المنافسة في مجالك وعمر موقعك وحالته الحالية."
        },
        {
          question: "هل تضمنون الوصول إلى المرتبة الأولى في جوجل؟",
          answer: "لا يمكن لأي شركة SEO أن تضمن المرتبة الأولى في جوجل، لأن خوارزميات البحث تتغير باستمرار وهناك العديد من العوامل خارج سيطرتنا. ومع ذلك، نضمن استخدام أفضل الممارسات والاستراتيجيات لتحسين ترتيبك بشكل كبير."
        },
        {
          question: "هل تقدمون خدمات SEO المحلية؟",
          answer: "نعم، نقدم خدمات SEO محلية مخصصة للشركات التي تستهدف عملاء في مناطق جغرافية محددة. نساعدك على الظهور في نتائج البحث المحلية وخرائط جوجل وتحسين ملف نشاطك التجاري على جوجل."
        },
        {
          question: "كيف تقيسون نجاح استراتيجية SEO؟",
          answer: "نقيس النجاح من خلال مجموعة من مؤشرات الأداء الرئيسية مثل ترتيب الكلمات المفتاحية، وحركة المرور العضوية، ومعدل النقر، ومعدل الارتداد، ووقت البقاء على الصفحة، ومعدل التحويل. نقدم تقارير شهرية مفصلة تظهر التقدم في تحقيق أهدافك."
        }
      ],
      pricing: [
        {
          title: "الباقة الأساسية",
          price: "2,500 ريال / شهرياً",
          features: [
            "تدقيق SEO أساسي",
            "بحث 20 كلمة مفتاحية",
            "تحسين 5 صفحات",
            "تحسين العناوين والوصف",
            "تقرير أداء شهري"
          ]
        },
        {
          title: "الباقة المتقدمة",
          price: "5,000 ريال / شهرياً",
          recommended: true,
          features: [
            "تدقيق SEO شامل",
            "بحث 50 كلمة مفتاحية",
            "تحسين 15 صفحة",
            "تحسين المحتوى والصور",
            "بناء 10 روابط خلفية شهرياً",
            "تحسين السرعة والأداء",
            "تقارير أداء أسبوعية"
          ]
        },
        {
          title: "الباقة الاحترافية",
          price: "8,000 ريال / شهرياً",
          features: [
            "تدقيق SEO متقدم",
            "بحث 100+ كلمة مفتاحية",
            "تحسين جميع صفحات الموقع",
            "إنشاء محتوى SEO شهري",
            "بناء 20+ رابط خلفي شهرياً",
            "تحسين تقني شامل",
            "تحليل المنافسين المستمر",
            "تقارير أداء مفصلة أسبوعية"
          ]
        }
      ]
    },
    "ppc": {
      id: "ppc",
      title: "إعلانات الدفع لكل نقرة (PPC)",
      description: "حملات إعلانية ذكية تستهدف الجمهور المناسب في الوقت المناسب لتحقيق أقصى عائد على الاستثمار",
      longDescription: "نقدم خدمات إدارة حملات إعلانات الدفع لكل نقرة (PPC) المتكاملة على جميع المنصات الرئيسية مثل جوجل وفيسبوك وانستجرام وتويتر ولينكد إن. نستخدم استراتيجيات استهداف متقدمة وتحليلات دقيقة لضمان وصول إعلاناتك إلى الجمهور المناسب في الوقت المناسب وتحقيق أقصى عائد على استثمارك الإعلاني.",
      icon: <FaChartLine className="h-10 w-10 text-white" />,
      benefits: [
        "نتائج سريعة وفورية مقارنة بالتسويق العضوي",
        "استهداف دقيق للجمهور المناسب",
        "التحكم الكامل في الميزانية والإنفاق",
        "قياس دقيق للنتائج والعائد على الاستثمار",
        "المرونة في تعديل الحملات حسب الأداء",
        "زيادة الوعي بالعلامة التجارية وجذب عملاء جدد"
      ],
      process: [
        {
          title: "تحليل السوق والمنافسين",
          description: "ندرس السوق والمنافسين ونحدد الفرص والتحديات لوضع استراتيجية إعلانية فعالة"
        },
        {
          title: "تحديد الأهداف",
          description: "نحدد أهداف واضحة وقابلة للقياس للحملات الإعلانية مثل زيادة المبيعات أو جمع العملاء المحتملين"
        },
        {
          title: "بحث الكلمات المفتاحية",
          description: "نحدد الكلمات المفتاحية الأكثر فعالية والأقل تكلفة في مجال عملك"
        },
        {
          title: "إنشاء الحملات",
          description: "نصمم حملات إعلانية مستهدفة مع نصوص وصور جذابة وصفحات هبوط فعالة"
        },
        {
          title: "إطلاق وإدارة الحملات",
          description: "نطلق الحملات ونراقبها عن كثب ونجري التعديلات اللازمة لتحسين الأداء"
        },
        {
          title: "التحليل والتحسين",
          description: "نحلل أداء الحملات باستمرار ونحسن الاستهداف والإعلانات لزيادة معدل التحويل وخفض تكلفة الاكتساب"
        }
      ],
      tools: [
        "Google Ads", "Facebook Ads Manager", "LinkedIn Campaign Manager", "Twitter Ads", "Google Analytics", "Google Tag Manager", "Hotjar", "Unbounce"
      ],
      faqs: [
        {
          question: "ما هي الميزانية المناسبة لحملات PPC؟",
          answer: "تختلف الميزانية المناسبة حسب مجال عملك وأهدافك والمنافسة. نوصي عادة بميزانية لا تقل عن 3,000 ريال شهرياً للحصول على نتائج جيدة. سنساعدك على تحديد الميزانية المثلى بناءً على تحليل السوق وأهدافك."
        },
        {
          question: "ما هي المنصات الإعلانية الأفضل لعملي؟",
          answer: "تختلف المنصات الأفضل حسب طبيعة عملك وجمهورك المستهدف. إعلانات جوجل مناسبة للأشخاص الذين يبحثون عن منتجات أو خدمات محددة، بينما إعلانات وسائل التواصل الاجتماعي أفضل للاستهداف الديموغرافي والسلوكي. سنساعدك على اختيار المنصات الأنسب لعملك."
        },
        {
          question: "كم من الوقت تستغرق حملات PPC لتحقيق نتائج؟",
          answer: "على عكس SEO، يمكن لحملات PPC أن تبدأ في تحقيق نتائج فورية بمجرد إطلاقها. ومع ذلك، تستغرق الحملات عادة 2-4 أسابيع للوصول إلى الأداء الأمثل حيث نقوم بتحسين الاستهداف والإعلانات بناءً على البيانات الأولية."
        },
        {
          question: "كيف تقيسون نجاح حملات PPC؟",
          answer: "نقيس النجاح من خلال مجموعة من مؤشرات الأداء الرئيسية مثل معدل النقر (CTR)، ومتوسط تكلفة النقرة (CPC)، ومعدل التحويل، وتكلفة الاكتساب (CPA)، والعائد على الإنفاق الإعلاني (ROAS). نقدم تقارير مفصلة تظهر هذه المقاييس وتأثيرها على أهدافك التجارية."
        }
      ],
      pricing: [
        {
          title: "الباقة الأساسية",
          price: "2,000 ريال / شهرياً + ميزانية الإعلانات",
          features: [
            "إدارة منصة إعلانية واحدة",
            "إنشاء 3 حملات إعلانية",
            "تحسين أسبوعي للحملات",
            "تقرير أداء شهري"
          ]
        },
        {
          title: "الباقة المتقدمة",
          price: "4,000 ريال / شهرياً + ميزانية الإعلانات",
          recommended: true,
          features: [
            "إدارة منصتين إعلانيتين",
            "إنشاء 5 حملات إعلانية",
            "تصميم الإعلانات الاحترافية",
            "تحسين مستمر للحملات",
            "إعداد التتبع والتحويلات",
            "تقارير أداء أسبوعية"
          ]
        },
        {
          title: "الباقة الاحترافية",
          price: "7,000 ريال / شهرياً + ميزانية الإعلانات",
          features: [
            "إدارة جميع المنصات الإعلانية",
            "إنشاء حملات غير محدودة",
            "تصميم إعلانات متميزة",
            "اختبار A/B للإعلانات",
            "تحسين صفحات الهبوط",
            "استراتيجية إعادة الاستهداف",
            "تقارير أداء مفصلة أسبوعية"
          ]
        }
      ]
    }
  }

  useEffect(() => {
    // Get service ID from URL params
    const serviceId = params.service as string

    // Check if service exists
    if (services[serviceId]) {
      setService(services[serviceId])
    } else {
      // Redirect to main services page if service not found
      router.push("/intelligent-marketing")
    }
  }, [params.service, router])

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navbar */}
      <div className="absolute inset-0 bg-no-repeat bg-cover bg-center z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Data Visualization Elements */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 80 + 20}px`,
                background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`,
                borderRadius: '2px',
              }}
              animate={{
                height: [
                  `${Math.random() * 80 + 20}px`,
                  `${Math.random() * 120 + 40}px`,
                  `${Math.random() * 80 + 20}px`,
                ],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
          
          {/* Connection Lines */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
              style={{
                height: '1px',
                width: `${Math.random() * 200 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                width: [
                  `${Math.random() * 200 + 100}px`,
                  `${Math.random() * 300 + 150}px`,
                  `${Math.random() * 200 + 100}px`,
                ],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
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
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="relative inline-block">
                <div className="absolute -inset-1 bg-orange-500 rounded-full opacity-20 blur-md animate-pulse"></div>
                {service.icon}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">{service.title}</h1>
            
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-8 mx-auto" />
            
            <p className="text-xl text-center text-gray-300 mb-12" dir="rtl">
              {service.description}
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-12" dir="rtl">
              <p className="text-lg text-gray-300 leading-relaxed">
                {service.longDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-orange-500">فوائد</span> {service.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4 text-right" dir="rtl">
                  <div className="mt-1">
                    <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-black relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-orange-500">عملية</span> العمل
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500/20 via-orange-500 to-orange-500/20 z-0" />
            
            <div className="space-y-24">
              {service.process.map((step, index) => (
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
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg shadow-orange-500/20">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Content - Alternating Sides */}
                  <div className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'} ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                      <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-orange-500/30 transition-all duration-300" dir="rtl">
                        <h3 className="text-xl font-bold text-orange-500 mb-2">{step.title}</h3>
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

      {/* Tools Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-orange-500">الأدوات</span> التي نستخدمها
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {service.tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 hover:border-orange-500/30 hover:bg-orange-500/10 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="text-white">{tool}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-black relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-orange-500">باقات</span> الأسعار
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {service.pricing.map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border ${plan.recommended ? 'border-orange-500' : 'border-white/10'} transition-all duration-300 relative h-full flex flex-col`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {plan.recommended && (
                  <div className="bg-orange-500 text-black text-sm font-bold py-1 px-4 absolute top-0 right-0 left-0 text-center">
                    الباقة الموصى بها
                  </div>
                )}
                
                <div className={`p-6 ${plan.recommended ? 'pt-10' : ''}`}>
                  <h3 className="text-2xl font-bold text-center mb-2">{plan.title}</h3>
                  <p className="text-orange-500 text-2xl font-bold text-center mb-6">{plan.price}</p>
                  
                  <ul className="space-y-3 mb-8 text-right" dir="rtl">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-end gap-2">
                        <span className="text-gray-300">{feature}</span>
                        <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto">
                    <a href="#contact-form">
                      <button className={`w-full py-3 px-6 rounded-full font-bold ${plan.recommended ? 'bg-orange-500 text-black hover:bg-orange-600' : 'bg-white/10 text-white hover:bg-white/20'} transition duration-300`}>
                        اطلب الآن
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-orange-500">الأسئلة</span> الشائعة
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4" dir="rtl">
            {service.faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-black relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-orange-500">تواصل</span> معنا
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
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
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      الخدمة المطلوبة
                    </label>
                    <select
                      id="service"
                      required
                      className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    >
                      <option value={service.id} selected>{service.title}</option>
                      {Object.values(services)
                        .filter(s => s.id !== service.id)
                        .map(s => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))
                      }
                    </select>
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
                        <MessageCircle size={18} />
                        <span>إرسال الرسالة</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600/20 to-orange-500/20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-md rounded-2xl p-10 border border-orange-500/20">
            <div className="text-center">
              <div className="inline-block bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-full mb-6">
                <FaRocket className="text-black" size={24} />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">هل أنت جاهز لتعزيز استراتيجيتك التسويقية؟</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                تواصل معنا اليوم لمناقشة كيف يمكننا مساعدتك في تحقيق أهدافك التسويقية من خلال {service.title}.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#contact-form">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-black px-8 py-4 rounded-full hover:from-orange-600 hover:to-orange-700 transition duration-300 font-bold flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transform hover:-translate-y-1">
                    <span>تواصل معنا الآن</span>
                    <ArrowRight size={18} />
                  </button>
                </a>
                <a href="https://wa.me/+201278183718">
                  <button className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition duration-300 font-bold flex items-center gap-2 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transform hover:-translate-y-1">
                    <span>واتساب</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <FloatingWhatsAppIcon />
    </div>
  )
}
