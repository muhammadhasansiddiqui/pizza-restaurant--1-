import Link from "next/link"
import { Pizza } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { FeaturedItems } from "@/components/featured-items"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { CartButton } from "@/components/cart/cart-button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
      <Link
        href="/admin"
        className="px-4 py-2 text-sm font-medium text-yellow-300 transition-colors border border-yellow-300 rounded-md hover:text-white hover-animate"
      >
        Admin
      </Link>
    </div>
  </div>
</header>

      <main className="flex-1">
        <HeroSection />
        <FeaturedItems />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <footer className="py-6 text-white bg-black border-t border-gray-700">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Pizza className="w-6 h-6 text-yellow-400" />
          <p className="text-sm leading-loose text-center text-gray-300 md:text-left">
            &copy; {new Date().getFullYear()} Pizza Crave. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="#" className="text-sm font-medium text-gray-400 transition-colors hover:text-yellow-400">
            Terms
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-400 transition-colors hover:text-yellow-400">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
    </div>
  )
}

