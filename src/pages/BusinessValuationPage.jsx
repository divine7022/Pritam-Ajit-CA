import { useState } from "react";
import {
  Shield, Users, TrendingUp, Briefcase, BarChart, FileText, Scale, Settings, CheckSquare
} from "lucide-react";

// --- DATA FOR THE PAGE ---

const scopeData = [
    { icon: Shield, title: "Statutory Compliance" },
    { icon: FileText, title: "Financial Reporting" },
    { icon: Scale, title: "Legal & Related Matters" },
    { icon: Settings, title: "Internal Controls" },
];

const approachData = {
    statutory: ["Service Tax", "KVAT", "ROC Filings", "Customs", "Excise", "TDS", "Income Tax", "STPI / SEZ Filings", "ESI/PF Act", "Night Shift Policy Compliance", "Luxury Tax"],
    financial: ["Income statements, balance sheets, cash flows", "Compliance with accounting policies", "Maintenance of statutory registers", "Review of loans & borrowings for defaults", "Analysis of capital structure", "Comparison with previous years & projections", "Review of late tax payments and penalties"],
    legal: ["Pending lawsuits against the company", "Pending lawsuits initiated by the company", "Employee safety issues & liabilities", "Review of material patents, copyrights, licenses & trademarks", "Analysis of HR Policy"],
    internal: ["Review of Organization Chart", "Process mapping for Sales, Purchases, Payments", "Analysis of Authorization Matrix", "Evaluation of Procurement Process"],
};

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

const BusinessValuationPage = () => {
    const [activeTab, setActiveTab] = useState('statutory');

  return (
    <>
      {/* Section 1: Hero */}
      <section
        className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/Business-Valuation-Methods_v2.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">Business Valuation</h1>
          <p className="text-xl mt-4 max-w-3xl opacity-90">Determining the True Economic Value of Your Enterprise.</p>
        </div>
      </section>

      {/* Section 2: Financial Checkup */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-foreground mb-6">A Comprehensive Financial Health Checkup</h2>
                    <div className="prose lg:prose-lg max-w-none text-muted-foreground space-y-4">
                        <p>We provide in-depth financial health check-ups for corporate entities. This is an organized approach to verifying all pertinent facts related to business operations and financial standing.</p>
                        <p>Our approach combines a traditional financial examination of an entity's operating performance and cash flow with a detailed review of its financial position, ensuring a holistic and accurate valuation.</p>
                    </div>
                </div>
                <div className="relative h-[28rem] w-full rounded-lg overflow-hidden shadow-xl">
                    <img src="\bussiness_advisery.png" alt="A team analyzing financial charts and data" className="absolute inset-0 w-full h-full object-cover"/>
                </div>
            </div>
        </div>
      </section>
      
      {/* Section 3: Scope */}
       <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-12">Our Scope of Review</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {scopeData.map(item => {
                      const Icon = item.icon;
                      return <div key={item.title} className="bg-card p-8 rounded-lg shadow-lg border text-center hover:-translate-y-2 transition-transform duration-300"><Icon className="w-10 h-10 text-primary mx-auto mb-4" /><h3 className="text-2xl font-semibold text-foreground">{item.title}</h3></div>
                  })}
              </div>
          </div>
      </section>

      {/* Section 4: Our Approach (Tabbed) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground">Our Detailed Approach</h2>
            </div>
            <div className="flex flex-wrap justify-center border-b mb-12">
                <button onClick={() => setActiveTab('statutory')} className={`px-6 py-3 text-lg font-semibold ${activeTab === 'statutory' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}>Statutory Compliance</button>
                <button onClick={() => setActiveTab('financial')} className={`px-6 py-3 text-lg font-semibold ${activeTab === 'financial' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}>Financial Report</button>
                <button onClick={() => setActiveTab('legal')} className={`px-6 py-3 text-lg font-semibold ${activeTab === 'legal' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}>Legal Matters</button>
                <button onClick={() => setActiveTab('internal')} className={`px-6 py-3 text-lg font-semibold ${activeTab === 'internal' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}>Internal Control</button>
            </div>

            <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-inner border">
                {activeTab === 'statutory' && <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 animate-fade-in">{approachData.statutory.map(item => <div key={item} className="flex items-start"><CheckSquare className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>{item}</span></div>)}</div>}
                {activeTab === 'financial' && <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 animate-fade-in">{approachData.financial.map(item => <div key={item} className="flex items-start"><CheckSquare className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>{item}</span></div>)}</div>}
                {activeTab === 'legal' && <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 animate-fade-in">{approachData.legal.map(item => <div key={item} className="flex items-start"><CheckSquare className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>{item}</span></div>)}</div>}
                {activeTab === 'internal' && <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 animate-fade-in">{approachData.internal.map(item => <div key={item} className="flex items-start"><CheckSquare className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>{item}</span></div>)}</div>}
            </div>
        </div>
      </section>

      {/* Section 5: Why Choose Us */}
      <section className="py-20 bg-gray-50">
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

export default BusinessValuationPage;