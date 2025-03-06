'use server'

import prisma from "@/lib/prisma"

type AvailablePages = 'welcome' | 'contact' | 'about' | 'faqs' | 'terms' | 'privacy_policy'

export const getSeoContent = async (page: AvailablePages) => {
    const seoContent = await prisma.seo_contents.findFirst({
        where: {
            key: page
        }
    })

    return seoContent
}

interface SeoContent {
    name: string
    description: string
    keywords: string
}

export const updateSeoContent = async (page: AvailablePages, payload: SeoContent) => {
    const seoContent = await prisma.seo_contents.updateMany({
        where: {
            key: page
        },
        data: {
            name: payload.name,
            description: payload.description,
            keywords: payload.keywords
        }
    })

    return seoContent
}