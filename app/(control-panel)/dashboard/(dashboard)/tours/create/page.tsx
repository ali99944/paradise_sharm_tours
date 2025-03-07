'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { TrashIcon, PlusIcon } from 'lucide-react';
import useServerAction from '@/src/hooks/use-server-action';
import { createTour } from '@/src/server-actions/tour-actions';
import { OverlayLoader } from '@/src/components/shared/overlay_loader';
import { useRouter } from 'next/navigation';

interface TourFormData {
  name: string;
  description: string;
  price_per_person: number;
  city: string;
  includes: string[];
  duration: string;
  location: string;
  special_offers: Array<{
    name: string;
    price: number;
    description: string;
  }>;
  main_image: File | null;
  gallery_images: File[];
  addons: Array<{
    name: string;
    price: number;
    description: string;
  }>;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;
}

const CreateTourPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TourFormData>();
  const [includes, setIncludes] = useState<string[]>([]);
  const [newInclude, setNewInclude] = useState('');
  const [specialOffers, setSpecialOffers] = useState<Array<{ name: string; price: number; description: string }>>([]);
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [galleryImages, setGalleryImages] = useState<File[]>([]);
  const [addons, setAddons] = useState<Array<{ name: string; price: number; description: string }>>([]);

  const createTourAction = useServerAction(createTour);

  const [creating, setCreating] = useState(false);
  const router = useRouter();
  const onSubmit = async (data: TourFormData) => {
    try {
      setCreating(true);
      await createTourAction.mutation({
        name: data.name,
        description: data.description,
        price_per_person: data.price_per_person,
        city: data.city,
        includes: includes,
        duration: Number(data.duration),
        location: data.location,
        special_offers: specialOffers,
        main_image: mainImage,
        gallery_images: galleryImages,
        addons: addons,
        seo_title: data.seo_title || null,
        seo_description: data.seo_description || null,
        seo_keywords: data.seo_keywords || null,
      });
      setCreating(false)
      alert('Tour created successfully!');
      router.replace('/dashboard/tours');
    } catch (error) {
      console.error('Error creating tour:', error);
      alert('Error creating tour. Please try again.');
      setCreating(false)
    }
  };

  const handleAddInclude = () => {
    if (newInclude.trim()) {
      setIncludes((prev) => [...prev, newInclude]);
      setNewInclude('');
    }
  };

  const handleRemoveInclude = (index: number) => {
    setIncludes((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddSpecialOffer = () => {
    setSpecialOffers((prev) => [...prev, { name: '', price: 0, description: '' }]);
  };

  const handleRemoveSpecialOffer = (index: number) => {
    setSpecialOffers((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSpecialOfferChange = (index: number, field: keyof { name: string; price: number; description: string }, value: string | number) => {
    setSpecialOffers((prev) =>
      prev.map((offer, i) =>
        i === index ? { ...offer, [field]: value } : offer
      )
    );
  };

  const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setMainImage(e.target.files[0]);
    }
  };

  const handleGalleryImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setGalleryImages(Array.from(e.target.files));
    }
  };

  const handleAddAddon = () => {
    setAddons((prev) => [...prev, { name: '', price: 0, description: '' }]);
  };

  const handleRemoveAddon = (index: number) => {
    setAddons((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddonChange = (index: number, field: keyof { name: string; price: number; description: string }, value: string | number) => {
    setAddons((prev) =>
      prev.map((addon, i) =>
        i === index ? { ...addon, [field]: value } : addon
      )
    );
  };

  if(creating) {
    return <OverlayLoader />
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-8">Create Tour</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <Label htmlFor="name">Tour Name</Label>
          <Input
            id="name"
            {...register('name', { required: 'Tour name is required' })}
            placeholder="Enter tour name"
          />
          {errors.name && <span className="text-sm text-destructive">{errors.name.message}</span>}
        </div>

        {/* Description */}
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            {...register('description', { required: 'Description is required' })}
            placeholder="Enter tour description"
          />
          {errors.description && <span className="text-sm text-destructive">{errors.description.message}</span>}
        </div>

        {/* Price Per Person */}
        <div>
          <Label htmlFor="price_per_person">Price Per Person</Label>
          <Input
            id="price_per_person"
            type="number"
            {...register('price_per_person', { required: 'Price is required' })}
            placeholder="Enter price per person"
          />
          {errors.price_per_person && <span className="text-sm text-destructive">{errors.price_per_person.message}</span>}
        </div>

        {/* City */}
        <div>
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            {...register('city', { required: 'City is required' })}
            placeholder="Enter city"
          />
          {errors.city && <span className="text-sm text-destructive">{errors.city.message}</span>}
        </div>

        {/* Includes */}
        <div>
          <Label>Includes</Label>
          <div className="space-y-2">
            {includes.map((include, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input value={include} readOnly />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  onClick={() => handleRemoveInclude(index)}
                >
                  <TrashIcon className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <div className="flex gap-2">
              <Input
                value={newInclude}
                onChange={(e) => setNewInclude(e.target.value)}
                placeholder="Add include"
              />
              <Button type="button" onClick={handleAddInclude}>
                <PlusIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Duration */}
        <div>
          <Label htmlFor="duration">Duration</Label>
          <Input
            id="duration"
            {...register('duration', { required: 'Duration is required' })}
            placeholder="Enter duration (e.g., 3 days)"
          />
          {errors.duration && <span className="text-sm text-destructive">{errors.duration.message}</span>}
        </div>

        {/* Location */}
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            {...register('location', { required: 'Location is required' })}
            placeholder="Enter location"
          />
          {errors.location && <span className="text-sm text-destructive">{errors.location.message}</span>}
        </div>

        {/* Special Offers */}
        <div>
          <Label>Special Offers</Label>
          <div className="space-y-4">
            {specialOffers.map((offer, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2">
                  <Input
                    value={offer.name}
                    onChange={(e) => handleSpecialOfferChange(index, 'name', e.target.value)}
                    placeholder="Offer name"
                  />
                  <Input
                    type="number"
                    value={offer.price}
                    onChange={(e) => handleSpecialOfferChange(index, 'price', parseFloat(e.target.value))}
                    placeholder="Offer price"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => handleRemoveSpecialOffer(index)}
                  >
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </div>
                <Textarea
                  value={offer.description}
                  onChange={(e) => handleSpecialOfferChange(index, 'description', e.target.value)}
                  placeholder="Offer description"
                />
              </div>
            ))}
            <Button type="button" onClick={handleAddSpecialOffer}>
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Special Offer
            </Button>
          </div>
        </div>

        {/* Addons */}
        <div>
          <Label>Addons</Label>
          <div className="space-y-4">
            {addons.map((addon, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2">
                  <Input
                    value={addon.name}
                    onChange={(e) => handleAddonChange(index, 'name', e.target.value)}
                    placeholder="Addon name"
                  />
                  <Input
                    type="number"
                    value={addon.price}
                    onChange={(e) => handleAddonChange(index, 'price', parseFloat(e.target.value))}
                    placeholder="Addon price"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => handleRemoveAddon(index)}
                  >
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </div>
                <Textarea
                  value={addon.description}
                  onChange={(e) => handleAddonChange(index, 'description', e.target.value)}
                  placeholder="Addon description"
                />
              </div>
            ))}
            <Button type="button" onClick={handleAddAddon}>
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Addon
            </Button>
          </div>
        </div>

        {/* Main Image */}
        <div>
          <Label htmlFor="main_image">Main Image</Label>
          <Input
            id="main_image"
            type="file"
            accept="image/*"
            onChange={handleMainImageChange}
          />
          {mainImage && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(mainImage)}
                alt="Main Image Preview"
                className="w-32 h-32 object-cover rounded"
              />
            </div>
          )}
        </div>

        {/* Gallery Images */}
        <div>
          <Label htmlFor="gallery_images">Gallery Images</Label>
          <Input
            id="gallery_images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleGalleryImagesChange}
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt={`Gallery Image ${index + 1}`}
                className="w-24 h-24 object-cover rounded"
              />
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="seo_title">SEO Title</Label>
          <Input
            id="seo_title"
            {...register('seo_title')}
            placeholder="Enter SEO title"
          />
        </div>
        <div>
          <Label htmlFor="seo_description">SEO Description</Label>
          <Textarea
            id="seo_description"
            {...register('seo_description')}
            placeholder="Enter SEO description"
          />
        </div>
        <div>
          <Label htmlFor="seo_keywords">SEO Keywords</Label>
          <Input
            id="seo_keywords"
            {...register('seo_keywords')}
            placeholder="Enter SEO keywords"
          />
        </div>

        <Button type="submit">Create Tour</Button>
      </form>
    </div>
  );
};

export default CreateTourPage;