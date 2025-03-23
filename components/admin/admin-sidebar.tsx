"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Pizza, ImageIcon, Settings, Users, ShoppingCart } from "lucide-react"

interface AdminSidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AdminSidebar({ className, ...props }: AdminSidebarProps) {
  const pathname = usePathname()

  const routes = [
    {
      href: "/admin",
      icon: LayoutDashboard,
      title: "Dashboard",
      exact: true,
    },
    {
      href: "/admin/menu",
      icon: Pizza,
      title: "Menu Management",
    },
    {
      href: "/admin/photos",
      icon: ImageIcon,
      title: "Photo Gallery",
    },
    {
      href: "/admin/orders",
      icon: ShoppingCart,
      title: "Orders",
    },
    {
      href: "/admin/users",
      icon: Users,
      title: "Users",
    },
    {
      href: "/admin/settings",
      icon: Settings,
      title: "Settings",
    },
  ]

  return (
    <div className={cn("h-full border-r bg-background", className)} {...props}>
      <div className="flex flex-col h-full p-4 pt-8 space-y-2">
        <div className="text-sm font-medium text-muted-foreground mb-2">Navigation</div>
        <nav className="grid gap-1">
          {routes.map((route) => {
            const isActive = route.exact ? pathname === route.href : pathname?.startsWith(route.href)

            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:text-primary",
                  isActive ? "bg-muted text-primary" : "text-muted-foreground",
                )}
              >
                <route.icon className="h-4 w-4" />
                {route.title}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

