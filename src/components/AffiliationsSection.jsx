import React from "react";

const testimonials = [
  {
    name: "Sophia Turner",
    title: "Business Owner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Their expertise and dedication transformed the financial structure of my business. Exceptional service and absolute professionalism.",
  },
  {
    name: "Daniel Wright",
    title: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "The team guided us through the most complex compliance challenges effortlessly. Highly recommended for any growing company.",
  },
  {
    name: "Aisha Verma",
    title: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Their advisory services helped us scale with confidence. Truly a partner you can rely on.",
  },
];

const AffiliationsSection = () => {
  return (
    <section id="affiliations" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Affiliations & Recognitions
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are honored to be recognized and associated with respected national
            and international bodies.
          </p>
        </div>

        <div className="flex justify-center mb-20">
          <div className="w-[450px] h-[450px] rounded-xl bg-white shadow-2xl overflow-hidden flex items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/ISO_9001-2015.svg/512px-ISO_9001-2015.svg.png"
              alt="Affiliation"
              className="w-full h-full object-contain p-8"
            />
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by professionals, entrepreneurs, and organizations across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
                />
                <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
                <p className="text-sm text-primary mb-4">{t.title}</p>
                <p className="text-gray-600 leading-relaxed">{t.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliationsSection;
