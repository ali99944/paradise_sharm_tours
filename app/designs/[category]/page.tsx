"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import {
  ArrowRight,
  ChevronRight,
  X,
  Zap,
} from "lucide-react"
import { FaFigma, FaInstagram, FaLayerGroup, FaPaintBrush } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import FloatingWhatsAppIcon from "@/src/components/shared/floating-whatsapp"
import Footer from "@/src/components/shared/footer"
import { CardLoader, CircularLoader } from "@/src/components/shared/loaders"
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
  subcategory?: string
  description: string
  image: string
  images?: string[]
  likes: number
  views: number
  featured?: boolean
  tags?: string[]
  date: string
  client?: string
  software?: string[]
}

// Design categories data
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
]

// Subcategories data
const subcategories = {
  "social-media": ["انستجرام", "فيسبوك", "تويتر", "لينكد إن", "تيك توك", "سناب شات"],
  logos: ["شعارات حروفية", "شعارات رمزية", "شعارات مجردة", "شعارات مركبة", "مونوجرام"],
  branding: ["هوية بصرية كاملة", "أنظمة ألوان", "تايبوجرافي", "قرطاسية", "مواد تسويقية"],
  "ui-ux": ["واجهات مواقع", "واجهات تطبيقات", "تجربة مستخدم", "واجهات لوحات تحكم", "واجهات متاجر إلكترونية"],
}

// Tags data
const allTags = [
  "احترافي",
  "إبداعي",
  "بسيط",
  "عصري",
  "تقليدي",
  "مستقبلي",
  "ملون",
  "أحادي اللون",
  "متحرك",
  "ثلاثي الأبعاد",
  "مسطح",
  "مينيمال",
  "رقمي",
  "تجريدي",
  "هندسي",
  "عضوي",
]

// Software data
const softwareOptions = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe XD",
  "Figma",
  "Sketch",
  "InDesign",
  "After Effects",
  "Blender",
  "Cinema 4D",
]

// Generate design projects data
const generateProjects = (category: string, count: number): DesignProject[] => {
  const projects: DesignProject[] = []
  const categorySubcategories = subcategories[category as keyof typeof subcategories] || []

  for (let i = 1; i <= count; i++) {
    const randomSubcategory = categorySubcategories[Math.floor(Math.random() * categorySubcategories.length)]
    const randomTags = allTags.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 5) + 1)
    const randomSoftware = softwareOptions.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 1)

    // Generate random date within the last year
    const randomDate = new Date()
    randomDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 365))
    const formattedDate = randomDate.toISOString().split("T")[0]

    projects.push({
      id: `${category}-project-${i}`,
      title: `مشروع ${
        category === "social-media"
          ? "تصميم سوشيال ميديا"
          : category === "logos"
            ? "تصميم شعار"
            : category === "branding"
              ? "هوية بصرية"
              : "تصميم واجهة"
      } ${i}`,
      category: category,
      subcategory: randomSubcategory,
      description: `وصف مشروع ${
        category === "social-media"
          ? "تصميم سوشيال ميديا"
          : category === "logos"
            ? "تصميم شعار"
            : category === "branding"
              ? "هوية بصرية"
              : "تصميم واجهة"
      } رقم ${i}. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.`,
      image: `/placeholder.svg?height=${600 + i * 10}&width=${800 + i * 10}`,
      images: Array(Math.floor(Math.random() * 5) + 3)
        .fill(null)
        .map((_, index) => `/placeholder.svg?height=${600 + (index + i) * 10}&width=${800 + (index + i) * 10}`),
      likes: Math.floor(Math.random() * 500) + 50,
      views: Math.floor(Math.random() * 3000) + 500,
      featured: i % 5 === 0, // Every 5th project is featured
      tags: randomTags,
      date: formattedDate,
      client: `عميل ${i}`,
      software: randomSoftware,
    })
  }

  return projects
}

