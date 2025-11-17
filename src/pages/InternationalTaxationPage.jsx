// src/pages/InternationalTaxationPage.jsx

import { useState } from "react";
import {
  Shield, Users, TrendingUp, Briefcase, Globe, Banknote, FileText, Landmark, Handshake, BarChart, Search, Building
} from "lucide-react";

// --- DATA FOR THE PAGE ---
const internationalTaxData = [
  {
    id: "usa",
    title: "USA Tax Compliances",
    icon: Landmark,
    content: {
      intro: "Our teams of qualified CPAs, CAs, and tax advisors possess special expertise in navigating the complex tax situations of U.S. citizens in India and Indian citizens working in the U.S. We provide personalized and comprehensive tax planning, compliance, and consulting solutions.",
      nonCorporate: {
        title: "For Individuals (NRI / US Citizens in India)",
        services: [
          "**Income Tax Return Filing:** Expert preparation and filing for individuals.",
          "**Cross-Border Streamlining:** We liaise with your existing U.S. CPA or connect you with one from our network to ensure seamless compliance between both countries, especially with regulations like FATCA.",
          "**Tax Refund Processing:** Assistance in efficiently processing any eligible tax refunds.",
          "**Strategic Tax Planning:** Proactive advice to optimize your tax position across jurisdictions.",
        ]
      },
      corporate: {
        title: "For Corporate Entities",
        services: [
          "**Corporate Tax Returns:** Accurate preparation and filing of corporate tax returns.",
          "**Book/Tax Difference Computation:** Meticulous calculation of differences between financial accounting and tax accounting.",
          "**US GAAP & Regulatory Compliance:** Ensuring your financial reporting is compliant with U.S. regulations.",
          "**Double Taxation Minimization:** Strategic advisory to leverage tax treaties and minimize double taxation.",
          "**Transfer Pricing:** Comprehensive services to ensure your inter-company transactions are compliant with transfer pricing regulations.",
        ]
      }
    }
  },
  {
    id: "singapore",
    title: "Singapore Tax Compliances",
    icon: Building,
    content: {
        intro: "The Singapore Companies Act mandates that Annual Returns must be filed within one month of the AGM to avoid significant penalties. Our tax experts guide you through every step of corporate tax filing to ensure timely compliance.",
        cards: [
            { title: "Corporate Tax Filing", services: ["Filing Estimated Chargeable Income (ECI)", "Arranging installment payments with IRAS", "Preparing and submitting tax computations", "Filing of Form C income tax returns."] },
            { title: "Human Capital Solutions", services: ["Tax planning for inbound and outbound individuals", "Developing tax-efficient remuneration packages", "Advising on equity compensation schemes", "Preparation of individual income tax returns."] },
            { title: "GST Compliance", services: ["GST is an indirect tax similar to VAT. We manage the monthly or quarterly submission of Form GST F5, ensuring it's filed within one month of the end of the prescribed accounting period."] },
            { title: "Withholding Tax Services", services: ["We manage withholding tax compliance for payments made to non-residents on Singapore-generated income, ensuring the correct percentage is withheld and paid to the Income Tax Authorities."] }
        ]
    }
  },
  {
    id: "filing",
    title: "Income Tax Filing (NRI)",
    icon: FileText,
    content: {
        intro: "An NRI is often taxed at source (TDS) on transactions in India. However, the actual tax liability computed as per the Income Tax Act is generally lower. By filing a tax return, an NRI can claim a refund for this excess tax paid, preventing a financial loss.",
        inIndia: { title: "Our Services in India", services: ["Comprehensive review and audit of all necessary documents.", "Preparation of a detailed tax computation report.", "Accurate and timely filing of your income tax returns.", "Assistance with refund processing and other post-filing compliances."] },
        inUsa: { title: "Our Services for the USA", services: ["Streamlining tax procedures between India and the USA.", "Expert assistance with FATCA reporting to ensure compliance."] },
    }
  },
  {
    id: "capitalGains",
    title: "Capital Gains Package",
    icon: BarChart,
    content: {
        intro: "Pritam Ajit & Company offers a complete, one-stop solution for all your capital gains related queries, from initial planning to final compliance.",
        preSale: { title: "Pre-Sale Procedures", services: ["Ensuring correct tax deduction and deposition by the buyer.", "Assistance in obtaining a Lower Tax Deduction Certificate.", "Guidance on FEMA guidelines for the transaction."] },
        postSale: { title: "Post-Sale Procedures", services: ["Accurate computation of Capital Gains.", "Advisory on repatriation of funds and providing CA certification.", "Filing of the income tax return to report the capital gain."] },
    }
  },
  {
    id: "fema",
    title: "FEMA Compliance",
    icon: Globe,
    content: {
        intro: "Individuals and corporates often find it challenging to comply with the various provisions of the Foreign Exchange Management Act (FEMA) within the stipulated time. We provide complete solutions for all these challenges.",
        services: ["Ensuring full compliance with FDI regulations.", "Issuance of statutory certificates required under FEMA.", "Managing compliance for transfer of shares from Indian residents to non-residents.", "Other specialized advisory services related to foreign exchange."]
    }
  },
  {
    id: "bankAccounts",
    title: "Bank Accounts",
    icon: Banknote,
    content: {
        intro: "Choosing and managing the right type of bank account is crucial for non-residents and foreign companies operating in India. We provide expert advisory services to guide you.",
        services: ["Advisory on the nature and type of accounts (NRE, NRO, FCNR).", "Assistance in account opening procedures.", "Guidance on permissible transactions and repatriation rules."]
    }
  },
  {
    id: "taxSaving",
    title: "Tax Saving Options",
    icon: Handshake,
    content: {
        intro: "Strategic investment planning can significantly minimize your tax liability in India. Our team provides expert advice on leveraging various tax-saving instruments.",
        services: ["Evaluating various investment options to minimize taxes on the sale of a capital asset.", "Advising on investment strategies in Indian equities and other financial instruments."]
    }
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

const InternationalTaxationPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Section 1: Hero */}
      <section
        className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/intertax.png)` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">International Taxation</h1>
          <p className="text-xl mt-4 max-w-3xl">Expert Guidance for Your Global Business and Investment Ventures.</p>
        </div>
      </section>

      {/* Section 2: Tabbed Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 border-b">
            {internationalTaxData.map((tab, index) => {
              const Icon = tab.icon; // <-- CORRECTED: Assign icon to capitalized variable
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 px-4 py-3 font-semibold border-b-4 transition-colors duration-300 ${
                    activeTab === index 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-muted-foreground hover:text-primary'
                  }`}
                >
                  <Icon className="w-5 h-5"/> {/* <-- CORRECTED: Render as JSX tag */}
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="max-w-6xl mx-auto">
            {internationalTaxData.map((tab, index) => (
              <div key={tab.id} className={activeTab === index ? 'block animate-fade-in' : 'hidden'}>
                <div className="prose lg:prose-lg max-w-none text-muted-foreground mb-8">
                  <p>{tab.content.intro}</p>
                </div>
                {/* Custom rendering based on tab content structure */}
                {tab.id === 'usa' && (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-card p-6 rounded-lg border"><h3 className="text-xl font-semibold text-foreground mb-4">{tab.content.nonCorporate.title}</h3><ul className="list-disc list-inside space-y-2 text-muted-foreground">{tab.content.nonCorporate.services.map(s => <li key={s}>{s}</li>)}</ul></div>
                    <div className="bg-card p-6 rounded-lg border"><h3 className="text-xl font-semibold text-foreground mb-4">{tab.content.corporate.title}</h3><ul className="list-disc list-inside space-y-2 text-muted-foreground">{tab.content.corporate.services.map(s => <li key={s}>{s}</li>)}</ul></div>
                  </div>
                )}
                {tab.id === 'singapore' && (
                  <div className="grid md:grid-cols-2 gap-8">
                    {tab.content.cards.map(card => <div key={card.title} className="bg-card p-6 rounded-lg border"><h3 className="text-xl font-semibold text-foreground mb-4">{card.title}</h3><ul className="list-disc list-inside space-y-2 text-muted-foreground">{card.services.map(s => <li key={s}>{s}</li>)}</ul></div>)}
                  </div>
                )}
                 {tab.id === 'filing' && (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-card p-6 rounded-lg border"><h3 className="text-xl font-semibold text-foreground mb-4">{tab.content.inIndia.title}</h3><ul className="list-disc list-inside space-y-2 text-muted-foreground">{tab.content.inIndia.services.map(s => <li key={s}>{s}</li>)}</ul></div>
                    <div className="bg-card p-6 rounded-lg border"><h3 className="text-xl font-semibold text-foreground mb-4">{tab.content.inUsa.title}</h3><ul className="list-disc list-inside space-y-2 text-muted-foreground">{tab.content.inUsa.services.map(s => <li key={s}>{s}</li>)}</ul></div>
                  </div>
                )}
                 {tab.id === 'capitalGains' && (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-card p-6 rounded-lg border"><h3 className="text-xl font-semibold text-foreground mb-4">{tab.content.preSale.title}</h3><ul className="list-disc list-inside space-y-2 text-muted-foreground">{tab.content.preSale.services.map(s => <li key={s}>{s}</li>)}</ul></div>
                    <div className="bg-card p-6 rounded-lg border"><h3 className="text-xl font-semibold text-foreground mb-4">{tab.content.postSale.title}</h3><ul className="list-disc list-inside space-y-2 text-muted-foreground">{tab.content.postSale.services.map(s => <li key={s}>{s}</li>)}</ul></div>
                  </div>
                )}
                {(tab.id === 'fema' || tab.id === 'bankAccounts' || tab.id === 'taxSaving') && (
                  <div className="bg-card p-6 rounded-lg border"><ul className="list-disc list-inside space-y-2 text-muted-foreground">{tab.content.services.map(s => <li key={s}>{s}</li>)}</ul></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Pritam Ajit & Company?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">Your success is our business. We provide the expertise and partnership you need to navigate and thrive in the Indian market.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{whyChooseUsData.map((card, index) => {
                const Icon = card.icon;
                return (<div key={index} className="bg-card p-8 rounded-lg shadow-sm border border-transparent hover:border-primary hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"><div className="flex justify-center mb-6"><div className="bg-primary/10 p-4 rounded-full"><Icon className="h-8 w-8 text-primary" /></div></div><h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3><p className="text-muted-foreground">{card.description}</p></div>)
            })}</div>
        </div>
      </section>
    </>
  );
};

export default InternationalTaxationPage;