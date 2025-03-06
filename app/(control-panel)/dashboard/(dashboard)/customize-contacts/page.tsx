'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { ContactInfo } from '@/src/types';
import { getContactsData, updateContactsData } from '@/src/server-actions/contacts-data-actions';
import useGetServerData from '@/src/hooks/use-get-server-data';
import { GridCardLoader } from '@/src/components/shared/grid_card_loader';
import useServerAction from '@/src/hooks/use-server-action';
import { useEffect } from 'react';

const ContactSettings = () => {
  const { data, isLoading } = useGetServerData(getContactsData, null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactInfo>({
    defaultValues: {
      support_phone: '',
      booking_phone: '',
      urgent_phone_number: '',
      support_email: '',
      booking_email: '',
      address: '',
      city: '',
      facebook_account: '',
      instagram_account: '',
      tiktok_account: '',
      google_maps_link: '',
      working_days: '',
      working_hours: '',
      weekend: '',
    },
  });

  const updateContactSettings = useServerAction(updateContactsData);

  const onSubmit = async (data: ContactInfo) => {
    await updateContactSettings.mutation(data, {
      onSuccess() {
        alert('Contact settings updated successfully!');
      },
      onFailure(error) {
        console.error('Error updating contact settings:', error);
      },
    });
  };

  // Reset form values when data is fetched
  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  if (isLoading) {
    return <GridCardLoader />;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-8">Contact Settings</h1>

      {/* Contact Information */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Manage your contact details displayed on the website.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="booking_phone">Booking Phone</Label>
              <Input
                id="booking_phone"
                {...register('booking_phone', { required: 'Booking phone number is required' })}
                placeholder="Enter booking phone number"
                className="mt-2"
              />
              {errors.booking_phone && <span className="text-sm text-destructive">{errors.booking_phone.message}</span>}
            </div>

            <div>
              <Label htmlFor="support_phone">Support Phone</Label>
              <Input
                id="support_phone"
                {...register('support_phone', { required: 'Support phone number is required' })}
                placeholder="Enter support phone number"
                className="mt-2"
              />
              {errors.support_phone && <span className="text-sm text-destructive">{errors.support_phone.message}</span>}
            </div>

            <div>
              <Label htmlFor="booking_email">Booking Email</Label>
              <Input
                id="booking_email"
                {...register('booking_email', { required: 'Booking Email address is required' })}
                placeholder="Enter booking email address"
                className="mt-2"
              />
              {errors.booking_email && <span className="text-sm text-destructive">{errors.booking_email.message}</span>}
            </div>

            <div>
              <Label htmlFor="support_email">Support Email</Label>
              <Input
                id="support_email"
                {...register('support_email', { required: 'Support email address is required' })}
                placeholder="Enter support email address"
                className="mt-2"
              />
              {errors.support_email && <span className="text-sm text-destructive">{errors.support_email.message}</span>}
            </div>

            <div>
              <Label htmlFor="city">City</Label>
              <Textarea
                id="city"
                {...register('city', { required: 'City is required' })}
                placeholder="Enter city"
                className="mt-2"
              />
              {errors.city && <span className="text-sm text-destructive">{errors.city.message}</span>}
            </div>

            <div>
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                {...register('address', { required: 'Physical address is required' })}
                placeholder="Enter physical address"
                className="mt-2"
              />
              {errors.address && <span className="text-sm text-destructive">{errors.address.message}</span>}
            </div>

            <div>
              <Label htmlFor="urgent_phone_number">Urgent Contact Number</Label>
              <Input
                id="urgent_phone_number"
                {...register('urgent_phone_number', { required: 'Urgent contact number is required' })}
                placeholder="Enter urgent contact number"
                className="mt-2"
              />
              {errors.urgent_phone_number && <span className="text-sm text-destructive">{errors.urgent_phone_number.message}</span>}
            </div>

            <div>
              <Label htmlFor="working_days">Working Days</Label>
              <Input
                id="working_days"
                {...register('working_days', { required: 'Working days are required' })}
                placeholder="Enter working days"
                className="mt-2"
              />
              {errors.working_days && <span className="text-sm text-destructive">{errors.working_days.message}</span>}
            </div>

            <div>
              <Label htmlFor="working_hours">Working Hours</Label>
              <Input
                id="working_hours"
                {...register('working_hours', { required: 'Working hours are required' })}
                placeholder="Enter working hours"
                className="mt-2"
              />
              {errors.working_hours && <span className="text-sm text-destructive">{errors.working_hours.message}</span>}
            </div>

            <div>
              <Label htmlFor="weekend">Weekend</Label>
              <Input
                id="weekend"
                {...register('weekend', { required: 'Weekend information is required' })}
                placeholder="Enter weekend information"
                className="mt-2"
              />
              {errors.weekend && <span className="text-sm text-destructive">{errors.weekend.message}</span>}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Additional Settings */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Additional Settings</CardTitle>
          <CardDescription>Additional contact-related settings.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="google_maps_link">Google Maps Link</Label>
              <Input
                id="google_maps_link"
                {...register('google_maps_link', { required: 'Google Maps link is required' })}
                placeholder="Enter Google Maps link"
                className="mt-2"
              />
              {errors.google_maps_link && <span className="text-sm text-destructive">{errors.google_maps_link.message}</span>}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Social Media Links */}
      <Card>
        <CardHeader>
          <CardTitle>Social Media Links</CardTitle>
          <CardDescription>Manage your social media links displayed on the website.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="facebook_account">Facebook</Label>
              <Input
                id="facebook_account"
                {...register('facebook_account')}
                placeholder="Enter Facebook link"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="instagram_account">Instagram</Label>
              <Input
                id="instagram_account"
                {...register('instagram_account')}
                placeholder="Enter Instagram link"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="tiktok_account">Tiktok</Label>
              <Input
                id="tiktok_account"
                {...register('tiktok_account')}
                placeholder="Enter Tiktok link"
                className="mt-2"
              />
            </div>
            <Button type="submit">Save Changes</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactSettings;