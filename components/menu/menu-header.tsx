import Link from "next/link"
import { Pizza } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CartButton } from "@/components/cart/cart-button"

export function MenuHeader() {
  return (
<header className="sticky top-0 z-50 w-full bg-black border-b backdrop-blur">
  <div className="container flex items-center justify-between h-16">
    <Link href="/" className="flex items-center gap-2 text-xl font-bold text-yellow-300">
      <Pizza className="w-6 h-6 text-yellow-400" /> 
      <span className="text-[#FF5307] text-3xl fire-text">Pizza Crave</span>
    </Link>
    <nav className="hidden gap-6 text-4xl font-bold md:flex">
      <Link href="/" className="text-[15px] font-medium text-yellow-300 transition-colors hover:text-white hover-animate">
        Home
      </Link>
      <Link href="/menu" className="font-medium text-yellow-300 transition-colors text-[15px] hover:text-white hover-animate">
        Menu
      </Link>
      <Link href="#about" className="text-[15px] font-medium text-yellow-300 transition-colors hover:text-white hover-animate">
        About
      </Link>
      <Link href="#contact" className="text-[15px] font-medium text-yellow-300 transition-colors hover:text-white hover-animate">
        Contact
      </Link>
    </nav>
    <div className="flex items-center gap-4">
      <CartButton />
      <Link href="/menu" className="hidden md:block">
        <Button className="text-black bg-yellow-300 hover:bg-yellow-400">Order Now</Button>
      </Link>
     
    </div>
  </div>
</header>
  )
}

