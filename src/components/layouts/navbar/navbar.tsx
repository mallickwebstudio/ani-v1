import { ModeToggle } from "@/components/ui/mode-toggle"
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function Navbar() {
    return (
        <header className="px-4 flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
            </div>

            <ModeToggle />
        </header>
    )
}
