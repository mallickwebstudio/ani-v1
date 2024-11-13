import Footer from "@/components/layouts/footer/footer";
import Navbar from "@/components/layouts/navbar/navbar";
import { AppSidebar } from "@/components/layouts/sidebar/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="flex flex-col">
                <Navbar />
                <main className="p-base flex-1">
                    {children}
                </main>
                <Footer />
            </SidebarInset>
        </SidebarProvider>
    );
}
