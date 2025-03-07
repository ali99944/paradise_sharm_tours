'use server'

import prisma from "@/lib/prisma"

interface ContactMessagePayload {
    name: string,
    subject: string
    phone: string,
    email: string
    message: string
}

export const createContactMessage = async (payload: ContactMessagePayload) => {
    const contactMessage = await prisma.contact_messages.create({
        data: {
            name: payload.name,
            subject: payload.subject,
            phone: payload.phone,
            email: payload.email,
            message: payload.message
        }
    })

    return contactMessage
}

export const getAllContactMessages = async () => {
    const contactMessages = await prisma.contact_messages.findMany()

    return contactMessages
}

export const deleteContactMessage = async (payload: {id: number}) => {
    await prisma.contact_messages.delete({
        where: {
            id: payload.id
        }
    })

    return
}