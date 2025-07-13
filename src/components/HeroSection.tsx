
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Phone, Search, Users } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import SearchableAirportSelect from "./SearchableAirportSelect";

const HeroSection = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [passengers, setPassengers] = useState("1");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!from || !to || !departureDate) {
      alert("Please fill in all required fields");
      return;
    }

    const params = new URLSearchParams({
      from,
      to,
      departure: departureDate.toISOString(),
      passengers,
    });

    if (returnDate) {
      params.append("return", returnDate.toISOString());
    }

    navigate(`/flights?${params.toString()}`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Background with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-blue-900/60"></div>
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Airplane flying over clouds"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Trusted by 2M+ Travelers Worldwide
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    Discover
                  </span>
                  <br />
                  <span className="text-white">
                    Your Perfect Flight
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-lg">
                  Experience seamless booking with our AI-powered search and 24/7 expert support. 
                  Your journey to extraordinary destinations starts here.
                </p>
              </div>
              
              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300" asChild>
                  <a href="tel:1-800-700-600">
                    <Phone className="w-5 h-5 mr-2" />
                    <span className="hidden sm:inline">Call Experts: </span>1-800-700-600
                  </a>
                </Button>
                
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                  </div>
                  <span className="text-sm text-gray-300">Join 50K+ happy travelers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-300">4.9/5 Rating</span>
                </div>
              </div>
            </div>
            
            {/* Right Content - Search Form */}
            <div className="relative">
              {/* Decorative flight icon */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-white mb-2">Find Your Perfect Flight</h2>
                  <p className="text-gray-200 text-sm">Search across 500+ airlines worldwide</p>
                </div>

                <div className="space-y-4">
                  {/* From and To - Side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <SearchableAirportSelect
                      value={from}
                      onValueChange={setFrom}
                      placeholder="Departure city"
                      label="From"
                    />

                    <SearchableAirportSelect
                      value={to}
                      onValueChange={setTo}
                      placeholder="Destination city"
                      label="To"
                    />
                  </div>

                  {/* Dates and Passengers - Side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label className="text-white text-sm">Departure</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal h-auto min-h-[40px] py-2 bg-white/20 border-white/30 text-white hover:bg-white/30 text-sm",
                              !departureDate && "text-gray-300"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {departureDate ? format(departureDate, "MMM dd") : "Select"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={departureDate}
                            onSelect={setDepartureDate}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white text-sm">Return</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal h-auto min-h-[40px] py-2 bg-white/20 border-white/30 text-white hover:bg-white/30 text-sm",
                              !returnDate && "text-gray-300"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {returnDate ? format(returnDate, "MMM dd") : "Select"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={returnDate}
                            onSelect={setReturnDate}
                            disabled={(date) => date < (departureDate || new Date())}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white text-sm">Passengers</Label>
                      <Select value={passengers} onValueChange={setPassengers}>
                        <SelectTrigger className="h-auto min-h-[40px] py-2 bg-white/20 border-white/30 text-white hover:bg-white/30 text-sm">
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
                </div>

                <Button 
                  onClick={handleSearch} 
                  size="lg" 
                  className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 text-base rounded-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search Flights
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
