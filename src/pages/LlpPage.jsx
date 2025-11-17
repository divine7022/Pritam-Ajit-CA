import { useState } from "react";
import {
  Shield, Users, TrendingUp, Briefcase, Handshake, CheckCircle, XCircle, FileText, UserCheck, MapPin, Fingerprint, Banknote, PenSquare, ArrowRight, BookOpen
} from "lucide-react";

// --- DATA FOR THE PAGE ---

const eligibilityCriteria = [
    { icon: Users, title: "Minimum 2 Partners", description: "An LLP cannot be formed by a single individual." },
    { icon: UserCheck, title: "One Resident Partner", description: "At least one designated partner must be a resident of India." },
    { icon: Banknote, title: "Capital Contribution", description: "Partners must contribute capital, but there is no minimum requirement." },
    { icon: MapPin, title: "Registered Office Address", description: "A valid proof of address is required for the LLP's principal place of business." },
    { icon: PenSquare, title: "Unique Company Name", description: "The proposed name must be unique and not similar to existing companies or LLPs." },
    { icon: Fingerprint, title: "Digital Signature (DSC)", description: "A DSC is mandatory for all designated partners to sign documents electronically." },
];

const documentsForPartners = [
    "PAN Card", "Aadhaar Card", "Passport-size Photograph", "Email ID and Contact Number", "Duration of stay at current residence", "Place of Birth & Educational Qualifications", "Occupation Details"
];
const documentsForLlp = [
    "Proof of Registered Office (e.g., Utility Bill, Rent Agreement)", "Consent letters from all designated partners", "Subscription sheet signed by all members", "Draft LLP Agreement (to be filed within 30 days of incorporation)"
];

const idProofData = ["Driving license", "Voter ID", "Passport"];
const addressProofData = ["Bank statement", "Electricity bill", "Telephone bill", "Mobile Bill (not older than two months)"];

const incorporationSteps = [
    { number: "01", title: "Obtain Digital Signature Certificate (DSC)", description: "This is the first step for all designated partners to sign documents electronically for the registration process." },
    { number: "02", title: "Apply for Director Identification Number (DIN)", description: "A unique identification number for each partner, which can be applied for along with the main incorporation form (FiLLiP)." },
    { number: "03", title: "Reserve LLP Name (RUN-LLP)", description: "File the Reserve Unique Name form on the MCA portal, ensuring the name is unique and compliant with naming guidelines." },
    { number: "04", title: "File Form FiLLiP (Incorporation)", description: "This is the main incorporation form, including partner details, registered office address, and business activities." },
    { number: "05", title: "Obtain Incorporation Certificate", description: "Once approved, the Certificate of Incorporation with your unique LLPIN is issued. PAN and TAN are automatically allotted." },
    { number: "06", title: "Draft and File LLP Agreement", description: "This crucial document defining partner roles and profit-sharing must be filed in Form 3 within 30 days of incorporation." },
    { number: "07", title: "Open a Bank Account", description: "Use the incorporation certificate to open a current bank account, into which partners must transfer their capital contribution." },
];

