import paris from "../assets/paris.avif";
import rome from "../assets/rome.jpg"
import tokyo from "../assets/tokyo.webp"
import london from "../assets/london.webp"
import dubai from "../assets/dubai.webp"
import sydney from "../assets/australia.jpg"
import { MapPin, Star, Plane } from "lucide-react";

const Destinations = () => {

  const destinations = [
    {
      city: "Paris",
      country: "France",
      image: paris,
      price: "From $599",
      description: "City of lights and romance",
      rating: 4.8,
      reviews: "2.4k"
    },
    {
      city: "Tokyo",
      country: "Japan", 
      image: tokyo,
      price: "From $899",
      description: "Modern culture meets tradition",
      rating: 4.9,
      reviews: "1.8k"
    },
    {
      city: "London",
      country: "United Kingdom",
      image: london,
      price: "From $549",
      description: "Historic charm and royal heritage",
      rating: 4.7,
      reviews: "3.1k"
    },
    {
      city: "Dubai",
      country: "UAE",
      image: dubai,
      price: "From $699",
      description: "Luxury and architectural marvels",
      rating: 4.6,
      reviews: "1.2k"
    },
    {
      city: "Sydney",
      country: "Australia",
      image: sydney,
      price: "From $1,199",
      description: "Stunning harbors and beaches",
      rating: 4.8,
      reviews: "956"
    },
    {
      city: "Rome",
      country: "Italy",
      image: rome,
      price: "From $649",
      description: "Ancient history and cuisine",
      rating: 4.9,
      reviews: "2.7k"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden" id="destinations">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Plane className="w-4 h-4" />
            Popular Destinations
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Explore
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Amazing Places
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover incredible destinations around the world with our competitive flight prices 
            and expert travel planning assistance. Your next adventure awaits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
              {/* Hover Effect - Behind content */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500 rounded-3xl pointer-events-none z-0"></div>
              
              {/* Content Container */}
              <div className="relative z-10">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:scale-110 transition-transform duration-500"></div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-blue-600 shadow-lg">
                    {destination.price}
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-semibold text-gray-900">{destination.rating}</span>
                    </div>
                    <span className="text-gray-600">({destination.reviews})</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {destination.city}, {destination.country}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{destination.description}</p>
                  <button className="group/btn inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 hover:gap-3">
                    View Flights 
                    <Plane className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <Plane className="w-5 h-5" />
            Explore All Destinations
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
