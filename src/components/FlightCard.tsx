
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plane, Clock, MapPin, Star, CheckCircle, Shield, Zap } from "lucide-react";

interface Flight {
  id: number;
  airline: string;
  logo: string;
  departure: string;
  arrival: string;
  duration: string;
  stops: string;
  price: number;
  type: string;
  badge?: string;
  departureTime?: string;
  arrivalTime?: string;
}

interface FlightCardProps {
  flight: Flight;
  route: string;
}

const FlightCard = ({ flight, route }: FlightCardProps) => {
  const getBadgeVariant = (badge: string | undefined) => {
    switch (badge) {
      case "Best Choice":
        return "default";
      case "Cheapest":
        return "secondary";
      case "Shortest":
        return "outline";
      default:
        return "secondary";
    }
  };

  const getBadgeStyle = (badge: string | undefined) => {
    switch (badge) {
      case "Best Choice":
        return "bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0";
      case "Cheapest":
        return "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0";
      case "Shortest":
        return "bg-gradient-to-r from-orange-500 to-red-600 text-white border-0";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600 text-white border-0";
    }
  };

  return (
    <div className="group relative bg-white/90 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-300/50">
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500 rounded-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left Section - Flight Details */}
          <div className="flex-1">
            {/* Header with Airline and Badge */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white font-bold">{flight.logo}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-xl">{flight.airline}</h3>
                  <div className="flex items-center space-x-3">
                    <p className="text-sm text-gray-600 font-medium">{flight.type}</p>
                    <div className="flex items-center space-x-1 bg-yellow-100 px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-xs text-yellow-700 font-semibold">4.8</span>
                    </div>
                  </div>
                </div>
              </div>
              {flight.badge && (
                <Badge className={`${getBadgeStyle(flight.badge)} shadow-lg font-semibold`}>
                  {flight.badge}
                </Badge>
              )}
            </div>

            {/* Flight Route and Times */}
            <div className="grid grid-cols-3 gap-6 items-center mb-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900 mb-1">{flight.departure}</p>
                <p className="text-sm text-gray-600 font-medium">Departure</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-gray-300 to-blue-300"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Plane className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-300 to-gray-300"></div>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 font-medium">
                  <Clock className="w-4 h-4" />
                  <span>{flight.duration}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2 font-medium">{flight.stops}</p>
              </div>
              
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900 mb-1">{flight.arrival}</p>
                <p className="text-sm text-gray-600 font-medium">Arrival</p>
              </div>
            </div>

            {/* Route Info */}
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-full w-fit mx-auto">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="font-medium">{route}</span>
            </div>
          </div>

          {/* Right Section - Price and Action */}
          <div className="lg:text-right lg:border-l lg:border-gray-200 lg:pl-8">
            <div className="mb-6">
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                ${flight.price}
              </p>
              <p className="text-sm text-gray-600 font-medium">per person</p>
              <p className="text-xs text-gray-500 mt-2 font-medium">Total: ${flight.price * 1} (1 passenger)</p>
            </div>
            <Button className="w-full lg:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-3 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-lg">
              Select Flight
            </Button>
          </div>
        </div>

        {/* Additional Info Bar */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-xs text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="font-medium">Free cancellation</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-600">
                <Shield className="w-4 h-4 text-blue-500" />
                <span className="font-medium">No booking fees</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-600">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="font-medium">Instant confirmation</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-green-600 font-semibold">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
