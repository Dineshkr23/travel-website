import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Calendar, Shield, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: January 15, 2025
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Brand Name Travel. These Terms of Service ("Terms") govern your use of our website 
              and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Brand Name Travel is an independent travel agency that provides flight booking services. 
              We are not affiliated with any airline and act as an intermediary between you and 
              the airlines, hotels, and other travel service providers.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using our website and services, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms of Service. If you do not agree to these terms, 
                please do not use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting on our website. Your continued use of our services after 
                any changes constitutes acceptance of the new terms.
              </p>
            </CardContent>
          </Card>

          {/* User Accounts */}
          <Card>
            <CardHeader>
              <CardTitle>2. User Accounts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                To access certain features of our services, you may be required to create an account. 
                You are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the security of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to terminate accounts that violate these terms or engage in 
                fraudulent activities.
              </p>
            </CardContent>
          </Card>

          {/* Booking and Payment */}
          <Card>
            <CardHeader>
              <CardTitle>3. Booking and Payment Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Booking Process</h4>
                  <p className="text-gray-700 leading-relaxed">
                    All bookings are subject to availability and confirmation. Prices are subject 
                    to change until payment is completed. We reserve the right to cancel bookings 
                    if payment is not received within the specified timeframe.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Payment</h4>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    We accept various payment methods including credit cards, debit cards, and 
                    digital wallets. All payments are processed securely through our payment 
                    partners.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    By making a payment, you authorize us to charge the specified amount to your 
                    chosen payment method.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Pricing and Fees</h4>
                  <p className="text-gray-700 leading-relaxed">
                    All prices are displayed in the local currency unless otherwise specified. 
                    Additional fees may apply for services such as seat selection, baggage, 
                    and travel insurance. These fees will be clearly displayed during the 
                    booking process.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cancellation and Refunds */}
          <Card>
            <CardHeader>
              <CardTitle>4. Cancellation and Refund Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Cancellation Terms</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Cancellation policies vary by airline and ticket type. Some tickets may be 
                    non-refundable or subject to cancellation fees. Please review the specific 
                    terms for your booking before confirming.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Refund Processing</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Refunds are processed according to the airline's policy and may take 7-14 
                    business days to appear on your original payment method. Processing times 
                    may vary depending on your bank or credit card provider.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Service Fees</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Our service fees are non-refundable unless the cancellation is due to our 
                    error or a significant service failure on our part.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Travel Documents and Requirements */}
          <Card>
            <CardHeader>
              <CardTitle>5. Travel Documents and Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                It is your responsibility to ensure you have all required travel documents, 
                including valid passports, visas, and any other documentation required by your 
                destination country.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We provide general information about travel requirements, but we are not 
                responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Denial of entry due to insufficient documentation</li>
                <li>Changes in visa requirements</li>
                <li>Passport validity issues</li>
                <li>Customs and immigration decisions</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We recommend checking with the relevant embassy or consulate for the most 
                up-to-date travel requirements.
              </p>
            </CardContent>
          </Card>

          {/* Privacy and Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle>6. Privacy and Data Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your privacy is important to us. We collect, use, and protect your personal 
                information in accordance with our Privacy Policy, which is incorporated into 
                these Terms by reference.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our services, you consent to the collection and use of your information 
                as described in our Privacy Policy. We implement appropriate security measures 
                to protect your personal data.
              </p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle>7. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Brand Name Travel acts as an intermediary and is not responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Flight delays, cancellations, or schedule changes</li>
                <li>Lost or damaged baggage</li>
                <li>Airline service quality issues</li>
                <li>Weather-related disruptions</li>
                <li>Acts of terrorism or force majeure events</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Our liability is limited to the amount of our service fees. We are not liable 
                for any indirect, incidental, or consequential damages.
              </p>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card>
            <CardHeader>
              <CardTitle>8. Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any disputes arising from these Terms or our services will be resolved through 
                binding arbitration in accordance with the rules of the American Arbitration 
                Association.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You agree to waive any right to a jury trial or class action lawsuit. 
                Arbitration will be conducted in New York, NY, and the laws of New York 
                will govern these Terms.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>9. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> legal@brandname.com</p>
                <p><strong>Phone:</strong> <a href="tel:1-800-700-600">1-800-700-600</a></p>
                                  <p><strong>Address:</strong> Brand Name Travel Legal Department, New York, NY 10001</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Notice */}
        <Card className="mt-8 bg-orange-50 border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-900">
              <AlertTriangle className="w-5 h-5" />
              Important Notice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-orange-800 leading-relaxed">
              These Terms of Service constitute a legally binding agreement between you and Brand Name Travel. 
              By using our services, you acknowledge that you have read, understood, and agree to 
              be bound by these terms. If you do not agree to these terms, please do not use our services.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService; 