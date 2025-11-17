// src/pages/TaxAuditPage.jsx

import { useState } from "react";
import {
  Shield,
  Users,
  TrendingUp,
  Briefcase,
  Landmark,
  Check,
  X,
  BookCopy,
  Layers,
  GanttChartSquare,
  AlertOctagon,
  Scaling,
  Goal,
  SearchCheck,
  ShieldCheck,
  ChevronDown,
  Calendar, // <-- This was the missing icon
} from "lucide-react";

// --- DATA FOR THE PAGE ---
const purposeOfAuditData = [
  {
    icon: Goal,
    title: "Verify Accuracy & Fairness",
    description: "To ensure that the financial statements and the taxpayer's income computation are accurate, complete, and present a 'true and fair' view of their financial position."
  },
  {
    icon: Shield,
    title: "Ensure Legal Compliance",
    description: "To independently verify that the taxpayer is adhering to all the complex provisions of the Income Tax Act, thereby preventing potential legal issues and penalties."
  },
  {
    icon: BookCopy,
    title: "Standardized Reporting",
    description: "To report required information to the tax authorities in a standardized format (Forms 3CA/3CB & 3CD), which simplifies the assessment process for the Income Tax Department."
  }
];
const applicabilityData = [
  {
    title: "For Businesses (General Rules)",
    content: "A tax audit is mandatory for any business whose total sales, turnover, or gross receipts exceed ₹1 crore in the financial year. This is the baseline requirement for most business entities not covered under specific schemes."
  },
  {
    title: "Increased Threshold for Digital Transactions",
    content: "To promote digital payments, the turnover threshold for a tax audit is increased from ₹1 crore to ₹10 crore if the business meets two conditions: (1) its total cash receipts are 5% or less of all receipts, and (2) its total cash payments are 5% or less of all payments."
  },
  {
    title: "Under Presumptive Taxation Scheme (Sec. 44AD)",
    content: "If a business opts for the presumptive taxation scheme, an audit is required if its turnover exceeds the revised limit of ₹3 crore. Additionally, an audit is mandatory if the business claims its profits are lower than the deemed profit rate (6% or 8% of turnover) and its total income exceeds the basic exemption limit."
  },
  {
    title: "For Professionals (Sec. 44ADA)",
    content: "Professionals (like doctors, lawyers, engineers, etc.) must undergo a tax audit if their gross receipts exceed ₹50 lakh. Under the presumptive scheme for professionals, this limit is revised to ₹75 lakh, provided that 95% of receipts are from non-cash modes."
  },
  {
    title: "In Case of Business Losses",
    content: "If a business incurs a loss but its turnover exceeds the ₹1 crore threshold (and it has not opted for the presumptive scheme), a tax audit is necessary to be able to carry forward that loss to future years."
  },
];

const changesData = [
    { icon: Landmark, title: "Increased Threshold for Trusts", description: "The threshold limit for tax audits for Section 11 Trusts has been increased from ₹5 crores to ₹10 crores for entities with less than 5% cash transactions." },
    { icon: AlertOctagon, title: "Increased Penalty", description: "The penalty for non-compliance with tax audit rules has been increased from 0.5% to 0.75% of the turnover or gross receipts." },
    { icon: Calendar, title: "Extended Due Date", description: "The due date for filing tax audit reports has been extended, generally to 31st October of the assessment year." },
    { icon: BookCopy, title: "Enhanced Reporting", description: "The tax audit report now requires additional disclosures, including details of international transactions and outstanding tax demands and refunds." },
];

const consequencesData = [
    { title: "Prosecution", description: "Failure to comply can result in legal action, including fines, penalties, and in some cases, imprisonment." },
    { title: "Increased Scrutiny", description: "Non-compliance can lead to increased attention from tax authorities, resulting in more frequent future audits and investigations." },
    { title: "Reputation Damage", description: "Tax audit non-compliance can damage a taxpayer's reputation and credibility with tax authorities and the public." },
    { title: "Interest on Unpaid Taxes", description: "If an audit reveals unpaid taxes, interest will be imposed, adding to the financial burden." },
];

const penaltyTypesData = [
    { title: "Late Filing Penalty", description: "Applied for filing tax returns after the due date, with the amount varying based on the delay." },
    { title: "Late Payment Penalty", description: "A penalty for not paying the tax owed by the due date, usually a percentage of the unpaid tax." },
    { title: "Fraud Penalty", description: "A significant penalty (up to 75% of underpaid tax) for intentionally failing to report income or claiming false deductions." },
    { title: "Criminal Penalties", description: "In severe cases, non-compliance can lead to criminal charges, including substantial fines and imprisonment." },
];

