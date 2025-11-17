// src/pages/InternalAuditPage.jsx

import {
  Shield, Users, TrendingUp, Briefcase, Building, ClipboardCheck, DollarSign, UserCheck, Search, Database, AlertTriangle
} from "lucide-react";

// --- DATA FOR THE PAGE ---

const auditObjectivesData = [
    {
        icon: DollarSign,
        title: "Revenue & Income Leakage Audit",
    },
    {
        icon: Shield,
        title: "Compliance & Regulatory Audit",
    },
    {
        icon: Users,
        title: "Payroll & HR Audit",
    },
    {
        icon: ClipboardCheck,
        title: "Reimbursement & Expense Audit",
    },
    {
        icon: Search,
        title: "Procurement & Vendor Audit",
    },
    {
        icon: Database,
        title: "Systems & EDP Audit",
    },
];
const howItsConductedData = [
  {
    title: "Planning and Scoping",
    description: "Our internal auditors identify areas for review, assess risks, and define the audit's scope. This involves understanding your relevant policies, procedures, and regulations."
  },
  {
    title: "Information Gathering",
    description: "We gather evidence through various methods like personnel interviews, document reviews, process observation, and control testing to assess adherence and identify potential weaknesses."
  },
  {
    title: "Analysis and Evaluation",
    description: "The gathered evidence is analyzed to determine if controls are effective, risks are managed, and objectives are met. We identify non-conformances, gaps, and opportunities for improvement."
  },
  {
    title: "Reporting and Follow-up",
    description: "A comprehensive report is prepared summarizing our findings, conclusions, and recommendations. This is presented to management, who then monitor the implementation of corrective actions."
  }
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

const InternalAuditPage = () => {
    return (
        <>
            {/* Section 1: Hero Image */}
            <section
                className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(/AdobeStock_508110367.jpg)` }} // Assumes image is in /public
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Internal Audit
                    </h1>
                    <p className="text-xl mt-4 max-w-3xl">
                        Strengthening Governance, Risk Management, and Internal Controls.
                    </p>
                </div>
            </section>

            {/* Section 2: What is Internal Audit? */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center">
                         <h2 className="text-4xl font-bold text-foreground mb-6">
                            What is Internal Audit?
                        </h2>
                    </div>
                    <div className="prose lg:prose-lg max-w-none text-muted-foreground text-left space-y-6">
                        <p>
                           Internal audit serves as a crucial quality checker for an organization. It systematically evaluates a company’s internal controls, including its corporate governance and accounting processes, to ensure everything is functioning as intended. It helps an organization achieve its objectives by identifying opportunities to improve how it manages risks, maintains controls, and governs itself.
                        </p>
                        <p>
                           According to the Companies Act 2013, it is mandatory for certain companies to appoint an internal auditor. This role can be filled by a chartered accountant, a cost accountant, or another professional selected by the company's board, tasked with reviewing the company's functions and activities.
                        </p>
                         <div className="bg-card p-6 rounded-lg shadow-sm border-l-4 border-primary">
                            <h3 className="text-xl font-semibold text-foreground">Why is it Mandatory?</h3>
                            <p className="mt-2">
                               An internal audit is conducted to verify that a company has followed all applicable rules and laws. The auditor then issues a report detailing the level of compliance and any material deviations, providing a clear and independent assessment for the board and stakeholders.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Companies Covered Under Internal Audit (Text Left, Image Right) */}
            <section className="py-10 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="bg-card p-8 rounded-lg shadow-md border">
  <h2 className="text-4xl font-bold text-foreground mb-8">
    Internal Audit Applicability
  </h2>
  <p className="text-lg text-muted-foreground mb-6">
    As per Rule 13 of the Companies (Accounts) Rules, 2014, the following types of companies are mandated to engage an internal auditor:
  </p>
  <ul className="space-y-4 text-muted-foreground text-lg">
    <li className="flex items-start"><UserCheck className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />All registered listed companies.</li>
    <li className="flex items-start"><UserCheck className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />Unlisted public companies with a turnover of ₹200 crore or more.</li>
    <li className="flex items-start"><UserCheck className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />Unlisted public companies with paid-up share capital of ₹50 crore or more.</li>
    <li className="flex items-start"><UserCheck className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />Unlisted public companies with outstanding deposits of ₹25 crore or more.</li>
    <li className="flex items-start"><UserCheck className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />Unlisted public companies with outstanding loans from banks exceeding ₹100 crore.</li>
    <li className="flex items-start"><UserCheck className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />Private companies with a turnover of ₹200 crore or more.</li>
    <li className="flex items-start"><UserCheck className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />Private companies with outstanding loans from banks exceeding ₹100 crore.</li>
  </ul>
</div>
                        <div className="relative h-[30rem] w-full rounded-lg overflow-hidden shadow-xl">
                            <img src="/shutterstock_286363154.jpg" alt="Corporate buildings representing different types of companies" className="absolute inset-0 w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: The Objectives of Internal Audit */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-foreground mb-16">
                        Objectives of Internal Audit
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {auditObjectivesData.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:-translate-y-2 transition-transform duration-300">
                                    <div className="inline-block bg-primary/10 p-4 rounded-lg mb-4">
                                        <Icon className="w-8 h-8 text-primary"/>
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
{/* Section: How an Internal Audit is Conducted (Compact Version) */}
<section className="py-16 bg-background">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-foreground mb-4">
        How an Internal Audit is Conducted
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Our process is systematic and thorough, designed to provide maximum insight while ensuring operational continuity.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {howItsConductedData.map((step, index) => (
        <div key={index} className="bg-card p-6 rounded-lg shadow-sm border border-border/20">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
          </div>
          <p className="text-muted-foreground mt-4 ml-16">{step.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
            {/* Section 5: Penal Provisions (Image Left, Text Right) */}
            <section
  className="relative py-20 text-white bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(/penal-provisions-bg.jpg)` }} // Assumes image is in /public folder
>
  <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">
        Penal Provisions for Non-Compliance
      </h2>
      <p className="text-lg opacity-90 max-w-3xl mx-auto">
        According to Section 450 of the Companies Act, 2013, failure to comply with internal audit provisions attracts significant penalties for both the company and its officers in default.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Initial Penalty Card */}
      <div className="bg-white/10 border border-white/20 rounded-lg p-8 text-center backdrop-blur-md">
        <div className="flex justify-center mb-4">
            <AlertTriangle className="w-10 h-10 text-yellow-400" />
        </div>
        <h3 className="text-2xl font-semibold mb-3">Initial Penalty</h3>
        <p className="opacity-90">
            Any company and its officers found in violation of the internal audit requirement will be subject to an initial penalty of **₹10,000**.
        </p>
      </div>

      {/* Continuing Non-Compliance Card */}
      <div className="bg-white/10 border border-white/20 rounded-lg p-8 text-center backdrop-blur-md">
         <div className="flex justify-center mb-4">
            <AlertTriangle className="w-10 h-10 text-yellow-400" />
        </div>
        <h3 className="text-2xl font-semibold mb-3">Continuing Non-Compliance</h3>
        <p className="opacity-90">
            If the violation continues, an additional fine of **₹1,000 per day** is imposed, up to a maximum of **₹2 lakh** for the company and **₹50,000** for the officer in default.
        </p>
      </div>
    </div>
    
    <div className="text-center mt-12">
        <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Ensuring compliance is crucial. If your company is in search of a chartered accountant in Bangalore, exploring Pritam Ajit & Co. is a wise choice to avoid these penalties.
        </p>
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

export default InternalAuditPage;