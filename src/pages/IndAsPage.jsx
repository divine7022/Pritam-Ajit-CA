// src/pages/IndAsPage.jsx

import { useState } from "react";
import {
  Shield, Users, TrendingUp, Briefcase, BookCheck, BarChart, Map, Layers, Globe, ChevronDown
} from "lucide-react";

// --- DATA FOR THE PAGE ---
const majorChangesData = [
  {
    id: "IND AS 40",
    title: "Investment Property",
    content: {
      definition: "Investment property is property (land or a building—or part of a building—or both) held to earn rentals or for capital appreciation or both. This includes properties leased out under operating leases or held vacant for future leasing.",
      examples: [
        "A building owned by the entity and leased out.",
        "A vacant building held to be leased out.",
      ],
      nonExamples: [
        "Owner-occupied property or property held for future owner-occupation.",
        "Property occupied by employees.",
      ],
      dualUse: "For properties with dual use (e.g., some floors rented out, others owner-occupied), IND AS 40 requires accounting for the portions separately if they can be sold separately. If not, the entire property is considered investment property only if the owner-occupied portion is insignificant.",
    }
  },
  {
    id: "IND AS 105",
    title: "Assets Held for Sale & Discontinued Operations",
    content: {
      definition: "This standard applies to non-current assets (or disposal groups) classified as 'held for sale' and operations that are classified as 'discontinued'. A component of an entity is classified as a discontinued operation once it has been disposed of or is classified as held for sale.",
      presentation: "In the statement of profit or loss, a single amount is presented for the total post-tax profit or loss of discontinued operations. A detailed analysis of this amount, including revenue, expenses, and cash flows, must be provided in the notes to the financial statements.",
      valuation: "Assets held for sale must be valued at the lower of their carrying amount and their fair value less costs to sell. Depreciation on such assets ceases once they are classified as held for sale. Associated liabilities must also be disclosed separately on the Balance Sheet.",
    }
  },
  {
    id: "IND AS 32",
    title: "Financial Instruments: Presentation",
    content: {
      definition: "This standard establishes principles for presenting financial instruments as liabilities or equity and for offsetting financial assets and financial liabilities.",
      financialAssets: "A financial asset is any asset that is cash, an equity instrument of another entity, or a contractual right to receive cash or another financial asset.",
      financialLiabilities: "A financial liability is a contractual obligation to deliver cash or another financial asset to another entity.",
    }
  },
  {
    id: "IND AS 109",
    title: "Financial Instruments & Expected Credit Loss",
    content: {
      eclConcept: "A major shift from the previous 'incurred loss' model, IND AS 109 introduces the 'Expected Credit Loss' (ECL) model. This requires entities to account for expected losses on financial assets from the moment the instruments are originated or purchased.",
      eclTable: {
        headers: ["Aging", "Default Rate", "Gross Carrying Amount", "Lifetime ECL"],
        rows: [
          ["Current", "0.3%", "₹ 3,00,00,000", "₹ 90,000"],
          ["1-30 days past due", "1.6%", "₹ 1,50,00,000", "₹ 2,40,000"],
          ["31-60 days past due", "3.6%", "₹ 80,00,000", "₹ 2,88,000"],
          ["61-90 days past due", "6.6%", "₹ 50,00,000", "₹ 3,30,000"],
          ["More than 90 days", "10.6%", "₹ 20,00,000", "₹ 2,12,000"],
        ],
        footer: ["Total", "", "₹ 6,00,00,000", "₹ 11,60,000"]
      },
      preferenceShares: "Preference Share Capital is classified as either equity or a financial liability based on its substance. For example, non-convertible redeemable preference shares are treated as a financial liability, while convertible preference shares are treated as equity.",
      belowMarketRate: "If preference shares are issued with a below-market dividend rate, the instrument is split into two components: a financial liability (at fair value) and an equity component (the remaining difference), which is amortized over the life of the instrument.",
    }
  },
];
const whatWeOfferData = [
  "Preparation of Accounting Policy in compliance with IND AS",
  "Conversion of Opening Balance Sheets",
  "Impact Analysis on implementation of IND AS",
  "Training for employees on IND AS accounting and presentation",
  "Implementation of IND AS in Financial Statements",
  "Preparation of Financials as per IND AS",
  "Advisory and Consultation on specific IND AS standards",
];
const comparisonData = [
    { no: "IND AS-1", igaap: "Presentation requirements are set out in Schedule III of Companies Act 2013. Comparative figures are for one year.", indas: "Does not include an illustrative format. When policies change, a balance sheet for the beginning of the earliest period is required. Presents all income/expense items in a single statement." },
    { no: "IND AS-2", igaap: "Cash Discounts are shown as 'Discount received'. Subsequent revaluations impact inventory directly.", indas: "Trade discounts and rebates are deducted from the cost of purchases. Differences from deferred settlement terms are recognized as interest expense." },
    { no: "IND AS-8", igaap: "Prior Period items are included in the profit or loss of the period when the error was discovered. Does not consider Constructive Obligations.", indas: "Prior Period items are corrected by restating comparative amounts for prior periods. Provisions for constructive obligations must be created." },
    { no: "IND AS-16", igaap: "Spare parts are held as inventories. Components are capitalized only if capacity increases. Dismantling cost is an expense when incurred.", indas: "Major spare parts are recognized as PPE. Components must be treated as separate PPE. Estimated dismantling cost is added to the asset's cost." },
    { no: "IND AS-17", igaap: "Excludes Land Lease.", indas: "Includes Land Lease, treating it similarly to other leasehold items (operating and finance lease)." },
    { no: "IND AS-18", igaap: "Excise Duty is shown as a deduction from revenue.", indas: "Requires inclusion of excise duty in revenue. It is added to the cost of raw material consumed." },
    { no: "IND AS-20", igaap: "Non-monetary grants at concessional rates are accounted for at their acquisition cost. Free assets are recorded at a nominal value.", indas: "Requires valuing non-monetary grants at their fair value for more relevant presentation." },
    { no: "IND AS-24", igaap: "Post-employment benefit plans are not included as related parties.", indas: "Includes post-employment benefit plans as related parties." },
    { no: "IND AS-33", igaap: "No separate disclosure for EPS from continuing and discontinued operations.", indas: "Requires separate disclosure for EPS from both continuing and discontinued operations." },
    { no: "IND AS-37", igaap: "Provisions are not recognized based on constructive obligations. Contingent assets are not recognized or disclosed.", indas: "Provisions for constructive obligations must be recognized. Contingent assets are disclosed when an inflow of economic benefits is probable." },
    { no: "IND AS-38", igaap: "Intangible assets are measured only at cost. Useful life is presumed not to exceed ten years.", indas: "Intangible assets can be measured at cost or revalued amounts. Useful life may be finite or indefinite." },
    { no: "IND AS-40", igaap: "Investment property is measured at cost less impairment.", indas: "Measured using the cost model, but detailed disclosures pertaining to fair value must be given." },
    { no: "IND AS-101", igaap: "N/A (First-time adoption specific).", indas: "Entities can use previous GAAP carrying values as 'deemed cost' on the transition date. Non-Current Assets Held for Sale are measured at the lower of carrying value and fair value less cost to sell." }
];

