'use server'

import prisma from "@/lib/prisma"
import { AvailableSeo } from "../types"

export const getAllSeoContents = async () => {
    const seoContent = await prisma.seo_contents.findMany()

    return seoContent
}

export const getSeoContent = async (page: AvailableSeo) => {
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
    key: AvailableSeo,
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

export const updateSeoContent = async (payload: SeoContent) => {
    const seoContent = await prisma.seo_contents.updateMany({
        where: {
            key: payload.key
        },
        data: {
            name: payload.name,
            description: payload.description,
            keywords: payload.keywords
        }
    })

    return seoContent
}