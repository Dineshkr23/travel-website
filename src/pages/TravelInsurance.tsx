import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Shield, Plane, Heart, Car, Home, Globe, Star, Check, AlertTriangle, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface InsurancePlan {
  id: string;
  name: string;
  description: string;
  price: number;
  coverage: string[];
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
  recommended?: boolean;
}

const TravelInsurance = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [tripDetails, setTripDetails] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    travelers: 1,
    tripCost: 0
  });

  const insurancePlans: InsurancePlan[] = [
    {
      id: "basic",
      name: "Basic Coverage",
      description: "Essential protection for your trip",
      price: 25,
      coverage: ["Trip Cancellation", "Medical Emergency", "Baggage Loss"],
      features: ["Up to $1,000 trip cancellation", "Up to $10,000 medical coverage", "Up to $500 baggage protection"],
      icon: <Shield className="w-8 h-8 text-blue-600" />
    },
    {
      id: "standard",
      name: "Standard Protection",
      description: "Comprehensive coverage for peace of mind",
      price: 45,
      coverage: ["Trip Cancellation", "Medical Emergency", "Baggage Loss", "Flight Delay", "Accident Coverage"],
      features: ["Up to $2,500 trip cancellation", "Up to $25,000 medical coverage", "Up to $1,000 baggage protection", "Flight delay compensation", "24/7 emergency assistance"],
      icon: <Plane className="w-8 h-8 text-green-600" />,
      popular: true
    },
    {
      id: "premium",
      name: "Premium Protection",
      description: "Maximum coverage for luxury travel",
      price: 75,
      coverage: ["Trip Cancellation", "Medical Emergency", "Baggage Loss", "Flight Delay", "Accident Coverage", "Rental Car", "Home Protection"],
      features: ["Up to $5,000 trip cancellation", "Up to $50,000 medical coverage", "Up to $2,000 baggage protection", "Premium flight delay compensation", "Rental car damage coverage", "Home burglary protection"],
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      recommended: true
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const calculatePremium = () => {
    const plan = insurancePlans.find(p => p.id === selectedPlan);
    if (!plan) return 0;
    return plan.price * tripDetails.travelers;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Travel Insurance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your journey with comprehensive travel insurance coverage. 
            Choose the plan that fits your needs and travel with confidence.
          </p>
        </div>

        {/* Trip Details Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plane className="w-5 h-5" />
              Trip Details
            </CardTitle>
            <CardDescription>
              Enter your trip information to get accurate insurance quotes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                <input
                  type="text"
                  placeholder="e.g., Paris, France"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={tripDetails.destination}
                  onChange={(e) => setTripDetails({...tripDetails, destination: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={tripDetails.startDate}
                  onChange={(e) => setTripDetails({...tripDetails, startDate: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={tripDetails.endDate}
                  onChange={(e) => setTripDetails({...tripDetails, endDate: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Travelers</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={tripDetails.travelers}
                  onChange={(e) => setTripDetails({...tripDetails, travelers: parseInt(e.target.value)})}
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Traveler' : 'Travelers'}</option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Insurance Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {insurancePlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedPlan === plan.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
              }`}
              onClick={() => handlePlanSelect(plan.id)}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500">
                  Most Popular
                </Badge>
              )}
              {plan.recommended && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500">
                  Recommended
                </Badge>
              )}
              
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {plan.icon}
                </div>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="text-3xl font-bold text-blue-600">
                  ${plan.price}
                  <span className="text-sm font-normal text-gray-500">/traveler</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Coverage Includes:</h4>
                    <ul className="space-y-2">
                      {plan.coverage.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="text-xs text-gray-600">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Plan Summary */}
        {selectedPlan && (
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">Selected Plan Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="font-semibold text-lg">
                    {insurancePlans.find(p => p.id === selectedPlan)?.name}
                  </h3>
                  <p className="text-gray-600">
                    {tripDetails.travelers} {tripDetails.travelers === 1 ? 'Traveler' : 'Travelers'} • {tripDetails.destination}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">
                    ${calculatePremium()}
                  </div>
                  <p className="text-sm text-gray-600">Total Premium</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700"
            disabled={!selectedPlan}
          >
            Purchase Insurance
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Speak to Agent
          </Button>
        </div>

        {/* Important Information */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                Important Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Coverage begins when you purchase the policy</li>
                <li>• Pre-existing conditions may not be covered</li>
                <li>• Claims must be filed within 30 days of incident</li>
                <li>• Some activities may require additional coverage</li>
                <li>• Read the full policy terms before purchasing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Why Choose Our Insurance?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 24/7 worldwide emergency assistance</li>
                <li>• Fast claims processing</li>
                <li>• No deductibles on medical coverage</li>
                <li>• Coverage for trip interruption</li>
                <li>• Optional add-ons available</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TravelInsurance; 