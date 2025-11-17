// src/pages/PublicSectorAuditPage.jsx

import {
  Shield, Users, TrendingUp, Briefcase, Landmark, ShieldCheck, Home
} from "lucide-react";

// --- DATA FOR THE PAGE ---

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

const PublicSectorAuditPage = () => {
    return (
        <>
            {/* Section 1: Hero Image */}
            <section
                className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(/Audit-of-Public-Sector-Entities-Government-Audit-Audit-Firms-for-Public-Sector-Audit-of-MDAs-in-Nigeria-1024x512.jpg)` }} // Assumes image is in /public
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Public Sector Audit
                    </h1>
                    <p className="text-xl mt-4 max-w-3xl">
                        Upholding Accountability and Efficiency in Government Entities.
                    </p>
                </div>
            </section>

            {/* Section 2: Introduction and Services */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-foreground mb-6">
                            Ensuring Public Trust and Financial Integrity
                        </h2>
                        <div className="prose lg:prose-lg max-w-none text-muted-foreground mx-auto">
                            <p>
                                Public sector entities are corporations owned by the government. Given the significant public interest, the scale of these organizations, and the utilization of public funds, auditing plays a pivotal role in maintaining the efficiency and achieving the objectives of the corporation.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16">
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            {/* Banks Card */}
                            <div className="bg-card p-8 rounded-lg shadow-md border">
                                <div className="flex items-center gap-4 mb-4">
                                    <Landmark className="w-8 h-8 text-primary"/>
                                    <h3 className="text-2xl font-semibold text-foreground">Banks</h3>
                                </div>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>Statutory Bank Audit</li>
                                    <li>Stock Audit</li>
                                    <li>Concurrent Audit</li>
                                    <li>Revenue Audit</li>
                                </ul>
                            </div>
                            {/* Insurance Companies Card */}
                             <div className="bg-card p-8 rounded-lg shadow-md border">
                                <div className="flex items-center gap-4 mb-4">
                                    <ShieldCheck className="w-8 h-8 text-primary"/>
                                    <h3 className="text-2xl font-semibold text-foreground">Insurance Companies</h3>
                                </div>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>Statutory Audit</li>
                                    <li>Tax Audit</li>
                                </ul>
                            </div>
                            {/* Local Body Card */}
                             <div className="bg-card p-8 rounded-lg shadow-md border">
                                <div className="flex items-center gap-4 mb-4">
                                    <Home className="w-8 h-8 text-primary"/>
                                    <h3 className="text-2xl font-semibold text-foreground">Local Body</h3>
                                </div>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>Urban and rural local body statutory audit</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

{/* Section 3: Image Gallery */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-foreground">Our Focus in Action</h2>
      <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
        Showcasing our dedication to transparency and financial integrity in various public sector domains.
      </p>
    </div>
    
    {/* Updated to be 2 images per row on most screens */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* Image 1 */}
      <div className="group relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
        <img 
          src="/Public-sector_Fig1a_eng.jpg"
          alt="Image representing bank audit" 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        </div>
      </div>

      {/* Image 2 */}
      <div className="group relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
        <img 
          src="/Screenshot (333).png"
          alt="Image representing insurance company audit" 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        </div>
      </div>

      {/* Image 3 */}
      <div className="group relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
        <img 
          src="/overview-of-public-sector-auditing-in-india-l.jpg"
          alt="Image representing local body audit" 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        </div>
      </div>

      {/* Image 4 */}
      <div className="group relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
        <img 
          src="/different-futures-public-sector-audit.png"
          alt="Image representing general public sector work" 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        </div>
      </div>
      
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

export default PublicSectorAuditPage;