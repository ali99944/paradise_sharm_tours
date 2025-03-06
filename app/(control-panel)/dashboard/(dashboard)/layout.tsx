'use client'

import { NavItem } from '@/src/types';
import AppLayout from '@/src/layouts/app-layout';


type AdminLayoutProps = {
  children: React.ReactNode;
  navItems: NavItem[];
};


export default function AdminLayout({ children }: AdminLayoutProps) {

  return (
    <AppLayout>
        {children}
    </AppLayout>
  );
}
