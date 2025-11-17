import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users2, Award, MapPin, ShieldCheck } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="our-company" className="py-28 relative overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-ca-teal-light/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0A1A2F]/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold tracking-tight text-[#0A1A2F]">
            About <span className="text-ca-teal-light">Pritam Ajit & Company</span>
          </h2>
          <p className="text-lg text-[#4A5568] mt-4 max-w-2xl mx-auto">
            Elevating businesses with precision, professionalism, and trust for over 25 years.
          </p>
          <div className="w-24 h-1.5 bg-ca-teal-light mx-auto mt-6 rounded-full shadow-md"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 text-[#4A5568] text-lg leading-relaxed">
            <p>
              <span className="text-ca-teal-light font-semibold">Pritam Ajit & Company</span> is a reputed Chartered Accountancy
              firm known for its strong ethics, precision-driven services, and excellence in financial governance. With decades
              of experience, we combine deep industry expertise with modern technologies to deliver impactful solutions.
            </p>

            <p>
              Our philosophy revolves around trust, accuracy, compliance, and long-term partnerships. We go beyond standard
              services — we empower businesses to grow sustainably and confidently.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Badge className="px-5 py-2 text-sm bg-[#0A1A2F]/5 text-ca-teal-light border-[#0A1A2F]/10 rounded-full">
                25+ Years of Excellence
              </Badge>
              <Badge className="px-5 py-2 text-sm bg-[#0A1A2F]/5 text-ca-teal-light border-[#0A1A2F]/10 rounded-full">
                500+ Trusted Clients
              </Badge>
              <Badge className="px-5 py-2 text-sm bg-[#0A1A2F]/5 text-ca-teal-light border-[#0A1A2F]/10 rounded-full">
                Multi-City Firm
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <Card className="backdrop-blur-xl bg-white border border-[#0A1A2F]/10 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="p-10 text-center">
                <Users2 className="h-12 w-12 text-ca-teal-light mx-auto mb-4" />
                <div className="text-4xl font-bold text-[#0A1A2F]">500+</div>
                <div className="text-md text-[#4A5568]">Clients Served</div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-white border border-[#0A1A2F]/10 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="p-10 text-center">
                <Award className="h-12 w-12 text-ca-teal-light mx-auto mb-4" />
                <div className="text-4xl font-bold text-[#0A1A2F]">25+</div>
                <div className="text-md text-[#4A5568]">Years of Expertise</div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-white border border-[#0A1A2F]/10 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="p-10 text-center">
                <ShieldCheck className="h-12 w-12 text-ca-teal-light mx-auto mb-4" />
                <div className="text-4xl font-bold text-[#0A1A2F]">15+</div>
                <div className="text-md text-[#4A5568]">Expert CAs</div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-white border border-[#0A1A2F]/10 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="p-10 text-center">
                <MapPin className="h-12 w-12 text-ca-teal-light mx-auto mb-4" />
                <div className="text-4xl font-bold text-[#0A1A2F]">3</div>
                <div className="text-md text-[#4A5568]">Office Locations</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;