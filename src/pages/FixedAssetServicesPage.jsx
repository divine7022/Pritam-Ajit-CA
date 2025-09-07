import {
  Shield, Users, TrendingUp, Briefcase, ScanLine, FileText, Settings, BarChart, CheckSquare, Scale
} from "lucide-react";

// --- DATA FOR THE PAGE ---

const offeredServicesData = [
    { icon: ScanLine, title: "Physical Verification", description: "Conducting physical verification of all fixed assets using electronic devices for accuracy and efficiency." },
    { icon: Settings, title: "Asset Classification & Coding", description: "Proper classification and allotment of unique codes for each fixed asset based on location, user, category, cost center, etc." },
    { icon: FileText, title: "Fixed Asset Register (FAR) Maintenance", description: "Meticulous accounting and maintenance of the FAR separately under the Companies Act (CARO) and the Income-tax Act." },
    { icon: TrendingUp, title: "Depreciation Statements", description: "Accurate preparation of depreciation statements as per the differing requirements of the Companies Act and the Income-tax Act." },
    { icon: Briefcase, title: "Capital WIP Management", description: "Proper allocation and capitalization of expenses for any Capital Work in Progress (CWIP)." },
    { icon: BarChart, title: "Customized Reporting", description: "Generation of insightful reports on fixed assets, including AMC/Insurance/Warranty expiry reports and write-off/adjustment reports for obsolete assets." },
];

const auditReasonsData = [
    { title: "Evaluate Internal Controls", content: "To assess the strength and effectiveness of the company's internal control systems for acquiring, managing, and disposing of fixed assets." },
    { title: "Ensure Accountability", content: "To verify the physical existence of assets and hold departments or individuals accountable for the assets under their custody." },
    { title: "Verify Financial Accuracy", content: "To confirm the accuracy of account balances, validate transactions, and test asset valuation and classification as per accounting standards." },
    { title: "Confirm Regulatory Compliance", content: "To ensure that all fixed assets are documented and accounted for properly as per Accounting Standards (AS 1, 5, 6, 10) and other applicable laws." },
];

const scopeData = [
    { icon: Shield, title: "Statutory Compliance" },
    { icon: FileText, title: "Financial Reporting" },
    { icon: Scale, title: "Legal & Related Matters" },
    { icon: Settings, title: "Internal Controls" },
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

const FixedAssetServicesPage = () => {
  return (
    <>
      {/* Section 1: Hero */}
      <section
        className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/fixed-asset-management-1.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">Fixed Asset Services</h1>
          <p className="text-xl mt-4 max-w-3xl opacity-90">Precision, Management, and Compliance for Your Tangible Assets.</p>
        </div>
      </section>

      {/* Section 2: Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-foreground mb-6">Automating and Optimizing Fixed Asset Accounting</h2>
                    <div className="prose lg:prose-lg max-w-none text-muted-foreground space-y-4">
                        <p>Fixed asset accounting is one of the most human and document-intensive processes within any finance department. The management and reconciliation of a fixed asset database is resource-heavy and requires a thorough understanding of asset records from acquisition to disposal.</p>
                        <p>Automating this process helps organizations significantly reduce costs and accelerate their accounting and reporting cycles. By outsourcing fixed asset accounting to Pritam Ajit & Company, you ensure your asset records and inventory are handled professionally, including the proper implementation of tracking methods like barcoding, for complete accuracy and control.</p>
                    </div>
                </div>
                <div className="relative h-[28rem] w-full rounded-lg overflow-hidden shadow-xl bg-card p-4">
                    <img src="/What-is-a-Commercial-Establishment.png" alt="A professional using a scanner to track assets in a warehouse" className="w-full h-full object-contain"/>
                </div>
            </div>
        </div>
      </section>
      
      {/* Section 3: We Offer End-to-End Solutions */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold text-foreground mb-6">Our End-to-End Solutions</h2>
                  <p className="text-lg text-muted-foreground">We offer a complete suite of services to satisfy all your fixed asset accounting needs, ensuring compliance and operational efficiency.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                  {offeredServicesData.map(item => {
                      const Icon = item.icon;
                      return (
                          <div key={item.title} className="bg-card p-8 rounded-lg shadow-lg border text-left hover:-translate-y-2 transition-transform duration-300 h-full">
                              <div className="inline-block bg-primary/10 p-4 rounded-lg mb-4">
                                  <Icon className="w-8 h-8 text-primary"/>
                              </div>
                              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                              <p className="text-muted-foreground">{item.description}</p>
                          </div>
                      );
                  })}
              </div>
          </div>
      </section>

      {/* Section 4: Reason for Fixed Asset Audit */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why is a Fixed Asset Audit Necessary?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">A periodic fixed asset audit is not just a compliance requirement but a critical business practice for financial accuracy and operational control.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {auditReasonsData.map(reason => (
              <div key={reason.title} className="bg-card p-6 rounded-lg shadow-md border">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <CheckSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{reason.title}</h3>
                </div>
                <p className="text-muted-foreground mt-4 pl-14">{reason.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose Us */}
      <section className="py-20 bg-gray-50">
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

export default FixedAssetServicesPage;

