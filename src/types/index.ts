import { LucideIcon } from 'lucide-react'

export interface Auth {
    user: User
}

export interface BreadcrumbItem {
    title: string
    href: string
}

export interface NavGroup {
    title: string
    items: NavItem[]
}

export interface NavItem {
    title: string
    url: string
    icon?: LucideIcon | null
    isActive?: boolean
}

export interface SharedData {
    name: string
    quote: { 
        message: string 
        author: string
    }
    auth: Auth
    [key: string]: unknown
}

export interface User {
    id: number
    name: string
    email: string
    avatar?: string
    email_verified_at: string | null
    created_at: string
    updated_at: string
    [key: string]: unknown // This allows for additional properties...
}

export interface ContactMessage {
    id: number
    name: string
    email: string
    phone?: string
    subject: string
    message: string
}

export interface Faq {
    id: number
    question: string
    answer: string
}

export interface TourAddon {
    id: number
    name: string
    price: number
    description: string
    tour_id: number
}

export interface TourGalleryImage {
    id: number
    src: string
    tour_id: number
}

export interface TourInclude {
    id: number
    name: string
    tour_id: number
}

export interface TourSpecialOffer {
    id: number
    tour_id: number
    name: string
    description: string
    price: number
}

export interface Tour {
    id: number
    name: string
    description: string
    price_per_person: number
    city: string
    includes: TourInclude[]
    duration: number
    location: string
    special_offers: TourSpecialOffer[]
    main_image: string | null
    gallery_images: TourGalleryImage[]
    addons: TourAddon[]
    seo_title: string | null
    seo_description: string | null
    seo_keywords: string | null
}

export interface SeoContent {
    id: number
    key: string
    name: string
    description: string
    keywords: string
    meta_tags: string
    canonical_url: string
    og_title: string
    og_description: string
    og_image: string
    twitter_title: string
    twitter_description: string
    twitter_image: string
    schema_markup: string
    robots_meta: string
}

export interface ContactSetting {
    id: number
    support_phone: string
    booking_phone: string
    urgent_phone_number: string
    email: string
    support_email: string
    booking_email: string
    address: string
    city: string
    facebook: string
    instagram: string
    tiktok: string
    google_maps_link: string
    working_hours: unknown
}

export interface ContactInfo {
    support_phone: string
    booking_phone: string
    urgent_phone_number: string
    support_email: string
    booking_email: string
    address: string
    city: string
    facebook_account: string
    instagram_account: string
    tiktok_account: string
    google_maps_link: string
    working_days: string
    working_hours: string
    weekend: string
}

export type AvailableSeo = 'welcome' | 'contact' | 'about' | 'faqs' | 'terms' | 'privacy_policy'

export interface Manager {
    id: number
    name: string
    email: string
    password: string
    role: 'supervisor' | 'admin'
}