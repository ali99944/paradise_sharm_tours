'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { TrashIcon, PlusIcon } from 'lucide-react';
// import useServerAction from '@/src/hooks/use-server-action';
// import { useParams } from 'next/navigation';
import { TourAddon, TourGalleryImage, TourInclude, TourSpecialOffer } from '@/src/types';

interface TourFormData {
  id: string;
  name: string;
  description: string;
  price_per_person: number;
  city: string;
  includes: TourInclude[];
  duration: string;
  location: string;
  special_offers: Array<TourSpecialOffer>;
  main_image: string | null;
  gallery_images: TourGalleryImage[];
  addons: Array<TourAddon>;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;
}

const EditTourPage = () => {
    
  const { register, handleSubmit, formState: { errors } } = useForm<TourFormData>();
  const [includes] = useState<TourInclude[]>([]);
  const [newInclude, setNewInclude] = useState('');
  const [specialOffers, setSpecialOffers] = useState<Array<TourSpecialOffer>>([]);
  const [addons, setAddons] = useState<Array<TourAddon>>([]);
  const [mainImage] = useState<string | null>(null);
  const [galleryImages] = useState<TourGalleryImage[]>([]);
//   const [newGalleryImage, setNewGalleryImage] = useState<File | null>(null);

//   const { id: tourId } = useParams();

//   const updateTourAction = useServerAction(updateTour);
//   const addIncludeAction = useServerAction(addTourInclude);
//   const removeIncludeAction = useServerAction(removeTourInclude);
//   const addSpecialOfferAction = useServerAction(addTourSpecialOffer);
//   const removeSpecialOfferAction = useServerAction(removeTourSpecialOffer);
//   const addAddonAction = useServerAction(addTourAddon);
//   const removeAddonAction = useServerAction(removeTourAddon);
//   const updateMainImageAction = useServerAction(changeTourMainImage);
//   const addGalleryImageAction = useServerAction(addTourGalleryImage);
//   const removeGalleryImageAction = useServerAction(removeTourGalleryImage);

//   const fetchTour = async () => {
//     const tour = await getTourById(Number(tourId));

//     if (tour) {
//       setIncludes(tour.includes);
//       setSpecialOffers(tour.special_offers);
//       setAddons(tour.addons);
//       setMainImage(tour.main_image);
//       setGalleryImages(tour.gallery_images);
//     }
//   }

  const onSubmit = async (data: TourFormData) => {
    try {
        console.log(data);
        
    //   await updateTourAction.mutation({
    //     id: +tourId!,
    //     ...data,
    //   });
      alert('Tour updated successfully!');
    } catch (error) {
      console.error('Error updating tour:', error);
    }
  };

  const handleAddInclude = async () => {
    if (newInclude.trim()) {
    //   const response = await addIncludeAction.mutation({ id: Number(tourId), include: newInclude });
    //   setIncludes((prev) => [...prev, response.include]);
    //   setNewInclude('');
    }
  };

  const handleRemoveInclude = async (index: number) => {
    console.log(index);
    
    // const include = includes[index];
    // await removeIncludeAction.mutation({
    //   id: Number(tourId!),
    // });
    // setIncludes((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddSpecialOffer = async () => {
    // const newOffer = { name: '', price: 0, description: '' };
    // await addSpecialOfferAction.mutation({
    //     id: +tourId!,
    //     special_offer: {
    //         name: newOffer.name,
    //         description: newOffer.description,
    //         price: newOffer.price
    //     }
    // }, {
    //     onSuccess(data) {
    //         // setSpecialOffers((prev) => [...prev, data]);
    //     },
    // });
    
  };

  const handleRemoveSpecialOffer = async (id: number) => {
    // await removeSpecialOfferAction.mutation({ tourId, offerId: id });
    setSpecialOffers((prev) => prev.filter((offer) => offer.id !== id));
  };

  const handleAddAddon = async () => {
    // const newAddon = { name: '', price: 0, description: '' };
    // const response = await addAddonAction.mutation({ tourId, addon: newAddon });
    // setAddons((prev) => [...prev, response.addon]);
  };

  const handleRemoveAddon = async (id: number) => {
    console.log(id);
    
    // await removeAddonAction.mutation({ tourId, addonId: id });
    // setAddons((prev) => prev.filter((addon) => addon.id !== id));
  };

  const handleUpdateMainImage = async (file: File) => {
    console.log(file);
    
    // const response = await updateMainImageAction.mutation({ tourId, file });
    // setMainImage(response.main_image);
  };

  const handleAddGalleryImage = async (file: File) => {
    console.log(file);
    
    // const response = await addGalleryImageAction.mutation({ tourId, file });
    // setGalleryImages((prev) => [...prev, response.image]);
  };

  const handleRemoveGalleryImage = async (image: number) => {
    console.log(image);
    
    // await removeGalleryImageAction.mutation({ tourId, image });
    // setGalleryImages((prev) => prev.filter((img) => img !== image));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-8">Edit Tour</h1>
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
                <Input value={include.name} readOnly />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  onClick={() => handleRemoveInclude(include.id)}
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
            {specialOffers.map((offer) => (
              <div key={offer.id} className="space-y-2">
                <div className="flex items-center gap-2">
                  <Input
                    value={offer.name}
                    onChange={(e) => setSpecialOffers((prev) =>
                      prev.map((o) => o.id === offer.id ? { ...o, name: e.target.value } : o)
                    )}
                    placeholder="Offer name"
                  />
                  <Input
                    type="number"
                    value={offer.price}
                    onChange={(e) => setSpecialOffers((prev) =>
                      prev.map((o) => o.id === offer.id ? { ...o, price: parseFloat(e.target.value) } : o)
                    )}
                    placeholder="Offer price"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => handleRemoveSpecialOffer(offer.id)}
                  >
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </div>
                <Textarea
                  value={offer.description}
                  onChange={(e) => setSpecialOffers((prev) =>
                    prev.map((o) => o.id === offer.id ? { ...o, description: e.target.value } : o)
                  )}
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
            {addons.map((addon) => (
              <div key={addon.id} className="space-y-2">
                <div className="flex items-center gap-2">
                  <Input
                    value={addon.name}
                    onChange={(e) => setAddons((prev) =>
                      prev.map((a) => a.id === addon.id ? { ...a, name: e.target.value } : a)
                    )}
                    placeholder="Addon name"
                  />
                  <Input
                    type="number"
                    value={addon.price}
                    onChange={(e) => setAddons((prev) =>
                      prev.map((a) => a.id === addon.id ? { ...a, price: parseFloat(e.target.value) } : a)
                    )}
                    placeholder="Addon price"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => handleRemoveAddon(addon.id)}
                  >
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </div>
                <Textarea
                  value={addon.description}
                  onChange={(e) => setAddons((prev) =>
                    prev.map((a) => a.id === addon.id ? { ...a, description: e.target.value } : a)
                  )}
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
            onChange={(e) => {
              if (e.target.files?.[0]) {
                handleUpdateMainImage(e.target.files[0]);
              }
            }}
          />
          {mainImage && (
            <div className="mt-2">
              <img
                src={mainImage}
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
            onChange={(e) => {
              if (e.target.files?.[0]) {
                handleAddGalleryImage(e.target.files[0]);
              }
            }}
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image.src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-24 h-24 object-cover rounded"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-1 right-1"
                  onClick={() => handleRemoveGalleryImage(image.id)}
                >
                  <TrashIcon className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Fields */}
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

        <Button type="submit">Save Changes</Button>
      </form>
    </div>
  );
};

export default EditTourPage;