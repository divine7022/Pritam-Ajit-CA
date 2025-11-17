import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Zap } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section
      id="purpose-vision-mission"
      className="py-24 relative overflow-hidden bg-white"
    >
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#d7e0ea_1px,transparent_0)] bg-[size:38px_38px]"></div>
      </div>

      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-4">
            Our Purpose, Vision & Mission
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-primary/80 via-primary to-primary/60 mx-auto mt-4 mb-6 rounded-full"></div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Instituting an incremental model of process development driven by advisory-oriented Chartered Accountants to deliver top-tier services through modern accounting technology.
          </p>
        </div>

        <div className="flex justify-center gap-3 text-6xl md:text-7xl font-extrabold mb-16 select-none">
          <span className="text-primary">I</span>
          <span className="text-[#145DA0]">M</span>
          <span className="text-[#0E99A2]">P</span>
          <span className="text-[#5138EE]">A</span>
          <span className="text-primary">C</span>
          <span className="text-[#0E6673]">T</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Card className="group relative border border-gray-200 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-10 text-center relative z-10">
              <div className="bg-primary/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-gray-900">Purpose</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                To build wealth with integrity and innovation, helping our clients achieve sustainable financial success.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative border border-gray-200 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-10 text-center relative z-10">
              <div className="bg-[#705CF6]/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#705CF6]/20 transition-all duration-300">
                <Eye className="h-10 w-10 text-[#705CF6]" />
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-gray-900">Vision</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                To become the most trusted and organized chartered accounting firm, setting new benchmarks in excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative border-0 rounded-3xl overflow-hidden backdrop-blur-xl bg-white/80 shadow-xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-3 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(20,184,166,0.15),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <CardContent className="p-10 text-center relative z-10">
              <div className="bg-gradient-to-br from-primary/10 to-primary/20 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-xl group-hover:rotate-6 group-hover:scale-110 shadow-lg">
                <Zap className="h-12 w-12 text-primary" />
              </div>

              <h3 className="text-4xl font-black mb-5 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                Mission
              </h3>

              <p className="text-gray-700 leading-relaxed text-lg">
                Deliver impactful solutions through innovation, compliance, and strategic financial guidance for long-term growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
