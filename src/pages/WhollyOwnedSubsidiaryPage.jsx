import {
  Shield,
  Users,
  TrendingUp,
  Briefcase,
  Building2,
  Handshake,
  ArrowRight,
  Zap,
  Scale,
} from "lucide-react";
import { useState } from "react";
// --- DATA FOR THE PAGE ---

const whyChooseUsData = [
  {
    icon: Shield,
    title: "Deep Regulatory Expertise",
    description:
      "Our team possesses an in-depth understanding of India's complex regulatory landscape, including FDI, FEMA, and corporate law, ensuring your compliance from day one.",
  },
  {
    icon: Users,
    title: "Tailored Entry Strategies",
    description:
      "We don't believe in one-size-fits-all. We analyze your business goals to devise a bespoke market entry strategy that minimizes risk and maximizes potential.",
  },
  {
    icon: TrendingUp,
    title: "Proven Growth Partners",
    description:
      "Our relationship doesn't end with incorporation. We act as your strategic partners, offering ongoing advisory to help you scale and succeed in the Indian market.",
  },
  {
    icon: Briefcase,
    title: "End-to-End Service",
    description:
      "From initial market research to ongoing accounting and compliance, we provide a single point of contact for all your business needs in India, simplifying your operations.",
  },
];

const entityTypesData = [
  {
    icon: Building2,
    title: "Limited Company",
    points: [
      "Private/Public limited companies",
      "Minimum 2 Share holders",
      "Minimum 2 Directors",
      "Minimum 1 resident Director",
      "Income Tax 15%-22%",
    ],
  },
  {
    icon: Handshake,
    title: "Limited Liability Partnership",
    points: [
      "Minimum 2 Partners",
      "Minimum 1 resident Partner",
      "Partners are owners and managers",
      "Income Tax 30%",
      "No Dividend Tax",
    ],
  },
];

const WhollyOwnedSubsidiaryPage = () => {
    const [isFlipped, setIsFlipped] = useState(
    new Array(entityTypesData.length).fill(false)
  );
  const handleFlip = (index) => {
  const newFlippedStates = [...isFlipped];
  newFlippedStates[index] = !newFlippedStates[index];
  setIsFlipped(newFlippedStates);
};
  return (
    <>
      {/* Section 1: Hero Image with Text */}
      <section
        className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat py-20 bg-ca-light-blue"
        style={{ backgroundImage: `url(/10.jpg)` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Wholly Owned Subsidiary (WOS)
          </h1>
          <p className="text-xl mt-4 max-w-3xl">
            Your Dedicated Entity for Full Control in the Indian Market.
          </p>
        </div>
      </section>

      {/* Section 2: Introduction with Image */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="prose lg:prose-lg max-w-none text-muted-foreground">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Establishing Your Presence in India
              </h2>
              <p>
                A Wholly Owned Subsidiary (WOS) is a popular choice for foreign corporations looking to establish a significant, long-term presence in India. As a WOS, your company is treated as a domestic Indian company, allowing for full operational authority, intellectual property protection, and 100% ownership.
              </p>
              <p>
                This structure provides maximum control over your business strategy and operations, making it the ideal vehicle for executing your vision in one of the world's most dynamic markets.
              </p>
            </div>
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
              <img
                src="/concept-of-Wholly-Owned-Subsidiary-outside-India.jpg"
                alt="Professional business meeting in a modern boardroom"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

{/* Section 3: FDI Policy Routes (Aesthetic Redesign) */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-foreground mb-4">
        FDI Policy Routes
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Foreign Direct Investment in India is a streamlined process, primarily channeled through two distinct routes depending on the industry sector.
      </p>
    </div>

    {/* Visual Three-Column Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-16">
      {/* Column 1: Automatic Route */}
      <div className="text-center lg:text-right">
        <div className="inline-flex items-center gap-4 p-4 bg-card rounded-lg shadow-sm">
          <Zap className="w-8 h-8 text-primary" />
          <h3 className="text-2xl font-semibold text-foreground">Automatic Route</h3>
        </div>
      </div>
      
      {/* Column 2: Central Image */}
      <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-xl order-first lg:order-none">
        <img
          src="/FDI-2-12-2024.jpg" // Assumes this image is in your /public folder
          alt="Abstract image representing policy and investment"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>

      {/* Column 3: Government Route */}
      <div className="text-center lg:text-left">
        <div className="inline-flex items-center gap-4 p-4 bg-card rounded-lg shadow-sm">
          <Scale className="w-8 h-8 text-primary" />
          <h3 className="text-2xl font-semibold text-foreground">Government Route</h3>
        </div>
      </div>
    </div>

    {/* Detailed Content Section with Hover Effect */}
    <div className="grid md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
      <div className="bg-card p-8 rounded-lg border border-border/20 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out">
        <h3 className="text-xl font-semibold text-foreground mb-3">Automatic Route Explained</h3>
        <p className="text-muted-foreground">
          This is the default path for most sectors, designed for speed and efficiency. Under this route, foreign investors do not need prior approval from the government to invest. Up to 100% FDI is allowed in many areas like IT services, manufacturing, and e-commerce marketplaces. The investor only needs to notify the Reserve Bank of India (RBI) after the investment is made.
        </p>
      </div>
      <div className="bg-card p-8 rounded-lg border border-border/20 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out">
        <h3 className="text-xl font-semibold text-foreground mb-3">Government Route Explained</h3>
        <p className="text-muted-foreground">
          This route is for investment in sensitive or strategic sectors that require more scrutiny. Prior approval is mandatory from the concerned government ministry or department, such as the Department for Promotion of Industry and Internal Trade (DPIIT). Sectors like defense, broadcasting, and multi-brand retail trading typically fall under this category.
        </p>
      </div>
    </div>
  </div>
</section>

      <section className="py-20 bg-background">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-foreground mb-6">
      Choose Your Ideal Investment Vehicle
    </h2>
    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
      Understand the key distinctions between a Limited Company and an LLP to align with your business goals. Hover to peek, click to lock.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto h-[28rem] [perspective:1000px]">
      {entityTypesData.map((card, index) => {
        const Icon = card.icon;
        return (
          <div
            key={index}
            className="relative w-full h-full cursor-pointer"
            onClick={() => handleFlip(index)}
          >
            <div
              className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-in-out ${
                isFlipped[index] ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Front Face of the Card */}
              <div className="absolute w-full h-full [backface-visibility:hidden] p-8 rounded-xl shadow-xl border bg-card flex flex-col items-center justify-center">
                <div className="bg-primary/10 p-5 rounded-full mb-4 shadow-md">
                  <Icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">
                  {card.title}
                </h3>
                <p className="text-muted-foreground mt-4">Click to see details</p>
              </div>

              {/* Back Face of the Card */}
              <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] p-8 rounded-xl shadow-xl border bg-card text-left">
                <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                  {card.title} - Key Points
                </h3>
                <ul className="space-y-3 text-muted-foreground text-lg">
                  {card.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <ArrowRight className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
      {/* Section 5: Why Choose Us */}
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

export default WhollyOwnedSubsidiaryPage;