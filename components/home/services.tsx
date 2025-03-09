import { Star } from "lucide-react"

interface Services {
    image: string
    link: string
}

const services: Services[] = [
    {
        image: 'https://sourcemediaagency.com/wp-content/uploads/2025/02/5-scaled.jpg',
        link: '/service1',
    },
    {
        image: 'https://sourcemediaagency.com/wp-content/uploads/2025/02/4-scaled.jpg',
        link: '/service2',
    },
    {
        image: 'https://sourcemediaagency.com/wp-content/uploads/2025/02/1-scaled.jpg',
        link: '/service3',
    },
    {
        image: 'https://sourcemediaagency.com/wp-content/uploads/2025/02/3-scaled.jpg',
        link: '/service5',
    },
    {
        image: 'https://sourcemediaagency.com/wp-content/uploads/2025/02/8-scaled.jpg',
        link: '/service6',
    },
    {
        image: 'https://sourcemediaagency.com/wp-content/uploads/2025/02/6-scaled.jpg',
        link: '/service4',
    },
]

export default function Services() {
    return (
        <div className="text-center max-w-4xl mx-auto p-4" id="services">
            <h2 className="text-3xl font-bold mb-2 text-white">خدماتنا</h2>
            <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-500" />
                ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
                {services.map(service => (
                    <a href={service.link} key={service.link} className="relative overflow-hidden">
                        <div dir="rtl" className="absolute top-8 -left-4 bg-red-500 text-white px-2 py-1 text-xs z-10 m-2 transform -rotate-45 origin-top-left">
                            خصم 10%
                        </div>
                        <img src={service.image} className="transition duration-300 ease-in-out transform hover:scale-105" alt={service.link} />
                    </a>
                ))}
            </div>
        </div>
    );
}

