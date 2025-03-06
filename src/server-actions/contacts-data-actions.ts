'use server'

import prisma from "@/lib/prisma"
import { ContactInfo } from "../types"

export const getContactsData = async () => {
    const contacts_data = await prisma.contact_settings.findUnique({
        where: {
            id: 1
        }
    })
    

    return contacts_data
}

export const updateContactsData = async (payload: ContactInfo) => {
    await prisma.contact_settings.update({
        where: {
            id: 1
        },

        data: payload
    })
}