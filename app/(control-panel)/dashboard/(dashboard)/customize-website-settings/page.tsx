'use client';

import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

interface WebsitePage {
    name: string;
    description: string;
    route: string
}

const available_website_pages: WebsitePage[] = [
    {
        name: "Home Page",
        description: "Customize the layout and content of the home page.",
        route: "/dashboard/customize-website/landing"
    },
    {
        name: "About Page",
        description: "Customize the layout and content of the about page.",
        route: "/dashboard/customize-website/about"
    },
    {
        name: "Contact Page",
        description: "Customize the layout and content of the contact page.",
        route: "/dashboard/customize-website/contact"
    },
    {
        name: "FAQs Page",
        description: "Customize the layout and content of the FAQs page.",
        route: "/dashboard/customize-website/faq"
    }
    
]
const SettingsPage = () => {

  return (
      <div className="p-4">
        {/* Page Settings Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Website Pages Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                available_website_pages.map((page) => (
                    <Link href={page.route} key={page.description}>
                        <Card
                    className="cursor-pointer hover:bg-accent/50 transition-colors"
                    >
                    <CardHeader>
                        <CardTitle>{page.name}</CardTitle>
                        <CardDescription>{page.description}</CardDescription>
                    </CardHeader>
                    </Card>
                    </Link>
                ))
            }
          </div>
        </div>
      </div>
  );
};

export default SettingsPage;