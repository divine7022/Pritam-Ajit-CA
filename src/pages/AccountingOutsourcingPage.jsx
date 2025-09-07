import {
  Shield, Users, TrendingUp, Briefcase, Award, BarChart, UserCheck, Cpu, Building, BookCopy, Goal, PieChart, Wallet, CheckCircle
} from "lucide-react";

// --- DATA FOR THE PAGE ---
const benefitsData = [
    { icon: UserCheck, title: "Access to Expertise", description: "Gain access to full-time accounting professionals who are skilled, knowledgeable, and experienced in handling complex financial situations, without the overhead of hiring in-house." },
    { icon: Wallet, title: "Significant Cost Savings", description: "Reduce business costs by avoiding salaries, benefits, and infrastructure for an in-house accounting team. Ensure compliance to prevent costly penalties." },
    { icon: TrendingUp, title: "Increased Efficiency", description: "Offload time-consuming tasks like recording and reconciling financial data. This allows you to dedicate more time to core business activities and strategic growth." },
    { icon: Shield, title: "Better Risk Management", description: "With expert oversight, your accounts remain orderly and compliant with all regulations, significantly reducing financial and legal risks for your company." },
    { icon: Cpu, title: "Advanced Technology", description: "Leverage our investment in advanced accounting software and technology to streamline processes, improve accuracy, and gain valuable financial insights." },
    { icon: Building, title: "Cross-Sector Experience", description: "Our teams have experience working with clients across diverse industries, allowing us to understand your unique business needs and provide tailored solutions." },
];

const scopeOfServicesData = [
    { number: "01", title: "Bookkeeping Services", description: "Expert management of core accounting tasks, including recording income and expenses, bank reconciliation, cash book updates, and managing payables/receivables." },
    { number: "02", title: "Financial Reporting & Analysis", description: "We provide financial reporting and analysis tailored to your business, offering valuable insights into performance to support informed decision-making." },
    { number: "03", title: "Budgeting and Forecasting", description: "Our team assists with budgeting and cash flow forecasting to help you set and monitor financial goals, optimizing profitability and resource allocation." },
    { number: "04", title: "Expense Control", description: "Gain an in-depth view of your company’s finances to manage expenses effectively, avoid cash shortages, and ensure smooth business operations." },
    { number: "05",title: "Financial Policy Making", description: "Capitalize on the knowledge of our outsourced accountants to establish robust financial policies for your organization while you focus on core activities." },
    { number: "06", title: "KPI Monitoring", description: "We help set and constantly monitor financial Key Performance Indicators (KPIs), enabling you to identify underperforming areas and take corrective action." },
    { number: "07", title: "Fund Raising Support", description: "Our experts can help drive fund-raising initiatives by designing effective strategies and identifying the best funding sources and approach methods." },
    { number: "08", title: "Investor Reporting", description: "We generate timely and accurate investor reports based on available data, keeping your stakeholders informed about the financial performance of your company." },
];

const offeredServicesData = ["Bookkeeping", "Financial Statement Preparation", "Accounts Receivable and Payable", "Year-end Cutoff Procedures", "Customer and Vendor Reconciliation"];

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

const AccountingOutsourcingPage = () => {
    return (
        <>
            {/* Section 1: Hero */}
            <section
                className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(/outsource-accounts.png)` }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">Accounting Outsourcing</h1>
                    <p className="text-xl mt-4 max-w-3xl">Strategic Financial Management to Elevate Your Business.</p>
                </div>
            </section>

            {/* Section 2: Introduction */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-foreground mb-6">Focus On Your Growth, We'll Handle the Numbers</h2>
                            <div className="prose lg:prose-lg max-w-none text-muted-foreground space-y-4">
                                <p>Outsourcing accounting services has become a strategic choice for modern businesses. It refers to engaging external professionals to manage your financial tasks, from daily bookkeeping to high-level strategic advice. By outsourcing, you not only save significant time and money but also drastically reduce the risk of accounting errors.</p>
                                <p>This allows your team to concentrate on core business activities, driving innovation and growth, while we ensure your financial operations are managed with expert precision and efficiency.</p>
                            </div>
                        </div>
                        <div className="relative h-[28rem] w-full rounded-lg overflow-hidden shadow-xl">
                            <img src="/The-Complete-Guide-to-Outsourced-Finance-and-Accounting-Services-2020-1.jpg" alt="A professional accountant working on financial reports" className="absolute inset-0 w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Benefits of Outsourcing */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-foreground mb-12">What Are The Benefits of Outsourcing?</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefitsData.map(item => {
                            const Icon = item.icon;
                            return <div key={item.title} className="bg-card p-8 rounded-lg shadow-lg border text-left hover:-translate-y-2 transition-transform duration-300"><div className="inline-block bg-primary/10 p-4 rounded-lg mb-4"><Icon className="w-8 h-8 text-primary"/></div><h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3><p className="text-muted-foreground">{item.description}</p></div>
                        })}
                    </div>
                </div>
            </section>
            
            {/* Section 4: Scope of Services (Timeline) */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-4">Scope of Our Accounting Outsourcing Services</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">From fundamental bookkeeping to strategic CFO-level insights, our services cover the entire spectrum of your financial needs.</p>
                    </div>
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-300"></div>
                        <div className="space-y-12">
                            {scopeOfServicesData.map(step => (
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

            {/* Section 5: Services Offered by Pritam Ajit & Co. */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                     <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[28rem] w-full rounded-lg overflow-hidden shadow-xl">
                            <img src="/Financial-and-Accounting-Outsourcing-Services.jpg" alt="A collage of financial service icons" className="absolute inset-0 w-full h-full object-cover"/>
                        </div>
                         <div>
                            <h2 className="text-4xl font-bold text-foreground mb-6">Our Core Outsourcing Services</h2>
                            <div className="prose lg:prose-lg max-w-none text-muted-foreground space-y-4">
                                <p>Pritam Ajit & Company is one of the most reliable accounting outsourcing service providers in India. We continuously help small and medium-scale enterprises and startups to improve their accounting processes with industry-specific solutions.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {offeredServicesData.map(service => (
                                    <div key={service} className="bg-card p-4 rounded-lg flex items-center gap-3 border"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /><span>{service}</span></div>
                                ))}
                            </div>
                            <p className="text-muted-foreground mt-6">Contact our chartered accountants to learn more about how our accounting outsourcing services can enhance your business efficiency and scalability, allowing you to stay ahead in a competitive market.</p>
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

export default AccountingOutsourcingPage;