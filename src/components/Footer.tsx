
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, Plane, Shield, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden" id="contact">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-lg">Secure Booking</h3>
            </div>
            <p className="text-gray-300 text-sm">256-bit SSL encryption ensures your data is always protected</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-lg">Best Prices</h3>
            </div>
            <p className="text-gray-300 text-sm">Price match guarantee - we'll beat any competitor's price</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-lg">24/7 Support</h3>
            </div>
            <p className="text-gray-300 text-sm">Round-the-clock expert support for all your travel needs</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Brand Name
                </span>
                <span className="text-xs text-gray-400 font-medium">Travel</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted travel partner for over 15 years. We make flying simple, 
              affordable, and stress-free with cutting-edge technology and personalized service.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <Facebook className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
              </div>
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <Twitter className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
              </div>
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <Instagram className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
              </div>
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <Youtube className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Flight Search</Link></li>
              <li><Link to="/insurance" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Travel Insurance</Link></li>
              <li><Link to="/documents" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Travel Documents</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Reviews</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Customer Service</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/contact" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Help Center</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Privacy Policy</Link></li>
              <li><Link to="/about" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Contact Us</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <a href="tel:1-800-700-600" className="group-hover:text-white transition-colors">1-800-700-600</a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="group-hover:text-white transition-colors">support@brandname.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="group-hover:text-white transition-colors">New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Brand Name Travel. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:scale-105">Privacy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:scale-105">Terms</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:scale-105">Contact</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400 text-xs leading-relaxed">
            <strong>Disclaimer:</strong> Brand Name Travel is an independent travel agency. We are not affiliated with any airline. 
            Prices are subject to change and availability. Additional fees may apply. All bookings are subject to 
            airline terms and conditions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
