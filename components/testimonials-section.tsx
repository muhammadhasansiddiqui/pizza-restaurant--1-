import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample data - in a real app, this would come from an API or database
const testimonials = [
  {
    id: 1,
    name: "Ahmed Khan",
    role: "Regular Customer",
    content:
      "Pizza Crave Pizza has the best pizza in town! The crust is perfect and the toppings are always fresh. My family orders from here every weekend.",
    avatar: "/user1.avif",
  },
  {
    id: 2,
    name: "Fatima Ali",
    role: "Food Blogger",
    content:
      "As someone who has tried pizzas all over the world, I can confidently say that Pizza Crave Pizza offers an authentic Italian experience right here in Pakistan.",
    avatar: "/user3.webp",
  },
  {
    id: 3,
    name: "Zain Ahmed",
    role: "Local Business Owner",
    content:
      "Pizza Crave Pizza is our go-to for office parties. Their delivery is always on time and the pizzas arrive hot and fresh. Highly recommended!",
    avatar: "/user2.avif",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 text-white bg-black ">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-yellow-500">What Our Customers Say</h2>
        <p className="max-w-md mx-auto mt-2 text-gray-300">
          Don't just take our word for it - hear from our satisfied customers
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="flex flex-col h-full text-white bg-gray-900 border border-gray-700">
            <CardContent className="flex-1 pt-6">
              <p className="italic text-gray-300">"{testimonial.content}"</p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="text-black bg-yellow-500">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-yellow-500">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
