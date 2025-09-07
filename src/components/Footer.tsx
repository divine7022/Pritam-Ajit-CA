import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ca-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-3">
                <img
                  src="/ca_india_new_logo_sticker_cars_motorcycles_laptops-600x315w.jpg" // Assumes your logo is named this in the /public folder
                  className="h-12 w-auto" // Adjust the height (h-12) as needed
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Pritam Ajit & Company</h3>
                <p className="text-sm opacity-90">Chartered Accountants</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Pritam Ajit & Co is a leading CA firm providing comprehensive
              accounting and business advisory services. We offer reliable
              chartered accountants who deliver excellence with integrity across
              various industries.
            </p>
          </div>

          {/* Our Branches */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-primary">OUR BRANCHES</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">Aurangabad Office</span>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-primary">CONTACT US</h4>
            <div className="space-y-4">
              <div>
                <p className="text-white font-medium">Pritam Ajit</p>
                <p className="text-gray-300 text-sm">Managing Partner</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-300">+91 87654 32109</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-primary mt-1" />
                <a
                  className="text-gray-300"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=anshikasupriya2308@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  anshikasupriya2308@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Head Office */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-primary">HEAD OFFICE</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>No. 45, Business Center, 3rd Floor,</p>
                  <p>Above HDFC Bank, MG Road,</p>
                  <p>Mumbai - 400001, Maharashtra</p>
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Get Directions
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 Pritam Ajit & Company. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
