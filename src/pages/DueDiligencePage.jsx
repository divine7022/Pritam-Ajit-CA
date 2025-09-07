import {
  Shield, Users, TrendingUp, Briefcase, Handshake, ShieldCheck, Landmark, Search, Lightbulb, UserCheck, FileText, BarChart, Scale
} from "lucide-react";

// --- DATA FOR THE PAGE ---

const diligenceTypesData = [
    { icon: Handshake, title: "Mergers & Acquisitions", description: "Helps buyers validate information, understand liabilities, and determine a fair valuation, ensuring confidence before proceeding with a purchase." },
    { icon: FileText, title: "Securities Sales", description: "Mandates that sellers research and disclose all material information about securities offered to investors, preventing legal action and ensuring transparency." },
    { icon: Landmark, title: "Initial Public Offerings (IPOs)", description: "Requires the company and its attorneys to prove to the SEC that all declarations made during the filing are true and accurate through rigorous verification." },
    { icon: ShieldCheck, title: "Banking & Financial Services", description: "Financial institutions perform due diligence on potential customers (KYC) to mitigate risks and prevent involvement in illegal activities like money laundering." },
    { icon: Search, title: "Enhanced Due Diligence (EDD)", description: "A deeper level of scrutiny required for high-risk customers or complex business structures to identify and mitigate significant legal or financial risks." },
];

const diligenceRolesData = [
    { perspective: "From the Buyer's Perspective", content: "Due diligence provides buyers with confidence in their investment. Purchasing a company without a thorough investigation significantly increases financial and legal risks, making this process essential for informed decision-making.", icon: UserCheck },
    { perspective: "From the Seller's Perspective", content: "Sellers also benefit greatly. A proper financial examination can reveal that the fair market value of the company is higher than initially thought, ensuring they receive a fair and optimal price for their assets.", icon: Lightbulb }
];

const processStepsData = [
    { number: "01", title: "Planning and Preparation", description: "We begin by defining the scope of the process, establishing clear goals, and assembling a diverse team with expertise in finance, law, and operations to lead the investigation." },
    { number: "02", title: "Information Gathering", description: "The next step is to gather all required information from diverse and reliable sources. The data is continuously assessed to ensure it is accurate and adds value to the procedure." },
    { number: "03", title: "Analysis and Evaluation", description: "Our team members analyze various business operations based on the defined goals. This includes market analysis, supply chain reviews, and financial modeling to understand the complete picture." },
    { number: "04", title: "Reporting and Decision-Making", description: "Finally, we organize and document all findings in a clear, concise, and comprehensive report for stakeholders, empowering decision-makers to proceed with confidence." },
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


const DueDiligencePage = () => {
  return (
    <>
      {/* Section 1: Hero */}
      <section
        className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/due.jpeg)` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">Due Diligence</h1>
          <p className="text-xl mt-4 max-w-3xl opacity-90">In-depth Investigation for Informed Business Decisions.</p>
        </div>
      </section>

      {/* Section 2: Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-foreground mb-6">The Critical Role of Due Diligence</h2>
                    <div className="prose lg:prose-lg max-w-none text-muted-foreground space-y-4">
                        <p>Due diligence is a crucial investigative process in modern business. It involves a thorough examination of every detail of a potential transaction to ensure its legality and financial viability before proceeding. This process is vital in areas like IPOs, security sales, and private equity funding.</p>
                        <p>The primary goal is to ensure that all parties involved can make well-informed decisions, allowing critical business activities to be carried out smoothly and with minimized risk.</p>
                    </div>
                </div>
                <div className="relative h-[28rem] w-full rounded-lg overflow-hidden shadow-xl">
                    <img src="/66b2a4c53a7ebf5ffa46a2c6_6290be7ad98e568b96c616d3_Due-Dilligence.jpeg" alt="Professionals reviewing documents and charts" className="absolute inset-0 w-full h-full object-cover"/>
                </div>
            </div>
        </div>
      </section>
      
      {/* Section 3: Types of Due Diligence */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-foreground mb-4">Types of Due Diligence</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {diligenceTypesData.map(item => {
                      const Icon = item.icon;
                      return <div key={item.title} className="bg-card p-8 rounded-lg shadow-lg border text-left hover:-translate-y-2 transition-transform duration-300"><div className="inline-block bg-primary/10 p-4 rounded-lg mb-4"><Icon className="w-8 h-8 text-primary"/></div><h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3><p className="text-muted-foreground">{item.description}</p></div>
                  })}
              </div>
          </div>
      </section>

      {/* Section 4: Roles of Due Diligence */}
      <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-foreground mb-4">Why Due Diligence Is Important</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">All transactions that undergo a thorough due diligence process have a greater chance of success by improving the quality of information available to decision-makers.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {diligenceRolesData.map(item => {
                      const Icon = item.icon;
                      return <div key={item.perspective} className="bg-card p-8 rounded-lg shadow-xl border text-center"><Icon className="w-12 h-12 text-primary mx-auto mb-4" /><h3 className="text-2xl font-semibold text-foreground mb-3">{item.perspective}</h3><p className="text-muted-foreground">{item.content}</p></div>
                  })}
              </div>
          </div>
      </section>

      {/* Section 5: The Due Diligence Process */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-foreground mb-4">Our Step-by-Step Due Diligence Process</h2>
              </div>
              <div className="relative max-w-4xl mx-auto">
                  <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-300"></div>
                  <div className="space-y-12">
                      {processStepsData.map(step => (
                          <div key={step.number} className="relative flex items-start gap-8">
                              <div className="relative z-10 flex-shrink-0">
                                  <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl ring-8 ring-gray-50">{step.number}</div>
                              </div>
                              <div className="bg-card p-6 rounded-lg shadow-md border flex-1 mt-2">
                                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                                  <p className="text-muted-foreground">{step.description}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

       {/* Section 6: Why Choose Us */}
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

export default DueDiligencePage;