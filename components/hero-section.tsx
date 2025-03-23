import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative">
  <div
  className="absolute inset-0 z-0 bg-center bg-cover"
  style={{
    backgroundImage: "url('/pizzacraveebgposter.jpg')",
    filter: "brightness(0.7)", 
  }}
/>






      <div className="relative z-10 container  flex flex-col items-center justify-center min-h-[600px] px-4 py-25 text-center">
        {/* <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Authentic Italian Pizza
        </h1> */}
       
<div className="flex flex-col gap-4 pt-10 mt-5 mb-5 sm:flex-row">
  <Button
    className="px-8 py-4 font-extrabold text-black transition-all duration-300 ease-in-out bg-yellow-300 border-2 border-transparent rounded-full shadow-xl hover:bg-yellow-400 hover:scale-110 hover:shadow-yellow-500/80 hover:border-yellow-600"
    size="lg"
    asChild
  >
    <Link href="/menu">View Menu</Link>
  </Button>

  <Button
    size="lg"
    variant="outline"
    className="text-white font-extrabold bg-[#FF5307] border-white 
               hover:bg-[#ff7b3a] hover:border-[#ffffffcc] 
               hover:scale-110 transition-all duration-300 ease-in-out 
               shadow-xl hover:shadow-orange-500/80 px-8 py-4 rounded-full 
               border-2 border-transparent hover:border-orange-600"
    asChild
  >
    <Link href="#contact">Contact Us</Link>
  </Button>
</div>
<p className="px-4 py-3 font-serif text-[18px] bg-black rounded-full max-w-md text-lg text-white/90 
   scale-110 shadow-md shadow-yellow-500/50">
  Experience the taste of Italy with our handcrafted 
    <span className="text-yellow-400"> pizzas made from the freshest ingredients.</span>
</p>



      </div>
    </section>
  )
}

