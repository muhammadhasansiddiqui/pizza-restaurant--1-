import Link from "next/link"
import { Pizza, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AdminSidebar } from "./admin-sidebar"

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center h-16">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-4 lg:hidden">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <AdminSidebar className="border-none" />
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Pizza className="w-6 h-6" />
          <span>Pizza Crave </span>
          <span className="text-sm font-normal text-muted-foreground">Admin</span>
        </Link>
        <div className="flex items-center ml-auto">
          <Button variant="ghost" asChild>
            <Link href="/">View Website</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

