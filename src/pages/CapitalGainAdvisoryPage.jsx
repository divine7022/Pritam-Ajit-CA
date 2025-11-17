import { useState } from "react";
import {
  Shield, Users, TrendingUp, Briefcase, FileText, Banknote, User, CheckCircle, Target, BarChart, BookOpen
} from "lucide-react";

// --- DATA FOR THE PAGE ---

const advisoryScopeData = [
    { icon: TrendingUp, title: "Tax Planning", description: "Strategizing to determine how much capital gains tax you owe (short-term vs. long-term) and how to minimize it legally." },
    { icon: Shield, title: "Exemptions & Reinvestments", description: "Providing expert guidance on reinvestment options, such as specified bonds or property, to claim exemptions under sections 54, 54EC, and 54F." },
    { icon: BarChart, title: "Investment Strategies", description: "Planning when and how to sell assets to optimize your returns while effectively balancing the tax burden." },
    { icon: FileText, title: "Compliance & Filing", description: "Ensuring accurate and timely disclosure of all capital gains in your income tax returns to maintain full compliance." },
];

const residentServices = [
    "Comprehensive Computation of Capital Gains",
    "Corporate Real Estate Advisory on Transactions",
    "Guidance on Investment Opportunities in House Property",
    "Strategic Tax Planning for Capital Gain Exemption Schemes",
    "Certification for Withdrawal from Capital Gain Account Scheme (CGAS)",
    "Tax Planning on Joint Development (JD) Agreements",
    "Accurate Filing of Income-Tax Returns",
    "Professional Representation during Assessment Proceedings",
];

const nonResidentServices = [
    "FEMA advisory services for property transactions",
    "Assistance in applying for a Lower TDS Certificate from the Income-tax department",
    "Guidance on strategic investment opportunities in India",
    "Precise Computation of Capital Gains for Non-Residents",
    "Filing of Income-tax Returns in compliance with Indian law",
    "Expert Representation during Assessment Proceedings.",
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

const CapitalGainAdvisoryPage = () => {
    const [activeTab, setActiveTab] = useState('residents');

  return (
    <>
      {/* Section 1: Hero */}
      <section
        className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/capital-loss-gain-symbol-male-260nw-1879137478.webp)` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">Capital Gain Advisory</h1>
          <p className="text-xl mt-4 max-w-3xl opacity-90">Maximize Your Returns, Minimize Your Tax Burden.</p>
        </div>
      </section>

      {/* Section 2: About Capital Gain Advisory */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-foreground mb-6">What is Capital Gain Advisory?</h2>
                    <div className="prose lg:prose-lg max-w-none text-muted-foreground space-y-4">
                        <p>Capital Gain Advisory refers to professional financial guidance that helps individuals and businesses manage the tax and investment implications of capital gains—the profit earned when an asset like property, stocks, or gold is sold at a higher price than its purchase cost.</p>
                        <p>It is a specialized field of financial consulting focused on helping you retain more of your profits by avoiding unnecessary taxes and poor timing. Our advisory covers everything from initial tax planning to final compliance, ensuring every transaction is optimized for your benefit.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    {advisoryScopeData.map(item => {
                        const Icon = item.icon;
                        return (
                            <div key={item.title} className="bg-card p-6 rounded-lg shadow-md border">
                                <Icon className="w-8 h-8 text-primary mb-3" />
                                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
      </section>
      
      {/* Section 3: Our Advisory Services (Tabbed) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-foreground mb-6">Our Capital Gain Advisory Services</h2>
                <p className="text-lg text-muted-foreground">We specialize in providing cost-effective Capital Gain Advisory services that cater to the unique requirements of corporates and individuals. Our services cover all aspects of Indian income tax laws and are designed to save you time and money.</p>
            </div>
            <div className="flex justify-center border-b mt-12">
                <button onClick={() => setActiveTab('residents')} className={`px-6 py-3 text-lg font-semibold ${activeTab === 'residents' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}>For Residents</button>
                <button onClick={() => setActiveTab('non-residents')} className={`px-6 py-3 text-lg font-semibold ${activeTab === 'non-residents' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}>For Non-Residents</button>
            </div>
            <div className="mt-8 max-w-4xl mx-auto">
                {activeTab === 'residents' && (
                    <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
                        {residentServices.map(service => (
                            <div key={service} className="bg-card p-4 rounded-lg flex items-start gap-3 border shadow-sm">
                                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-muted-foreground">{service}</span>
                            </div>
                        ))}
                    </div>
                )}
                {activeTab === 'non-residents' && (
                    <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
                        {nonResidentServices.map(service => (
                           <div key={service} className="bg-card p-4 rounded-lg flex items-start gap-3 border shadow-sm">
                                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-muted-foreground">{service}</span>
                            </div>
                        ))}
                    </div>
                )}
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

export default CapitalGainAdvisoryPage;