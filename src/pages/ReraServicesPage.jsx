import {
  Shield, Users, TrendingUp, Briefcase, CheckCircle, Award, Home, UserCheck, ShieldCheck, FileText, Gavel, Handshake, Search, Calendar, DollarSign
} from "lucide-react";

// --- DATA FOR THE PAGE ---

const challengesData = [
    { icon: ShieldCheck, title: "No Quality Assurance", description: "Lack of transparency often led to a slip in project quality. RERA enforces strict standards and disclosures, ensuring transparency becomes the norm." },
    { icon: UserCheck, title: "False Project Registrations", description: "RERA's strict policies and zero-tolerance approach combat false registrations, protecting homebuyers' hard-earned money from fraudulent projects." },
    { icon: Calendar, title: "Delay In Possession", description: "Non-compliance can lead to project delays. RERA provides a robust grievance portal for homeowners to seek redressal and enforce timely completion." },
];

const consultantServices = {
    registrations: [
        { title: "RERA Registration For Agents", description: "We assist agents in understanding RERA's requirements and completing their registration, saving them valuable time and navigating technicalities." },
        { title: "RERA Registration For Builders & Developers", description: "We manage the entire registration process for builders, from document submission to obtaining the certificate, reducing their administrative burden." },
        { title: "RERA Project Registration", description: "We handle the verification and authentication of all project documents by legal experts, CAs, and engineers to secure the RERA certificate efficiently." },
    ],
    certifications: [
        { title: "RERA Project Registration (Form 3)", description: "Certification by a CA that all land and project estimate costs are accurate and sources of funds are declared." },
        { title: "Withdrawal of Funds (Form 4)", description: "CA certification that funds withdrawn from the escrow account are used for the specific project in proportion to its cost." },
        { title: "RERA Quarterly Update", description: "CA certification confirming that all RERA compliances are met and financial statements are responsibly managed." },
        { title: "RERA Annual Audit", description: "An annual audit to ensure all project financial statements are in compliance with the RERA Act, guaranteeing transparency." },
    ]
};

const registrationSteps = [
    "Visit the official RERA portal for your respective state.",
    "Fill out the developer/agent application form and pay the requisite fee.",
    "Provide enterprise details: name, type, and registered address.",
    "Submit particulars of the business, such as title deeds and Memorandum of Association (MoA).",
    "For individuals, provide Aadhaar, PAN card, contact details, and photographs.",
    "Submit self-attested copies of Aadhaar and proof of address."
];

