import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/assets/investment-2.jpg";

const HeroSection = () => {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617]">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional accounting services"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#001f2e]/90"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight drop-shadow-xl animate-fade-in-up">
              Guiding Your Financial Ascent:
              <span className="block text-transparent bg-gradient-to-r from-white to-ca-teal-light bg-clip-text">
                Precision, Integrity & Growth.
              </span>
            </h1>

            <p className="text-xl text-white/90 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-300">
              At Pritam Ajit & Company, we transcend traditional accounting. We
              navigate complex financial landscapes to unlock your business’s
              full potential with compliance, accuracy, and strategic foresight.
            </p>

            <div className="space-y-4 pt-4 animate-fade-in-up animation-delay-500">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-2xl shadow-lg shadow-ca-teal-light/20 backdrop-blur-md">
                  <Shield className="h-6 w-6 text-ca-teal-light" />
                </div>
                <div>
                  <h3 className="font-semibold tracking-wide">Audit & Assurance</h3>
                  <p className="text-white/80">Trusted auditing with absolute precision.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-2xl shadow-lg shadow-ca-teal-light/20 backdrop-blur-md">
                  <Calculator className="h-6 w-6 text-ca-teal-light" />
                </div>
                <div>
                  <h3 className="font-semibold tracking-wide">Strategic Tax Planning</h3>
                  <p className="text-white/80">Optimizing tax outcomes with compliance.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-2xl shadow-lg shadow-ca-teal-light/20 backdrop-blur-md">
                  <TrendingUp className="h-6 w-6 text-ca-teal-light" />
                </div>
                <div>
                  <h3 className="font-semibold tracking-wide">Business Growth Advisory</h3>
                  <p className="text-white/80">
                    Data-driven insights for sustainable expansion.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up animation-delay-700">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3 h-auto shadow-xl shadow-white/20"
                onClick={() => handleScroll("our-services")}
              >
                Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 text-lg px-8 py-3 h-auto backdrop-blur-lg shadow-lg shadow-white/10"
                onClick={() => {
                  window.location.href = "mailto:anshikasupriya2308@gmail.com?subject=Consultation%20Request";
                }}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
