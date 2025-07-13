import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send, 
  HelpCircle,
  FileText,
  CreditCard,
  Plane,
  Shield,
  Users
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    category: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const supportCategories = [
    { value: "booking", label: "Booking Issues", icon: <Plane className="w-4 h-4" /> },
    { value: "payment", label: "Payment & Billing", icon: <CreditCard className="w-4 h-4" /> },
    { value: "cancellation", label: "Cancellation & Refunds", icon: <Shield className="w-4 h-4" /> },
    { value: "technical", label: "Technical Support", icon: <HelpCircle className="w-4 h-4" /> },
    { value: "general", label: "General Inquiry", icon: <MessageCircle className="w-4 h-4" /> }
  ];

  const faqData: FAQItem[] = [
    {
      question: "How do I change or cancel my flight booking?",
      answer: "You can modify or cancel your booking through your account dashboard or by contacting our customer service team. Cancellation fees may apply based on your ticket type and airline policy.",
      category: "booking"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our encrypted payment system.",
      category: "payment"
    },
    {
      question: "How long does it take to receive a refund?",
      answer: "Refunds typically take 7-14 business days to appear on your original payment method. Processing times may vary depending on your bank or credit card provider.",
      category: "cancellation"
    },
    {
      question: "Can I book flights for someone else?",
      answer: "Yes, you can book flights for other passengers. Make sure to enter their correct passport information and contact details during the booking process.",
      category: "booking"
    },
    {
      question: "What should I do if my flight is delayed or cancelled?",
      answer: "If your flight is delayed or cancelled, contact our 24/7 support team immediately. We'll help you find alternative flights or arrange compensation according to your ticket terms.",
      category: "booking"
    },
    {
      question: "Do you offer travel insurance?",
      answer: "Yes, we offer comprehensive travel insurance plans that cover trip cancellation, medical emergencies, baggage loss, and more. You can add insurance during the booking process.",
      category: "general"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      category: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact & Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help! Get in touch with our customer support team for any questions, 
            concerns, or assistance you need with your travel plans.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Speak directly with our travel experts</p>
              <div className="text-2xl font-bold text-blue-600">
                <a href="tel:1-800-700-600">1-800-700-600</a>
              </div>
              <p className="text-sm text-gray-500 mt-2">24/7 Available</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Get instant help from our support team</p>
              <Button className="bg-green-600 hover:bg-green-700">
                Start Chat
              </Button>
              <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us a detailed message</p>
              <div className="text-lg font-semibold text-purple-600">support@brandname.com</div>
              <p className="text-sm text-gray-500 mt-2">Response within 24h</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {supportCategories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              <div className="flex items-center gap-2">
                                {category.icon}
                                {category.label}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <Input
                      required
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Brief description of your issue"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <Textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please provide detailed information about your inquiry..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5" />
                  Frequently Asked Questions
                </CardTitle>
                <CardDescription>
                  Find quick answers to common questions about our services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Customer Support:</span>
                    <span className="text-gray-600">24/7 Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sales Team:</span>
                    <span className="text-gray-600">Mon-Fri 8AM-8PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Technical Support:</span>
                    <span className="text-gray-600">Mon-Sun 6AM-12AM EST</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Support Options */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Support Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <FileText className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Help Center</h3>
                <p className="text-gray-600 text-sm">Browse our comprehensive help articles</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Community Forum</h3>
                <p className="text-gray-600 text-sm">Connect with other travelers</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <Plane className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Travel Guides</h3>
                <p className="text-gray-600 text-sm">Expert travel tips and advice</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <Shield className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Safety Information</h3>
                <p className="text-gray-600 text-sm">Travel safety and security updates</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Information */}
        <Card className="mt-16 bg-gray-900 text-white">
          <CardHeader>
            <CardTitle className="text-center">Get in Touch</CardTitle>
            <CardDescription className="text-center text-gray-300">
              We're here to help you plan the perfect trip
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
                <p className="text-xs text-gray-400">24/7 Support</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 mb-2 text-blue-400" />
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-300">support@brandname.com</p>
                <p className="text-xs text-gray-400">Response within 24h</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 mb-2 text-blue-400" />
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-gray-300">New York, NY 10001</p>
                <p className="text-xs text-gray-400">Main Office</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default ContactSupport; 