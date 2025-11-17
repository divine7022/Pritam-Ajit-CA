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
    <footer className="bg-gradient-to-br from-[#0A1128] via-[#0F1A3A] to-[#16244D] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src="/ca_india_new_logo_sticker_cars_motorcycles_laptops-600x315w.jpg"
                className="h-14 w-auto"
              />
              <div className="ml-3">
                <h3 className="text-2xl font-extrabold tracking-wide">
                  Pritam Ajit & Company
                </h3>
                <p className="text-sm text-gray-300">Chartered Accountants</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A trusted name in finance, taxation, audit, and business advisory.
              Delivering excellence, integrity, and industry-leading expertise
              across multiple sectors for over 25 years.
            </p>

            <div className="flex space-x-5 pt-2">
              <Facebook className="h-6 w-6 opacity-70 hover:opacity-100 hover:text-primary transition" />
              <Twitter className="h-6 w-6 opacity-70 hover:opacity-100 hover:text-primary transition" />
              <Linkedin className="h-6 w-6 opacity-70 hover:opacity-100 hover:text-primary transition" />
              <Instagram className="h-6 w-6 opacity-70 hover:opacity-100 hover:text-primary transition" />
              <Youtube className="h-6 w-6 opacity-70 hover:opacity-100 hover:text-primary transition" />
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-primary tracking-wide">
              OUR BRANCHES
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-[15px]">
                  Aurangabad Office
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-primary tracking-wide">
              CONTACT US
            </h4>
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
                  className="text-gray-300 hover:text-primary transition"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=anshikasupriya2308@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  anshikasupriya2308@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-primary tracking-wide">
              HEAD OFFICE
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-gray-300 text-[15px] leading-relaxed">
                  <p>No. 45, Business Center, 3rd Floor,</p>
                  <p>Above HDFC Bank, MG Road,</p>
                  <p>Mumbai - 400001, Maharashtra</p>
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg" asChild>
                <a
                  href="https://www.google.com/maps?q=HDFC+Bank+MG+Road+Mumbai+400001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 Pritam Ajit & Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