const benefitsData = [
    { icon: ShieldCheck, title: "Enhanced Regulatory Compliance", description: "As specialists, we ensure all regulations are followed and compliances are met, verifying every document meticulously." },
    { icon: Shield, title: "Security Through Escrow Account", description: "We assist developers in setting up the mandatory RERA escrow account, building a sense of security among buyers as funds are protected for the specific project." },
    { icon: Search, title: "Increased Transparency & Trust", description: "We help homeowners gain access to project details, fostering trust between builders and buyers, which facilitates smoother project cash flow." },
    { icon: Gavel, title: "End-to-End Legal Assistance", description: "Our RERA consultants provide comprehensive legal assistance to developers at every stage of the project." },
    { icon: TrendingUp, title: "Timely Project Delivery", description: "By ensuring compliance and easing the flow of money, we facilitate the speedy and efficient completion of projects within the stipulated timeframe." },
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

const ReraServicesPage = () => {
  return (
    <>
      {/* Section 1: Hero */}
      <section
        className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/RERA-Reg.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">RERA Consulting Services</h1>
          <p className="text-xl mt-4 max-w-3xl opacity-90">Ensuring Transparency and Compliance in the Real Estate Sector.</p>
        </div>
      </section>

      {/* Section 2: Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative h-[30rem] w-full rounded-lg overflow-hidden shadow-xl">
                    <img src="/rera-regis.jpg" alt="A modern real estate development project" className="absolute inset-0 w-full h-full object-cover"/>
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-foreground mb-6">Safeguarding Interests in Real Estate</h2>
                    <div className="prose lg:prose-lg max-w-none text-muted-foreground space-y-4">
                        <p>Real estate is a significant investment. In recent years, challenges like project delays, lack of transparency, and fund mismanagement prompted the creation of the Real Estate (Regulation and Development) Act, 2016 (RERA).</p>
                        <p>RERA was enacted to protect the interests of homebuyers by ensuring transparency, preventing financial fraud, and providing legal remedies. Under RERA, every real estate project and developer must be registered, guaranteeing that all compliance requirements are met and disputes are resolved quickly.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      {/* Section 3: Challenges & RERA Solutions */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-4">How RERA Protects Homeowners</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">RERA certification ensures a building is safe, documents are verified, and buyers are protected from scams. Here are the key challenges it addresses:</p>
              <div className="grid md:grid-cols-3 gap-8">
                  {challengesData.map(item => {
                      const Icon = item.icon;
                      return <div key={item.title} className="bg-card p-8 rounded-lg shadow-lg border text-center hover:-translate-y-2 transition-transform duration-300"><Icon className="w-10 h-10 text-primary mx-auto mb-4" /><h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3><p className="text-muted-foreground">{item.description}</p></div>
                  })}
              </div>
          </div>
      </section>

      {/* Section 4: Role of RERA Registered Agents */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative h-[28rem] w-full rounded-lg overflow-hidden shadow-xl lg:order-last">
                    <img src="/29.webp" alt="A real estate agent presenting a property model" className="absolute inset-0 w-full h-full object-cover"/>
                </div>
                <div className="lg:order-first">
                    <h2 className="text-4xl font-bold text-foreground mb-6">Role of RERA Registered Agents</h2>
                    <div className="prose lg:prose-lg max-w-none text-muted-foreground space-y-4">
                        <p>RERA registered agents are a crucial link between developers and homebuyers. Their registration ensures they are accountable and well-versed in the project's legal and technical details. They are obligated to provide accurate information, not make false promises, and guide buyers through all documentation, ensuring a transparent and fair transaction for the homeowner.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Section 5: Services Offered by RERA Consultants */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Services Offered by RERA Consultants</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">RERA consultants play a vital role in ensuring all rules are followed to the letter, making them essential for flawless project execution.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Registration Services</h3>
              <div className="space-y-6">
                {consultantServices.registrations.map(service => (
                  <div key={service.title} className="bg-card p-6 rounded-lg shadow-sm border">
                    <h4 className="font-semibold text-xl text-foreground">{service.title}</h4>
                    <p className="text-muted-foreground mt-1">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">CA Certifications</h3>
              <div className="space-y-6">
                {consultantServices.certifications.map(service => (
                  <div key={service.title} className="bg-card p-6 rounded-lg shadow-sm border">
                    <h4 className="font-semibold text-xl text-foreground">{service.title}</h4>
                    <p className="text-muted-foreground mt-1">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: How to Register with RERA (Corrected) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">How to Register with RERA</h2>
              <p className="text-lg text-muted-foreground mb-8">The process for developers and agents to register is streamlined through state-specific portals. The key steps include:</p>
              <ul className="space-y-4">
                {registrationSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">{index + 1}</div>
                    <span className="text-muted-foreground text-lg">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[30rem] w-full rounded-lg overflow-hidden shadow-xl bg-card p-4">
              <img 
                src="/567778171743161468.jpg" 
                alt="Online RERA registration portal on a computer screen" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Benefits of Hiring RERA Consultants */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-12">Benefits of Hiring RERA Consultants</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {benefitsData.map(item => {
                      const Icon = item.icon;
                      return <div key={item.title} className="bg-card p-8 rounded-lg shadow-lg border text-left hover:-translate-y-2 transition-transform duration-300"><div className="inline-block bg-primary/10 p-4 rounded-lg mb-4"><Icon className="w-8 h-8 text-primary"/></div><h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3><p className="text-muted-foreground">{item.description}</p></div>
                  })}
              </div>
          </div>
      </section>
      
      {/* Section 8: Why Choose Us */}
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

export default ReraServicesPage;