import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Eye, Lock, Database, Globe, Mail, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: January 15, 2025
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Brand Name Travel, we are committed to protecting your privacy and ensuring the security 
              of your personal information. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you use our website and services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our services, you consent to the collection and use of your information 
              as described in this Privacy Policy. We may update this policy from time to time, 
              and we will notify you of any material changes.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Personal Information</h4>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    We collect information you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                    <li>Name, email address, and phone number</li>
                    <li>Passport information and travel preferences</li>
                    <li>Payment information (processed securely by our payment partners)</li>
                    <li>Travel history and booking details</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Automatically Collected Information</h4>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    We automatically collect certain information when you visit our website:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                    <li>IP address and device information</li>
                    <li>Browser type and operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Search queries and booking patterns</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Third-Party Information</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We may receive information from third parties, such as airlines, hotels, 
                    and other travel service providers, to complete your bookings and provide 
                    customer support.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Process and confirm your travel bookings</li>
                <li>Communicate with you about your reservations</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send you important travel updates and notifications</li>
                <li>Improve our website and services</li>
                <li>Personalize your experience and offer relevant deals</li>
                <li>Comply with legal obligations and prevent fraud</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We will only use your information for the purposes described in this policy 
                or as otherwise disclosed to you at the time of collection.
              </p>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card>
            <CardHeader>
              <CardTitle>3. Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Service Providers</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We share your information with trusted third-party service providers who 
                    help us operate our business, including airlines, hotels, payment processors, 
                    and customer support services.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Legal Requirements</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We may disclose your information if required by law, court order, or 
                    government regulation, or to protect our rights, property, or safety.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Business Transfers</h4>
                  <p className="text-gray-700 leading-relaxed">
                    In the event of a merger, acquisition, or sale of assets, your information 
                    may be transferred to the new entity, subject to the same privacy protections.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">With Your Consent</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We may share your information with third parties when you give us explicit 
                    consent to do so.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle>4. Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to 
                protect your personal information against unauthorized access, alteration, 
                disclosure, or destruction.
              </p>
              <div className="space-y-2 text-gray-700">
                <p>• Encryption of sensitive data in transit and at rest</p>
                <p>• Regular security assessments and updates</p>
                <p>• Access controls and authentication measures</p>
                <p>• Employee training on data protection</p>
                <p>• Secure payment processing through certified partners</p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                While we strive to protect your information, no method of transmission over 
                the internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          {/* Cookies and Tracking */}
          <Card>
            <CardHeader>
              <CardTitle>5. Cookies and Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience 
                on our website:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Essential Cookies</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Required for basic website functionality, such as maintaining your session 
                    and processing bookings.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Help us understand how visitors use our website and improve our services.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Marketing Cookies</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Used to deliver relevant advertisements and track marketing campaign performance.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can control cookie settings through your browser preferences. However, 
                disabling certain cookies may affect website functionality.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle>6. Your Privacy Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your 
                personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Restriction:</strong> Limit how we process your information</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, please contact us using the information provided below. 
                We will respond to your request within 30 days.
              </p>
            </CardContent>
          </Card>

          {/* International Transfers */}
          <Card>
            <CardHeader>
              <CardTitle>7. International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your information may be transferred to and processed in countries other than 
                your country of residence. We ensure that such transfers comply with applicable 
                data protection laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When we transfer data internationally, we implement appropriate safeguards, 
                such as standard contractual clauses, to protect your information.
              </p>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card>
            <CardHeader>
              <CardTitle>8. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not 
                knowingly collect personal information from children under 13. If you believe 
                we have collected information from a child under 13, please contact us immediately.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Privacy Policy */}
          <Card>
            <CardHeader>
              <CardTitle>9. Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our 
                practices or applicable laws. We will notify you of any material changes by:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Posting the updated policy on our website</li>
                <li>Sending you an email notification</li>
                <li>Displaying a prominent notice on our website</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Your continued use of our services after any changes constitutes acceptance 
                of the updated Privacy Policy.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>10. Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@brandname.com</p>
                <p><strong>Phone:</strong> <a href="tel:1-800-700-600">1-800-700-600</a></p>
                                  <p><strong>Address:</strong> Brand Name Travel Privacy Team, New York, NY 10001</p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                We are committed to addressing your privacy concerns and will respond to 
                your inquiry as soon as possible.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Data Protection Notice */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Lock className="w-5 h-5" />
              Data Protection Commitment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-800 leading-relaxed">
              At Brand Name Travel, we are committed to protecting your privacy and ensuring the security 
              of your personal information. We comply with applicable data protection laws and 
              regulations, including GDPR, CCPA, and other privacy frameworks. Your trust is 
              important to us, and we work continuously to maintain the highest standards of 
              data protection.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 