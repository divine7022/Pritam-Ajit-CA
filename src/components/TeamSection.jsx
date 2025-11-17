import React from "react";

const teamMembers = [
  {
    name: "Pritam Ajit",
    designation: "Founder & CEO",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Doe",
    designation: "Head of Audit",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Smith",
    designation: "Taxation Expert",
    imageUrl: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    name: "Emily White",
    designation: "Corporate Law Advisor",
    imageUrl: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Michael Brown",
    designation: "Senior Accountant",
    imageUrl: "https://randomuser.me/api/portraits/men/71.jpg",
  },
];

const TeamSection = () => {
  return (
    <section
      id="our-team"
      className="pt-24 pb-32 bg-white overflow-hidden relative"
    >
      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300/20 blur-[140px] rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-[#0A1A2F] tracking-wide mb-4 drop-shadow-sm">
            Meet Our Team
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#007bff] to-[#00c6ff] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-[#4A5568] max-w-3xl mx-auto leading-relaxed">
            Our excellence comes from a team of passionate, experienced and
            highly driven professionals.
          </p>
        </div>
      </div>

      <div className="flex gap-14 overflow-x-auto pb-4 px-6 scrollbar-hide snap-x snap-mandatory">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group text-center flex-shrink-0 w-72 snap-center"
          >
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 w-60 h-60 bg-teal-200/20 rounded-full blur-xl group-hover:bg-teal-300/30 transition-all duration-500"></div>

              <img
                src={member.imageUrl}
                alt={`Photo of ${member.name}`}
                className="relative z-10 w-48 h-48 rounded-full object-cover border-[5px] border-white shadow-xl group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <h3 className="text-2xl font-semibold text-[#0A1A2F] group-hover:text-teal-600 transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-md text-teal-600/80 mt-1 tracking-wide">
              {member.designation}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
