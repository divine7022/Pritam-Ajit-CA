import {
  Shield, Users, TrendingUp, Briefcase, Handshake, FileText, CheckCircle, XCircle, Target, Lightbulb, UserCheck, Scale
} from "lucide-react";

// --- DATA FOR THE PAGE ---

const featuresData = [
    { icon: Handshake, title: "Contract-Based Relation" },
    { icon: Users, title: "Minimum of Two Persons" },
    { icon: Briefcase, title: "Must Undertake a Business" },
    { icon: TrendingUp, title: "Profit-Sharing Objective" },
    { icon: Shield, title: "Unlimited Partner Liability" },
    { icon: UserCheck, title: "Mutual Trust & Confidence" },
];

const benefitsData = [
    "Simple formation with minimal legal formalities.",
    "Greater operational flexibility compared to companies.",
    "Registration is not compulsory, easing the setup process.",
    "Better decision-making through mutual consent.",
    "Shared risk among partners encourages capital formation.",
    "Maintains business secrecy as public disclosure of accounts is not required.",
];

const limitationsData = [
    "Unlimited liability increases personal financial risk for partners.",
    "Limited resources can hinder capital generation and growth.",
    "Lacks perpetual succession; death or retirement can dissolve the firm.",
    "Shares cannot be transferred without the consent of all partners.",
    "Potential for disputes if trust and confidence break down.",
    "May suffer from a lack of public confidence due to non-disclosure of accounts.",
];

const suitabilityData = [
    "Service industries like accounting, medical, and legal firms.",
    "Medium-sized enterprises focused on distribution.",
    "Businesses where personal skills and trust are paramount, such as transportation and warehousing.",
];

const registrationFlowchart = [
    { title: "Ideation & Partner Pooling", description: "Partners come together to pool their ideas, skills, and resources for a common business goal." },
    { title: "Business Selection", description: "A consensus is reached on the specific nature and objectives of the business to be undertaken." },
    { title: "Agreement on Conditions", description: "Partners mutually agree on all terms, including profit/loss sharing, roles, capital contribution, and dissolution." },
    { title: "Preparation of Partnership Deed", description: "A legal document, the Partnership Deed, is drafted to outline all the agreed-upon terms and conditions." },
    { title: "Stamping & Signing of Deed", description: "The Partnership Deed is printed on stamp paper of the appropriate value and signed by all partners." },
    { title: "Submission to Registrar of Firms", description: "The signed deed, along with the registration form (Form 1), is submitted to the Registrar of Firms for official registration." },
    { title: "Commencement of Business", description: "Once registered, the business can commence its operations and proceed with subsequent registrations like GST, PAN, etc." },
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

const PartnershipPage = () => {
  return (
    <>
      {/* Section 1: Hero */}
      <section
        className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/960x0.webp)` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">Partnership Firm</h1>
          <p className="text-xl mt-4 max-w-3xl opacity-90">Building Stronger Businesses Through Collaborative Ventures.</p>
        </div>
      </section>

      {/* Section 2: Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">What is a Partnership?</h2>
            <div className="prose lg:prose-lg max-w-none text-muted-foreground mx-auto text-left">
                <p>In India, a partnership is a business structure formed and managed under the Indian Partnership Act, 1932. Section 4 of the Act defines a partnership as "the relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all."</p>
                <p>This structure requires a minimum of two persons to form, with a maximum of 10 for banking businesses and 20 for all other types of businesses. It is founded on a contractual agreement between partners, making it a flexible and popular choice for medium-sized enterprises.</p>
            </div>
        </div>
      </section>
      
      {/* Section 3: Detailed Breakdown */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 space-y-20">
              
              {/* Key Features */}
              <div>
                  <h2 className="text-3xl font-bold text-foreground text-center mb-12">Key Features of a Partnership</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                      {featuresData.map(item => {
                          const Icon = item.icon;
                          return <div key={item.title} className="bg-card p-6 rounded-lg flex items-center gap-4 border shadow-sm"><Icon className="w-8 h-8 text-primary flex-shrink-0" />
                          <h3 className="text-lg font-semibold text-foreground">{item.title}</h3></div>
                      })}
                  </div>
              </div>

              {/* Benefits vs. Limitations */}
              <div>
                  <div className="grid lg:grid-cols-2 gap-12">
                      <div className="bg-card p-8 rounded-lg shadow-lg border">
                          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Benefits</h3>
                          <ul className="space-y-4">
                              {benefitsData.map(item => (
                                  <li key={item} className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                  <span className="text-muted-foreground">{item}</span></li>
                              ))}
                          </ul>
                      </div>
                      <div className="bg-card p-8 rounded-lg shadow-lg border">
                           <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Limitations</h3>
                           <ul className="space-y-4">
                              {limitationsData.map(item => (
                                  <li key={item} className="flex items-start"><XCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                                  <span className="text-muted-foreground">{item}</span></li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </div>

              {/* Suitability */}
              <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl font-bold text-foreground mb-8">Best Suited For</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                      {suitabilityData.map(item => (
                          <div key={item} className="bg-card p-6 rounded-lg flex items-center gap-4 border shadow-sm">
                              <Target className="w-6 h-6 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground font-medium">{item}</span>
                          </div>
                      ))}
                  </div>
              </div>

               {/* Registration Flowchart */}
               <div>
                  <div className="text-center mb-16">
                      <h2 className="text-3xl font-bold text-foreground">Registration Flowchart</h2>
                  </div>
                  <div className="relative max-w-2xl mx-auto">
                      <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300"></div>
                      <div className="space-y-12">
                          {registrationFlowchart.map((step, index) => (
                              <div key={index} className="relative flex items-start gap-6">
                                  <div className="relative z-10 flex-shrink-0">
                                      <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm ring-8 ring-gray-50">{index + 1}</div>
                                  </div>
                                  <div className="bg-card p-4 rounded-lg shadow-md border flex-1">
                                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Section 4: Why Choose Us */}
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

export default PartnershipPage;