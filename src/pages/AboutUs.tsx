import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  Award, 
  Globe, 
  Heart, 
  Shield, 
  Star, 
  TrendingUp, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  Plane,
  Clock,
  DollarSign
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  description: string;
}

interface Achievement {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const AboutUs = () => {
  const achievements: Achievement[] = [
    {
      number: "15+",
      label: "Years of Experience",
      icon: <Clock className="w-8 h-8 text-blue-600" />
    },
    {
      number: "2M+",
      label: "Happy Customers",
      icon: <Users className="w-8 h-8 text-green-600" />
    },
    {
      number: "150+",
      label: "Countries Served",
      icon: <Globe className="w-8 h-8 text-purple-600" />
    },
    {
      number: "24/7",
      label: "Customer Support",
      icon: <Phone className="w-8 h-8 text-orange-600" />
    }
  ];

  const values = [
    {
      title: "Customer First",
      description: "We prioritize our customers' needs and satisfaction above everything else.",
      icon: <Heart className="w-6 h-6 text-red-500" />
    },
    {
      title: "Trust & Security",
      description: "Your data and transactions are protected with the highest security standards.",
      icon: <Shield className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery.",
      icon: <Star className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Innovation",
      description: "Continuously innovating to provide the best travel booking experience.",
      icon: <TrendingUp className="w-6 h-6 text-green-500" />
    }
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      description: "15+ years in travel industry, passionate about making travel accessible to everyone."
    },
    {
      name: "Michael Chen",
      position: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      description: "Technology expert focused on creating seamless booking experiences."
    },
    {
      name: "Emily Rodriguez",
      position: "Head of Customer Service",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      description: "Dedicated to ensuring every customer has an exceptional experience."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Brand Name Travel
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're more than just a flight booking platform. We're your trusted travel partner, 
            committed to making your journey seamless, affordable, and unforgettable. 
            With over 15 years of experience, we've helped millions of travelers explore the world.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Plane className="w-6 h-6" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 leading-relaxed">
                To democratize travel by providing affordable, reliable, and personalized flight booking 
                services that connect people to their dreams and destinations around the world.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-900">
                <Globe className="w-6 h-6" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800 leading-relaxed">
                To become the world's most trusted and innovative travel platform, making global 
                exploration accessible to everyone while promoting sustainable and responsible tourism.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {achievement.number}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {achievement.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009, Brand Name Travel began as a small startup with a big dream: to make travel 
                  accessible to everyone. What started as a simple flight search engine has grown into 
                  a comprehensive travel platform serving millions of customers worldwide.
                </p>
                <p>
                  Over the years, we've expanded our services to include hotel bookings, car rentals, 
                  travel insurance, and personalized travel planning. Our commitment to customer 
                  satisfaction and competitive pricing has made us a trusted name in the travel industry.
                </p>
                <p>
                  Today, we're proud to serve travelers from over 150 countries, offering flights to 
                  more than 1,000 destinations worldwide. Our team of travel experts and technology 
                  professionals work tirelessly to ensure every journey is memorable.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Brand Name Travel?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Best price guarantee</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Secure booking platform</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Flexible cancellation policies</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Expert travel advice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <Card className="bg-gray-900 text-white">
          <CardHeader>
            <CardTitle className="text-center">Get in Touch</CardTitle>
            <CardDescription className="text-center text-gray-300">
              Have questions? We'd love to hear from you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-6 h-6 mb-2 text-blue-400" />
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="text-gray-300">
              <a href="tel:1-800-700-600">1-800-700-600</a>
            </p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 mb-2 text-blue-400" />
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-300">hello@brandname.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 mb-2 text-blue-400" />
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-gray-300">New York, NY 10001</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs; 