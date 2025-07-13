import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  FileText, 
  Globe, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Search,
  Info,
  ExternalLink,
  BookOpen
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface CountryRequirement {
  country: string;
  visaRequired: boolean;
  visaType: string;
  processingTime: string;
  cost: string;
  validity: string;
  notes: string[];
  embassyLink: string;
}

const TravelDocuments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const popularCountries = [
    "United States", "Canada", "United Kingdom", "France", "Germany", 
    "Italy", "Spain", "Japan", "Australia", "New Zealand", "Mexico", 
    "Brazil", "Argentina", "South Africa", "India", "China", "Thailand"
  ];

  const countryRequirements: CountryRequirement[] = [
    {
      country: "United States",
      visaRequired: false,
      visaType: "ESTA (Electronic System for Travel Authorization)",
      processingTime: "Immediate to 72 hours",
      cost: "$14 USD",
      validity: "2 years or until passport expires",
      notes: [
        "Valid for stays up to 90 days",
        "Must be applied for at least 72 hours before travel",
        "Available for citizens of Visa Waiver Program countries"
      ],
      embassyLink: "https://esta.cbp.dhs.gov"
    },
    {
      country: "Canada",
      visaRequired: false,
      visaType: "eTA (Electronic Travel Authorization)",
      processingTime: "Immediate to 72 hours",
      cost: "$7 CAD",
      validity: "5 years or until passport expires",
      notes: [
        "Valid for stays up to 6 months",
        "Must be applied for before boarding",
        "Available for visa-exempt foreign nationals"
      ],
      embassyLink: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html"
    },
    {
      country: "United Kingdom",
      visaRequired: false,
      visaType: "No visa required for short stays",
      processingTime: "N/A",
      cost: "Free",
      validity: "Up to 6 months",
      notes: [
        "Valid for tourism and business visits",
        "Must have valid passport",
        "May need to show proof of funds and return ticket"
      ],
      embassyLink: "https://www.gov.uk/check-uk-visa"
    },
    {
      country: "France",
      visaRequired: false,
      visaType: "Schengen Visa (if required)",
      processingTime: "15-30 days",
      cost: "€80",
      validity: "Up to 90 days within 180 days",
      notes: [
        "Part of Schengen Area",
        "Valid for all Schengen countries",
        "Must apply at French consulate"
      ],
      embassyLink: "https://france-visas.gouv.fr"
    },
    {
      country: "Japan",
      visaRequired: false,
      visaType: "Visa waiver for short stays",
      processingTime: "N/A",
      cost: "Free",
      validity: "Up to 90 days",
      notes: [
        "Available for citizens of 68 countries",
        "Must have valid passport",
        "No extensions allowed"
      ],
      embassyLink: "https://www.mofa.go.jp/j_info/visit/visa/"
    },
    {
      country: "Australia",
      visaRequired: true,
      visaType: "ETA (Electronic Travel Authority)",
      processingTime: "Immediate to 24 hours",
      cost: "$20 AUD",
      validity: "12 months",
      notes: [
        "Valid for stays up to 3 months per visit",
        "Multiple entries allowed",
        "Must be applied for online"
      ],
      embassyLink: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-finder"
    }
  ];

  const filteredCountries = countryRequirements.filter(country =>
    country.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedCountryData = countryRequirements.find(
    country => country.country === selectedCountry
  );

  const generalRequirements = [
    {
      title: "Passport Requirements",
      items: [
        "Must be valid for at least 6 months beyond your planned stay",
        "Must have at least 2 blank pages for visa stamps",
        "Should be in good condition without significant damage",
        "Must be a machine-readable passport (issued after 2006)"
      ]
    },
    {
      title: "Visa Requirements",
      items: [
        "Check visa requirements for your destination country",
        "Apply well in advance of your travel date",
        "Ensure you have all required supporting documents",
        "Be aware of processing times and costs"
      ]
    },
    {
      title: "Health Requirements",
      items: [
        "Check if vaccinations are required for your destination",
        "Carry proof of vaccinations if required",
        "Consider travel insurance for medical coverage",
        "Research local health risks and precautions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Travel Documents & Requirements
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential information about passports, visas, and travel requirements for your journey. 
            Stay informed and prepared for smooth international travel.
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Find Travel Requirements
            </CardTitle>
            <CardDescription>
              Search for specific country requirements or browse popular destinations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search Country</label>
                <Input
                  placeholder="Enter country name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quick Select</label>
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a popular destination" />
                  </SelectTrigger>
                  <SelectContent>
                    {popularCountries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Selected Country Details */}
        {selectedCountryData && (
          <Card className="mb-8 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Globe className="w-5 h-5" />
                {selectedCountryData.country} - Travel Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant={selectedCountryData.visaRequired ? "destructive" : "default"}>
                      {selectedCountryData.visaRequired ? "Visa Required" : "No Visa Required"}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1">Visa Type</h4>
                    <p className="text-gray-700">{selectedCountryData.visaType}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1">Processing Time</h4>
                    <p className="text-gray-700 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {selectedCountryData.processingTime}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1">Cost</h4>
                    <p className="text-gray-700 flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {selectedCountryData.cost}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1">Validity</h4>
                    <p className="text-gray-700">{selectedCountryData.validity}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Important Notes</h4>
                  <ul className="space-y-2">
                    {selectedCountryData.notes.map((note, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {note}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="mt-4 w-full"
                    variant="outline"
                    onClick={() => window.open(selectedCountryData.embassyLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Official Embassy Website
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Search Results */}
        {searchQuery && !selectedCountryData && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCountries.map((country) => (
                <Card 
                  key={country.country} 
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedCountry(country.country)}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{country.country}</h3>
                      <Badge variant={country.visaRequired ? "destructive" : "default"}>
                        {country.visaRequired ? "Visa" : "No Visa"}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{country.visaType}</p>
                    <p className="text-sm text-gray-500">Cost: {country.cost}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* General Requirements */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-8">General Travel Requirements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {generalRequirements.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {index === 0 && <BookOpen className="w-5 h-5" />}
                    {index === 1 && <FileText className="w-5 h-5" />}
                    {index === 2 && <Info className="w-5 h-5" />}
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Tips */}
        <Card className="bg-orange-50 border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-900">
              <AlertTriangle className="w-5 h-5" />
              Important Travel Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-orange-800">Before You Travel</h4>
                <ul className="space-y-1 text-sm text-orange-700">
                  <li>• Check entry requirements at least 3 months before travel</li>
                  <li>• Ensure your passport has sufficient validity</li>
                  <li>• Apply for visas well in advance</li>
                  <li>• Make copies of important documents</li>
                  <li>• Check health and vaccination requirements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-orange-800">During Your Trip</h4>
                <ul className="space-y-1 text-sm text-orange-700">
                  <li>• Keep documents in a secure location</li>
                  <li>• Carry copies of important documents</li>
                  <li>• Be aware of local laws and customs</li>
                  <li>• Keep emergency contact information handy</li>
                  <li>• Monitor travel advisories</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Resources */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8">Additional Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <Globe className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Country Information</h3>
                <p className="text-gray-600 text-sm">Detailed country guides and travel information</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <FileText className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Visa Services</h3>
                <p className="text-gray-600 text-sm">Professional visa application assistance</p>
              </CardContent>
            </Card>

                         <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
               <CardContent className="pt-6">
                 <BookOpen className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                 <h3 className="font-semibold mb-2">Passport Services</h3>
                 <p className="text-gray-600 text-sm">Passport renewal and expedited services</p>
               </CardContent>
             </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <Info className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Travel Advisories</h3>
                <p className="text-gray-600 text-sm">Current travel warnings and safety information</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Disclaimer */}
        <Card className="mt-8 bg-gray-100">
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 text-center">
              <strong>Disclaimer:</strong> This information is provided for general guidance only. 
              Requirements may change without notice. Always verify current requirements with the 
              official embassy or consulate of your destination country before traveling. 
              Brand Name Travel is not responsible for any issues arising from incorrect or outdated information.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default TravelDocuments; 