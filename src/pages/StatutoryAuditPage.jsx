// src/pages/StatutoryAuditPage.jsx

import {
  Shield, 
  Users, 
  TrendingUp, 
  Briefcase, 
  Building2, 
  Handshake, 
  CheckCircle, 
  Award, 
  BarChart, 
  FileSearch, 
  MessageSquare, 
  ShieldAlert, 
  BookCheck,
  CheckSquare
} from "lucide-react";
// --- DATA FOR THE PAGE ---

const auditProcessData = [
  {
      icon: FileSearch,
      title: "Pre-Engagement & Planning",
      description: "We initiate the process by thoroughly understanding your business operations, industry-specific risks, and regulatory environment. This phase includes defining the audit scope and assembling a dedicated team of experts."
  },
  {
      icon: BarChart,
      title: "Data Gathering & Documentation",
      description: "Our team securely obtains all necessary financial records, including ledgers, bank statements, invoices, and internal control documentation. This comprehensive collection forms the foundation of our analysis."
  },
  {
      icon: BookCheck,
      title: "Audit Procedure Execution",
      description: "We conduct substantive testing and analytical procedures to verify transactions and balances. Our goal is to gather sufficient, appropriate audit evidence to support the accuracy of your financial statements."
  },
  {
      icon: MessageSquare,
      title: "Continuous Communication",
      description: "Throughout the audit, we maintain open and transparent communication with your management and board of directors to discuss emerging findings, address queries, and provide status updates."
  },
  {
      icon: ShieldAlert,
      title: "Risk & Fraud Assessment",
      description: "A critical part of our process involves assessing the risk of material misstatement due to fraud. We implement procedures designed to detect irregularities and ensure compliance with all regulations."
  },
  {
      icon: Award,
      title: "Reporting & Recommendations",
      description: "We conclude by presenting a comprehensive audit observation report. This includes our official opinion, detailed findings, and actionable recommendations for improving internal controls and financial reporting."
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


const StatutoryAuditPage = () => {
    return (
        <>
            {/* Section 1: Hero Image */}
            <section
                className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(images.jpeg)` }} // Assumes image is in /public
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Statutory Audit
                    </h1>
                    <p className="text-xl mt-4 max-w-3xl">
                        Ensuring Financial Integrity and Compliance with Precision.
                    </p>
                </div>
            </section>

            {/* Section 2: Introduction */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose lg:prose-lg max-w-none text-muted-foreground text-center">
                        <p>
                            The Companies Act, 2013, has made it compulsory for all companies to go for statutory audits. This is done to ensure that the financial reports of the companies are in order. A statutory audit is mandated by law to ensure a true and fair view of the book of accounts, assessing whether a company is compliant with applicable laws, rules, and standards.
                        </p>
                        <p className="font-semibold text-foreground">
                            If you are looking to get your statutory audit done by one of the most reliable accounting firms in India, reach out to Pritam Ajit & Company to avail of our expert services.
                        </p>
                        <p>
                            Completed by qualified and independent Chartered Accountants, a statutory audit's purpose is to verify the accuracy of a company's financial position by examining bookkeeping records and financial transactions. Various companies, banks, and NGOs rely on these audits to ensure transparency and accountability.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 3: Statutory Audit Applicability (Text Left, Image Right) */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-foreground mb-8">
                                Statutory Audit Applicability
                            </h2>
                            <div className="space-y-8">
                                <div className="bg-card p-6 rounded-lg shadow-md">
                                    <div className="flex items-center gap-4 mb-3">
                                        <Building2 className="w-8 h-8 text-primary" />
                                        <h3 className="text-2xl font-semibold text-foreground">Companies</h3>
                                    </div>
                                    <p className="text-muted-foreground">
                                        All companies (Private Limited, One Person, Limited, Section 8, etc.), irrespective of the nature of business and sales turnover, must appoint a Statutory Auditor.
                                    </p>
                                </div>
                                <div className="bg-card p-6 rounded-lg shadow-md">
                                     <div className="flex items-center gap-4 mb-3">
                                        <Handshake className="w-8 h-8 text-primary" />
                                        <h3 className="text-2xl font-semibold text-foreground">Limited Liability Partnerships (LLP)</h3>
                                    </div>
                                    <p className="text-muted-foreground">
                                        All LLPs must have their accounts audited if the annual sales turnover exceeds Rs. 40 lakhs or if the capital contribution exceeds Rs. 25 lakhs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[28rem] w-full rounded-lg overflow-hidden shadow-xl">
                            <img src="/Statutory-Audit-banner.jpg" alt="A magnifying glass over financial documents" className="absolute inset-0 w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Objectives and Benefits */}
           


{/* Section 4: Objectives & Benefits */}
<section className="py-20 bg-background">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-foreground mb-16">
      Objectives & Benefits of a Statutory Audit
    </h2>
    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
      
      {/* Column 1: Primary Objectives */}
      <div className="bg-card p-8 rounded-lg shadow-md h-full">
        <div className="flex items-center gap-4 mb-4">
          <CheckCircle className="w-10 h-10 text-primary flex-shrink-0"/>
          <h3 className="text-2xl font-semibold text-foreground">Primary Objectives</h3>
        </div>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start">
            <CheckSquare className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"/>
            <span>**Verify Accuracy:** To determine if the company's financial statements provide a true and fair view of its financial position.</span>
          </li>
          <li className="flex items-start">
            <CheckSquare className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"/>
            <span>**Ensure Compliance:** To confirm that the company is adhering to the provisions of the Companies Act, 2013, and other relevant laws.</span>
          </li>
          <li className="flex items-start">
            <CheckSquare className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"/>
            <span>**Assess Internal Controls:** To evaluate the effectiveness of the company's internal financial control systems.</span>
          </li>
          <li className="flex items-start">
            <CheckSquare className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"/>
            <span>**Independent Reporting:** To provide an unbiased report to shareholders and stakeholders, enhancing confidence and transparency.</span>
          </li>
        </ul>
      </div>

      {/* Column 2: Key Benefits */}
      <div className="bg-card p-8 rounded-lg shadow-md h-full">
        <div className="flex items-center gap-4 mb-4">
          <Award className="w-10 h-10 text-primary flex-shrink-0"/>
          <h3 className="text-2xl font-semibold text-foreground">Key Benefits</h3>
        </div>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start">
            <CheckSquare className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"/>
            <span>**Enhances Credibility:** Builds trust among investors, lenders, and stakeholders by providing an unbiased opinion on financial statements.</span>
          </li>
          <li className="flex items-start">
            <CheckSquare className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"/>
            <span>**Ensures Compliance:** Guarantees that the company is adhering to legal and regulatory requirements, avoiding penalties.</span>
          </li>
          <li className="flex items-start">
            <CheckSquare className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"/>
            <span>**Deters Fraud:** The audit process acts as a deterrent and can help in the early detection of financial irregularities or fraudulent activities.</span>
          </li>
          <li className="flex items-start">
            <CheckSquare className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"/>
            <span>**Improves Internal Controls:** Often highlights weaknesses in a company's internal control systems, leading to operational improvements.</span>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
</section>
            {/* Section 5: Our Complete Statutory Audit Process (Image Left, Text Right) */}
{/* Section 5: Our Complete Statutory Audit Process (Redesigned) */}
<section
  className="relative py-20 text-white bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(/audit-process-bg.jpg)` }} // Assumes image is in /public
>
  <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">
        Our Complete Statutory Audit Process
      </h2>
      <p className="text-lg opacity-90 max-w-3xl mx-auto">
        We follow a systematic and rigorous audit methodology to ensure the highest standards of accuracy, compliance, and insight.
      </p>
    </div>

    {/* Vertical Timeline */}
    <div className="relative max-w-3xl mx-auto">
      {/* The vertical line */}
      <div className="absolute left-6 top-0 h-full w-0.5 bg-white/30"></div>
      
      <div className="space-y-12">
        {auditProcessData.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative flex items-start gap-8">
              {/* Timeline Dot and Icon */}
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-full bg-white text-primary flex items-center justify-center ring-8 ring-primary/50">
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="opacity-90">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>

            {/* Section 6: Why Choose Us */}
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

export default StatutoryAuditPage;