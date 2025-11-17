// src/pages/GstRegistrationPage.jsx

import { useState } from "react";
import {
  Shield, Users, TrendingUp, Briefcase, FileText, Banknote, User, Landmark, ChevronDown, CheckCircle, Wallet, BarChart, Ship, Star, Award, Lock
} from "lucide-react";

// --- DATA FOR THE PAGE ---

const gstSectionsData = [
    { icon: Landmark, title: "Section 22: Mandatory Registration", content: "Defines the turnover thresholds that trigger mandatory GST registration." },
    { icon: Shield, title: "Section 23: Persons Not Liable", content: "Outlines specific categories of persons and types of supply exempt from GST registration." },
    { icon: Users, title: "Section 24: Compulsory Registration", content: "Specifies businesses, like e-commerce aggregators, that must register for GST regardless of turnover." },
];

const documentsData = {
    individual: ["Owner’s PAN card", "Owner’s Aadhaar card", "Owner’s Photograph", "Bank account details", "Address Proof"],
    llp: ["PAN Card of the LLP", "LLP Agreement", "Partners' Names and Address Proof", "Bank Account Details", "Proof of Principal Place of Business"],
    company: ["PAN Card of the Company", "Certificate of Incorporation", "Memorandum & Articles of Association", "Identity and Address proof of Directors", "Bank Account Details"],
};

const addressProofData = [
    "Aadhaar card / Passport / Voter ID", "Utility Bills (Electricity, Water)", "Property Tax Receipt", "Rent Agreement with NOC", "Bank Statement or Passbook"
];

const eligibilityData = [
    { value: "₹40 Lakhs", description: "For suppliers of goods.", },
    { value: "₹20 Lakhs", description: "For service providers & e-commerce.", },
    { value: "₹10 Lakhs", description: "For businesses in North-Eastern & Hill States.", },
];

const whyGstData = [
    { icon: Wallet, title: "Less Monetary Pressure", description: "GST subsumed many indirect taxes like VAT, resulting in more savings for businesses." },
    { icon: TrendingUp, title: "Cost Benefits for SMEs", description: "Businesses under the Composition Scheme can pay a flat, lower rate of tax." },
    { icon: Briefcase, title: "Easier Loan Application", description: "A valid GSTIN enhances credibility, making it easier to acquire business loans." },
    { icon: Star, title: "Greater Market Credibility", description: "GST registration legitimizes your business, building trust with customers and partners." },
    { icon: Ship, title: "Simplified Interstate Trade", description: "Removes entry taxes and streamlines logistics, making national expansion easier." },
    { icon: Award, title: "Input Tax Credit (ITC)", description: "Claim credit for GST paid on inputs, reducing the final tax burden and preventing cascading taxes." },
];

const registrationTypesData = [
    { title: "Normal Taxpayer", content: "For most regular businesses. No initial deposit is required, and there is no expiry date for the registration." },
    { title: "Composition Taxpayer", content: "For businesses under the GST Composition Scheme. They pay a flat tax rate but cannot claim input tax credit." },
    { title: "Casual Taxable Person", content: "For seasonal or temporary businesses (e.g., event stalls). Registration is valid for 3 months and requires an advance tax deposit." },
    { title: "Non-Resident Taxable Person", content: "For foreign businesses offering products/services in India. The process is similar to the 'Casual' category, with registration valid for 3 months." },
];

const registrationProcessData = [
    {
        title: "Log in and Fill Form",
        description: "Business owners must log in to the official GST portal (www.gst.gov.in) and fill out a form with their personal, business, and bank account details, including the nature of services/goods (SAC/HSN codes)."
    },
    {
        title: "Submit Required Documents",
        description: "Upload all necessary documents, such as personal ID proof (Aadhaar, voter ID), business address proof (rent agreement, registry), income proof (PAN, bank statement), and business registration certificates."
    },
    {
        title: "Aadhaar Authentication",
        description: "The applicant can complete Aadhaar authentication online during the registration. Successful authentication typically waives the need for a physical verification of the business premises by GST authorities."
    },
    {
        title: "Verification & GSTIN Allotment",
        description: "Following the successful verification of the application and all submitted documents by the authorities, the unique Goods and Services Taxpayer Identification Number (GSTIN) is allotted."
    }
];

