import {
  Shield, Users, TrendingUp, Briefcase, Landmark, FileText, CheckSquare, Building
} from "lucide-react";

// --- DATA FOR THE PAGE ---

const epfServices = [
    "Preparing and submitting all relevant documents for Registration",
    "Obtaining the certificate of Registration and PF code from the department",
    "Submitting Employees' Nomination Forms (Form 2)",
    "Ensuring monthly remittance of challans",
    "Filing of monthly and annual returns (Form 3A & 6A)",
    "Assistance with withdrawal claims (Form 19 and 10C)",
    "Managing transfer requests between accounts (Form 13)",
];

const shopEstablishmentServices = [
    "Filing the application for new registration (Form A)",
    "Obtaining the Registration Certificate and managing renewals",
    "Assistance with timely payment of statutory fees",
    "Handling amendments to the Registration Certificate",
    "Guidance on maintaining all prescribed statutory registers",
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

const LabourLawConsultancyPage = () => {
  return (
    <>
      {/* Section 1: Hero */}
      <section
        className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/ll.jpg` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">Labour Law Consultancy</h1>
          <p className="text-xl mt-4 max-w-3xl opacity-90">Navigating Labour Regulations with Expert Compliance and Advisory.</p>
        </div>
      </section>

      {/* Section 2: The EPF Act, 1952 */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-foreground mb-6">The Employees' Provident Fund (EPF) Act, 1952</h2>
                    <div className="prose lg:prose-lg max-w-none text-muted-foreground space-y-4">
                        <p>The EPF & Miscellaneous Provisions Act, 1952 is a cornerstone of social security in India. It mandates the creation of a provident fund for employees working in factories and other establishments. The primary objective of this act is to provide employees with a substantial financial cushion upon retirement through contributions from both the employee and the employer.</p>
                        <p>Compliance with the EPF Act is crucial for employers, as it involves timely contributions, accurate record-keeping, and regular filings to ensure that employees' social security benefits are protected and managed correctly.</p>
                    </div>
                </div>
                <div className="relative h-[28rem] w-full rounded-lg overflow-hidden shadow-xl">
                    <img src="/1596714335188.jpeg" alt="Illustration of savings and retirement funds" className="absolute inset-0 w-full h-full object-cover"/>
                </div>
            </div>
        </div>
      </section>
      
      {/* Section 3: Our EPF Services */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold text-foreground mb-6">Our EPF Services</h2>
                  <p className="text-lg text-muted-foreground">We provide end-to-end support for all your EPF compliance needs, ensuring accuracy and timeliness at every step.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                  {epfServices.map(service => (
                      <div key={service} className="bg-card p-6 rounded-lg shadow-md border flex items-start gap-4">
                          <CheckSquare className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{service}</span>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Section 4: Shops & Commercial Establishment Act, 1961 */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="relative h-[28rem] w-full rounded-lg overflow-hidden shadow-xl lg:order-last">
                    <img src="/judge-gavel-with-justice-lawyers-lawyer-working-judge-concept_36325-1208.jpg" alt="A modern commercial storefront" className="absolute inset-0 w-full h-full object-cover"/>
                </div>
                <div className="lg:order-first">
                    <h2 className="text-4xl font-bold text-foreground mb-6">Shops & Commercial Establishment Act, 1961</h2>
                    <div className="prose lg:prose-lg max-w-none text-muted-foreground space-y-4">
                        <p>The Shops and Commercial Establishments Act is a state-specific labour law enacted to regulate the conditions of work and employment in shops and commercial establishments. This includes regulating hours of work, payment of wages, holidays, leave, and other terms of service for employees.</p>
                        <p>Registration under this act is mandatory for most businesses operating within the state's jurisdiction. It serves as a fundamental license for conducting business and ensures that the rights of workers in the unorganized sector are protected.</p>
                    </div>
                     <div className="grid sm:grid-cols-2 gap-4 mt-8">
                        {shopEstablishmentServices.map(service => (
                             <div key={service} className="bg-card p-4 rounded-lg flex items-center gap-3 border shadow-sm">
                                 <CheckSquare className="w-5 h-5 text-primary flex-shrink-0" />
                                 <span>{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
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

export default LabourLawConsultancyPage;
