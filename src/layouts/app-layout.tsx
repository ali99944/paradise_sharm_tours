'use client'

import ProtectedRoute from "../components/protected-route"
import AppLayoutTemplate from "./app/app-sidebar-layout"


export default function AppLayout ({ children }: { children: React.ReactNode }) {
    return (
        <ProtectedRoute>
            <AppLayoutTemplate>
                {children}
            </AppLayoutTemplate>
        </ProtectedRoute>
    )
}