export default function DesignShowcasePage() {
  const params = useParams()
  const router = useRouter()
  const categoryId = params.category as string

  // Find the current category
  const currentCategory = designCategories.find((cat) => cat.id === categoryId)

  // If category doesn't exist, redirect to designs page
  useEffect(() => {
    if (!currentCategory) {
      router.push("/designs")
    }
  }, [currentCategory, router])

  // State for projects
  const [projects, setProjects] = useState<DesignProject[]>([])
  const [filteredProjects, setFilteredProjects] = useState<DesignProject[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [loadingMore, setLoadingMore] = useState<boolean>(false)
  const [hasMore, setHasMore] = useState<boolean>(true)

  // State for selected project and modal
  // State for view options

  // State for filters
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedSoftware, setSelectedSoftware] = useState<string[]>([])
  const [dateRange, setDateRange] = useState<[string, string]>(["", ""])
  const [showFeaturedOnly, setShowFeaturedOnly] = useState<boolean>(false)
  const [sortBy, setSortBy] = useState<string>("newest")

  // Refs
  const headerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 50, 100])

  // Load initial projects
  useEffect(() => {
    if (categoryId) {
      setIsLoading(true)
      // Simulate API call
      setTimeout(() => {
        const newProjects = generateProjects(categoryId, 12)
        setProjects(newProjects)
        setFilteredProjects(newProjects)
        setIsLoading(false)
      }, 1000)
    }
  }, [categoryId])

  // Load more projects
  const loadMoreProjects = () => {
    if (loadingMore || !hasMore) return

    setLoadingMore(true)
    // Simulate API call
    setTimeout(() => {
      const newProjects = generateProjects(categoryId, 6)
      if (newProjects.length === 0) {
        setHasMore(false)
      } else {
        setProjects((prev) => [...prev, ...newProjects])
        applyFilters([...projects, ...newProjects])
      }
      setLoadingMore(false)
    }, 1000)
  }

  // Apply filters
  const applyFilters = (projectsToFilter = projects) => {
    let filtered = [...projectsToFilter]

    // Search query
    if (searchQuery) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Subcategories
    if (selectedSubcategories.length > 0) {
      filtered = filtered.filter(
        (project) => project.subcategory && selectedSubcategories.includes(project.subcategory),
      )
    }

    // Tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((project) => project.tags && project.tags.some((tag) => selectedTags.includes(tag)))
    }

    // Software
    if (selectedSoftware.length > 0) {
      filtered = filtered.filter(
        (project) => project.software && project.software.some((sw) => selectedSoftware.includes(sw)),
      )
    }

    // Featured only
    if (showFeaturedOnly) {
      filtered = filtered.filter((project) => project.featured)
    }

    // Date range
    if (dateRange[0] && dateRange[1]) {
      filtered = filtered.filter((project) => project.date >= dateRange[0] && project.date <= dateRange[1])
    }

    // Sort
    switch (sortBy) {
      case "newest":
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
      case "oldest":
        filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        break
      case "popular":
        filtered.sort((a, b) => b.views - a.views)
        break
      case "likes":
        filtered.sort((a, b) => b.likes - a.likes)
        break
      default:
        break
    }

    setFilteredProjects(filtered)
  }

  // Handle filter changes
  useEffect(() => {
    applyFilters()
  }, [searchQuery, selectedSubcategories, selectedTags, selectedSoftware, dateRange, showFeaturedOnly, sortBy])

  // Reset filters
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedSubcategories([])
    setSelectedTags([])
    setSelectedSoftware([])
    setDateRange(["", ""])
    setShowFeaturedOnly(false)
    setSortBy("newest")
  }

  // Toggle subcategory selection
  const toggleSubcategory = (subcategory: string) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subcategory) ? prev.filter((item) => item !== subcategory) : [...prev, subcategory],
    )
  }

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]))
  }

  // Toggle software selection
  const toggleSoftware = (software: string) => {
    setSelectedSoftware((prev) =>
      prev.includes(software) ? prev.filter((item) => item !== software) : [...prev, software],
    )
  }


  // Get column class based on view mode and columns
  if (!currentCategory) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navbar */}
      <div className="absolute inset-0 bg-no-repeat bg-cover bg-center z-50">
        <Navbar />
      </div>

      {/* Header Section */}
      <div ref={headerRef} className="relative overflow-hidden pt-20 pb-10">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-r ${currentCategory.color} opacity-10`}></div>

          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute h-full w-full">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={`grid-h-${i}`}
                  className="absolute h-px bg-white/50 w-full"
                  style={{ top: `${i * 10}%` }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              ))}
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={`grid-v-${i}`}
                  className="absolute w-px bg-white/50 h-full"
                  style={{ left: `${i * 10}%` }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-8 py-10"
            style={{ opacity, scale, y }}
          >
            <div className="md:w-2/3">
              <div className="flex items-center gap-2 mb-4">
                <Link href="/designs" className="text-white/70 hover:text-white transition-colors">
                  التصاميم
                </Link>
                <ChevronRight className="h-4 w-4 text-white/50" />
                <span className="text-orange-500">{currentCategory.title}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentCategory.title}</h1>
              <div className={`h-1 w-24 bg-gradient-to-r ${currentCategory.color} rounded-full mb-6`} />
              <p className="text-lg text-white/80 max-w-2xl mb-6">{currentCategory.description}</p>

              <div className="flex flex-wrap gap-2">
                {subcategories[categoryId as keyof typeof subcategories]?.map((subcategory, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="cursor-pointer hover:bg-white/10 transition-colors"
                    onClick={() => toggleSubcategory(subcategory)}
                  >
                    {subcategory}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div
                  className={`absolute -inset-4 bg-gradient-to-r ${currentCategory.color} rounded-full opacity-20 blur-lg animate-pulse`}
                ></div>
                <div className={`bg-gradient-to-r ${currentCategory.color} p-8 rounded-full relative z-10`}>
                  {currentCategory.icon &&
                    React.cloneElement(currentCategory.icon as React.ReactElement)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20 mt-8">


        {/* Active Filters */}
        {(selectedSubcategories.length > 0 ||
          selectedTags.length > 0 ||
          selectedSoftware.length > 0 ||
          showFeaturedOnly ||
          (dateRange[0] && dateRange[1])) && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="text-white/70">الفلاتر النشطة:</span>

            {selectedSubcategories.map((subcategory, index) => (
              <Badge key={`sub-${index}`} variant="secondary" className="bg-white/10 hover:bg-white/20 gap-1">
                {subcategory}
                <X className="h-3 w-3 cursor-pointer" onClick={() => toggleSubcategory(subcategory)} />
              </Badge>
            ))}

            {selectedTags.map((tag, index) => (
              <Badge key={`tag-${index}`} variant="secondary" className="bg-white/10 hover:bg-white/20 gap-1">
                {tag}
                <X className="h-3 w-3 cursor-pointer" onClick={() => toggleTag(tag)} />
              </Badge>
            ))}

            {selectedSoftware.map((software, index) => (
              <Badge key={`sw-${index}`} variant="secondary" className="bg-white/10 hover:bg-white/20 gap-1">
                {software}
                <X className="h-3 w-3 cursor-pointer" onClick={() => toggleSoftware(software)} />
              </Badge>
            ))}

            {showFeaturedOnly && (
              <Badge variant="secondary" className="bg-white/10 hover:bg-white/20 gap-1">
                المشاريع المميزة فقط
                <X className="h-3 w-3 cursor-pointer" onClick={() => setShowFeaturedOnly(false)} />
              </Badge>
            )}

            {dateRange[0] && dateRange[1] && (
              <Badge variant="secondary" className="bg-white/10 hover:bg-white/20 gap-1">
                {`${dateRange[0]} - ${dateRange[1]}`}
                <X className="h-3 w-3 cursor-pointer" onClick={() => setDateRange(["", ""])} />
              </Badge>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={resetFilters}
              className="text-orange-500 hover:text-orange-400 h-7 px-2"
            >
              مسح الكل
            </Button>
          </div>
        )}

        {/* Projects Grid */}
        {isLoading ? (
          <CardLoader count={6} />
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">لا توجد نتائج</h3>
            <p className="text-white/70 mb-6">لم نتمكن من العثور على أي مشاريع تطابق معايير البحث الخاصة بك</p>
            <Button
              variant="outline"
              onClick={resetFilters}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black"
            >
              إعادة ضبط الفلاتر
            </Button>
          </div>
        ) : (
          <>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4`}>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative group"
                >                    <div
                className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 "
              >
                <div className={`relative h-72 overflow-hidden`}>
                  <img
                    src={'https://img.freepik.com/free-vector/abstract-colorful-geometric-isometric-background_8829-2711.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid'}
                    alt={project.title}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3 z-10">
                      <div className="bg-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                        <Zap size={10} />
                        <span>مميز</span>
                      </div>
                    </div>
                  )}


                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold mb-1 line-clamp-1">{project.title}</h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.tags?.slice(0, 2).map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs py-0 h-5 bg-black/50 border-white/20">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags && project.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs py-0 h-5 bg-black/50 border-white/20">
                          +{project.tags.length - 2}
                        </Badge>
                      )}
                    </div>

                  </div>
                </div>
              </div>

                </motion.div>
              ))}
            </div>

            {/* Load More */}
            {hasMore && (
              <div className="mt-12 text-center">
                <Button
                  onClick={loadMoreProjects}
                  disabled={loadingMore}
                  className="bg-transparent border-2 border-orange-500 text-orange-500 px-8 py-2 rounded-full hover:bg-orange-500 hover:text-black transition duration-300 cursor-pointer font-bold flex items-center gap-2 mx-auto h-auto"
                >
                  {loadingMore ? (
                    <>
                      <CircularLoader size={20} className="mr-2" />
                      <span>جاري التحميل...</span>
                    </>
                  ) : (
                    <>
                      <span>تحميل المزيد</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </Button>
              </div>
            )}
          </>
        )}
      </div>


      {/* Footer */}
      <Footer />
      <FloatingWhatsAppIcon />
    </div>
  )
}

