import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';

import { Badge, Box, LayoutGrid, Percent } from 'lucide-react';
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
        title: 'Offers',
        url: '/dashboard/offers',
        icon: Percent,
    },
    {
        title: 'Discounts',
        url: '/dashboard/discounts',
        icon: Percent,
    },
    {
        title: 'Services',
        url: '/dashboard/services',
        icon: LayoutGrid,
    },
    {
        title: 'Orders',
        url: '/dashboard/orders',
        icon: Box,
    },
    {
        title: 'Personal Brandings',
        url: '/dashboard/personal-brandings',
        icon: Badge,
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
