import { Users, MapPin, Calendar, Award } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
             <span className="text-primary">About Paradise Sharm Tours</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re a team of passionate travelers dedicated to creating unforgettable experiences for adventurers around
            the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-orange-500">Your Journey, Our Expertise</h3>
            <p className="text-gray-600">
              Founded in 2010, Paradise Sharm Tours has been helping travelers discover the world&apos;s most beautiful destinations
              for over a decade. Our mission is to make travel accessible, enjoyable, and unforgettable for everyone.
            </p>
            <p className="text-gray-600">
              What sets us apart is our dedication to personalized service and our deep knowledge of destinations
              worldwide. Our team of travel experts has visited over 100 countries and can provide firsthand
              recommendations for your next adventure.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-500">10,000+</h4>
                  <p className="text-sm text-gray-500">Happy Travelers</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-500">500+</h4>
                  <p className="text-sm text-gray-500">Destinations</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-500">12+</h4>
                  <p className="text-sm text-gray-500">Years Experience</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-500">15+</h4>
                  <p className="text-sm text-gray-500">Travel Awards</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/images/designs/1.png"
                  alt="Travel destination"
                  width={250}
                  height={300}
                  className="rounded-lg object-cover h-60 w-full shadow"
                />
                <img
                  src="/images/designs/2.png"
                  alt="Travel destination"
                  width={250}
                  height={200}
                  className="rounded-lg object-cover h-60 w-full shadow"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/images/designs/3.png"
                  alt="Travel destination"
                  width={250}
                  height={200}
                  className="rounded-lg object-cover h-60 w-full shadow"
                />
                <img
                  src="/images/designs/4.png"
                  alt="Travel destination"
                  width={250}
                  height={300}
                  className="rounded-lg object-cover h-60 w-full shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

