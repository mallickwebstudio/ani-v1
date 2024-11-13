"use client"

import * as React from "react"

import { SidebarNav } from "@/components/layouts/sidebar/sidebar-nav"
import { SidebarSupport } from "@/components/layouts/sidebar/sidebar-support"
import { SidebarLogo } from "@/components/layouts/sidebar/sidebar-logo"
import { boxAnimations, textAnimations } from "@/lib/database/database"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" variant="sidebar" {...props}>
      <SidebarHeader>
        <SidebarLogo />
      </SidebarHeader>

      <SidebarContent>
        <SidebarNav items={boxAnimations} label="Box Animations" />
        <SidebarNav items={textAnimations} label="Text Animations" />
      </SidebarContent>

      <SidebarFooter>
        <SidebarSupport user={{
          name: "shadcn",
          email: "m@example.com",
          avatar: "/avatars/shadcn.jpg",
        }} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
