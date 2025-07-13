
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { format } from "date-fns";
import Header from "@/components/Header";
import FlightCard from "@/components/FlightCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Plane, Clock, DollarSign, Zap, Phone, Users, Calendar, Search, Filter, Star, TrendingUp, Zap as Lightning } from "lucide-react";
import { Link } from "react-router-dom";
import SearchableAirportSelect from "@/components/SearchableAirportSelect";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const FlightResults = () => {
  const [searchParams] = useSearchParams();
  const [from, setFrom] = useState(searchParams.get("from") || "");
  const [to, setTo] = useState(searchParams.get("to") || "");
  const [departureDate, setDepartureDate] = useState<Date | undefined>(
    searchParams.get("departure") ? new Date(searchParams.get("departure")!) : undefined
  );
  const [returnDate, setReturnDate] = useState<Date | undefined>(
    searchParams.get("return") ? new Date(searchParams.get("return")!) : undefined
  );
  const [passengers, setPassengers] = useState(searchParams.get("passengers") || "1");
  const [activeTab, setActiveTab] = useState("recommended");

  // Mock flights data - in real app this would come from API
  const flights = [
    {
      id: 1,
      airline: "SkyWings",
      logo: "✈️",
      departure: "08:30",
      arrival: "11:45",
      duration: "5h 15m",
      stops: "Non-stop",
      price: 289,
      type: "Economy",
      badge: "Best Choice",
      departureTime: "08:30",
      arrivalTime: "11:45"
    },
    {
      id: 2,
      airline: "AeroLink",
      logo: "🛫",
      departure: "14:20",
      arrival: "17:50",
      duration: "5h 30m",
      stops: "Non-stop",
      price: 245,
      type: "Economy",
      badge: "Cheapest",
      departureTime: "14:20",
      arrivalTime: "17:50"
    },
    {
      id: 3,
      airline: "FastJet",
      logo: "✈️",
      departure: "06:15",
      arrival: "09:25",
      duration: "5h 10m",
      stops: "Non-stop",
      price: 312,
      type: "Economy",
      badge: "Shortest",
      departureTime: "06:15",
      arrivalTime: "09:25"
    }
  ];

  // Filter states
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedStops, setSelectedStops] = useState<string[]>([]);
  const [departureTimeRange, setDepartureTimeRange] = useState<string[]>([]);
  const [arrivalTimeRange, setArrivalTimeRange] = useState<string[]>([]);

  const handleSearch = () => {
    // Handle search logic here
    console.log("Searching with:", { from, to, departureDate, returnDate, passengers });
  };

  const NoFlightsMessage = () => (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20 shadow-2xl">
      <div className="max-w-md mx-auto">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Plane className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          No Flights Found
        </h3>
        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
          Sorry, there are no flights that match your request. Our 24/7 airline booking agents can help you locate the flight you're looking for at the lowest rate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
            <a href="tel:1-800-700-600">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 1-800-700-600
            </a>
          </Button>
          <Button variant="outline" className="flex-1 border-2 border-gray-300 hover:border-blue-500 font-semibold py-3 rounded-2xl transition-all duration-300 hover:scale-105" onClick={() => window.history.back()}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Modify Search
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4 bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 rounded-2xl">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Search
            </Button>
          </Link>
        </div>

        {/* Search Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Flight Search</h1>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <div className="lg:col-span-1">
              <SearchableAirportSelect
                value={from}
                onValueChange={setFrom}
                placeholder="Departure city"
                label="From"
              />
            </div>

            <div className="lg:col-span-1">
              <SearchableAirportSelect
                value={to}
                onValueChange={setTo}
                placeholder="Destination city"
                label="To"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Departure</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal h-auto min-h-[40px] py-2 bg-white/50 border-gray-300 hover:bg-white/70",
                      !departureDate && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {departureDate ? format(departureDate, "MMM dd") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent
                    mode="single"
                    selected={departureDate}
                    onSelect={setDepartureDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Return</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal h-auto min-h-[40px] py-2 bg-white/50 border-gray-300 hover:bg-white/70",
                      !returnDate && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {returnDate ? format(returnDate, "MMM dd") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent
                    mode="single"
                    selected={returnDate}
                    onSelect={setReturnDate}
                    disabled={(date) => date < (departureDate || new Date())}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Passengers</label>
              <Select value={passengers} onValueChange={setPassengers}>
                <SelectTrigger className="h-auto min-h-[40px] py-2 bg-white/50 border-gray-300 hover:bg-white/70">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Adult</SelectItem>
                  <SelectItem value="2">2 Adults</SelectItem>
                  <SelectItem value="3">3 Adults</SelectItem>
                  <SelectItem value="4">4 Adults</SelectItem>
                  <SelectItem value="5">5+ Adults</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button 
            onClick={handleSearch} 
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Search className="w-5 h-5 mr-2" />
            Search Flights
          </Button>
        </div>

        {/* Selected Route Display */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 mb-8 border border-white/20 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Plane className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-gray-900">{from || "Departure"}</span>
              </div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-gray-300 to-blue-300"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <Plane className="w-4 h-4 text-white rotate-45" />
                </div>
                <span className="font-semibold text-gray-900">{to || "Destination"}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{departureDate ? format(departureDate, "MMM dd") : "Select date"}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{passengers} passenger{passengers !== "1" ? "s" : ""}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Results */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-xl lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Filter className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Filters</h3>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Departure Time */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Departure Time</h4>
                <div className="space-y-2">
                  {["Early (6AM-12PM)", "Afternoon (12PM-6PM)", "Evening (6PM-12AM)"].map((time) => (
                    <label key={time} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={departureTimeRange.includes(time)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setDepartureTimeRange([...departureTimeRange, time]);
                          } else {
                            setDepartureTimeRange(departureTimeRange.filter(t => t !== time));
                          }
                        }}
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-700">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              {/* Arrival Time */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Arrival Time</h4>
                <div className="space-y-2">
                  {["Early (6AM-12PM)", "Afternoon (12PM-6PM)", "Evening (6PM-12AM)"].map((time) => (
                    <label key={time} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={arrivalTimeRange.includes(time)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setArrivalTimeRange([...arrivalTimeRange, time]);
                          } else {
                            setArrivalTimeRange(arrivalTimeRange.filter(t => t !== time));
                          }
                        }}
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-700">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              {/* Stops */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Stops</h4>
                <div className="space-y-2">
                  {["Non-stop", "1 stop", "2+ stops"].map((stop) => (
                    <label key={stop} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedStops.includes(stop)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedStops([...selectedStops, stop]);
                          } else {
                            setSelectedStops(selectedStops.filter(s => s !== stop));
                          }
                        }}
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-700">{stop}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {/* Tabs */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 mb-8 border border-white/20 shadow-xl">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1 rounded-2xl">
                  <TabsTrigger value="recommended" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Recommended
                  </TabsTrigger>
                  <TabsTrigger value="cheapest" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Cheapest
                  </TabsTrigger>
                  <TabsTrigger value="fastest" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2">
                    <Lightning className="w-4 h-4" />
                    Fastest
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Flight Results */}
            <div className="space-y-6">
              <NoFlightsMessage />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FlightResults;
