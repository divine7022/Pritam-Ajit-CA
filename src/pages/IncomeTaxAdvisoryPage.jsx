// src/pages/IncomeTaxAdvisoryPage.jsx

import {
  Shield, Users, TrendingUp, Briefcase, Goal, BookCopy, Scale, CheckSquare, BarChart, FileText, Calendar, BookOpen, Scaling, Search // <-- 'Search' icon added here
} from "lucide-react";

// --- DATA FOR THE PAGE ---

const advisoryServicesData = [
    { icon: Goal, title: "Tax Planning and Compliances" },
    { icon: Users, title: "Tax Representation Before Authorities" },
    { icon: TrendingUp, title: "Transfer Pricing Regulation" },
    { icon: Shield, title: "Certification of Withholding Taxes [DTAA]" },
    { icon: FileText, title: "Preparation and Filing of Tax Returns" },
    { icon: Calendar, title: "Advance Tax Compliance" },
    { icon: Scaling, title: "Processing of Corporate Refunds" },
    { icon: BookOpen, title: "Attending Assessment Proceedings" },
    { icon: Scale, title: "Appellate / Legal Services" },
    { icon: Search, title: "Handling Survey, Search and Seizure Cases" },
    { icon: BookCopy, title: "Advance Rulings" },
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

const IncomeTaxAdvisoryPage = () => {
    return (
        <>
            {/* Section 1: Hero Image */}
            <section
                className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(/income-tax-1.jpg)` }} // Assumes image is in /public
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Income Tax Advisory
                    </h1>
                    <p className="text-xl mt-4 max-w-3xl">
                        Strategic Guidance for Optimal Tax Efficiency and Compliance.
                    </p>
                </div>
            </section>

            {/* Section 2: Introduction (Text Left, Image Right) */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-foreground mb-6">
                                Navigating the Complexities of Indian Tax Law
                            </h2>
                            <div className="prose lg:prose-lg max-w-none text-muted-foreground space-y-4">
                                <p>
                                    Income Tax Advisory is a professional service designed to help individuals and businesses navigate the intricate landscape of tax laws and regulations. It involves strategic planning to optimize tax liabilities, ensuring timely compliance with all statutory requirements, and representing clients before tax authorities.
                                </p>
                                <p>
                                    In a constantly evolving economic environment, effective tax management is crucial for financial health. Our advisory services provide the clarity and foresight needed to make informed decisions, minimize risks, and leverage available tax benefits, allowing you to focus on your core business activities.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[28rem] w-full rounded-lg overflow-hidden shadow-xl">
                            <img src="/Tax Consultant.png" alt="A professional providing tax advice" className="absolute inset-0 w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Purpose of Income Tax Advisory */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-foreground mb-12">
                        Purpose of Income Tax Advisory
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-card p-8 rounded-lg shadow-md">
                            <Goal className="w-10 h-10 text-primary mx-auto mb-4"/>
                            <h3 className="text-2xl font-semibold text-foreground mb-2">Minimize Tax Liability</h3>
                            <p className="text-muted-foreground">To legally reduce tax burdens through strategic planning and utilization of deductions, exemptions, and incentives.</p>
                        </div>
                         <div className="bg-card p-8 rounded-lg shadow-md">
                            <Shield className="w-10 h-10 text-primary mx-auto mb-4"/>
                            <h3 className="text-2xl font-semibold text-foreground mb-2">Ensure Compliance</h3>
                            <p className="text-muted-foreground">To guarantee adherence to all applicable tax laws and regulations, avoiding penalties and legal complications.</p>
                        </div>
                         <div className="bg-card p-8 rounded-lg shadow-md">
                            <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4"/>
                            <h3 className="text-2xl font-semibold text-foreground mb-2">Support Business Decisions</h3>
                            <p className="text-muted-foreground">To provide crucial insights on the tax implications of financial decisions, supporting sustainable growth and profitability.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Services Provided */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-foreground">
                            Services Provided by Our Team
                        </h2>
                        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                           With careful planning and timely compliance, our team provides the below services to help our clients with income tax-related issues, allowing them to concentrate on their core business.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {advisoryServicesData.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={index} className="bg-card p-6 rounded-lg shadow-sm border flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300">
                                    <div className="bg-primary/10 p-3 rounded-lg">
                                        <Icon className="w-7 h-7 text-primary"/>
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Section 5: Why Choose Us */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        Why Choose Pritam Ajit & Company?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
                        Your success is our business. We provide the expertise and partnership you need to navigate and thrive in the Indian market.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {whyChooseUsData.map((card, index) => {
                            const Icon = card.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-card p-8 rounded-lg shadow-sm border border-transparent hover:border-primary hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"
                                >
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
export default IncomeTaxAdvisoryPage;