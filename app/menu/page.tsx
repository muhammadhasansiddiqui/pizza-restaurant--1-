"use client"

import { useState } from "react"
import { MenuHeader } from "@/components/menu/menu-header"
import { MenuCategories } from "@/components/menu/menu-categories"
import { MenuItems } from "@/components/menu/menu-items"

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <div className="flex flex-col min-h-screen">
      <MenuHeader />
      <main className="container flex-1 py-8">
        <h1 className="mb-6 text-3xl font-bold">Our Menu</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <MenuCategories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          </div>
          <div className="md:col-span-3">
            <MenuItems activeCategory={activeCategory} />
          </div>
        </div>
      </main>
    </div>
  )
}

