// src/pages/TransferPricingPage.jsx

import { useState } from "react";
import {
  Shield, Users, TrendingUp, Briefcase, Globe, BarChart, FileText, CheckCircle, Scale, ChevronsRight, Library, Handshake, Gavel, ChevronDown, DollarSign, TrendingDown
} from "lucide-react";
// --- DATA FOR THE PAGE ---

const benefitsData = [
    { icon: DollarSign, title: "Tax Benefits", description: "Offers multiple opportunities for tax optimization, keeping the company's finances in order." },
    { icon: TrendingDown, title: "Lower Tax Rates", description: "Ensures profits for products and services are realized in jurisdictions with lower tax rates." },
    { icon: Globe, title: "Avoid High Tariffs", description: "Facilitates the movement of resources between countries while strategically avoiding high tariffs." },
    { icon: Shield, title: "Minimize Tax Liabilities", description: "Properly structured transfer pricing helps avoid unnecessary tax liabilities and ensures hassle-free transactions." },
];
const penaltiesData = [
    { violation: "Under-reporting total income", section: "270A(7)", penalty: "50% of tax payable on under-reported income." },
    { violation: "Mis-reporting total income", section: "270A(8)", penalty: "200% of tax payable on misreported income." },
    { violation: "Not maintaining proper documents", section: "271AA(1)", penalty: "2% of the transaction value." },
];
const methodologiesData = [
    { title: "Comparable Uncontrolled Price (CUP) Method", content: "This method compares the price charged for property or services transferred in a controlled transaction to the price charged for comparable property or services transferred in a comparable uncontrolled transaction." },
    { title: "Cost Plus Method", content: "This method begins with the costs incurred by the supplier of property or services in a controlled transaction. An appropriate cost-plus mark-up is then added to this cost to make an appropriate profit." },
    { title: "Resale Price Method", content: "This method is based on the price at which a product that has been purchased from a related enterprise is resold to an independent enterprise. The resale price is then reduced by an appropriate gross margin." },
    { title: "Transactional Net Margin Method (TNMM)", content: "This method examines the net profit margin relative to an appropriate base (e.g., costs, sales, assets) that a taxpayer realizes from a controlled transaction." },
];

const documentationData = [
    { icon: Library, title: "Master File", description: "Provides a high-level overview of the group's global business operations, including its organizational structure, intangible assets, financing activities, and overall transfer pricing policies." },
    { icon: FileText, title: "Local File", description: "Offers a detailed description of a local subsidiary's intercompany transactions, including the nature of the transactions, the transfer pricing methodology used, and supporting financial data." },
    { icon: Globe, title: "Country-by-Country (CbC) Report", description: "Gives a high-level overview of the multinational group's income, taxes paid, and economic activity on a global, country-by-country basis to tax authorities." },
];

const complianceData = [
    { title: "Determination of Arm's Length Price", description: "We conduct thorough benchmarking studies to examine and justify the pricing of transactions between related entities, ensuring they are comparable to those between independent parties." },
    { title: "Filing of Transfer Pricing Documentation", description: "We prepare and assist in the timely submission of all required transfer pricing documentation (Master File, Local File) to tax authorities, either annually or as part of a tax audit." },
    { title: "Representation before Tax Authorities", description: "In the event of a tax audit or inquiry, our experts represent your corporation before tax authorities to professionally address and resolve any issues related to your transfer pricing." },
];

