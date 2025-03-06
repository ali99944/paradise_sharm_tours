import { getSeoContent } from "@/src/server-actions/seo-actions"
import { Metadata } from "next"
import TourDetails from "./tour-details"

export async function generateMetadata(): Promise<Metadata> {
    const metadata = await getSeoContent('about')
    return {
        title: metadata?.name,
        description: metadata?.description,
        keywords: metadata?.keywords,
    }
}

export default async function Page() {
    return <TourDetails />
}