const advantagesData = [
    "Partner’s personal assets are protected from business liabilities.", "There is no upper limit on the number of partners.", "Fewer compliance requirements compared to a Private Limited Company.", "No tax on the distribution of profits to partners.", "Eligible to receive Foreign Direct Investment (FDI)."
];
const disadvantagesData = [
    "Less attractive to investors as there is no clear distinction between partner and manager.", "A higher flat income tax rate of 30% compared to companies.", "Automatic approval for External Commercial Borrowings (ECB) is not available.",
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

const LlpPage = () => {
    const [activeTab, setActiveTab] = useState('partners');

  return (
    <>
      {/* Section 1: Hero */}
      <section
        className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/Limited-Liability-Partnership-LLP-.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">Limited Liability Partnership (LLP)</h1>
          <p className="text-xl mt-4 max-w-3xl opacity-90">The Perfect Hybrid of Flexibility and Protection.</p>
        </div>
      </section>

      {/* Section 2: What is LLP? */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative h-[30rem] w-full rounded-lg overflow-hidden shadow-xl">
                    <img src="/1.webp" alt="Professionals collaborating in a modern office" className="absolute inset-0 w-full h-full object-cover"/>
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-foreground mb-6">What is a Limited Liability Partnership?</h2>
                    <div className="prose lg:prose-lg max-w-none text-muted-foreground space-y-4">
                        <p>A Limited Liability Partnership (LLP) is a modern, hybrid business structure that combines the operational flexibility of a traditional partnership with the significant advantage of limited liability protection, similar to that of a company. Introduced under the LLP Act, 2008, it has become a popular choice for professionals and small to medium-sized enterprises.</p>
                        <p>LLP registration provides partners with protection for their personal assets during financial setbacks and grants the business its own distinct legal identity, boosting credibility with clients and vendors. As per the Act, a statutory audit is mandatory if the annual turnover exceeds ₹40 lakhs or the capital contribution exceeds ₹25 lakhs. The LLP Agreement is a crucial document that outlines partner roles, responsibilities, and profit-sharing, and consulting a professional is advisable for a smooth, compliant registration.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      {/* Section 3: Eligibility Criteria */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-12">Eligibility Criteria for LLP Registration</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {eligibilityCriteria.map(item => {
                      const Icon = item.icon;
                      return <div key={item.title} className="bg-card p-8 rounded-lg shadow-lg border text-left hover:-translate-y-2 transition-transform duration-300 h-full"><div className="inline-block bg-primary/10 p-4 rounded-lg mb-4"><Icon className="w-8 h-8 text-primary"/></div><h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3><p className="text-muted-foreground">{item.description}</p></div>
                  })}
              </div>
          </div>
      </section>

      {/* Section 4 & 5: Documents Required */}
      <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                   <h2 className="text-4xl font-bold text-foreground">Documents for Incorporation of LLP</h2>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className="bg-card p-8 rounded-lg shadow-xl border">
                      <h3 className="text-2xl font-bold text-foreground mb-6">Documentation Checklist</h3>
                      <div className="flex border-b mb-6">
                          <button onClick={() => setActiveTab('partners')} className={`px-4 py-2 font-semibold ${activeTab === 'partners' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}>For Partners</button>
                          <button onClick={() => setActiveTab('llp')} className={`px-4 py-2 font-semibold ${activeTab === 'llp' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}>For the LLP</button>
                      </div>
                      <div>
                          {activeTab === 'partners' && <ul className="list-disc list-inside space-y-2 text-muted-foreground animate-fade-in">{documentsForPartners.map(doc => <li key={doc}>{doc}</li>)}</ul>}
                          {activeTab === 'llp' && <ul className="list-disc list-inside space-y-2 text-muted-foreground animate-fade-in">{documentsForLlp.map(doc => <li key={doc}>{doc}</li>)}</ul>}
                      </div>
                  </div>
                   <div className="space-y-8">
                       <div className="bg-card p-8 rounded-lg shadow-xl border">
                          <h3 className="text-2xl font-bold text-foreground mb-4">Accepted ID Proof</h3>
                          <div className="flex flex-wrap gap-4">{idProofData.map(doc => <div key={doc} className="flex items-center bg-primary/5 p-3 rounded-md"><CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0"/><span>{doc}</span></div>)}</div>
                      </div>
                      <div className="bg-card p-8 rounded-lg shadow-xl border">
                          <h3 className="text-2xl font-bold text-foreground mb-4">Accepted Address Proof</h3>
                          <div className="flex flex-wrap gap-4">{addressProofData.map(doc => <div key={doc} className="flex items-center bg-primary/5 p-3 rounded-md"><CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0"/><span>{doc}</span></div>)}</div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Section 6: LLP Incorporation Process */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-foreground mb-4">Our Step-by-Step Incorporation Process</h2>
              </div>
              <div className="relative max-w-3xl mx-auto">
                  <div className="absolute left-8 top-0 h-full w-1 bg-primary/20 rounded-full"></div>
                  <div className="space-y-12">
                      {incorporationSteps.map(step => (
                          <div key={step.number} className="relative flex items-start gap-8">
                              <div className="relative z-10 flex-shrink-0">
                                  <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl ring-8 ring-gray-50">{step.number}</div>
                              </div>
                              <div className="bg-card p-6 rounded-lg shadow-md border flex-1 mt-2">
                                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                                  <p className="text-muted-foreground">{step.description}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* Section 7: Advantages & Disadvantages */}
       <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                  <div className="bg-card p-8 rounded-lg shadow-lg border">
                      <h3 className="text-3xl font-bold text-green-600 mb-6 text-center">Advantages</h3>
                      <ul className="space-y-4">
                          {advantagesData.map(item => (
                              <li key={item} className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span></li>
                          ))}
                      </ul>
                  </div>
                  <div className="bg-card p-8 rounded-lg shadow-lg border">
                       <h3 className="text-3xl font-bold text-red-600 mb-6 text-center">Disadvantages</h3>
                       <ul className="space-y-4">
                          {disadvantagesData.map(item => (
                              <li key={item} className="flex items-start"><XCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span></li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </section>
      
     {/* Section 6: Why Choose Us */}
      <section className="py-20 bg-background">
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

export default LlpPage;