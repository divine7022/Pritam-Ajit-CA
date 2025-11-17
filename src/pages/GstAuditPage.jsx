// src/pages/GstAuditPage.jsx

import {
  Shield, Users, TrendingUp, Briefcase, FileCheck2
} from "lucide-react";

// --- DATA FOR THE PAGE ---

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

const GstAuditPage = () => {
    return (
        <>
            {/* Section 1: Hero Image */}
            <section
                className="relative h-[50vh] text-white bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(/audit-provisions-under-gst.jpg)` }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        GST Audit
                    </h1>
                    <p className="text-xl mt-4 max-w-3xl">
                        Ensuring GST Compliance and Financial Accuracy for Your Business.
                    </p>
                </div>
            </section>


{/* Section 2: Introduction to GST Audit (Corrected) */}
<section className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Column 1: Image */}
      <div className="relative h-[30rem] w-full rounded-lg shadow-xl bg-gray-100 p-4">
        <img 
          src="/apruveone-1.jpg" 
          alt="An auditor reviewing financial documents under GST regulations" 
          className="w-full h-full object-contain" // <-- THIS IS THE KEY CHANGE
        />
      </div>
      
      {/* Column 2: Text Content */}
      <div>
        <h2 className="text-4xl font-bold text-foreground mb-6">
          Understanding GST Audit Requirements
        </h2>
        <div className="prose lg:prose-lg max-w-none text-muted-foreground space-y-4">
          <p>
            As per <strong>Section 35(5) of the CGST Act, 2017</strong>, every registered person whose turnover during a financial year exceeds the prescribed limit is required to have their accounts audited by a chartered accountant or a cost accountant.
          </p>
          <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
            <h3 className="text-xl font-semibold text-foreground">Key Compliance Mandates:</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Turnover Threshold:</strong> The current prescribed limit for a mandatory GST audit is an annual turnover exceeding <strong>₹2 Crores</strong>.</li>
              <li><strong>Required Submissions:</strong> Audited annual accounts, a reconciliation statement (under Sec 44(2)), and other prescribed documents must be submitted.</li>
              <li><strong>Deadline:</strong> The due date for these submissions is on or before the <strong>31st of December</strong> of the subsequent financial year.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
            
            {/* Section 3: Why Choose Us */}
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

export default GstAuditPage;