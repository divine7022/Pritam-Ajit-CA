import {
  Shield, Users, TrendingUp, Briefcase, Droplets, Wind, Sun, FileText, CheckSquare, Wallet, BarChart
} from "lucide-react";

// --- DATA FOR THE PAGE ---

const sectorsData = [
    { icon: Droplets, title: "Hydroelectric Power" },
    { icon: Wind, title: "Wind Power" },
    { icon: Sun, title: "Solar Power Sectors" },
];

const coreServicesData = [
    {
        icon: FileText,
        title: "Preparation of Project Report",
        description: "Our detailed project reports include a comprehensive analysis of the industry, demand-supply scenarios, energy requirements, peak load, consumption levels, installed generation capacity, and fuel resources, complete with a project implementation schedule and fund mobilization statement."
    },
    {
        icon: CheckSquare,
        title: "Preparation of Feasibility Report",
        description: "We conduct in-depth feasibility studies to analyze the viability of an idea and ascertain the likelihood of a project's success. Our reports include possible alternative solutions, highlight different impacts, and provide clear recommendations."
    },
    {
        icon: Wallet,
        title: "Strategic Tax Planning",
        description: "Our team assists you in accomplishing all elements of your financial plan in the most tax-efficient manner possible, leveraging all available incentives and benefits within the energy sector."
    },
    {
        icon: BarChart,
        title: "In-Depth Cost Analysis",
        description: "We provide a detailed analysis of all cost components, including initial investment, operation and maintenance (O&M), energy production, capital and replacement costs, and the external environmental costs of fuels."
    }
];
const whyChooseUsData = [
  {
    icon: Shield,
    title: "Deep Regulatory Expertise",
    description: "Our team possesses an in-depth understanding of India's complex regulatory landscape, ensuring your compliance from day one.",
  },
  {
    icon: Users,
    title: "Tailored Entry Strategies",
    description: "We analyze your business goals to devise a bespoke market entry strategy that minimizes risk and maximizes potential.",
  },
  {
    icon: TrendingUp,
    title: "Proven Growth Partners",
    description: "We act as your strategic partners, offering ongoing advisory to help you scale and succeed in the Indian market.",
  },
  {
    icon: Briefcase,
    title: "End-to-End Service",
    description: "We provide a single point of contact for all your business needs in India, simplifying your operations.",
  },
];

const EnergySectorServicesPage = () => {
  return (
    <>
      {/* Section 1: Hero */}
      <section
        className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/What-is-Energy-as-a-Service-Top-Image.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">Energy Sector Services</h1>
          <p className="text-xl mt-4 max-w-3xl opacity-90">Powering Your Ventures with Expert Financial and Regulatory Guidance.</p>
        </div>
      </section>

      {/* Section 2: Introduction & Sectors We Serve */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-foreground mb-6">Financial Checkup for the Energy Sector</h2>
                <div className="prose lg:prose-lg max-w-none text-muted-foreground mx-auto space-y-4">
                    <p>We provide specialized services to assist corporations with a comprehensive financial health check-up for their energy sector projects. Our organized approach involves verifying all pertinent facts and finding efficiencies in business operations.</p>
                    <p>Our methodology combines a traditional financial examination of an entity's operating performance and cash flow with a detailed review of its statement of financial position, tailored to the unique dynamics of the energy industry.</p>
                </div>
            </div>
            <div className="mt-16">
                 <h3 className="text-3xl font-bold text-foreground text-center mb-8">We Provide Services To:</h3>
                 <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                     {sectorsData.map(item => {
                         const Icon = item.icon;
                         return <div key={item.title} className="bg-card p-8 rounded-lg shadow-lg border text-center flex flex-col items-center justify-center hover:-translate-y-2 transition-transform duration-300"><Icon className="w-10 h-10 text-primary mb-4" /><h4 className="text-2xl font-semibold text-foreground">{item.title}</h4></div>
                     })}
                 </div>
            </div>
        </div>
      </section>
      
      {/* Section 3: Scope & Approach */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
               <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-foreground mb-4">Our Scope and Approach</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
                  {coreServicesData.map(item => {
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className="bg-card p-8 rounded-lg shadow-lg border text-left h-full flex flex-col">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-primary/10 p-4 rounded-lg">
                                    <Icon className="w-8 h-8 text-primary"/>
                                </div>
                                <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                            </div>
                            <p className="text-muted-foreground flex-grow">{item.description}</p>
                        </div>
                      );
                  })}
              </div>
          </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Pritam Ajit & Company?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">Your success is our business. We provide the expertise and partnership you need to navigate and thrive in the Indian market.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyChooseUsData.map((card, index) => {
                    const Icon = card.icon;
                    return (
                        <div key={index} className="bg-card p-8 rounded-lg shadow-sm border border-transparent hover:border-primary hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out">
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

export default EnergySectorServicesPage;