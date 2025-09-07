import { useState } from "react";
import {
  Shield, Users, TrendingUp, Briefcase, FilePlus, FileText, CheckSquare, Gavel, Building2
} from "lucide-react";

// --- DATA FOR THE PAGE ---

const advisoryServices = {
  setup: [
    "Registering a Business as an STPI Unit",
    "Registering a Business as a Non-STPI Unit under the STPI Scheme",
    "Application for Import Export Code (IEC) Number",
    "Obtaining Letter of Permission (LOP) and handling renewals",
  ],
  operations: [
    "Registration of Agreements & Contracts",
    "Obtaining permissions for movement and transfer of capital goods",
    "Securing permission for disposal of waste and scrap",
    "Application for approval of enhancement in production capacity",
    "Permission for change in location or additional locations",
    "Assistance in obtaining requisite certification for service tax exemption",
  ],
  exitAndAppeals: [
    "Assistance in Exit procedures for an STPI Unit",
    "Execution of Bond-cum-Legal Undertaking (BLUT) & other formalities",
    "Drafting appeals and submissions",
    "Appearances and arguments before adjudication authorities",
    "Representation before relevant Government authorities",
  ],
};

const complianceServices = {
  filings: [
    "Filing of returns (half-yearly and annual) with STPI Authorities",
    "Filing of Softex Forms for IT/ITES units",
    "Filing of Quarterly Performance Reports (QPRs)",
    "Filing of Annual Performance Reports (APRs)",
  ],
  advisory: [
    "Structuring of contracts/transactions to optimize indirect tax incidence",
    "Formulating indirect tax efficient business models",
    "Advice on classification, valuation, and applicability of taxes",
    "Centralized coordination for tax payments and document compilation",
    "Renewal of Units Regularization Contract & BLUT",
  ],
};

const annualChargesData = [
    { turnover: "Up to Rs. 12.50 Lakhs", charges: "₹ 4,000" },
    { turnover: "12.50 lakhs to 25 lakhs", charges: "₹ 8,000" },
    { turnover: "25 lakhs to 50 lakhs", charges: "₹ 16,000" },
    { turnover: "50 lakhs to 3 crores", charges: "₹ 55,000" },
    { turnover: "3 crores to 10 crores", charges: "₹ 1,10,000" },
    { turnover: "10 crores to 25 crores", charges: "₹ 2,25,000" },
    { turnover: "25 crores to 50 crores", charges: "₹ 2,50,000" },
    { turnover: "50 crores to 100 crores", charges: "₹ 3,50,000" },
    { turnover: "100 crores to 500 crores", charges: "₹ 5,75,000" },
    { turnover: "500 crores to 1000 crores", charges: "₹ 6,00,000" },
    { turnover: "Above 1000 crores", charges: "₹ 6,50,000" },
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

const StpiNonStpiPage = () => {
    const [activeTab, setActiveTab] = useState('advisory');

  return (
    <>
      {/* Section 1: Hero */}
      <section
        className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/stpi.jpg)` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">STPI / Non-STPI Services</h1>
          <p className="text-xl mt-4 max-w-3xl">Expert Guidance for Software Technology Parks of India Compliance.</p>
        </div>
      </section>

      {/* New Section: Introduction & Images */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-xl">
              <img src="/STPI_Preview.png" alt="Modern STPI office park" className="w-full h-full object-cover"/>
            </div>
            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-xl">
               <img src="/non-spti.jpeg" alt="Corporate office in a city" className="w-full h-full object-cover"/>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-2xl font-bold text-foreground mb-4">What is an STPI Unit?</h3>
              <p className="text-muted-foreground">A Software Technology Park of India (STPI) unit is a 100% export-oriented unit (EOU) established for the development and export of computer software and IT-enabled services. These units operate within designated zones and enjoy various benefits, including tax exemptions and simplified regulatory procedures, to promote software exports from India.</p>
            </div>
            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-2xl font-bold text-foreground mb-4">What is a Non-STPI Unit?</h3>
              <p className="text-muted-foreground">A Non-STPI unit is an IT/ITES company that operates from the Domestic Tariff Area (DTA) but registers under the STPI scheme. This is primarily done to avail specific benefits, most notably for the filing of Softex forms for export revenue. While they don't get the full tax benefits of a physical STPI unit, they can still streamline their export compliance and procedures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 & 4: Combined Tabbed Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="flex justify-center border-b mb-12">
                <button onClick={() => setActiveTab('advisory')} className={`px-6 py-3 text-lg font-semibold ${activeTab === 'advisory' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}>Advisory / Regulatory Support</button>
                <button onClick={() => setActiveTab('compliance')} className={`px-6 py-3 text-lg font-semibold ${activeTab === 'compliance' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}>Compliance Support</button>
            </div>

            {/* Advisory Tab Content */}
            <div className={activeTab === 'advisory' ? 'block animate-fade-in' : 'hidden'}>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-card p-6 rounded-lg border shadow-sm">
                        <h3 className="text-xl font-semibold text-foreground mb-4">Setup & Approvals</h3>
                        <ul className="space-y-3 list-disc list-inside text-muted-foreground">{advisoryServices.setup.map(s => <li key={s}>{s}</li>)}</ul>
                    </div>
                    <div className="bg-card p-6 rounded-lg border shadow-sm">
                        <h3 className="text-xl font-semibold text-foreground mb-4">Operational Support</h3>
                        <ul className="space-y-3 list-disc list-inside text-muted-foreground">{advisoryServices.operations.map(s => <li key={s}>{s}</li>)}</ul>
                    </div>
                    <div className="bg-card p-6 rounded-lg border shadow-sm">
                        <h3 className="text-xl font-semibold text-foreground mb-4">Exit & Appeals</h3>
                        <ul className="space-y-3 list-disc list-inside text-muted-foreground">{advisoryServices.exitAndAppeals.map(s => <li key={s}>{s}</li>)}</ul>
                    </div>
                </div>
            </div>

            {/* Compliance Tab Content */}
            <div className={activeTab === 'compliance' ? 'block animate-fade-in' : 'hidden'}>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-card p-6 rounded-lg border shadow-sm">
                        <h3 className="text-xl font-semibold text-foreground mb-4">Filings & Renewals</h3>
                        <ul className="space-y-3 list-disc list-inside text-muted-foreground">{complianceServices.filings.map(s => <li key={s}>{s}</li>)}</ul>
                    </div>
                    <div className="bg-card p-6 rounded-lg border shadow-sm">
                        <h3 className="text-xl font-semibold text-foreground mb-4">Advisory & Structuring</h3>
                        <ul className="space-y-3 list-disc list-inside text-muted-foreground">{complianceServices.advisory.map(s => <li key={s}>{s}</li>)}</ul>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Section 5: Annual Service Charge Slab */}
      <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-12">Annual Service Charge Slab</h2>
              <div className="overflow-x-auto bg-card rounded-lg shadow-lg border max-w-4xl mx-auto">
                  <table className="w-full text-left">
                      <thead className="bg-primary/10">
                          <tr>
                              <th className="p-4 font-semibold text-foreground text-lg">Export Turnover for the year (INR)</th>
                              <th className="p-4 font-semibold text-foreground text-lg text-right">Annual Service Charges (INR)</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-border/50 text-muted-foreground">
                          {annualChargesData.map((row) => (
                              <tr key={row.turnover}>
                                  <td className="p-4">{row.turnover}</td>
                                  <td className="p-4 text-right font-medium">{row.charges}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          </div>
      </section>

      {/* Section 6: Why Choose Us */}
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

export default StpiNonStpiPage;