const disputeResolutionData = [
    { icon: Handshake, title: "Advance Pricing Agreement (APA)", description: "A formal agreement between a taxpayer and tax authorities that specifies the correct transfer pricing methodology for a set of transactions over a fixed period, providing certainty." },
    { icon: ChevronsRight, title: "Mutual Agreement Procedure (MAP)", description: "A procedure available under tax treaties where taxpayers can request negotiations between the tax authorities of the involved countries to resolve a transfer pricing dispute." },
    { icon: Gavel, title: "Transfer Pricing Litigation", description: "When disputes cannot be resolved through APAs or MAP, we provide robust litigation support to challenge the tax authority's determination in a court or tribunal." },
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

const TransferPricingPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <>
      {/* Section 1: Hero */}
      <section
        className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/Finshots--12455-03.png)` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">Transfer Pricing</h1>
          <p className="text-xl mt-4 max-w-3xl">Navigating Cross-Border Transactions with Compliance and Strategic Insight.</p>
        </div>
      </section>

      {/* Section 2: Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-foreground mb-6">Understanding Transfer Pricing</h2>
                    <div className="prose lg:prose-lg max-w-none text-muted-foreground space-y-4">
                        <p>Transfer pricing is the process of setting the price for goods, services, and intellectual property exchanged between related entities within a multinational enterprise. Its primary goal is to fairly allocate profits among these entities based on their respective contributions, functions, and risks.</p>
                        <p>With tax authorities globally intensifying their scrutiny, transfer pricing has become a complex regulatory environment. Organizations need expert benchmarking studies and litigation support to ensure they comply with diverse international laws, a service crucial for subsidiaries of foreign companies and domestic entities alike.</p>
                    </div>
                </div>
                <div className="relative h-[28rem] w-full rounded-lg overflow-hidden shadow-xl">
                    <img src="/Transfer_Pricing_Global_Cma.png" alt="Global business network connections" className="absolute inset-0 w-full h-full object-cover"/>
                </div>
            </div>
        </div>
      </section>

     

{/* Section 3: A Deep Dive into Transfer Pricing */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 space-y-20">

    {/* Sub-Section: Core Concepts */}
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl font-bold text-foreground mb-6">What is Transfer Pricing?</h2>
        <div className="prose lg:prose-lg max-w-none text-muted-foreground space-y-4">
          <p>As per Section 92E of the Income Tax Act, transfer pricing is the price charged in a transaction between related entities within the same Multi-National Enterprise (MNE) group. Since tax rates vary globally, MNEs can strategically set these prices to minimize the overall tax liability for the group.</p>
          <p>It is mainly used to set prices for goods, services, or intellectual property exchanged between subsidiaries, with the goal of ensuring profits are realized efficiently while remaining compliant with all tax laws.</p>
        </div>
      </div>
      <div className="bg-card p-8 rounded-lg shadow-md border">
        <h3 className="text-2xl font-bold text-foreground mb-4">Purpose & Need</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Allows for fair allocation of profits between different segments of a company.</li>
            <li>Promotes financial transparency and tax compliance.</li>
            <li>Enables businesses to strategically allocate funds and maintain global supply chains.</li>
            <li>Helps companies save on tax liabilities and conduct global operations smoothly.</li>
        </ul>
      </div>
    </div>

    {/* Sub-Section: Benefits */}
    <div>
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Benefits & Importance</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsData.map((item, index) => {
                const Icon = item.icon;
                return <div key={index} className="bg-card p-6 rounded-lg text-center shadow-lg border"><Icon className="w-10 h-10 text-primary mx-auto mb-4" /><h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3><p className="text-muted-foreground text-sm">{item.description}</p></div>
            })}
        </div>
    </div>
    
    {/* Sub-Section: Methodologies & Guidelines (Accordion) */}
    <div>
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Transfer Pricing Methodologies</h2>
          <div className="space-y-4">
            {methodologiesData.map((item, index) => (
              <div key={index} className="border rounded-lg bg-card overflow-hidden shadow-sm">
                <button onClick={() => toggleAccordion(index)} className="w-full flex justify-between items-center p-4 text-left font-semibold text-foreground hover:bg-primary/5">
                  <span>{item.title}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
                  <div className="p-4 border-t text-muted-foreground"><p>{item.content}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Safe Harbour Guidelines</h3>
                <p className="text-muted-foreground">As defined by Indian Income Tax Law, a safe harbour is a provision where the tax authorities will accept the transfer price declared by the taxpayer without further scrutiny. These rules provide certainty and relieve taxpayers from extensive compliance obligations.</p>
            </div>
             <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Domestic vs. International</h3>
                <p className="text-muted-foreground">Domestic transfer pricing applies to transactions between entities in the same country. International transfer pricing extends this to transactions between entities in different countries, helping navigate the complexities of global tax regulations.</p>
            </div>
        </div>
      </div>
    </div>

    {/* Sub-Section: Penalties for Non-Compliance */}
    <div>
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Penalties For Non-Compliance</h2>
        </div>
         <div className="overflow-x-auto bg-card rounded-lg shadow-lg border">
            <table className="w-full text-left">
                <thead className="bg-primary/10">
                    <tr>
                        <th className="p-4 font-semibold text-foreground">Violation</th>
                        <th className="p-4 font-semibold text-foreground">Section</th>
                        <th className="p-4 font-semibold text-foreground">Penalty</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                    {penaltiesData.map((row, index) => (
                        <tr key={index}>
                            <td className="p-4">{row.violation}</td>
                            <td className="p-4 font-mono">{row.section}</td>
                            <td className="p-4 font-semibold text-red-600">{row.penalty}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    
    {/* Sub-Section: Landmark Judgment & Final Note */}
    <div className="max-w-4xl mx-auto text-center">
        <div className="bg-card p-8 rounded-lg shadow-md border-l-4 border-primary">
            <h3 className="text-2xl font-bold text-foreground mb-4">Landmark Judgment: Morgan Stanley (2023)</h3>
            <p className="text-muted-foreground">The Supreme Court passed a judgment stating that transfer pricing is applicable to all transactions between related companies, regardless of whether they are intra-group or inter-group transactions.</p>
             <p className="text-muted-foreground mt-6">
                To learn more about transfer pricing and ensure your business remains compliant, contact the experts at **Pritam Ajit & Company** for necessary guidance.
            </p>
        </div>
    </div>

  </div>
</section>

      {/* Section 4: Transfer Pricing Documentation */}
      <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-12">Mandatory Transfer Pricing Documentation</h2>
              <div className="grid md:grid-cols-3 gap-8">
                  {documentationData.map((item, index) => {
                      const Icon = item.icon;
                      return <div key={index} className="bg-card p-8 rounded-lg shadow-md border"><Icon className="w-10 h-10 text-primary mx-auto mb-4" /><h3 className="text-2xl font-semibold text-foreground mb-2">{item.title}</h3><p className="text-muted-foreground">{item.description}</p></div>
                  })}
              </div>
          </div>
      </section>
      
      {/* Section 5: Transfer Pricing Compliance */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
               <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="relative h-[28rem] w-full rounded-lg overflow-hidden shadow-xl">
                      <img src="/Transfer-Pricing.jpg" alt="Auditor reviewing compliance documents" className="absolute inset-0 w-full h-full object-cover"/>
                  </div>
                   <div>
                       <h2 className="text-4xl font-bold text-foreground mb-8">Our Compliance Services</h2>
                       <div className="space-y-6">
                          {complianceData.map((item, index) => (
                              <div key={index} className="flex items-start gap-4">
                                  <CheckCircle className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" />
                                  <div>
                                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                                      <p className="text-muted-foreground">{item.description}</p>
                                  </div>
                              </div>
                          ))}
                       </div>
                   </div>
              </div>
          </div>
      </section>

      {/* Section 6: Transfer Pricing Dispute Resolution */}
       <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-12">Dispute Resolution Mechanisms</h2>
              <div className="grid md:grid-cols-3 gap-8">
                  {disputeResolutionData.map((item, index) => {
                      const Icon = item.icon;
                      return <div key={index} className="bg-card p-8 rounded-lg shadow-md border"><Icon className="w-10 h-10 text-primary mx-auto mb-4" /><h3 className="text-2xl font-semibold text-foreground mb-2">{item.title}</h3><p className="text-muted-foreground">{item.description}</p></div>
                  })}
              </div>
          </div>
      </section>
      
      {/* Section 7: Why Choose Us */}
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

export default TransferPricingPage; // This line is crucial