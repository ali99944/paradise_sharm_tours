'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { File, LineChart, Settings, Users } from 'lucide-react';
import Link from 'next/link';
import useGetServerData from '@/src/hooks/use-get-server-data';
import { getStatistics } from '@/src/server-actions/statistics-actions';

export default function Dashboard() {
  const { data: stats } = useGetServerData(getStatistics, {
    total_contact_messages: 0,
    total_tours: 0,
    total_faqs: 0
  })

  // Mock data for quick actions
  const quickActions = [
    { title: "Create Tour", icon: <Settings className="h-8 w-8" />, link: "/dashboard/tours/create" },
    { title: "Create FAQ", icon: <LineChart className="h-8 w-8" />, link: "/dashboard/faqs" },
    { title: "Customize SEO", icon: <Users className="h-8 w-8" />, link: "/dashboard/customize-seo" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Admin Section */}
      <div>
        <h1 className="text-3xl font-bold">Welcome Admin</h1>
        <p className="text-muted-foreground">Here&apos;s what&apos;s happening with your platform today.</p>
      </div>

      {/* Statistics Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Link href="/dashboard/tours">
      <Card className='hover:bg-primary/10'>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{'Total Tours'}</CardTitle>
              <File className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total_tours}</div>
            </CardContent>
          </Card>
      </Link>

          <Link href="/dashboard/faqs">
          <Card className='hover:bg-primary/10'>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{'Total FAQS'}</CardTitle>
              <File className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total_faqs}</div>
            </CardContent>
          </Card>
          </Link>

          <Link href="/dashboard/contact-messages">
          <Card className='hover:bg-primary/10'>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{'Total Contact Messages'}</CardTitle>
              <File className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total_contact_messages}</div>
            </CardContent>
          </Card>
          </Link>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link href={action.link} key={index}>
              <Card  className="h-24 flex flex-col items-center justify-center gap-2 cursor-pointer font-bold">
              {action.icon}
              <span className="text-sm font-medium">{action.title}</span>
            </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}