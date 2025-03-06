import { Metadata } from "next"
import AboutPage from "./about"

export const metadata: Metadata = {
    title: "About",
    description: "About us for inquiries and bookings.",
    keywords: ["About", "Inquiries", "Bookings"],
}

export default function Page() {
    return <AboutPage />
}