const ifrsServicesData = [
    "Frame accounting policies",
    "Convergence and first-time adoption of IFRS",
    "Transaction accounting",
    "IFRS impact analysis/study",
    "Training on IFRS concepts",
    "Preparation of IFRS Accounting manual",
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

const IndAsPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
{/* Section 1: Hero Image (No Overlay, Compact Size) */}
<section
  className="relative h-[45vh] text-white bg-cover bg-center bg-no-repeat" /* Reduced height to h-[45vh] */
  style={{ backgroundImage: `url(/logo-a.png)` }} // Your image
>
  {/* The overlay div has been completely removed */}
  
  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg"> {/* Added text-white & drop-shadow-lg for readability */}
      IND AS Advisory & Implementation
    </h1>
    <p className="text-xl mt-4 max-w-3xl opacity-90 text-white drop-shadow-md"> {/* Added text-white & drop-shadow-md for readability */}
      Navigating the transition to Indian Accounting Standards with expert guidance and seamless execution.
    </p>
  </div>
</section>
{/* Section 2: Introduction, Applicability & Offerings */}
<section className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* Column 1: Applicability */}
      <div className="prose lg:prose-lg max-w-none text-muted-foreground">
        <h2 className="text-3xl font-bold text-foreground mb-4">Applicability</h2>
        <p>
          The Ministry of Corporate Affairs has notified the Companies (Indian Accounting Standards) Rules 2015. These rules specify the obligation to comply with Indian Accounting Standards in the following phased manner:
        </p>
        <div className="bg-card border-l-4 border-primary p-4 rounded-r-lg mt-6">
          <p className="font-semibold">
            Applicability will be checked on a Standalone basis. Once applicable to one company it is applicable for its Holding, Subsidiary, Associate company or Joint Venture.
          </p>
        </div>
      </div>

      {/* Column 2: What We Offer */}
      <div className="bg-card p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-foreground mb-6">What We Offer</h2>
        <ul className="space-y-4">
          {whatWeOfferData.map((item, index) => (
            <li key={index} className="flex items-start">
              <BookCheck className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0"/>
              <span className="text-muted-foreground text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

            {/* Section 2: Comparison Table */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-foreground">IND AS vs. IGAAP: Key Comparisons</h2>
                    </div>
                    <div className="overflow-x-auto bg-card rounded-lg shadow-lg">
                        <table className="w-full text-left">
                            <thead className="bg-primary/10">
                                <tr>
                                    <th className="p-4 font-semibold text-foreground">IND AS No.</th>
                                    <th className="p-4 font-semibold text-foreground">IGAAP (Previous Standard)</th>
                                    <th className="p-4 font-semibold text-foreground">IND AS (New Standard)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/50">
                                {comparisonData.map((row, index) => (
                                    <tr key={index} className="hover:bg-primary/5">
                                        <td className="p-4 font-medium">{row.no}</td>
                                        <td className="p-4 text-muted-foreground">{row.igaap}</td>
                                        <td className="p-4 text-muted-foreground">{row.indas}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Section 3: Roadmap & Planning */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-foreground mb-16">Our Transition Roadmap</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-card p-8 rounded-lg shadow-md text-left">
                            <Map className="w-10 h-10 text-primary mb-4"/>
                            <h3 className="text-2xl font-semibold text-foreground mb-3">Planning & Strategy</h3>
                            <p className="text-muted-foreground">Effective planning is crucial for completing tasks in a timely manner and ensuring everything is well-documented for action. It also helps comply with SEBI reporting deadlines.</p>
                        </div>
                         <div className="bg-card p-8 rounded-lg shadow-md text-left">
                            <BarChart className="w-10 h-10 text-primary mb-4"/>
                            <h3 className="text-2xl font-semibold text-foreground mb-3">Impact Analysis</h3>
                            <p className="text-muted-foreground">The next step is to identify the differences between previous standards and IND AS, and thoroughly analyze the impact these changes will have on your company's Financial Statements.</p>
                        </div>
                    </div>
                </div>
            </section>

        

{/* Section 4: Major Changes Under IND AS (Revised Accordion) */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-foreground">Major Changes Under IND AS</h2>
      <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
        The transition to IND AS introduces several key changes that can significantly impact a company's financial statements.
      </p>
    </div>
    <div className="max-w-4xl mx-auto space-y-4">
      {majorChangesData.map((item, index) => (
        <div key={index} className="border rounded-lg bg-card overflow-hidden shadow-sm">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-5 text-left hover:bg-primary/5 transition-colors duration-200"
          >
            <span className="text-xl font-semibold text-primary">{item.id}: <span className="text-foreground">{item.title}</span></span>
            <ChevronDown className={`w-6 h-6 text-primary transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
          </button>
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-[1500px]' : 'max-h-0'}`}>
            <div className="p-6 border-t prose max-w-none text-muted-foreground">
              {/* Custom rendering for each IND AS standard */}
              {item.id === "IND AS 40" && (
                <>
                  <p>{item.content.definition}</p>
                  <div className="grid grid-cols-2 gap-4 my-4">
                    <div>
                        <h4 className="font-semibold text-foreground">Examples of Investment Property:</h4>
                        <ul className="!pl-5">
                            {item.content.examples.map(ex => <li key={ex}>{ex}</li>)}
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-semibold text-foreground">Examples that are NOT Investment Property:</h4>
                        <ul className="!pl-5">
                            {item.content.nonExamples.map(ex => <li key={ex}>{ex}</li>)}
                        </ul>
                    </div>
                  </div>
                   <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                        <h4 className="font-semibold text-foreground">Dual Use Properties:</h4>
                        <p className="!mt-2">{item.content.dualUse}</p>
                   </div>
                </>
              )}

              {item.id === "IND AS 105" && (
                <>
                  <p>{item.content.definition}</p>
                  <h4 className="font-semibold text-foreground mt-4">Presentation:</h4>
                  <p>{item.content.presentation}</p>
                  <h4 className="font-semibold text-foreground mt-4">Valuation:</h4>
                  <p>{item.content.valuation}</p>
                </>
              )}

              {item.id === "IND AS 32" && (
                <>
                  <p>{item.content.definition}</p>
                  <h4 className="font-semibold text-foreground mt-4">Financial Assets:</h4>
                  <p>{item.content.financialAssets}</p>
                  <h4 className="font-semibold text-foreground mt-4">Financial Liabilities:</h4>
                  <p>{item.content.financialLiabilities}</p>
                </>
              )}

              {item.id === "IND AS 109" && (
                <>
                  <p>{item.content.eclConcept}</p>
                  <h4 className="font-semibold text-foreground mt-6 mb-2">Example: Expected Credit Loss Matrix</h4>
                  <div className="overflow-x-auto border rounded-lg">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                {item.content.eclTable.headers.map(header => <th key={header} className="p-3 text-left font-semibold">{header}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {item.content.eclTable.rows.map((row, rIndex) => (
                                <tr key={rIndex} className="border-t">
                                    {row.map((cell, cIndex) => <td key={cIndex} className="p-3">{cell}</td>)}
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="border-t bg-gray-100 font-bold">
                                {item.content.eclTable.footer.map((cell, cIndex) => <td key={cIndex} className="p-3">{cell}</td>)}
                            </tr>
                        </tfoot>
                    </table>
                  </div>
                  <h4 className="font-semibold text-foreground mt-6">Preference Share Capital Classification:</h4>
                  <p>{item.content.preferenceShares}</p>
                  <h4 className="font-semibold text-foreground mt-4">Below-Market Rate Dividends:</h4>
                  <p>{item.content.belowMarketRate}</p>
                </>
              )}

            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
            
            {/* Section 5: IFRS Advisory Services */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                     <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-foreground mb-6">IFRS Advisory Services</h2>
                            <div className="prose lg:prose-lg max-w-none text-muted-foreground space-y-4">
                               <p>International Financial Reporting Standards (IFRS) are becoming the global standard for public company financial statements. Every corporate has to take the necessary steps in understanding the new standards, training its staff, and paving a smooth transition.</p>
                               <p>The cost of convergence depends on time, effort, risk, and industry type.</p>
                            </div>
                        </div>
                        <div className="bg-card p-8 rounded-lg shadow-md">
                             <h3 className="text-2xl font-bold text-foreground mb-6">Our IFRS Services</h3>
                             <ul className="space-y-3">
                                {ifrsServicesData.map((item, index) => (
                                     <li key={index} className="flex items-start">
                                        <Globe className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0"/>
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                             </ul>
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

export default IndAsPage;