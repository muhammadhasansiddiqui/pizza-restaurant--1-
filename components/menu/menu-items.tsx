"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/components/ui/use-toast"

const menuItems = [
  {
    id: 1,
    name: "Margherita",
    category: "pizza",
    description: "Classic tomato sauce, mozzarella, and fresh basil",
    price: 1200,
    image: "/Pepperoni.jpeg",
  },
  {
    id: 2,
    name: "Pepperoni",
    category: "pizza",
    description: "Tomato sauce, mozzarella, and pepperoni",
    price: 1400,
    image: "/Margherita.webp",
  },
  {
    id: 3,
    name: "BBQ Chicken",
    category: "pizza",
    description: "BBQ sauce, mozzarella, chicken, red onions, and cilantro",
    price: 1600,
    image: "/Pepperoni.jpeg",
  },
  {
    id: 4,
    name: "Vegetarian",
    category: "pizza",
    description: "Tomato sauce, mozzarella, bell peppers, mushrooms, olives, and onions",
    price: 1300,
    image: "/Margherita.webp",
  },
  {
    id: 5,
    name: "Garlic Bread",
    category: "appetizers",
    description: "Freshly baked bread with garlic butter and herbs",
    price: 400,
    image: "/Pepperoni.jpeg",
  },
  {
    id: 6,
    name: "Mozzarella Sticks",
    category: "appetizers",
    description: "Breaded mozzarella sticks served with marinara sauce",
    price: 600,
    image: "/Pepperoni.jpeg",
  },
  {
    id: 7,
    name: "Spaghetti Bolognese",
    category: "pasta",
    description: "Classic Italian pasta with rich meat sauce",
    price: 950,
    image: "/Margherita.webp",
  },
  {
    id: 8,
    name: "Fettuccine Alfredo",
    category: "pasta",
    description: "Creamy pasta with parmesan cheese sauce",
    price: 900,
    image: "/Pepperoni.jpeg",
  },
  {
    id: 9,
    name: "Caesar Salad",
    category: "salads",
    description: "Romaine lettuce, croutons, parmesan cheese with Caesar dressing",
    price: 700,
    image: "/Margherita.webp",
  },
  {
    id: 10,
    name: "Tiramisu",
    category: "desserts",
    description: "Classic Italian coffee-flavored dessert",
    price: 550,
    image: "/Pepperoni.jpeg",
  },
  {
    id: 11,
    name: "Soft Drinks",
    category: "beverages",
    description: "Assorted soft drinks",
    price: 150,
    image: "/Pepperoni.jpeg",
  },
]

interface MenuItemsProps {
  activeCategory: string
}

export function MenuItems({ activeCategory }: MenuItemsProps) {
  const { addItem } = useCart()
  const { toast } = useToast()

  const filteredItems =
    activeCategory === "all" ? menuItems : menuItems.filter((item) => item.category === activeCategory)

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category,
    })

    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
      duration: 2000,
    })
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <Card key={item.id} className="flex flex-col h-full text-white bg-black border-yellow-500">
            <div className="flex flex-row">
              <div className="relative flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover rounded-l-lg"
                />
              </div>
              <div className="flex flex-col flex-1">
                <CardHeader className="p-4 pb-0">
                  <CardTitle className="text-lg text-yellow-500">{item.name}</CardTitle>
                  <CardDescription className="text-gray-300 line-clamp-2">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 p-4 pt-2">
                  <span className="text-sm text-yellow-400 capitalize">{item.category}</span>
                </CardContent>
                <CardFooter className="flex items-center justify-between p-4 pt-0">
                  <span className="font-bold text-yellow-500">Rs. {item.price.toLocaleString()}</span>
                  <Button size="sm" className="text-black bg-yellow-500 hover:bg-yellow-600" onClick={() => handleAddToCart(item)}>
                    Add to Cart
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))
      ) : (
        <div className="flex items-center justify-center h-40 text-white border rounded-lg col-span-full bg-muted/20">
          <p className="text-muted-foreground">No items found in this category.</p>
        </div>
      )}
    </div>
  )
}
