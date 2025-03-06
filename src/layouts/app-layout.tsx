import AppLayoutTemplate from "./app/app-sidebar-layout"


export default function AppLayout ({ children }: { children: React.ReactNode }) {
    return (
        <AppLayoutTemplate>
            {children}
        </AppLayoutTemplate>
    )
}
