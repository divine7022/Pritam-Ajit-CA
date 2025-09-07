import { useState } from "react";
import {
  Shield, Users, TrendingUp, Briefcase, FilePlus, FileText, CheckSquare, Gavel, Building2
} from "lucide-react";

// --- DATA FOR THE PAGE ---

const advisoryServices = {
  setup: [
    "Preparation of proposal documentation (Form A for SEZ developer)",
    "Preparation of documentation for setting up units (Form F, project report)",
    "Application for Import Export Code (IEC) Number",
    "Obtaining Letter of Permission (LOP) and handling renewals",
  ],
  operations: [
    "Obtaining permissions for movement and transfer of capital goods",
    "Securing permission for disposal of waste and scrap",
    "Application for approval of enhancement in production capacity",
    "Permission for change in location or additional locations",
    "Assistance in obtaining tax exemption certifications (Form A1-A4)",
    "Assistance in claiming refunds for entry tax, sales tax, and VAT",
    "Assistance in obtaining exemption on stamp duty and registration charges",
  ],
  exit: [
    "Guidance and execution of complete exit procedures for an SEZ Unit",
    "Execution of Bond-cum-Legal Undertaking (BLUT) and other formalities",
  ],
};

const complianceServices = {
  filings: [
    "Filing of returns (half-yearly and annual) with SEZ/Central Excise and Service Tax /Commercial Tax Authorities",
    "Filing of SEZ Monthly Reports",
    "Filing of SEZ Performance Reports",
    "Filing of QPRs & APRs",
    "Filing of Softex forms",
    "Renewal of Units Regularization Contract",
    "Renewal of BLUT",
  ],
  advisory: [
    "Structuring of contracts/transactions to optimize indirect tax incidence",
    "Formulating indirect tax efficient business models",
    "Conducting VAT impact assessment studies",
    "Undertaking comprehensive reviews of business operations",
    "Advice on classification, valuation, applicability of taxes on transactions and admissibility to tax benefits/exemptions",
    "Identification of innovative tax planning opportunities",
    "Single point contact and centralized coordination for tax payments, compilation of documents",
  ],
};

const appealsServices = [
    { icon: FileText, title: "Drafting Appeals and Submissions", description: "Our legal and tax experts meticulously draft all necessary appeals and submissions with robust arguments to represent your case effectively." },
    { icon: Users, title: "Appearances & Arguments", description: "We represent your organization and argue your case before adjudication and appellate authorities, ensuring your position is clearly and professionally presented." },
    { icon: Gavel, title: "Government Representation", description: "On a need basis, we brief Senior Counsel and provide strong representation for your case before all relevant Government authorities." },
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

const SezServicesPage = () => {
    const [activeTab, setActiveTab] = useState('advisory');

  return (
    <>
      {/* Section 1: Hero */}
      <section
        className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/SEZ-24-4-2024.jpg)` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">SEZ Services</h1>
          <p className="text-xl mt-4 max-w-3xl">Comprehensive Support for Your Special Economic Zone Ventures.</p>
        </div>
      </section>

      {/* Section 2 & 3: Combined Tabbed Section */}
      <section className="py-20 bg-background">
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
                        <h3 className="text-xl font-semibold text-foreground mb-4">Exit & Formalities</h3>
                        <ul className="space-y-3 list-disc list-inside text-muted-foreground">{advisoryServices.exit.map(s => <li key={s}>{s}</li>)}</ul>
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

      {/* Section 4: Appeals & Submissions */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-12">Appeals & Submissions</h2>
              <div className="grid md:grid-cols-3 gap-8">
                  {appealsServices.map(item => {
                      const Icon = item.icon;
                      return <div key={item.title} className="bg-card p-8 rounded-lg shadow-lg border text-center hover:-translate-y-2 transition-transform duration-300"><Icon className="w-10 h-10 text-primary mx-auto mb-4" /><h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3><p className="text-muted-foreground">{item.description}</p></div>
                  })}
              </div>
          </div>
      </section>

      {/* Section 5: Why Choose Us */}
      <section className="py-20 bg-background">
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

export default SezServicesPage;
