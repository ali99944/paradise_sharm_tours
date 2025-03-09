import { Metadata } from "next";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Us",
}

export default async function Page() {
  return <AboutContent />;
}