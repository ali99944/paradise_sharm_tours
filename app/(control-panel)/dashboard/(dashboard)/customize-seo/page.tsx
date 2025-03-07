'use client'

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { GridCardLoader } from '@/src/components/shared/grid_card_loader';
import useGetServerData from '@/src/hooks/use-get-server-data';
import { getAllSeoContents } from '@/src/server-actions/seo-actions';
import { Edit, Tag, Code, LinkIcon } from 'lucide-react';
import Link from 'next/link';

const CustomizeSeo = () => {
  const { data: seo_contents, isLoading } = useGetServerData(getAllSeoContents, []);


  if (isLoading) {
    return <GridCardLoader />;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-800">SEO Settings</h1>
      </div>

      {/* SEO Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {seo_contents.map((content) => (
          <Card key={content.id} className="rounded-sm shadow-none">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>
                  <p className="mb-2 rounded-full py-1 px-3 text-xs w-fit bg-primary text-white">
                    {content.key}
                  </p>
                  <span className="text-lg font-semibold">{content.name}</span>
                </CardTitle>
                <Link href={`/dashboard/customize-seo/${content.key}`}>
                <Button
                  variant="ghost"
                  size="icon"
                >
                  <Edit className="h-4 w-4 text-primary" />
                </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{content.description}</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Tag className="h-4 w-4" />
                  <span>Keywords: {content.keywords}</span>
                </div>
                {content.meta_tags && (
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Code className="h-4 w-4" />
                    <span>Meta Tags: {content.meta_tags}</span>
                  </div>
                )}
                {content.canonical_url && (
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <LinkIcon className="h-4 w-4" />
                    <span>Canonical URL: {content.canonical_url}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CustomizeSeo;