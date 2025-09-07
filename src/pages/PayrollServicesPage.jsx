import {
  Shield, Users, TrendingUp, Briefcase, Award, BarChart, Lightbulb, UserCheck, Cpu, Building, BookCopy, Goal, PieChart, Wallet, HelpingHand, CheckCircle, FileText, Calendar, GitBranch, Settings, Layers, ShieldCheck
} from "lucide-react";

// --- DATA FOR THE PAGE ---

const payrollTasksData = [
    { icon: Briefcase, title: "Salary Structuring" },
    { icon: Shield, title: "Labour Law Compliance" },
    { icon: FileText, title: "TDS Challans" },
    { icon: Award, title: "Form 16 Generation" },
    { icon: CheckCircle, title: "Statutory Compliance" },
    { icon: Wallet, title: "Expense Reimbursement" },
    { icon: Calendar, title: "Attendance & Leave Management" },
];

const outsourcingTypesData = [
    { icon: ShieldCheck, title: "Fully Managed Services", content: "Delegate all your payroll functions to us for a complete, end-to-end solution, freeing you to focus entirely on your business." },
    { icon: Layers, title: "Partial Outsourcing", content: "Outsource a specific portion of your payroll tasks, such as tax filings or payslip generation, while retaining control over other areas." },
    { icon: GitBranch, title: "Customized Services", content: "We work with you to design a hybrid model, choosing the specific services that best suit your unique business needs and budget." },
];

const processStepsData = [
    { number: "01", title: "Assessment of Business Needs", description: "We begin by conducting a thorough assessment to determine which payroll functions you want to outsource—from computing salaries and structuring CTC to managing reimbursements and final settlements." },
    { number: "02", title: "Partner Onboarding", description: "As your chosen partner, we ensure a deep understanding of your company's payroll structure, applicable taxes, and state-specific laws, backed by our extensive experience and reputation." },
    { number: "03", title: "Implementation & Integration", description: "We onboard your company by setting up the required systems and establishing necessary integrations with your existing HR and payroll applications to ensure a seamless transition." },
    { number: "04", title: "Ongoing Management & Reporting", description: "Payroll is a dynamic process. We provide regular, transparent reports on all payroll activities and keep you updated on any changes according to applicable laws and business needs." },
];

const benefitsData = [
    { icon: UserCheck, title: "Save Time, Avoid Duplications", description: "We expertly manage critical employee data, avoiding duplicate entries and saving you valuable time when processing or browsing records." },
    { icon: Wallet, title: "Significant Cost Savings", description: "Avoid high overheads associated with in-house payroll systems, software, and dedicated staff. Our services are a more affordable and efficient solution." },
    { icon: TrendingUp, title: "Increased Accuracy", description: "As payroll is our core focus, the chances of errors in salary, tax, and compliance calculations are virtually eliminated, ensuring employee satisfaction." },
    { icon: Shield, title: "Guaranteed Compliance", description: "We handle all regulatory compliances with labor and tax laws, saving you the hassle of tracking complex changes and avoiding costly penalties." },
    { icon: Cpu, title: "Improved Data Security", description: "We take extra care of your sensitive employee data, employing robust security measures and infrastructure to protect against breaches and threats." },
    { icon: Briefcase, title: "Access to Wider Expertise", description: "Beyond payroll, we provide assistance with processes that require specific expertise, such as GST, income tax filing, and year-end investment verification." },
];

