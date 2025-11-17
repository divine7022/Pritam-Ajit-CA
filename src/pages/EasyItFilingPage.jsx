import {
  Shield, Users, TrendingUp, Briefcase, FileText, Banknote, User, Database, CheckSquare, Lightbulb, BarChart, Lock
} from "lucide-react";

// --- DATA FOR THE PAGE ---
const eFilingBenefitsData = [
  {
    icon: Shield,
    title: "Enhanced Accuracy",
    description: "E-filing portals use validations to minimize errors, reducing the chances of receiving a notice from the tax department."
  },
  {
    icon: TrendingUp,
    title: "Faster Processing",
    description: "Electronically filed returns are processed much faster, which significantly speeds up the timeline for receiving eligible tax refunds."
  },
  {
    icon: Lock,
    title: "Secure & Confidential",
    description: "Your financial data is transmitted through secure, encrypted channels, ensuring the confidentiality of your sensitive information."
  },
  {
    icon: FileText,
    title: "Digital Record Keeping",
    description: "An immediate digital record of your filed return and acknowledgement (ITR-V) is available for future reference."
  }
];
const eFilingStepsData = [
  { title: "Register Yourself", description: "Create an account on the official Income Tax e-filing portal." },
  { title: "Select ITR Form", description: "Choose the correct Income Tax Return form based on your income sources." },
  { title: "Fill Details", description: "Accurately enter all required personal, income, and deduction details." },
  { title: "Validate & Submit", description: "Cross-verify your filled data and submit the return to the department." },
  { title: "E-Verify ITR", description: "Complete the final step using Aadhaar OTP or Net Banking to validate your filing." },
];
const taxSlabsData = [
    { income: "Up to ₹3,00,000", rate: "No Tax" },
    { income: "₹3,00,001 to ₹6,00,000", rate: "5%" },
    { income: "₹6,00,001 to ₹9,00,000", rate: "10%" },
    { income: "₹9,00,001 to ₹12,00,000", rate: "15%" },
    { income: "₹12,00,001 to ₹15,00,000", rate: "20%" },
    { income: "Above ₹15,00,000", rate: "30%" },
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


const EasyItFilingPage = () => {
    return (
        <>
            {/* Section 1: Hero Image */}
            <section
                className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(/how-to-file-itr-online.jpg)` }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">Easy IT Filing</h1>
                    <p className="text-xl mt-4 max-w-3xl">Streamlining Your Income Tax Return Filing for a Hassle-Free Experience.</p>
                </div>
            </section>

            {/* Section 2: Introduction & Documents (REDESIGNED) */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-foreground mb-6">The Convenience of E-Filing</h2>
                            <p className="prose lg:prose-lg max-w-none text-muted-foreground mb-8">
                                Income tax e-filing is the modern, electronic method of submitting your returns online. This convenient approach allows you to file from anywhere, eliminating the need to visit the Income Tax Department or wait in long queues.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {eFilingBenefitsData.map((benefit, index) => {
                                    const Icon = benefit.icon;
                                    return (
                                    <div key={index} className="bg-card p-6 rounded-lg border">
                                        <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg mt-1">
                                            <Icon className="w-6 h-6 text-primary"/>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                        </div>
                                        </div>
                                    </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="bg-card p-8 rounded-lg shadow-md border h-full">
                            <h3 className="text-2xl font-bold text-foreground mb-6">Documents Required for E-Filing</h3>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-center"><User className="w-6 h-6 text-primary mr-3"/>PAN Card</li>
                                <li className="flex items-center"><User className="w-6 h-6 text-primary mr-3"/>Aadhaar Card</li>
                                <li className="flex items-center"><Banknote className="w-6 h-6 text-primary mr-3"/>Bank Account Details</li>
                                <li className="flex items-center"><FileText className="w-6 h-6 text-primary mr-3"/>Form 16/16A</li>
                                <li className="flex items-center"><Database className="w-6 h-6 text-primary mr-3"/>Investment Details (e.g., 80C, 80D)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
{/* Section 3: Steps for E-Filing ITR Online (Redesigned) */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-foreground mb-4">
      Steps for E-Filing Your ITR Online
    </h2>
    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-20"> {/* Increased margin */}
      Our streamlined process makes filing your income tax return simple and straightforward.
    </p>

    {/* Horizontal Timeline */}
    <div className="relative w-full max-w-5xl mx-auto">
      {/* The connecting line */}
      <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-300"></div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {eFilingStepsData.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {/* The numbered circle */}
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl z-10 border-4 border-gray-50">
              {index + 1}
            </div>
            {/* The content */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground mt-1 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="mt-16 bg-card p-6 rounded-lg border max-w-3xl mx-auto">
        <p className="text-muted-foreground">
            The applicability of ITR forms (ITR-1 to ITR-7) depends on the taxpayer's income sources. Our experts help you select and file the correct form accurately.
        </p>
    </div>
  </div>
</section>
            {/* Section 4: Tips for Smooth ITR E-Filing */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                         <h2 className="text-4xl font-bold text-foreground">Tips for a Smooth E-Filing Experience</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-card p-6 rounded-lg flex items-start gap-4"><Lightbulb className="w-8 h-8 text-primary mt-1"/><div><h3 className="font-semibold">Keep Documents Handy</h3><p className="text-sm text-muted-foreground">Organize all required documents before you begin to save time.</p></div></div>
                        <div className="bg-card p-6 rounded-lg flex items-start gap-4"><CheckSquare className="w-8 h-8 text-primary mt-1"/><div><h3 className="font-semibold">Double-Check Details</h3><p className="text-sm text-muted-foreground">Verify all personal and financial information to avoid errors.</p></div></div>
                        <div className="bg-card p-6 rounded-lg flex items-start gap-4"><Shield className="w-8 h-8 text-primary mt-1"/><div><h3 className="font-semibold">Verify Your ITR</h3><p className="text-sm text-muted-foreground">Use Aadhaar OTP or Net Banking for quick and easy e-verification.</p></div></div>
                        <div className="bg-card p-6 rounded-lg flex items-start gap-4"><BarChart className="w-8 h-8 text-primary mt-1"/><div><h3 className="font-semibold">Know Tax-Saving Options</h3><p className="text-sm text-muted-foreground">Understand deductions like HRA, 80C, and medical insurance.</p></div></div>
                        <div className="bg-card p-6 rounded-lg flex items-start gap-4"><FileText className="w-8 h-8 text-primary mt-1"/><div><h3 className="font-semibold">Don't Miss Deadlines</h3><p className="text-sm text-muted-foreground">Be aware of the filing due dates to avoid late filing penalties.</p></div></div>
                    </div>
                </div>
            </section>

            {/* Section 5: Current Income Tax Slabs */}
            <section className="py-20 bg-gray-50">
                 <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-foreground mb-12">Current Income Tax Slabs (New Regime)</h2>
                    <div className="overflow-x-auto bg-card rounded-lg shadow-lg max-w-2xl mx-auto">
                        <table className="w-full text-left">
                            <thead className="bg-primary/10">
                                <tr><th className="p-4 font-semibold text-foreground text-lg">Taxable Income</th><th className="p-4 font-semibold text-foreground text-lg">Tax Rate</th></tr>
                            </thead>
                            <tbody className="divide-y divide-border/50 text-muted-foreground">
                                {taxSlabsData.map((row, index) => (
                                    <tr key={index}>
                                        <td className="p-4">{row.income}</td>
                                        <td className="p-4">{row.rate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-muted-foreground mt-6 max-w-3xl mx-auto">The new tax regime does not differentiate based on age and is applicable to all individuals. Tax on real estate business income is also calculated based on these slabs.</p>
                </div>
            </section>

            {/* Section 6: How We Can Assist */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                         <div className="relative h-[28rem] w-full rounded-lg overflow-hidden shadow-xl">
                            <img src="/product-jpeg-500x500.webp" alt="A tax professional assisting a client" className="absolute inset-0 w-full h-full object-cover"/>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-foreground mb-6">How Pritam Ajit & Co. Can Assist You</h2>
                            <div className="prose lg:prose-lg max-w-none text-muted-foreground space-y-4">
                                <p>With extensive experience, our team has the expertise to assist you with filing income tax returns. We have a clear, tech-savvy process defined for all categories of taxpayers, ensuring a smooth and hassle-free experience.</p>
                                <p>From tax advisory and computation to filing and litigation support, we have it all covered. We provide personalized communication and tax-saving tips to help you save money and stay compliant.</p>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{whyChooseUsData.map((card, index) => {
                        const Icon = card.icon;
                        return (<div key={index} className="bg-card p-8 rounded-lg shadow-sm border border-transparent hover:border-primary hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"><div className="flex justify-center mb-6"><div className="bg-primary/10 p-4 rounded-full"><Icon className="h-8 w-8 text-primary" /></div></div><h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3><p className="text-muted-foreground">{card.description}</p></div>)
                    })}</div>
                </div>
            </section>
        </>
    );
};

export default EasyItFilingPage;