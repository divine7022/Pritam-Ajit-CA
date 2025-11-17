import {
  Shield, Users, TrendingUp, Briefcase, Building, Link2, Target,
  FileText, CheckSquare, BarChart2, Calendar, BookOpen, Scaling
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
const setupOptionsData = [
  {
    icon: Building,
    title: "A Branch Office (BO)",
    description: "An extension of the foreign parent company, a BO can carry out the same business activities as its parent. It's ideal for companies looking to conduct full-fledged business operations in India."
  },
  {
    icon: Link2,
    title: "A Liaison Office (LO)",
    description: "Also known as a representative office, an LO acts as a communication channel between the parent company and India. It cannot undertake any commercial activity and is meant for market exploration."
  },
  {
    icon: Target,
    title: "A Project Office (PO)",
    description: "A PO is a temporary setup established to execute a specific project in India, typically one that has been awarded to the foreign parent company. Its existence is tied to the project's duration."
  }
];

const eligibilityData = [
  {
    title: "Branch Office",
    criteria: [
      "Must be a body corporate incorporated outside of India.",
      "A consistent profitability track record for the previous five financial years.",
      "A minimum net worth of not less than USD 100,000.",
      "The branch name must be identical to the parent company.",
      "A Letter of Comfort from the parent company is permissible if the subsidiary doesn't meet the financial criteria.",
    ],
  },
  {
    title: "Liaison Office",
    criteria: [
      "A consistent profit-making history for the past three financial years.",
      "A minimum net worth of at least USD 50,000.",
      "Subsidiaries can submit a Letter of Comfort from a parent company that meets the criteria.",
    ],
  },
  {
    title: "Project Office",
    criteria: [
      "Must have secured a contract from an Indian company to execute a specific project.",
      "The project must be funded by inward remittance or a bilateral/multilateral International Financing Agency.",
      "Approval from the RBI Central Office is required if the above conditions are not met.",
    ],
  },
];

const processStepsData = [
  "Application to the RBI through an AD Category-I Bank.",
  "Submission of Form FNC and required documents.",
  "Obtaining a Unique Identification Number (UIN) from the RBI.",
  "Registration with the Registrar of Companies (ROC).",
  "Registration for PAN, TAN, and other necessary tax accounts.",
];

const taxImplicationsData = [
  "Income below INR 10 million for a branch office is subject to a 41.60% tax rate.",
  "Income between INR 10 million and INR 100 million is taxed at 42.43%.",
  "If the income exceeds INR 100 million, the applicable tax rate is 43.68%.",
  "Transfer Pricing regulations under the Income Tax Act apply to transactions between the branch and its overseas head office.",
];
const documentsData = [
  "Official approval from the company's board of directors.",
  "Certified proof of incorporation for the parent company.",
  "A cover letter detailing the purpose and activities of the proposed branch office.",
  "A formal application submitted to the Reserve Bank of India (RBI).",
  "Memorandum of Association (MoA) and Articles of Association (AoA) of the parent company.",
  "Details of the company's history, nature of business, and key stakeholders.",
  "Complete names and details of the company's directors and shareholders.",
  "A declaration from directors confirming full compliance with all legal requirements.",
];
const annualCompliancesData = [
  {
    icon: BookOpen,
    title: "Initial Registrations",
    description: "Obtaining essential registrations like PAN, IEC, GST, and professional tax numbers for all office types."
  },
  {
    icon: FileText,
    title: "Annual Filings",
    description: "Includes filing income-tax returns, the Annual Activity Certificate (AAC) with the RBI, and audited accounts with the Registrar of Companies (ROC)."
  },
  {
    icon: Scaling,
    title: "Tax Audit",
    description: "A mandatory tax audit is required under the Income Tax Act if the office's turnover exceeds the prescribed threshold."
  },
  {
    icon: Calendar,
    title: "Monthly & Quarterly Filings",
    description: "Regular compliance for withholding tax (TDS) and Goods and Service Tax (GST) must be filed within specified timeframes."
  }
];

const BranchOfficePage = () => {
  return (
    <>
      {/* Section 1: Introduction with Background Image */}
      <section
        className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat" // Reduced height
        style={{ backgroundImage: `url(/coins-financial-growth-chart-blue-background-finance-investment-concepts-coins-financial-growth-chart-blue-344575282.webp)` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Branch, Liaison & Project Offices
          </h1>
          <p className="text-xl mt-4 max-w-3xl">
            Flexible Structures for Your Strategic Entry into the Indian Market.
          </p>
        </div>
      </section>

      {/* Section 2: Setup Options (Text Left, Image Right) */}
      <section className="py-16 bg-background"> {/* Reduced padding */}
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center"> {/* Reduced gap */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Setup Options in India
              </h2>
              <div className="space-y-6"> {/* Reduced space */}
                {setupOptionsData.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <div key={index} className="flex items-start gap-6">
                      <div className="bg-primary/10 p-4 rounded-lg flex-shrink-0">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{option.title}</h3>
                        <p className="text-muted-foreground mt-1">{option.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative h-[28rem] w-full rounded-lg overflow-hidden shadow-xl"> {/* Reduced height */}
              <img src="/1723989356_dedbef367259b16926db.jpg" alt="Strategic business planning" className="absolute inset-0 w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Eligibility (Horizontal Cards) */}
      <section className="py-16 bg-gray-50"> {/* Reduced padding */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-12"> {/* Reduced margin */}
            Eligibility for Opening an Office in India
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {eligibilityData.map((item, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-md text-left">
                <h3 className="text-2xl font-semibold text-primary mb-4">{item.title}</h3>
                <ul className="space-y-3">
                  {item.criteria.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckSquare className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"/>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Step-by-Step Process (Image Left, Text Right) */}
      <section className="py-16 bg-background"> {/* Reduced padding */}
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center"> {/* Reduced gap */}
            <div className="relative h-[28rem] w-full rounded-lg overflow-hidden shadow-xl lg:order-first"> {/* Reduced height */}
              <img src="/istockphoto-1511226415-612x612.jpg" alt="Step-by-step process flowchart" className="absolute inset-0 w-full h-full object-cover"/>
            </div>
            <div className="lg:order-last">
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Step-by-Step Setup Process
              </h2>
              <ul className="space-y-4 text-lg">
                {processStepsData.map((step, index) => (
                  <li key={index} className="flex items-center p-4 bg-card rounded-lg shadow-sm">
                    <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">{index + 1}</div>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Tax Implications (Text Left, Image Right) */}
      <section className="py-16 bg-gray-50"> {/* Reduced padding */}
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center"> {/* Reduced gap */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Tax Implications
              </h2>
              <ul className="space-y-3 text-lg">
                {taxImplicationsData.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <BarChart2 className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0"/>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[28rem] w-full rounded-lg overflow-hidden shadow-xl"> {/* Reduced height */}
              <img src="/shutterstock-2143146961-2024-07-f9809dfa5cb460660593ef7442592e0e-scaled.avif" alt="Graphs and charts representing financial data" className="absolute inset-0 w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 6: Documents Required (Image Left, Text Right) */}
      <section className="py-16 bg-background"> {/* Reduced padding */}
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center"> {/* Reduced gap */}
            <div className="relative h-[28rem] w-full rounded-lg overflow-hidden shadow-xl lg:order-first"> {/* Reduced height */}
              <img src="/5cf95e25fa948ebc12dd5487_blogpic.jpg" alt="Stack of organized documents" className="absolute inset-0 w-full h-full object-cover"/>
            </div>
            <div className="lg:order-last">
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Documents Required
              </h2>
              <ul className="space-y-3 text-lg">
                {documentsData.map((doc, index) => (
                   <li key={index} className="flex items-start">
                    <FileText className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0"/>
                    <span className="text-muted-foreground">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Annual Compliances (Text Left, Image Right) */}
      <section className="py-16 bg-gray-50"> {/* Reduced padding */}
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center"> {/* Reduced gap */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Annual Compliances
              </h2>
              <div className="space-y-6">
                {annualCompliancesData.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="w-7 h-7 text-primary"/>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative h-[28rem] w-full rounded-lg overflow-hidden shadow-xl"> {/* Reduced height */}
              <img src="/shutterstock_1171280545-1.jpg" alt="Calendar and checklist representing compliance" className="absolute inset-0 w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Why Choose Us */}
      <section className="py-16 bg-background"> {/* Reduced padding */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Choose Pritam Ajit & Company?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12"> {/* Reduced margin */}
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

export default BranchOfficePage;