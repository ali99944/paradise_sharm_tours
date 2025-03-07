'use server'

import { uploadToCloudinary } from "@/lib/cloudinary-upload"
import prisma from "@/lib/prisma"

export const getAllTours = async () => {
    const tours = await prisma.tours.findMany({
        include: {
            special_offers: true,
            addons: true,
            includes: true,
            gallery_images: true
        }
    })

    return tours
}

export const getTourById = async (id: number) => {
    const tour = await prisma.tours.findUnique({
        where: {
            id
        },

        include: {
            special_offers: true,
            addons: true,
            includes: true,
            gallery_images: true
        }
    })

    return tour
}

interface TourPayload {
    name: string
    description: string
    price_per_person: number
    city: string
    includes: string[]
    duration: number
    location: string
    special_offers: Array<{
        price: number
        name: string
        description: string
    }>
    main_image: File | null
    gallery_images: File[]
    addons: Array<{
        name: string
        price: number
        description: string
    }>


    seo_title: string | null
    seo_description: string | null
    seo_keywords: string | null
}

export const createTour = async (payload: TourPayload) => {
    console.log(payload);
    
    const main_image_src = await uploadToCloudinary(payload.main_image!)
    const gallery_images_src = await Promise.all(
        payload.gallery_images.map((image) => uploadToCloudinary(image))
    )

    const tour = await prisma.tours.create({
        data: {
            name: payload.name,
            description: payload.description,
            price_per_person: +payload.price_per_person,
            city: payload.city,
            duration: payload.duration,
            location: payload.location,
            main_image: main_image_src,

            seo_title: payload.seo_title || payload.name,
            seo_description: payload.seo_description || payload.description,
            seo_keywords: payload.seo_keywords || payload.name,

            includes: {
                createMany: {
                    data: payload.includes.map((include) => ({
                        name: include
                    }))
                }
            },

            gallery_images: {
                createMany: {
                    data: gallery_images_src.map((image) => ({
                        src: image
                    }))
                }
            },

            special_offers: {
                createMany: {
                    data: payload.special_offers.map((offer) => ({
                        name: offer.name,
                        price: offer.price,
                        description: offer.description
                    }))
                }
            },
        }
    })

    return tour
}


interface RemoveTourGalleryImagePayload {
    id: number
    gallery_image_id: number
}

export const removeTourGalleryImage = async (payload: RemoveTourGalleryImagePayload) => {
    await prisma.tours.update({
        where: {
            id: payload.id
        },
        data: {
            gallery_images: {
                delete: {
                    id: payload.gallery_image_id
                }
            }
        }
    })
}

interface AddTourGalleryImagePayload {
    id: number
    gallery_image: File
}

export const addTourGalleryImage = async (payload: AddTourGalleryImagePayload) => {
    const gallery_image_src = await uploadToCloudinary(payload.gallery_image)

    const tour = await prisma.tours.update({
        where: {
            id: payload.id
        },
        include: {
            gallery_images: true
        },
        data: {
            gallery_images: {
                create: {
                    src: gallery_image_src
                }
            }
        }
    })

    return tour.gallery_images
}

interface RemoveTourIncludePayload {
    id: number
    include_id: number
}

export const removeTourInclude = async (payload: RemoveTourIncludePayload) => {
    await prisma.tours.update({
        where: {
            id: payload.id
        },
        data: {
            includes: {
                delete: {
                    id: payload.include_id
                }
            }
        }
    })

    return
}

interface AddTourIncludePayload {
    id: number
    include: {
        name: string
    }
}

export const addTourInclude = async (payload: AddTourIncludePayload) => {
    const tour = await prisma.tours.update({
        where: {
            id: payload.id
        },
        include: {
            includes: true
        },
        data: {
            includes: {
                create: {
                    name: payload.include.name
                }
            }
        }
    })

    return tour.includes
}

interface ChangeTourMainImagePayload {
    id: number
    main_image: File
}

export const changeTourMainImage = async (payload: ChangeTourMainImagePayload) => {
    const main_image_src = await uploadToCloudinary(payload.main_image)

    await prisma.tours.update({
        where: {
            id: payload.id
        },
        data: {
            main_image: main_image_src
        }
    })

    return main_image_src
}

interface RemoveTourSpecialOfferPayload {
    id: number
    special_offer_id: number
}

export const removeTourSpecialOffer = async (payload: RemoveTourSpecialOfferPayload) => {
    await prisma.tours.update({
        where: {
            id: payload.id
        },
        data: {
            special_offers: {
                delete: {
                    id: payload.special_offer_id
                }
            }
        }
    })

    return
}

interface AddTourSpecialOfferPayload {
    id: number
    special_offer: {
        name: string
        price: number
        description: string
    }
}

export const addTourSpecialOffer = async (payload: AddTourSpecialOfferPayload) => {
    const tour = await prisma.tours.update({
        where: {
            id: payload.id
        },
        include: {
            special_offers: true
        },
        data: {
            special_offers: {
                create: {
                    name: payload.special_offer.name,
                    price: payload.special_offer.price,
                    description: payload.special_offer.description
                }
            }
        }
    })

    return tour.special_offers
}

interface RemoveTourAddonPayload {
    id: number
    addon_id: number
}

export const removeTourAddon = async (payload: RemoveTourAddonPayload) => {
    await prisma.tours.update({
        where: {
            id: payload.id
        },
        data: {
            addons: {
                delete: {
                    id: payload.addon_id
                }
            }
        }
    })

    return
}

interface AddTourAddonPayload {
    id: number
    addon: {
        name: string
        price: number
        description: string
    }
}

export const addTourAddon = async (payload: AddTourAddonPayload) => {
    const tour = await prisma.tours.update({
        where: {
            id: payload.id
        },
        include: {
            addons: true
        },
        data: {
            addons: {
                create: {
                    name: payload.addon.name,
                    price: payload.addon.price,
                    description: payload.addon.description
                }
            }
        }
    })

    return tour.addons
}


export const deleteTour = async (id: number) => {



    await prisma.tour_includes.deleteMany({
        where: {
            tour_id: id
        }
    })

    await prisma.tour_addons.deleteMany({
        where: {
            tour_id: id
        }
    })

    await prisma.tour_special_offers.deleteMany({
        where: {
            tour_id: id
        }
    })

    await prisma.tour_gallery_images.deleteMany({
        where: {
            tour_id: id
        }
    })

    await prisma.tours.delete({
        where: {
            id
        }
    })

    return
}

interface UpdateTourPayload {
    id: number
    name: string
    description: string
    price_per_person: number
    city: string
    duration: number
    location: string
    seo_title: string | null
    seo_description: string | null
    seo_keywords: string | null
}

export const updateTour = async (payload: UpdateTourPayload) => {
    const existingTour = await prisma.tours.findUnique({
        where: {
            id: payload.id
        }
    })

    const tour = await prisma.tours.update({
        where: {
            id: payload.id
        },
        data: {
            name: payload.name,
            description: payload.description,
            price_per_person: payload.price_per_person,
            city: payload.city,
            duration: payload.duration,
            location: payload.location,
            seo_title: payload.seo_title || existingTour?.seo_title,
            seo_description: payload.seo_description || existingTour?.seo_description,
            seo_keywords: payload.seo_keywords || existingTour?.seo_keywords,
        }
    })

    return tour
}