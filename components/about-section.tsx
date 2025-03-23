import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-16 text-white bg-gray-900">
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
            <Image
              src="/pizzacraveimgshop.jpeg"
              alt="About Crave Pizza"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-yellow-400">Our Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Crave Pizza was founded in <span className="text-yellow-400">2005</span> with a simple mission: 
                to bring <span className="text-yellow-400">authentic Italian pizza</span> to Pakistan.
                Our founder, after spending years in Naples learning the art of pizza making, returned home to share his passion.
              </p>
              <p>
                We take pride in using only the <span className="text-yellow-400">freshest ingredients</span>, 
                imported Italian flour, and our secret family recipes passed down through generations.
              </p>
              <p>
                Today, Crave Pizza has expanded across Pakistan, but our dedication to <span className="text-yellow-400">quality and authenticity</span> remains the same.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-yellow-400">15+</h3>
                <p className="text-gray-400">Years of Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-yellow-400">20+</h3>
                <p className="text-gray-400">Pizza Varieties</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-yellow-400">10+</h3>
                <p className="text-gray-400">Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
