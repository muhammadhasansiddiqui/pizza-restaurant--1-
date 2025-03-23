"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/components/ui/use-toast"

const featuredItems = [
  {
    id: 1,
    name: "Margherita",
    category: "pizza",
    description: "Classic tomato sauce, mozzarella, and fresh basil",
    price: 1200,
    image: "/Margherita.webp",
  },
  {
    id: 2,
    name: "Pepperoni",
    category: "pizza",
    description: "Tomato sauce, mozzarella, and pepperoni",
    price: 1400,
    image: "/Pepperoni.jpeg",
  },
  {
    id: 3,
    name: "BBQ Chicken",
    category: "pizza",
    description: "BBQ sauce, mozzarella, chicken, red onions, and cilantro",
    price: 1600,
    image: "/BBQChicken.jpeg",
  },
]

export function FeaturedItems() {
  const { addItem } = useCart()
  const { toast } = useToast()

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
    <section className="py-16 text-white bg-black ">
      <div className="flex flex-col items-center justify-between mb-10 md:flex-row">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Items</h2>
          <p className="mt-2 text-gray-400">Our most popular pizzas that customers love</p>
        </div>
        <Button variant="ghost" className="mt-4 md:mt-0" asChild>
          <Link href="/menu" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-500">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden text-white transition-transform bg-gray-900 shadow-lg hover:scale-105">
            <div className="relative w-full h-64">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover rounded-t-md" />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{item.name}</CardTitle>
              <CardDescription className="text-gray-400">{item.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex items-center justify-between p-4">
              <span className="text-lg font-bold text-yellow-400">Rs. {item.price.toLocaleString()}</span>
              <Button
                size="sm"
                className="font-semibold text-black bg-yellow-400 hover:bg-yellow-500"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
