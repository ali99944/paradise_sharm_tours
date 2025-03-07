import { ContactInfo, Manager, SeoContent } from "@/src/types";
import prisma from "./prisma";
export type AvailableSeo = 'welcome' | 'contact' | 'about' | 'faqs' | 'terms' | 'privacy_policy'


const seo_initial_data: Omit<SeoContent, 'id'>[] = [
  {
    key: 'welcome',
    name: 'paradise sharm tours',
    description: 'welcome to paradise sharm tours, a great place for all your journies',
    keywords: 'paradise',
    meta_tags: '',
    canonical_url: '',
    og_title: '',
    og_description: '',
    og_image: '',
    twitter_title: '',
    twitter_description: '',
    twitter_image: '',
    schema_markup: '',
    robots_meta: ''
  },
  {
    key: 'contact',
    name: 'Contact Paradise sharm',
    description: 'no description',
    keywords: 'paradise',
    meta_tags: '',
    canonical_url: '',
    og_title: '',
    og_description: '',
    og_image: '',
    twitter_title: '',
    twitter_description: '',
    twitter_image: '',
    schema_markup: '',
    robots_meta: ''
  },
  {
    key: 'about',
    name: 'About paradise sharm',
    description: 'no description',
    keywords: 'paradise',
    meta_tags: '',
    canonical_url: '',
    og_title: '',
    og_description: '',
    og_image: '',
    twitter_title: '',
    twitter_description: '',
    twitter_image: '',
    schema_markup: '',
    robots_meta: ''
  },
  {
    key: 'faqs',
    name: 'FAQS',
    description: 'no description',
    keywords: 'paradise,faqs',
    meta_tags: '',
    canonical_url: '',
    og_title: '',
    og_description: '',
    og_image: '',
    twitter_title: '',
    twitter_description: '',
    twitter_image: '',
    schema_markup: '',
    robots_meta: ''
  },
  {
    key: 'terms',
    name: 'paradise sharm tours',
    description: 'no description',
    keywords: 'paradise,terms',
    meta_tags: '',
    canonical_url: '',
    og_title: '',
    og_description: '',
    og_image: '',
    twitter_title: '',
    twitter_description: '',
    twitter_image: '',
    schema_markup: '',
    robots_meta: ''
  },
  {
    key: 'privacy_policy',
    name: 'paradise sharm privacy policy',
    description: 'no description',
    keywords: 'privacy,policy',
    meta_tags: '',
    canonical_url: '',
    og_title: '',
    og_description: '',
    og_image: '',
    twitter_title: '',
    twitter_description: '',
    twitter_image: '',
    schema_markup: '',
    robots_meta: ''
  }
]

const contacts_record: ContactInfo & { id: number} = {
  booking_phone: '+12345678',
  support_phone: '+12345678',
  booking_email: 'booking@paradise.com',
  support_email: 'booking@paradise.com',
  city: 'Alexandria',
  address: '123 x street',
  urgent_phone_number: '+111111111',
  facebook_account: 'fa.book/1',
  instagram_account: 'insta.gram/1',
  tiktok_account: 'tik.tok/1',
  google_maps_link: 'https://map............',
  working_days: 'Monday - Thursday',
  working_hours: '12pm - 8pm',
  weekend: 'Friday',

  id: 1

}

const managers: Omit<Manager, 'id'>[] = [
  {
    email: 'sharmtours@gmail.com',
    name: 'sharmtours',
    password: 'sharmtours',
    role: 'admin'
  },
  {
    email: 'abdsalam@gmail.com',
    name: 'abdsalam',
    password: 'abdsalam',
    role: 'admin'
  }
]

async function main() {
  await prisma.seo_contents.deleteMany()

  await prisma.seo_contents.createMany({
    data: seo_initial_data
  })

  await prisma.contact_settings.create({
    data: contacts_record
  })

  await prisma.managers.createMany({
    data: managers
  })
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
