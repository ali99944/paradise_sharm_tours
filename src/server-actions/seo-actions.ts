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
    key: AvailableSeo
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