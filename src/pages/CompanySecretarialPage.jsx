// src/pages/CompanySecretarialPage.jsx

import { useState } from "react";
import {
  Shield, Users, TrendingUp, Briefcase, Fingerprint, Building, FilePlus, PenSquare, Share2, Map, Search, SlidersHorizontal, Settings, Globe, Power
} from "lucide-react";

// --- DATA FOR THE PAGE ---

const secretarialServicesData = [
  {
    category: "Registrations & Incorporation",
    icon: FilePlus,
    services: [
      {
        front: "Digital Signature (DSC)",
        back: ["We handle the entire DSC application and procurement process, a mandatory requirement for signing electronic documents."],
      },
      {
        front: "Director Identification (DIN)",
        back: ["We facilitate obtaining DINs for both Indian Nationals and Foreign Nationals, a prerequisite for any individual to become a director."],
      },
      {
        front: "Company Incorporation",
        back: ["Complete setup services for Private Limited, Public Limited, One Person (OPC), and Foreign Companies under the Companies Act, 2013."],
      },
      {
        front: "LLP Incorporation",
        back: ["Expert guidance on forming Limited Liability Partnerships (LLPs) as per the Limited Liability Partnership Act, 2008."],
      },
    ],
  },
  {
    category: "Drafting & Vetting",
    icon: PenSquare,
    services: [
      {
        front: "Constitutional Documents",
        back: ["Expert drafting and alteration of Memorandum of Association (MoA) & Articles of Association (AoA) to align with your business goals."],
      },
      {
        front: "Legal Documents",
        back: ["Professional vetting and drafting of critical legal documents including Agreements, Deeds, and Memorandums of Understanding (MoU)."],
      },
      {
        front: "Corporate Documentation",
        back: ["Meticulous preparation of Agendas, Notices, Minutes, Resolutions, and official correspondence with various authorities."],
      },
    ],
  },
  {
    category: "Annual Compliances",
    icon: SlidersHorizontal,
    services: [
      {
        front: "Annual Reports & Filings",
        back: ["Comprehensive preparation of the Annual Report, including the Notice & Director's Report, and filing of Annual Returns."],
      },
      {
        front: "Statutory Certificates",
        back: ["Issuance of mandatory Compliance Certificates and filing of auditor appointment forms (ADT)."],
      },
      {
        front: "Share & Debenture Management",
        back: ["Handling all aspects of share and debenture certificates, including printing, stamping, transfers, and issuance."],
      },
    ],
  },
  {
    category: "Corporate Restructuring",
    icon: Map,
    services: [
      {
        front: "Shifting Registered Office",
        back: ["Managing the complete process for shifting your registered office within a city, within a state, or from one state to another."],
      },
      {
        front: "Charges & Search Reports",
        back: ["Preparation of detailed Search Reports and handling the creation, modification, or satisfaction of charges on company assets."],
      },
    ],
  },
  {
    category: "Audits & Advisory",
    icon: Search,
    services: [
      {
        front: "Secretarial Audit",
        back: ["A thorough audit to check all compliances under the Companies Act, 2013, and Listing Agreements for public companies."],
      },
      {
        front: "Corporate Advisory",
        back: ["Strategic advice on capital structuring and ensuring compliance to avoid violations under various applicable statutes."],
      },
    ],
  },
  {
    category: "Specialized Compliances",
    icon: Globe,
    services: [
      {
        front: "FEMA & RBI Compliances",
        back: ["Expert handling of FDI policy adherence, FC-GPR (foreign currency), and FC-TRS (transfer of shares) compliances."],
      },
      {
        front: "Entity-Specific Compliances",
        back: ["Specialized compliance services tailored for LLPs, One Person Companies, and Foreign Companies."],
      },
      {
        front: "Record Maintenance",
        back: ["Systematic maintenance and updating of all statutory registers, minutes books, and ROC files."],
      },
    ],
  },
  {
    category: "Closures",
    icon: Power,
    services: [
      {
        front: "Company Closure & Liquidation",
        back: ["Managing the formal winding-up process or utilizing the Fast Track Exit (FTE) scheme for defunct companies."],
      },
    ],
  },
];

const whyChooseUsData = [
  {
    icon: Shield,
    title: "Deep Regulatory Expertise",
    description: "Our team possesses an in-depth understanding of India's complex regulatory landscape, including FDI, FEMA, and corporate law, ensuring your compliance from day one.",
  },
  {
    icon: Users,
    title: "Tailored Entry Strategies",
    description: "We don't believe in one-size-fits-all. We analyze your business goals to devise a bespoke market entry strategy that minimizes risk and maximizes potential.",
  },
  {
    icon: TrendingUp,
    title: "Proven Growth Partners",
    description: "Our relationship doesn't end with incorporation. We act as your strategic partners, offering ongoing advisory to help you scale and succeed in the Indian market.",
  },
  {
    icon: Briefcase,
    title: "End-to-End Service",
    description: "From initial market research to ongoing accounting and compliance, we provide a single point of contact for all your business needs in India, simplifying your operations.",
  },
];

const CompanySecretarialPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (tabIndex, cardIndex) => {
    const key = `${tabIndex}-${cardIndex}`;
    setFlippedCards(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Section 1: Hero Image */}
<section
  className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(/images-new.jpeg)` }} // <-- FIXED PATH
>
  <div className="absolute inset-0 bg-black opacity-60"></div>
  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
      Company Secretarial Services
    </h1>
    <p className="text-xl mt-4 max-w-3xl">
      Ensuring Corporate Compliance and Governance at Every Step.
    </p>
  </div>
</section>
      {/* Section 2: Services with Tabs and Flip Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {secretarialServicesData.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
                    activeTab === index 
                    ? 'bg-primary text-primary-foreground shadow-lg' 
                    : 'bg-card text-muted-foreground hover:bg-primary/10'
                  }`}
                >
                  <Icon className="w-5 h-5"/>
                  {tab.category}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="max-w-6xl mx-auto">
            {secretarialServicesData.map((tab, tabIndex) => (
              <div key={tabIndex} className={activeTab === tabIndex ? 'block' : 'hidden'}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-auto [perspective:1200px]">
                  {tab.services.map((card, cardIndex) => {
                    const key = `${tabIndex}-${cardIndex}`;
                    return (
                      <div
                        key={cardIndex}
                        className="relative w-full h-48 cursor-pointer"
                        onClick={() => handleFlip(tabIndex, cardIndex)}
                      >
                        <div
                          className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-in-out ${
                            flippedCards[key] ? "[transform:rotateY(180deg)]" : ""
                          }`}
                        >
                          {/* Front Face */}
                          <div className="absolute w-full h-full [backface-visibility:hidden] p-6 rounded-xl shadow-lg border bg-card flex flex-col items-center justify-center text-center">
                            <h3 className="text-xl font-bold text-foreground">{card.front}</h3>
                            <p className="text-xs text-muted-foreground mt-2">Click to see details</p>
                          </div>
                          {/* Back Face */}
                          <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 rounded-xl shadow-lg border bg-primary/90 text-primary-foreground text-left">
                             <h4 className="font-bold mb-2 text-center">{card.front}</h4>
                             <ul className="list-disc list-inside text-sm space-y-1">
                                {card.back.map((point, i) => <li key={i}>{point}</li>)}
                             </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Choose Pritam Ajit & Company?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
            Your success is our business. We provide the expertise and partnership you need to navigate and thrive in the Indian market.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUsData.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-8 rounded-lg shadow-sm border border-transparent hover:border-primary hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"
                >
                  <div className="flex justify-center mb-6">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="text-muted-foreground">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanySecretarialPage;