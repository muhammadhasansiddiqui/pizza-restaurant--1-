"use client"

import { Button } from "@/components/ui/button"

// Sample data - in a real app, this would come from an API or database
const categories = [
  { id: "all", name: "All Items" },
  { id: "pizza", name: "Pizzas" },
  { id: "appetizers", name: "Appetizers" },
  { id: "pasta", name: "Pasta" },
  { id: "salads", name: "Salads" },
  { id: "desserts", name: "Desserts" },
  { id: "beverages", name: "Beverages" },
]

interface MenuCategoriesProps {
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export function MenuCategories({ activeCategory, setActiveCategory }: MenuCategoriesProps) {
  return (
    <div className="space-y-2">
      <h2 className="font-medium mb-4 text-[#FF5307]">Categories</h2>
      <div className="flex flex-row gap-2 pb-2 overflow-x-auto md:flex-col md:pb-0">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={`justify-start ${
              activeCategory === category.id ? "bg-[#FF5307] text-black" : "border-[#FF5307] text-[#FF5307]"
            } hover:bg-[#e64a06] hover:text-white`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  )
}
