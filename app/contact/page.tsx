import { Metadata } from "next";
import ContactUsPage from "./contact";

export const metadata: Metadata = {
    title: "Contact",
    description: "Contact us for inquiries and bookings.",
    keywords: ["Contact", "Inquiries", "Bookings"],
}

export default async function Page() {
    return <ContactUsPage />;
}