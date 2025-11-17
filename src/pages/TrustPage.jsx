import {
  Shield, Users, TrendingUp, Briefcase, HeartHandshake, CheckCircle, XCircle, UserCheck, Landmark
} from "lucide-react";

// --- DATA FOR THE PAGE ---

const benefitsData = [
    "Trusts can earn tax-exempt income if approved by the Inland Revenue Department.",
    "Gifts of any amount can be made to Charitable Trusts without incurring gift duty.",
    "Charitable Trusts can exist in perpetuity, unlike other trusts limited to 80 years.",
    "They can be established during one's lifetime and be further funded through a Will.",
    "The chosen name of the Trust can be preserved indefinitely and grow through investment.",
    "By lending capital to a Trust, founders can preserve options to have the loan repaid if needed."
];

const limitationsData = [
    "Subject to an Annual Excise Tax on investment income.",
    "Strict prohibitions against self-dealing between the trust and disqualified persons.",
    "Rules mandating the minimum distribution of income for charitable purposes.",
    "Restrictions on controlling and holding business entities.",
    "Regulations against making investments that could jeopardize the charitable purpose.",
    "Prohibitions on making certain taxable expenditures.",
];

const whoCanFormData = [
    { 
        icon: UserCheck, 
        title: "Individuals", 
        content: "Any person competent to contract under the Indian Contract Act (i.e., of legal age and sound mind) can form a trust." 
    },
    { 
        icon: Users, 
        title: "Minors", 
        content: "A trust can be formed by or on behalf of a minor, but it requires the explicit permission of a principal civil court of original jurisdiction." 
    },
    { 
        icon: Landmark, 
        title: "Other Entities", 
        content: "An artificial person, such as an Association of Persons (AOP), an institution, a limited company, or a Hindu Undivided Family (HUF) through its Karta, can also form a trust." 
    },
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

const TrustPage = () => {
  return (
    <>
      {/* Section 1: Hero */}
      <section
        className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/Benefits-Family-Trusts.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">Charitable Trusts</h1>
          <p className="text-xl mt-4 max-w-3xl opacity-90">Establishing a Legacy of Philanthropy and Social Impact.</p>
        </div>
      </section>

      {/* Section 2: Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Understanding Charitable Trusts</h2>
            <div className="prose lg:prose-lg max-w-none text-muted-foreground mx-auto text-left">
                <p>A trust created for the advancement of education, promotion of public health, relief of poverty, furtherance of religion, or any other purpose regarded as charitable in law is known as a Charitable Trust. For a purpose to be considered charitable, it must be for the benefit of the public or a significant section of it.</p>
                <p>Unlike private trusts, charitable trusts can have a perpetual existence and are not subject to laws against perpetuity. A key advantage is that they are wholly or partially exempt from almost all forms of taxation, making them a powerful vehicle for philanthropic endeavors.</p>
            </div>
        </div>
      </section>
      
      {/* Section 3: Benefits, Limitations & Formation */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 space-y-20">
              
              {/* Benefits vs. Limitations */}
              <div>
                  <div className="grid lg:grid-cols-2 gap-12">
                      <div className="bg-card p-8 rounded-lg shadow-lg border">
                          <h3 className="text-3xl font-bold text-green-600 mb-6 text-center">Benefits of a Trust</h3>
                          <ul className="space-y-4">
                              {benefitsData.map(item => (
                                  <li key={item} className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                  <span className="text-muted-foreground">{item}</span></li>
                              ))}
                          </ul>
                      </div>
                      <div className="bg-card p-8 rounded-lg shadow-lg border">
                           <h3 className="text-3xl font-bold text-red-600 mb-6 text-center">Limitations of a Trust</h3>
                           <ul className="space-y-4">
                              {limitationsData.map(item => (
                                  <li key={item} className="flex items-start"><XCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                                  <span className="text-muted-foreground">{item}</span></li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </div>

              {/* Who can form a trust */}
              <div>
                  <div className="text-center mb-12">
                      <h2 className="text-4xl font-bold text-foreground">Who Can Form a Trust?</h2>
                      <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">As per Section 7 of the Indian Trusts Act, the ability to form a trust is subject to the law for the time being in force.</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                      {whoCanFormData.map(item => {
                          const Icon = item.icon;
                          return <div key={item.title} className="bg-card p-8 rounded-lg shadow-lg border text-center h-full"><Icon className="w-12 h-12 text-primary mx-auto mb-4" /><h3 className="text-2xl font-semibold text-foreground mb-3">{item.title}</h3><p className="text-muted-foreground">{item.content}</p></div>
                      })}
                  </div>
                   <div className="mt-12 max-w-4xl mx-auto bg-card p-6 rounded-lg border-l-4 border-primary shadow-sm">
                      <p className="text-muted-foreground">It's important to note that the Indian Trusts Act does not apply to public trusts of a charitable or religious nature. Under general law, any person can constitute these trusts. For instance, a Hindu can create a Hindu endowment, and a Muslim can create a public wakf.</p>
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

export default TrustPage;