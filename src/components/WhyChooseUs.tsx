
import { Shield, Clock, DollarSign, Headphones, Award, Users, Star } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Booking",
      description: "Your payment information is protected with industry-leading 256-bit SSL encryption and secure transactions.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our travel experts are available around the clock to assist with bookings, changes, and travel emergencies.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: DollarSign,
      title: "Best Price Guarantee",
      description: "Find a lower price within 24 hours? We'll match it and give you an additional 10% off your booking.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Headphones,
      title: "Expert Assistance",
      description: "Speak with experienced travel agents who can find the best routes, deals, and travel solutions for you.",
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  const stats = [
    {
      number: "2M+",
      label: "Happy Customers",
      icon: Users,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      number: "500+",
      label: "Airlines Partners",
      icon: Award,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      number: "99.9%",
      label: "Customer Satisfaction",
      icon: Star,
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 overflow-hidden" id="about">
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
            <Award className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Trusted by
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Millions Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 15 years of experience in travel, we've helped millions of customers 
            find the perfect flights at unbeatable prices with unmatched service quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
              
              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient.replace('from-', 'from-').replace('to-', 'to-')} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/60 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Success Numbers</h3>
            <p className="text-gray-600 text-lg">Real results from real customers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="font-medium">SSL Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
