'use server'

import prisma from "@/lib/prisma"

export const getStatistics = async () => {
    const total_tours = await prisma.tours.count()
    const total_contact_messages = await prisma.contact_messages.count()
    const total_faqs = await prisma.faqs.count()

    return { total_tours, total_contact_messages, total_faqs }
}