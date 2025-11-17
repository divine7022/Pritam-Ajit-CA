import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calculator,
  FileText,
  Building,
  TrendingUp,
  Shield,
  Briefcase,
  PieChart,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: "Audit & Assurance",
      description:
        "Comprehensive audit services including statutory, internal, stock, and tax audits.",
      features: [
        "Statutory Audit",
        "Internal Audit",
        "IND AS",
        "Public Sector Audit",
        "Company Secretrial Services",
      ],
    },
    {
      icon: FileText,
      title: "Taxation Services",
      description:
        "Complete tax solutions for individuals and businesses across all tax categories.",
      features: [
        "Tax Consulting Services",
        "Tax Audit",
        "Income Tax Advisory",
        "NRI Taxation",
        "Easy IT Filing",
      ],
    },
    {
      icon: Building,
      title: "Transfer Pricing",
      description:
        "End-to-end corporate compliance and registration services for all business types.",
      features: ["International Taxation", "Transfer Pricing"],
    },
    {
      icon: TrendingUp,
      title: "GST",
      description:
        "Strategic financial advisory services to optimize your business performance.",
      features: ["GST Registration", "GST Audit", "GST Services"],
    },
    {
      icon: Shield,
      title: "Outsourcing",
      description:
        "Ensure regulatory compliance across all business operations and requirements.",
      features: [
        "Accounting Outsourcing",
        "SEZ Services",
        "Payroll Services",
        "SPTI & Non-SPTI Services",
        "Due Diligence",
      ],
    },
    {
      icon: Briefcase,
      title: "Business Advisory",
      description:
        "Strategic business consulting to drive growth and operational efficiency.",
      features: ["Business Valuation", "Captial Gain Advisory", "RERA Consultants"],
    },
    {
      icon: PieChart,
      title: "Management Consulting",
      description:
        "Comprehensive accounting solutions using modern technology and best practices.",
      features: [
        "Joint Development",
        "Labour Law Consultancy",
        "Energy Sector Services",
        "Fixed Asset Verification",
      ],
    },
    {
      icon: Users,
      title: "Startup Services",
      description:
        "Specialized services for startups and emerging businesses to accelerate growth.",
      features: [
        "Startup Registration",
        "Buisness Set Up",
        "Startup Funding",
        "Partnership",
        "Limited Liability Partnership",
        "Trust",
        "Society",
        "Private Limited Company",
      ],
    },
  ];

  const routeMap = {
    "Audit & Assurance": "/internal-audit",
    "Taxation Services": "/income-tax-advisory",
    "Transfer Pricing": "/transfer-pricing",
    GST: "/gst-registration",
    Outsourcing: "/accounting-outsourcing",
    "Business Advisory": "/business-valuation",
    "Management Consulting": "/fixed-asset-services",
    "Startup Services": "/private-limited-company",
  };

  return (
    <section id="our-services" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-primary/20 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[200px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Our <span className="text-primary">Comprehensive Services</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a complete range of chartered accounting services designed
            to meet all your financial and business requirements under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <Card
                key={index}
                className="group bg-white border border-gray-200 shadow-lg rounded-2xl
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 
                  group-hover:bg-primary transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-primary group-hover:text-white transition-all duration-300" />
                  </div>

                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-center px-6 pb-8">
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <ul className="text-sm text-gray-500 space-y-1.5 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full px-6 border-primary text-primary
                    hover:bg-primary hover:text-white transition-all duration-300"
                    asChild
                  >
                    <Link to={routeMap[service.title] || "/"}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
