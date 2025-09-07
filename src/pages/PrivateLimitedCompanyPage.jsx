import { useState } from "react";
import {
  Shield, Users, TrendingUp, Briefcase, FileText, Banknote, User, CheckCircle, ArrowRight, Star, ArrowLeftRight, UserPlus
} from "lucide-react";

// --- DATA FOR THE PAGE ---

const whyChoosePlcData = [
    { icon: Shield, title: "Limited Liability", description: "Shareholders' personal assets are protected from company debts, minimizing personal financial risk." },
    { icon: TrendingUp, title: "Access to Investment", description: "Easier to raise capital by offering shares to angel investors, venture capitalists, and other funding sources." },
    { icon: Users, title: "Ownership Flexibility", description: "Allows for up to 200 shareholders, providing significant flexibility in structuring ownership and investment." },
    { icon: Star, title: "Enhanced Credibility", description: "A registered Pvt. Ltd. company is viewed more favorably by banks, clients, and potential partners." },
    { icon: ArrowLeftRight, title: "Ease of Transfer", description: "Ownership can be smoothly transferred through the selling of shares, allowing for easy business transitions." },
    { icon: UserPlus, title: "Employee Retention", description: "You can offer Employee Stock Option Plans (ESOPs) to attract, retain, and reward top talent." },
];

const documentsData = {
    identity: ["PAN card of all directors & shareholders", "Aadhaar card of all directors & shareholders"],
    address: ["Passport, driving license, or recent utility bills of directors & shareholders"],
    office: ["Rental agreement or ownership documents (e.g., sale deed)", "No Objection Certificate (NOC) from the property owner"],
    other: ["Latest passport-sized photos of all directors & shareholders", "Drafted Memorandum of Association (MoA) and Articles of Association (AOA)", "Digital Signature Certificate (DSC) for all subscribers"],
};

