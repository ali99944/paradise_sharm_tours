'use server'

import prisma from "@/lib/prisma"

export const getAllFaqs = async () => {
    const faqs = await prisma.faqs.findMany()

    return faqs
}

interface CreateFaqPayload {
    question: string
    answer: string
}

export const createFaq = async (payload: CreateFaqPayload) => {
    const faq = await prisma.faqs.create({
        data: {
            question: payload.question,
            answer: payload.answer
        }
    })

    return faq
}

export const deleteFaq = async (payload: {id: number}) => {
    await prisma.faqs.delete({
        where: {
            id: payload.id
        }
    })

    return
}

interface UpdateFaqPayload {
    id: number
    question: string
    answer: string
}

export const updateFaq = async (payload: UpdateFaqPayload) => {
    const faq = await prisma.faqs.update({
        where: {
            id: payload.id
        },
        data: {
            question: payload.question,
            answer: payload.answer
        }
    })

    return faq
}