const objectivesData = [
    { icon: Check, title: "Verification of Tax Returns", description: "To verify the accuracy and completeness of tax returns, ensuring they comply with tax laws and preventing legal consequences." },
    { icon: SearchCheck, title: "Identification of Discrepancies", description: "To identify and rectify any discrepancies or inconsistencies in a taxpayer's financial statements or tax returns." },
    { icon: ShieldCheck, title: "Detection of Tax Evasion", description: "Aimed at detecting any attempts by a taxpayer to evade or avoid paying taxes through examination of business operations and transactions." },
    { icon: Scaling, title: "Improvement of Internal Controls", description: "To help identify weaknesses in a taxpayer's internal controls and accounting systems, ensuring future compliance." },
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
const TaxAuditPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAccordion = (index) => setActiveIndex(activeIndex === index ? null : index);

    return (
        <>
            {/* Section 1: Hero */}
            <section
                className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(/tax-audit.webp)` }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">Tax Audit Services</h1>
                    <p className="text-xl mt-4 max-w-3xl">Ensuring Accuracy, Compliance, and Peace of Mind under the Income Tax Act, 1961.</p>
                </div>
            </section>

            {/* Section 2: Introduction */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-4xl font-bold text-foreground mb-6">Understanding Tax Audit (u/s 44AB)</h2>
                    <div className="prose lg:prose-lg max-w-none text-muted-foreground mx-auto text-left space-y-4">
                        <p>A tax audit is the careful analysis of an individual or business's financial records to ensure compliance with tax laws. As India follows a self-assessment method, a tax audit is a crucial mechanism for the Income Tax Department to verify that the income declared in returns is accurate and lawful through an independent agency.</p>
                        <p>The purpose is to confirm that the tax returns are accurate, complete, and that the taxpayer has paid the appropriate amount of tax owed. It is mandatory for certain entities based on turnover, gross receipts, or specific conditions under the Income Tax Act, 1961.</p>
                    </div>
                </div>
            </section>

            {/* Section 3: Purpose of a Tax Audit */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative h-[28rem] w-full rounded-lg overflow-hidden shadow-xl">
        <img 
          src="/Tax-Audit-Meaning-and-benefits.jpg" 
          alt="An auditor carefully reviewing financial documents with a magnifying glass" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-foreground mb-8">
          Purpose of a Tax Audit
        </h2>
        <div className="space-y-6">
          {purposeOfAuditData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg mt-1">
                    <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
</section>


            {/* Section 8: Objectives of Tax Audit */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-foreground mb-12">Core Objectives of a Tax Audit</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {objectivesData.map((item, index) => {
                            const Icon = item.icon;
                            return <div key={index} className="bg-card p-6 rounded-lg shadow-md"><Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        })}
                    </div>
                </div>
            </section>
            {/* Section 4: Eligibility */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-foreground mb-12">Tax Audit Eligibility Criteria</h2>
                    <div className="bg-card p-8 rounded-lg shadow-lg border max-w-5xl mx-auto">
                        <h3 className="text-2xl font-bold text-foreground mb-6">Revised Presumptive Taxation Limits (FY 2023-24)</h3>
                         <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-primary/10">
                                    <tr>
                                        <th className="p-4 font-semibold">Category</th><th className="p-4 font-semibold">Previous Limit</th><th className="p-4 font-semibold">Revised Limit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t">
                                        <td className="p-4">Sec 44AD: For Small Businesses</td><td className="p-4">₹2 crore</td><td className="p-4">₹3 crore*</td>
                                    </tr>
                                    <tr className="border-t">
                                        <td className="p-4">Sec 44ADA: For Professionals</td><td className="p-4">₹50 lakh</td><td className="p-4">₹75 lakh*</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4 text-left">*The increased limit applies only if 95% of receipts are through non-cash modes.</p>
                        <div className="text-left mt-6 prose max-w-none text-muted-foreground">
                            <p>For other businesses, the threshold is **₹1 crore**. This limit is increased to **₹10 crore** if the aggregate of all cash receipts and payments does not exceed 5% of the total.</p>
                        </div>
                    </div>
                </div>
            </section>

            
{/* Section 5: Applicability of Tax Audit (Accordion) */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-foreground">
        Applicability of Tax Audit under the Income Tax Act, 1961
      </h2>
      <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
        The requirement for a tax audit depends on specific criteria related to turnover, gross receipts, and the taxation scheme chosen.
      </p>
    </div>
    <div className="max-w-4xl mx-auto space-y-4">
      {applicabilityData.map((item, index) => (
        <div key={index} className="border rounded-lg bg-card overflow-hidden shadow-sm">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-5 text-left font-semibold text-foreground hover:bg-primary/5 transition-colors duration-200"
          >
            <span className="text-xl">{item.title}</span>
            <ChevronDown className={`w-6 h-6 text-primary transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
          </button>
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
            <div className="p-5 border-t prose max-w-none text-muted-foreground">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

            {/* Section 6: Changes in Tax Audit Rules */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-foreground mb-12">Recent Changes in Tax Audit Rules</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {changesData.map((item, index) => {
                            const Icon = item.icon;
                            return <div key={index} className="bg-card p-6 rounded-lg shadow-md"><Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        })}
                    </div>
                </div>
            </section>
            
            {/* Section 7: Penalty for Non-Compliance */}
            <section className="py-20 bg-red-50 border-y-2 border-red-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <AlertOctagon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                        <h2 className="text-4xl font-bold text-red-800">Penalties for Non-Compliance</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-red-700 mb-4">Consequences</h3>
                            <div className="space-y-3">{consequencesData.map(item => <div key={item.title} className="p-4 bg-white rounded-lg shadow-sm"><strong>{item.title}:</strong> {item.description}</div>)}</div>
                        </div>
                        <div>
                             <h3 className="text-2xl font-semibold text-red-700 mb-4">Types of Penalties</h3>
                            <div className="space-y-3">{penaltyTypesData.map(item => <div key={item.title} className="p-4 bg-white rounded-lg shadow-sm"><strong>{item.title}:</strong> {item.description}</div>)}</div>
                        </div>
                    </div>
                </div>
            </section>

         
            {/* Section 9: Why Choose Us */}
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

export default TaxAuditPage;