const relatedTopicsData = [
    { 
        title: "GST E-Invoicing", 
        content: "E-invoicing is a system where B2B invoices are electronically authenticated by GSTN for further use on the common GST portal. It helps in standardizing the format and ensures real-time reporting of invoices." 
    },
    { 
        title: "SOP Extension", 
        content: "Standard Operating Procedure (SOP) extensions are sometimes provided by the GST council to extend deadlines or clarify procedures for taxpayers, ensuring smoother compliance during transitional periods." 
    },
    { 
        title: "Changes in GST Registration", 
        content: "The GST registration process is periodically updated. Recent changes often include mandatory Aadhaar authentication and more stringent verification processes to curb fraudulent registrations." 
    },
    { 
        title: "Aadhaar Authentication for GST", 
        content: "Aadhaar authentication is now a mandatory step for new GST registrations to verify the identity of the applicant, making the process more secure and typically faster." 
    },
    { 
        title: "GST on Real Estate Sector", 
        content: "Specific GST rates and rules apply to the real estate sector, covering under-construction and ready-to-move-in properties, with different implications for input tax credit (ITC)." 
    },
    { 
        title: "GST E-invoice with QR code", 
        content: "Mandatory for specified taxpayers, the e-invoice includes a digitally signed QR code containing key invoice details, which allows for quick verification by tax officers and customers." 
    },
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

const GstRegistrationPage = () => {
  const [activeTab, setActiveTab] = useState('individual');
  const [activeRegistrationIndex, setActiveRegistrationIndex] = useState(null);
  const [activeTopicIndex, setActiveTopicIndex] = useState(null);

  const toggleRegistrationAccordion = (index) => setActiveRegistrationIndex(activeRegistrationIndex === index ? null : index);
  const toggleTopicAccordion = (index) => setActiveTopicIndex(activeTopicIndex === index ? null : index);

  return (
    <>
      {/* Section 1: Hero */}
      <section
        className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/gst-changes-165144217-16x9_0.webp)` }}
      >
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">GST Registration</h1>
          <p className="text-xl mt-4 max-w-3xl opacity-90 drop-shadow-md">Seamless GST Compliance for Your Business Growth.</p>
        </div>
      </section>

      {/* Section 2: What is GST Registration? */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-foreground mb-6">What Is GST Registration?</h2>
                <div className="prose lg:prose-lg max-w-none text-muted-foreground mx-auto space-y-4">
                    <p>Under the Goods and Services Tax (GST) Act, any business with an annual turnover exceeding the prescribed threshold limit must register as a normal taxable person. This process is a crucial step for businesses to become compliant with India's indirect tax laws, allowing them to legally collect GST from customers and claim credit for taxes paid on their inputs.</p>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
                {gstSectionsData.map(item => {
                    const Icon = item.icon;
                    return <div key={item.title} className="bg-card p-8 rounded-lg shadow-lg border text-center hover:-translate-y-2 transition-transform duration-300"><Icon className="w-10 h-10 text-primary mx-auto mb-4" /><h3 className="text-xl font-semibold text-foreground">{item.title}</h3><p className="text-muted-foreground mt-2">{item.content}</p></div>
                })}
            </div>
        </div>
      </section>

      {/* Section 3: Documents Required */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                   <h2 className="text-4xl font-bold text-foreground">Documents Required for Registration</h2>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className="bg-card p-8 rounded-lg shadow-xl border">
                      <h3 className="text-2xl font-bold text-foreground mb-6">By Entity Type</h3>
                      <div className="flex border-b mb-6">
                          <button onClick={() => setActiveTab('individual')} className={`px-4 py-2 font-semibold ${activeTab === 'individual' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}>Sole Proprietor</button>
                          <button onClick={() => setActiveTab('llp')} className={`px-4 py-2 font-semibold ${activeTab === 'llp' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}>LLP/Partnership</button>
                          <button onClick={() => setActiveTab('company')} className={`px-4 py-2 font-semibold ${activeTab === 'company' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}>Company</button>
                      </div>
                      <div>
                          {activeTab === 'individual' && <ul className="list-disc list-inside space-y-2 text-muted-foreground animate-fade-in">{documentsData.individual.map(doc => <li key={doc}>{doc}</li>)}</ul>}
                          {activeTab === 'llp' && <ul className="list-disc list-inside space-y-2 text-muted-foreground animate-fade-in">{documentsData.llp.map(doc => <li key={doc}>{doc}</li>)}</ul>}
                          {activeTab === 'company' && <ul className="list-disc list-inside space-y-2 text-muted-foreground animate-fade-in">{documentsData.company.map(doc => <li key={doc}>{doc}</li>)}</ul>}
                      </div>
                  </div>
                   <div className="bg-card p-8 rounded-lg shadow-xl border">
                      <h3 className="text-2xl font-bold text-foreground mb-6">Valid Address Proof</h3>
                      <p className="text-muted-foreground mb-4">Any one of the following can be submitted as proof of the principal place of business:</p>
                      <div className="grid grid-cols-2 gap-4">
                        {addressProofData.map(doc => <div key={doc} className="flex items-center bg-primary/5 p-3 rounded-md"><CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0"/><span>{doc}</span></div>)}
                      </div>
                  </div>
              </div>
          </div>
      </section>
      
      {/* Section 4: GST Registration Process */}
      <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-foreground mb-4">
                      The Online GST Registration Process
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      We guide you through each step of the online application to ensure a smooth and successful registration.
                  </p>
              </div>
              <div className="relative max-w-3xl mx-auto">
                  <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-300"></div>
                  <div className="space-y-12">
                      {registrationProcessData.map((step, index) => (
                          <div key={index} className="relative flex items-start gap-8">
                              <div className="relative z-10">
                                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl ring-8 ring-background">
                                      {index + 1}
                                  </div>
                              </div>
                              <div className="bg-card p-6 rounded-lg shadow-md border flex-1">
                                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                                  <p className="text-muted-foreground">{step.description}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* Section 5: Eligibility Criteria */}
      <section className="py-20 bg-gradient-to-br from-primary to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
               <h2 className="text-4xl font-bold mb-12 drop-shadow-lg">GST Registration Eligibility Thresholds</h2>
               <div className="grid md:grid-cols-3 gap-8">
                  {eligibilityData.map(item => (
                      <div key={item.value} className="bg-white/10 p-8 rounded-lg shadow-lg border border-white/20 backdrop-blur-md">
                          <p className="opacity-80">Annual Turnover Exceeding</p>
                          <p className="text-5xl font-bold my-2">{item.value}</p>
                          <p className="opacity-80">{item.description}</p>
                      </div>
                  ))}
               </div>
          </div>
      </section>

      {/* Section 6: Why GST? (Benefits) */}
      <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-foreground">Why GST is Beneficial for Your Business</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {whyGstData.map(item => {
                      const Icon = item.icon;
                      return <div key={item.title} className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                           <div className="inline-block bg-primary/10 p-4 rounded-lg mb-4"><Icon className="w-8 h-8 text-primary"/></div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                      </div>
                  })}
              </div>
          </div>
      </section>

      {/* Section 7 & 8: Types & Related Topics */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16">
              <div>
                  <h2 className="text-4xl font-bold text-foreground mb-8">Types of GST Registration</h2>
                  <div className="space-y-4">
                      {registrationTypesData.map((item, index) => (
                          <div key={item.title} className="border rounded-lg bg-card overflow-hidden shadow-sm">
                              <button onClick={() => toggleRegistrationAccordion(index)} className="w-full flex justify-between items-center p-5 text-left font-semibold text-foreground hover:bg-primary/5">
                                  <span className="text-xl">{item.title}</span>
                                  <ChevronDown className={`w-6 h-6 text-primary transition-transform duration-300 ${activeRegistrationIndex === index ? 'rotate-180' : ''}`} />
                              </button>
                              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeRegistrationIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
                                  <div className="p-5 border-t text-muted-foreground"><p>{item.content}</p></div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
               <div>
                  <h2 className="text-4xl font-bold text-foreground mb-8">Explore Key GST Topics</h2>
                  <div className="space-y-4">
                      {relatedTopicsData.map((topic, index) => (
                          <div key={index} className="border rounded-lg bg-card overflow-hidden shadow-sm">
                              <button onClick={() => toggleTopicAccordion(index)} className="w-full flex justify-between items-center p-5 text-left font-semibold text-foreground hover:bg-primary/5">
                                  <span className="text-xl">{topic.title}</span>
                                  <ChevronDown className={`w-6 h-6 text-primary transition-transform duration-300 ${activeTopicIndex === index ? 'rotate-180' : ''}`} />
                              </button>
                              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeTopicIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
                                  <div className="p-5 border-t text-muted-foreground"><p>{topic.content}</p></div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* Section 9: Why Choose Us */}
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

export default GstRegistrationPage;