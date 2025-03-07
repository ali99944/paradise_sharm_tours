'use client'

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { getSeoContent, updateSeoContent } from '@/src/server-actions/seo-actions';
import { AvailableSeo, SeoContent } from '@/src/types';
import { Settings, Image, Code, ArrowLeft, Twitter } from 'lucide-react';

const SeoUpdate = () => {
    const { page } = useParams()
  const router = useRouter();
  const [, setSeoContent] = useState<SeoContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    keywords: '',
    meta_tags: '',
    canonical_url: '',
    og_title: '',
    og_description: '',
    og_image: '',
    twitter_title: '',
    twitter_description: '',
    twitter_image: '',
    schema_markup: '',
    robots_meta: 'index, follow',
  });

  useEffect(() => {
    const fetchSeoContent = async () => {
      const data = await getSeoContent(page as AvailableSeo);
      if (data) {
        setSeoContent(data);
        setFormData({
          name: data.name,
          description: data.description,
          keywords: data.keywords,
          meta_tags: data.meta_tags || '',
          canonical_url: data.canonical_url || '',
          og_title: data.og_title || '',
          og_description: data.og_description || '',
          og_image: data.og_image || '',
          twitter_title: data.twitter_title || '',
          twitter_description: data.twitter_description || '',
          twitter_image: data.twitter_image || '',
          schema_markup: data.schema_markup || '',
          robots_meta: data.robots_meta || 'index, follow',
        });
      }
      setIsLoading(false);
    };

    fetchSeoContent();
  }, [page]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateSeoContent({
        key: page as AvailableSeo, 
        ...formData
    });
    router.push('/seo');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Button
        variant="ghost"
        className="mb-4"
        onClick={() => router.push('/seo')}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to SEO List
      </Button>

      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Update SEO for <span className="capitalize">{(page as AvailableSeo).replace('_', ' ')}</span>
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Basic SEO Section */}
        <Card className='rounded-sm shadow-none'>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Basic SEO
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Page Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter page name"
              />
            </div>
            <div>
              <Label htmlFor="description">Meta Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Enter meta description"
              />
            </div>
            <div>
              <Label htmlFor="keywords">Keywords</Label>
              <Textarea
                id="keywords"
                value={formData.keywords}
                onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                placeholder="Enter keywords (comma-separated)"
              />
            </div>
            <div>
              <Label htmlFor="robots_meta">Robots Meta</Label>
              <Input
                id="robots_meta"
                value={formData.robots_meta}
                onChange={(e) => setFormData({ ...formData, robots_meta: e.target.value })}
                placeholder="Enter robots meta (e.g., index, follow)"
              />
            </div>
          </CardContent>
        </Card>

        {/* Advanced SEO Section */}
        <Card className='rounded-sm shadow-none'>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Advanced SEO
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="meta_tags">Meta Tags</Label>
              <Textarea
                id="meta_tags"
                value={formData.meta_tags}
                onChange={(e) => setFormData({ ...formData, meta_tags: e.target.value })}
                placeholder="Enter custom meta tags"
              />
            </div>
            <div>
              <Label htmlFor="canonical_url">Canonical URL</Label>
              <Input
                id="canonical_url"
                value={formData.canonical_url}
                onChange={(e) => setFormData({ ...formData, canonical_url: e.target.value })}
                placeholder="Enter canonical URL"
              />
            </div>
            <div>
              <Label htmlFor="schema_markup">Schema Markup</Label>
              <Textarea
                id="schema_markup"
                value={formData.schema_markup}
                onChange={(e) => setFormData({ ...formData, schema_markup: e.target.value })}
                placeholder="Enter schema markup (JSON-LD)"
              />
            </div>
          </CardContent>
        </Card>

        {/* OpenGraph Section */}
        <Card className='rounded-sm shadow-none'>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Image className="h-5 w-5" />
              OpenGraph
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="og_title">OG Title</Label>
              <Input
                id="og_title"
                value={formData.og_title}
                onChange={(e) => setFormData({ ...formData, og_title: e.target.value })}
                placeholder="Enter OpenGraph title"
              />
            </div>
            <div>
              <Label htmlFor="og_description">OG Description</Label>
              <Textarea
                id="og_description"
                value={formData.og_description}
                onChange={(e) => setFormData({ ...formData, og_description: e.target.value })}
                placeholder="Enter OpenGraph description"
              />
            </div>
            <div>
              <Label htmlFor="og_image">OG Image URL</Label>
              <Input
                id="og_image"
                value={formData.og_image}
                onChange={(e) => setFormData({ ...formData, og_image: e.target.value })}
                placeholder="Enter OpenGraph image URL"
              />
            </div>
          </CardContent>
        </Card>

        {/* Twitter Section */}
        <Card className='rounded-sm shadow-none'>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Twitter className="h-5 w-5" />
              Twitter
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="twitter_title">Twitter Title</Label>
              <Input
                id="twitter_title"
                value={formData.twitter_title}
                onChange={(e) => setFormData({ ...formData, twitter_title: e.target.value })}
                placeholder="Enter Twitter title"
              />
            </div>
            <div>
              <Label htmlFor="twitter_description">Twitter Description</Label>
              <Textarea
                id="twitter_description"
                value={formData.twitter_description}
                onChange={(e) => setFormData({ ...formData, twitter_description: e.target.value })}
                placeholder="Enter Twitter description"
              />
            </div>
            <div>
              <Label htmlFor="twitter_image">Twitter Image URL</Label>
              <Input
                id="twitter_image"
                value={formData.twitter_image}
                onChange={(e) => setFormData({ ...formData, twitter_image: e.target.value })}
                placeholder="Enter Twitter image URL"
              />
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <CardFooter className="col-span-full flex justify-end">
          <Button type="submit">Save Changes</Button>
        </CardFooter>
      </form>
    </div>
  );
};

export default SeoUpdate;