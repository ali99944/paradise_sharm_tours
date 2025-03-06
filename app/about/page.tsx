import { Metadata } from "next"
import AboutPage from "./about"
import { getSeoContent } from "@/src/server-actions/seo-actions"

export async function generateMetadata(): Promise<Metadata> {
    const metadata = await getSeoContent('about')
    return {
        title: metadata?.name,
        description: metadata?.description,
        keywords: metadata?.keywords,
    }
}

export default function Page() {
    return <AboutPage />
}