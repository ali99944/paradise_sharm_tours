import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';

import { Contact, FileQuestion, Layout, LayoutGrid, Plane } from 'lucide-react';
import AppLogo from './app-logo';
import { NavItem } from '@/src/types';
import Link from 'next/link';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Tours',
        url: '/dashboard/tours',
        icon: Plane,
    },
    {
        title: 'FAQS',
        url: '/dashboard/faqs',
        icon: FileQuestion,
    },
    {
        title: 'Customize Website',
        url: '/dashboard/settings/customize-website',
        icon: Layout,
    },
    {
        title: 'Contact Data',
        url: '/dashboard/contact',
        icon: Contact,
    },
];

const footerNavItems: NavItem[] = [];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
