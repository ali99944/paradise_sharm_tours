import { Metadata } from "next";
import ContactUsPage from "./contact";
import { getSeoContent } from "@/src/server-actions/seo-actions";

export async function generateMetadata(): Promise<Metadata> {
    const metadata = await getSeoContent('contact')
    return {
        title: metadata?.name,
        description: metadata?.description,
        keywords: metadata?.keywords,
    }
}

export default async function Page() {
    return <ContactUsPage />;
}