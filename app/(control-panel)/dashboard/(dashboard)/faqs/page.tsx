import { Metadata  } from "next"
import FAQDashboard from "./faqs"

export const metadata: Metadata = {
    title: 'Paradise FAQS',
    description: 'here all faqs related to paradise sharm',
    keywords: ['sharm', 'tours', 'paradise', 'faqs']
}

export default async function Page() {
    return <FAQDashboard />
}