const ourServicesData = [
    { icon: Settings, title: "Payroll Processing & Management", description: "We provide end-to-end services, from computing wages to preparing paychecks, using cutting-edge tools like Zoho Payroll and GreytHR to automate manual tasks and ensure efficiency." },
    { icon: FileText, title: "Tax Compliance & Reporting", description: "Our team ensures you comply with the latest tax and labour laws. We handle all tax filings and reporting, so you can have complete peace of mind." },
    { icon: Users, title: "Employee Self-Service Portals", description: "Our portals enable your employees to easily check payslips, view leave balances, and update their personal details, empowering them and reducing HR overhead." },
    { icon: Calendar, title: "Time and Attendance Tracking", description: "We provide seamless time and attendance tracking software, allowing employees to efficiently track their working hours without any hassles." },
    { icon: HelpingHand, title: "HR and Benefits Administration", description: "Our solutions make enrolling and processing employee claims, benefits, loans, and reimbursements quicker and easier for everyone." },
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
const PayrollServicesPage = () => {
  return (
    <>
      {/* Section 1: Hero */}
      <section
        className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/what-is-payroll-outsourcing.webp)` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">Payroll Services</h1>
          <p className="text-xl mt-4 max-w-3xl opacity-90">Accurate, Compliant, and Efficient Payroll Management for Your Business.</p>
        </div>
      </section>

      {/* Section 2: Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-foreground mb-6">Focus On Your Growth, We'll Handle the Numbers</h2>
                    <div className="prose lg:prose-lg max-w-none text-muted-foreground space-y-4">
                        <p>Managing employee payroll requires significant time, resources, and constant vigilance to keep up with applicable tax laws. We can take this entire burden off your shoulders with our full-fledged payroll outsourcing services.</p>
                        <p>Our dedicated payroll team is accurate, efficient, and securely handles everything from computing employee salaries and deducting taxes to issuing payslips and ensuring statutory compliance, allowing you to focus on your core business.</p>
                    </div>
                </div>
                <div className="relative h-[28rem] w-full rounded-lg overflow-hidden shadow-xl">
                    <img src="/What-is-Payroll-Service-FI.webp" alt="A professional managing payroll on a laptop" className="absolute inset-0 w-full h-full object-cover"/>
                </div>
            </div>
        </div>
      </section>
      
      {/* Section 3: Payroll Outsourcing Services */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold text-foreground mb-6">Comprehensive Payroll Solutions</h2>
                  <p className="text-lg text-muted-foreground">As business operations expand and tax laws evolve, DIY payroll processing becomes unmanageable. At Pritam Ajit & Company, our payroll management services save the day by expertly handling all critical components.</p>
              </div>
              <div className="max-w-5xl mx-auto mt-16">
                  <h3 className="text-3xl font-bold text-foreground text-center mb-8">What We Handle</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {payrollTasksData.map(item => {
                          const Icon = item.icon;
                          return (
                              <div key={item.title} className="bg-card p-4 rounded-lg flex items-center gap-3 border shadow-sm">
                                  <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                                  <span className="font-semibold text-muted-foreground">{item.title}</span>
                              </div>
                          );
                      })}
                  </div>
              </div>
              <div className="max-w-6xl mx-auto mt-20">
                  <h3 className="text-3xl font-bold text-foreground text-center mb-8">Choose Your Service Model</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                      {outsourcingTypesData.map(item => {
                          const Icon = item.icon;
                          return (
                              <div key={item.title} className="bg-card p-8 rounded-xl border text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                                  <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                                      <Icon className="w-10 h-10 text-primary" />
                                  </div>
                                  <h3 className="text-2xl font-semibold text-foreground mb-3">{item.title}</h3>
                                  <p className="text-muted-foreground">{item.content}</p>
                              </div>
                          );
                      })}
                  </div>
              </div>
          </div>
      </section>

      {/* Section 4: 4-Step Process */}
      <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-foreground mb-4">Our 4-Step Payroll Outsourcing Process</h2>
              </div>
              <div className="relative max-w-4xl mx-auto">
                  <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-300"></div>
                  <div className="space-y-12">
                      {processStepsData.map(step => (
                          <div key={step.number} className="relative flex items-start gap-8">
                              <div className="relative z-10 flex-shrink-0">
                                  <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl ring-8 ring-background">{step.number}</div>
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

      {/* Section 5: Benefits */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-12">Benefits of Outsourcing Your Payroll</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {benefitsData.map(item => {
                      const Icon = item.icon;
                      return <div key={item.title} className="bg-card p-8 rounded-lg shadow-lg border text-left hover:-translate-y-2 transition-transform duration-300"><div className="inline-block bg-primary/10 p-4 rounded-lg mb-4"><Icon className="w-8 h-8 text-primary"/></div><h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3><p className="text-muted-foreground">{item.description}</p></div>
                  })}
              </div>
          </div>
      </section>

      {/* Section 6: Our Services Offered */}
      <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
               <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="relative h-[32rem] w-full rounded-lg overflow-hidden shadow-xl">
                      <img src="/payroll-services (1).png" alt="Dashboard of a payroll management software" className="absolute inset-0 w-full h-full object-cover"/>
                  </div>
                   <div>
                       <h2 className="text-4xl font-bold text-foreground mb-8">How Pritam Ajit & Company Can Help</h2>
                       <div className="space-y-6">
                          {ourServicesData.map(item => {
                              const Icon = item.icon;
                              return <div key={item.title} className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-sm border"><div className="bg-primary/10 p-3 rounded-lg flex-shrink-0"><Icon className="w-7 h-7 text-primary"/></div><div><h3 className="text-xl font-semibold text-foreground">{item.title}</h3><p className="text-muted-foreground mt-1">{item.description}</p></div></div>
                          })}
                       </div>
                   </div>
              </div>
          </div>
      </section>

      {/* Section 7: Why Choose Us */}
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

export default PayrollServicesPage;