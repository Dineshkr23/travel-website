
import { AlertTriangle, FileText, Luggage, Globe, Phone, MessageCircle, CheckCircle } from "lucide-react";

const TravelTips = () => {
  const tips = [
    {
      icon: FileText,
      title: "Check Passport Validity",
      description: "Ensure your passport is valid for at least 6 months beyond your travel date for international destinations.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Luggage,
      title: "Baggage Guidelines",
      description: "Review airline baggage policies before packing. Weight and size restrictions vary by carrier and destination.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Globe,
      title: "Travel Insurance",
      description: "Protect your trip investment with comprehensive travel insurance covering medical emergencies and cancellations.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: AlertTriangle,
      title: "Health Requirements",
      description: "Check destination health requirements, vaccination needs, and current travel advisories before departure.",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            Travel Tips
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Essential Travel
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Information
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with these important travel tips and requirements to ensure 
            a smooth, safe, and unforgettable journey to your destination.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {tips.map((tip, index) => (
            <div key={index} className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-br ${tip.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <tip.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tip.title}</h3>
              <p className="text-gray-600 leading-relaxed">{tip.description}</p>
              
              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${tip.gradient.replace('from-', 'from-').replace('to-', 'to-')} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Planning Your Trip?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Our experienced travel consultants are here to help you plan the perfect journey. 
              From visa assistance to travel insurance, we've got you covered with personalized service.
            </p>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:1-800-700-600" className="group bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105 font-semibold inline-flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call 1-800-700-600
                </a>
              <button className="group bg-white text-blue-600 px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-semibold inline-flex items-center gap-2 shadow-lg">
                <MessageCircle className="w-5 h-5" />
                Chat with Expert
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm">24/7 Expert Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm">Instant Booking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelTips;