const incorporationSteps = [
    { title: "Obtain Digital Signature Certificates (DSC)", description: "The first step is to acquire DSCs for all proposed directors and shareholders, which are mandatory for signing documents online." },
    { title: "Apply for Name Reservation (SPICe+ Part A)", description: "File a name reservation application on the MCA portal, proposing one or two unique names that comply with naming guidelines." },
    { title: "Prepare Incorporation Documents", description: "Draft and finalize the critical legal documents: the MoA, AoA, DIR-2 (director's consent), and INC-9 (subscriber's declaration)." },
    { title: "Fill SPICe+ Part B Form", description: "Complete the main incorporation form with details of the company, directors, and share capital. This also includes applications for DIN, PAN, and TAN." },
    { title: "File AGILE-PRO-S Form", description: "This mandatory linked form is used to apply for GSTIN, EPFO, ESIC registration, Professional Tax (if applicable), and to open a company bank account." },
    { title: "Submit Forms on MCA Portal", description: "All forms and linked documents are uploaded to the MCA portal, and the requisite government fees are paid." },
    { title: "Receive Certificate of Incorporation (COI)", description: "Upon approval, the Registrar of Companies (ROC) issues the COI, along with the allotted PAN and TAN. This marks the legal birth of the company." },
    { title: "Post-Incorporation Activities", description: "Crucial final steps include opening the bank account, filing Form INC-20A for commencement of business, holding the first board meeting, and issuing share certificates." },
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

const PrivateLimitedCompanyPage = () => {
    const [activeTab, setActiveTab] = useState('identity');

  return (
    <>
      {/* Section 1: Hero */}
      <section
        className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/what-is-private-limited-d.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">Private Limited Company Registration</h1>
          <p className="text-xl mt-4 max-w-3xl opacity-90">The Premier Choice for Startups and Growing Businesses.</p>
        </div>
      </section>

      {/* Section 2: Introduction & Why Choose */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-foreground mb-6">Understanding Private Limited Companies in India</h2>
                <div className="prose lg:prose-lg max-w-none text-muted-foreground mx-auto space-y-4 text-left">
                    <p>A Private Limited Company (Pvt. Ltd.) is a legally recognized business entity that is distinct from its owners (shareholders). This separation means the company itself, not the individuals, is responsible for its debts and liabilities. In India, registering a Pvt. Ltd. company under the Companies Act, 2013 through the Registrar of Companies (ROC) is mandatory to establish its legal identity.</p>
                    <p>This registration allows a business to enter into contracts, own assets, and secure loans in its own name. Operating an unregistered business is illegal and can lead to severe penalties, an inability to secure funding, and a significant loss of credibility. Registering as a Pvt. Ltd. company provides a robust and structured framework for growth, making it the ideal structure for startups, small businesses, and foreign investors.</p>
                </div>
            </div>
             <div className="mt-16">
                 <h3 className="text-3xl font-bold text-foreground text-center mb-12">Why Choose a Private Limited Company?</h3>
                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                     {whyChoosePlcData.map(item => {
                         const Icon = item.icon;
                         return <div key={item.title} className="bg-card p-8 rounded-lg shadow-lg border text-center hover:-translate-y-2 transition-transform duration-300"><Icon className="w-10 h-10 text-primary mx-auto mb-4" /><h4 className="text-xl font-semibold text-foreground mb-2">{item.title}</h4><p className="text-muted-foreground">{item.description}</p></div>
                     })}
                 </div>
            </div>
        </div>
      </section>
      
      {/* Section 3: Documents Required */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                   <h2 className="text-4xl font-bold text-foreground">Documents Required for Registration</h2>
              </div>
              <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-xl border">
                  <div className="flex flex-wrap justify-center border-b mb-8">
                      <button onClick={() => setActiveTab('identity')} className={`px-4 py-2 font-semibold ${activeTab === 'identity' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}>Identity Proof</button>
                      <button onClick={() => setActiveTab('address')} className={`px-4 py-2 font-semibold ${activeTab === 'address' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}>Address Proof</button>
                      <button onClick={() => setActiveTab('office')} className={`px-4 py-2 font-semibold ${activeTab === 'office' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}>Office Proof</button>
                      <button onClick={() => setActiveTab('other')} className={`px-4 py-2 font-semibold ${activeTab === 'other' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}>Other Documents</button>
                  </div>
                  <div className="min-h-[10rem]">
                      {activeTab === 'identity' && <ul className="list-disc list-inside space-y-2 text-muted-foreground text-lg animate-fade-in">{documentsData.identity.map(doc => <li key={doc}>{doc}</li>)}</ul>}
                      {activeTab === 'address' && <ul className="list-disc list-inside space-y-2 text-muted-foreground text-lg animate-fade-in">{documentsData.address.map(doc => <li key={doc}>{doc}</li>)}</ul>}
                      {activeTab === 'office' && <ul className="list-disc list-inside space-y-2 text-muted-foreground text-lg animate-fade-in">{documentsData.office.map(doc => <li key={doc}>{doc}</li>)}</ul>}
                      {activeTab === 'other' && <ul className="list-disc list-inside space-y-2 text-muted-foreground text-lg animate-fade-in">{documentsData.other.map(doc => <li key={doc}>{doc}</li>)}</ul>}
                  </div>
              </div>
          </div>
      </section>
      
      {/* Section 4: Step-by-Step Incorporation Process */}
      <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-foreground mb-4">Our Step-by-Step Incorporation Process</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">At Pritam Ajit & Company, we guide you through the entire private limited company registration process with a focus on efficiency and simplicity.</p>
              </div>
              <div className="relative max-w-3xl mx-auto">
                  <div className="absolute left-8 top-0 h-full w-1 bg-primary/20 rounded-full"></div>
                  <div className="space-y-12">
                      {incorporationSteps.map((step, index) => (
                          <div key={index} className="relative flex items-start gap-8">
                              <div className="relative z-10 flex-shrink-0">
                                  <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl ring-8 ring-background">{index + 1}</div>
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

      {/* Section 5: Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Pritam Ajit & Company?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">Choosing the right partner for your private company registration can make all the difference. Our skilled and experienced team offers comprehensive, end-to-end solutions tailored to your unique business needs.</p>
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

export default PrivateLimitedCompanyPage;