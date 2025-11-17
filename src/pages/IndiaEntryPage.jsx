// src/pages/IndiaEntryPage.jsx

// CORRECTED: All icons are now in a single, combined import
import { 
  Shield, 
  Users, // 'Users' is now imported only once
  TrendingUp, 
  Briefcase,
  Zap,
  ShieldCheck,
  Wifi,
  BrainCircuit,
  CheckCircle2 // Added from the other section
} from "lucide-react";

// You now have two data arrays. Let's keep them separate.
const investmentPoints = [
  {
    icon: Zap,
    title: "Dynamic Economy",
    description: "As the world's fastest-growing major economy, India offers unparalleled opportunities for expansion and high returns on investment.",
  },
  {
    icon: Users,
    title: "Vast Demographics",
    description: "Tap into a massive and youthful consumer market with a burgeoning middle class and increasing disposable income.",
  },
  {
    icon: ShieldCheck,
    title: "Pro-Business Reforms",
    description: "Benefit from continuous government reforms aimed at improving the ease of doing business, boosting manufacturing, and encouraging foreign investment.",
  },
  {
    icon: Wifi,
    title: "Digital Infrastructure",
    description: "Leverage one of the world's most extensive and affordable digital ecosystems, driving innovation and service delivery at scale.",
  },
  {
    icon: BrainCircuit,
    title: "Skilled Workforce",
    description: "Access a vast pool of talented, English-speaking professionals and a robust ecosystem of technical and managerial expertise.",
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

const IndiaEntryPage = () => {
  return (
    <>
      {/* Section 1: Hero Image with Text */}
      {/* Section 1: Hero Image with Text */}
<section
  className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(/ai-generated-night-city-with-neon-lights-and-high-rise-buildings-vector-illustration-it-server-and-modern-digital-fortress-with-digital-computers-data-center-ai-generated-f.jpg)` }} // <-- Corrected image path for your public folder
>
  {/* Dark overlay for text readability */}
  <div className="absolute inset-0 bg-black opacity-60"></div>
  
  {/* Overlay Text */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
      Investing in India's Future
    </h1>
    <p className="text-xl mt-4 max-w-3xl">
      A strategic guide to unlocking the potential of a trillion-dollar economy.
    </p>
  </div>
</section>

      {/* Section 2: Introduction with Space for a Picture */}
     <section className="py-20 bg-ca-light-blue"> {/* Light blue background added */}
  <div className="container mx-auto px-4">
    
    {/* Centered Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-foreground">
        Your Gateway to Business in India
      </h2>
    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Text Column */}
      <div className="prose lg:prose-lg max-w-none text-muted-foreground">
        <p>
          India's dynamic market presents immense opportunities for global businesses. However, a successful launch requires a nuanced understanding of its diverse market, complex regulatory framework, and unique business culture.
        </p>
        <p>
          At Pritam Ajit & Company, we serve as your trusted navigators, providing end-to-end advisory to ensure your entry into India is seamless, compliant, and strategically sound. We help you build a strong foundation for long-term success.
        </p>
      </div>
      
      {/* Image Column */}
      <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
        <img
          src="/creative-india-flag-banner-stock-260nw-1890250519.jpg" // Using the image from before
          alt="A modern business building in India, symbolizing a gateway for investment."
          className=" inset-0 w-full h-full object-cover object-center" // Corrected classes
        />
       
      </div>
    </div>
  </div>
</section>

      {/* Section 3: Why Invest in India */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Invest in India?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
            India is not just a market; it's an economic powerhouse offering a unique combination of scale, growth, and opportunity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div 
                  key={index} 
                  className="bg-card p-8 rounded-lg text-left border border-border/20 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Section 4: Why Choose Us */}
      <section className="py-20 bg-background">
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

export default IndiaEntryPage;