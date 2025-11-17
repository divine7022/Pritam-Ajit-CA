import {
  Shield, Users, TrendingUp, Briefcase, Handshake, FileText, CheckCircle, XCircle, Target, UserCheck, HeartHandshake, Building
} from "lucide-react";

// --- DATA FOR THE PAGE ---

const featuresData = [
    { icon: Users, title: "Group of Persons" },
    { icon: HeartHandshake, title: "Common Interest or Purpose" },
    { icon: Handshake, title: "United by a Common Vow" },
    { icon: Briefcase, title: "Follows the Same Trade or Profession" },
];

const benefitsData = [
    "Easy to form with minimal legal formalities.",
    "Open membership with no major obstructions.",
    "Offers limited liability protection to its members.",
    "Primarily driven by a service motive, not profit.",
    "Managed democratically by elected members.",
    "Enjoys stability and continuity, independent of members.",
    "Benefits from state patronage and government support.",
];

const limitationsData = [
    "Often faces challenges due to limited financial resources.",
    "Management can be inefficient due to a lack of professional expertise.",
    "Lack of secrecy as affairs are often discussed openly among members.",
    "Frequently restricted to cash-based trading.",
    "Can be subject to excessive government interference and regulation.",
    "May suffer from a lack of individual motivation.",
    "Prone to disputes and differences among members.",
];

const registrationSteps = [
    { title: "Application for Registration", description: "An application is filed in the prescribed format with the Registrar of Cooperative Societies, providing a list of members and their addresses." },
    { title: "Define Name and Objectives", description: "The proposed name and the clear charitable or benevolent objectives of the society must be detailed in the application." },
    { title: "Detail Collection of Funds", description: "The plan for collecting funds, whether through share capital or loans, and their intended utilization process must be outlined." },
    { title: "Establish Managing Committee", description: "Details of the office bearers who will form the managing committee and their respective powers must be provided." },
    { title: "Formulate Bye-Laws", description: "The society’s bye-laws, governing aspects like the admission and retirement of members, must be drafted and submitted." },
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
const SocietyPage = () => {
  return (
    <>
      {/* Section 1: Hero */}
      <section
        className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/Learn2improve_BLOG_8April-2020_800x600.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">Society Registration</h1>
          <p className="text-xl mt-4 max-w-3xl opacity-90">Forming Organizations for Charitable and Benevolent Purposes.</p>
        </div>
      </section>

      {/* Section 2: Introduction & Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-foreground mb-6">What is a Society?</h2>
                <div className="prose lg:prose-lg max-w-none text-muted-foreground mx-auto text-left">
                    <p>A society is an organization formed by a group of people for a stated charitable or benevolent purpose. This can be for the benefit of the public at large or for the common interests of the members themselves. A key characteristic is that a society operates as closely as possible to cost, prioritizing its mission over profit.</p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
                {featuresData.map(item => {
                    const Icon = item.icon;
                    return <div key={item.title} className="bg-card p-6 rounded-lg flex items-center gap-4 border shadow-sm"><Icon className="w-8 h-8 text-primary flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3></div>
                })}
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
                          <h3 className="text-3xl font-bold text-green-600 mb-6 text-center">Benefits</h3>
                          <ul className="space-y-4">
                              {benefitsData.map(item => (
                                  <li key={item} className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                  <span className="text-muted-foreground">{item}</span></li>
                              ))}
                          </ul>
                      </div>
                      <div className="bg-card p-8 rounded-lg shadow-lg border">
                           <h3 className="text-3xl font-bold text-red-600 mb-6 text-center">Limitations</h3>
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
              <div className="max-w-4xl mx-auto text-center bg-card p-8 rounded-lg shadow-lg border">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Suitability</h2>
                  <p className="text-lg text-muted-foreground">Any group of persons can form a cooperative society to act jointly for their common benefit. However, to be legally recognized and avail government benefits, all societies must be formed under the Cooperative Societies Act, 1912, or relevant state cooperative laws.</p>
              </div>

               {/* Formation Process */}
               <div>
                  <div className="text-center mb-16">
                      <h2 className="text-4xl font-bold text-foreground">Formation of a Society</h2>
                      <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">For the formation of a cooperative society, at least 10 persons with a common objective are required. They must contribute share capital and form a managing committee to oversee operations.</p>
                  </div>
                  <div className="relative max-w-3xl mx-auto">
                      <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-300"></div>
                      <div className="space-y-12">
                          {registrationSteps.map((step, index) => (
                              <div key={index} className="relative flex items-start gap-8">
                                  <div className="relative z-10 flex-shrink-0">
                                      <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl ring-8 ring-gray-50">{index + 1}</div>
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

export default SocietyPage;