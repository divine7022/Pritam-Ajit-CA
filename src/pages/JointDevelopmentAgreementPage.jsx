import {
  Shield, Users, TrendingUp, Briefcase, FileText, CheckSquare, Landmark, Scale, Handshake, BookOpen, User
} from "lucide-react";

// --- DATA FOR THE PAGE ---

const jdaPrerequisites = [
    { icon: Handshake, title: "Contract for Consideration", description: "The agreement must be a formal contract with a clear exchange of value between the landowner and the developer." },
    { icon: FileText, title: "In Writing & Signed", description: "The JDA must be a written document, legally signed by the transferor (landowner) to be valid." },
    { icon: Landmark, title: "Transfer of Immovable Property", description: "The agreement must explicitly pertain to the transfer and development of a specific immovable property." },
    { icon: CheckSquare, title: "Possession & Willingness", description: "The developer (transferee) must have taken possession of the property and be ready and willing to perform their contractual obligations." },
];

const taxImplications = {
    owner: [
        "**Capital Gains Tax:** As a JDA involves the transfer of a capital asset, it attracts capital gains tax under Sec 45(1) of the Income Tax Act, 1961, assessed in the year the transfer occurs.",
        "**Conversion to Stock-in-Trade:** If the asset is converted to stock-in-trade, taxes apply in the year the stock is sold, based on the Fair Market Value at the date of conversion (Sec 45(2)).",
        "**Point of Taxation:** The critical point of taxation is the date on which the legal domain and control of the property are passed to the developer, not necessarily the date of the agreement itself."
    ],
    developer: [
        "**Business Income:** The income earned by the developer from the sale of their share of the constructed area is assessed as business income, as the construction is for the purpose of sale.",
        "**Application of AS-7:** The accounting standard AS-7 (Construction Contracts) applies to the developer's activities throughout the project.",
        "**Point of Taxation:** Tax liability for the developer arises when they sell the individual flats or units and receive consideration from buyers, not upon entering the JDA."
    ]
};

const whatWeOffer = {
    preJda: [
        "Collaborating with legal experts to draft a robust JDA with tax-beneficial clauses that protect your interests.",
        "Providing a thorough review and advisory on the suitability and fairness of the proposed agreement.",
    ],
    postJda: [
        "Ensuring all tax compliances are met in the year of the agreement to avoid any penal consequences.",
        "Managing all subsequent tax compliances throughout the project lifecycle.",
        "Offering advisory services related to the renting or sale of the property post-completion.",
    ]
};

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

const JointDevelopmentAgreementPage = () => {
  return (
    <>
      {/* Section 1: Hero */}
      <section
        className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/joint-development.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">Joint Development Agreement (JDA)</h1>
          <p className="text-xl mt-4 max-w-3xl opacity-90">Unlocking Property Value Through Strategic Partnerships.</p>
        </div>
      </section>

      {/* Section 2: Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">What is a Joint Development Agreement?</h2>
            <div className="prose lg:prose-lg max-w-none text-muted-foreground mx-auto space-y-4 text-left">
                <p>A Joint Development Agreement (JDA) is a legal contract between a landowner and a property developer. It's a strategic partnership where the owner contributes the land, and the developer takes on the responsibility of obtaining approvals, developing the property, and marketing the project. In return for the land, the owner typically receives a share of the constructed area or a portion of the revenue.</p>
                <p>This arrangement is highly popular as it allows landowners to unlock the value of their property without the financial risk of development, while developers can undertake large projects with reduced initial capital investment in land. To be legally binding, the JDA must be registered with the appropriate stamp duty paid, and an irrevocable General Power of Attorney (POA) is typically executed in favor of the developer.</p>
            </div>
        </div>
      </section>
      
      {/* Section 3: Important Points for a JDA */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-12">Essential Prerequisites of a JDA</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {jdaPrerequisites.map(item => {
                      const Icon = item.icon;
                      return <div key={item.title} className="bg-card p-8 rounded-lg shadow-lg border text-center hover:-translate-y-2 transition-transform duration-300"><Icon className="w-10 h-10 text-primary mx-auto mb-4" /><h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3><p className="text-muted-foreground text-sm">{item.description}</p></div>
                  })}
              </div>
          </div>
      </section>

      {/* Section 4: Tax Implications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Tax Implications of a JDA</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Understanding the tax implications for both parties is critical for a successful Joint Development Agreement.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* In the hands of the Owner */}
            <div className="bg-card p-8 rounded-lg shadow-xl border">
              <div className="flex items-center gap-4 mb-6">
                <User className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-bold text-foreground">In the Hands of the Owner</h3>
              </div>
              <ul className="space-y-4 list-disc list-inside text-muted-foreground">
                {taxImplications.owner.map(point => <li key={point}>{point}</li>)}
              </ul>
            </div>
            {/* In the hands of the Developer */}
            <div className="bg-card p-8 rounded-lg shadow-xl border">
              <div className="flex items-center gap-4 mb-6">
                <Users className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-bold text-foreground">In the Hands of the Developer</h3>
              </div>
               <ul className="space-y-4 list-disc list-inside text-muted-foreground">
                {taxImplications.developer.map(point => <li key={point}>{point}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: What We Offer */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How We Assist You</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">At Pritam Ajit & Company, we provide end-to-end assistance to ensure your JDA is both legally sound and financially optimized.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Pre-JDA Services */}
            <div className="bg-card p-8 rounded-lg shadow-lg border">
              <h3 className="text-3xl font-bold text-foreground mb-6">Pre-JDA Services</h3>
              <ul className="space-y-4">
                {whatWeOffer.preJda.map(service => (
                  <li key={service} className="flex items-start">
                    <CheckSquare className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-lg">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Post-JDA Services */}
            <div className="bg-card p-8 rounded-lg shadow-lg border">
              <h3 className="text-3xl font-bold text-foreground mb-6">Post-JDA Services</h3>
              <ul className="space-y-4">
                {whatWeOffer.postJda.map(service => (
                  <li key={service} className="flex items-start">
                    <CheckSquare className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-lg">{service}</span>
                  </li>
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

export default JointDevelopmentAgreementPage;