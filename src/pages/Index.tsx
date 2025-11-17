import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import AffiliationsSection from "@/components/AffiliationsSection";

const Index = () => {
  const [indiaNews, setIndiaNews] = useState<any[]>([]);
  const [globalNews, setGlobalNews] = useState<any[]>([]);

  useEffect(() => {
    // Clean CDATA + HTML tags
    const clean = (str: string) =>
      str
        ?.replace(/<!\[CDATA\[(.*?)\]\]>/gs, "$1") // remove CDATA
        .replace(/<[^>]+>/g, "") // remove HTML tags
        .trim();

    const fetchRss = async (rssUrl: string) => {
      const res = await fetch(
        `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`
      );
      const xmlText = await res.text();

      const parser = new DOMParser();
      const xml = parser.parseFromString(xmlText, "text/xml");

      const items = [...xml.querySelectorAll("item")].map((item) => ({
        title: clean(item.querySelector("title")?.innerHTML || ""),
        link: clean(item.querySelector("link")?.innerHTML || ""),
        pubDate: clean(item.querySelector("pubDate")?.innerHTML || ""),
      }));

      return items;
    };

    (async () => {
      try {
        const india = await Promise.all([
          fetchRss("https://www.moneycontrol.com/rss/latestnews.xml"),
          fetchRss("https://economictimes.indiatimes.com/rssfeedsdefault.cms?type=business"),
        ]);
        setIndiaNews(india.flat().slice(0, 10));
      } catch {}

      try {
        const global = await Promise.all([
          fetchRss("https://feeds.reuters.com/reuters/businessNews"),
          fetchRss("https://www.cnbc.com/id/10000664/device/rss/rss.html"),
        ]);
        setGlobalNews(global.flat().slice(0, 10));
      } catch {}
    })();
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <ServicesSection />

      <section id="testimonials" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">What Clients Say</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Their audit and advisory helped us scale confidently.", author: "COO, Manufacturing Co." },
              { quote: "Prompt, precise and proactive tax guidance.", author: "Founder, Tech Startup" },
              { quote: "Exceptional professionalism and clear communication.", author: "Director, EPC Firm" }
            ].map((t, i) => (
              <div key={i} className="bg-card shadow-card rounded-lg p-6">
                <p className="text-muted-foreground">{t.quote}</p>
                <p className="mt-4 font-semibold">{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Latest Finance News</h2>
            <p className="text-muted-foreground">India and Global</p>
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">India</h3>
              <ul className="space-y-3">
                {indiaNews.slice(0, 5).map((n: any, idx: number) => (
                  <li key={idx}>
                    <a href={n.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {n.title}
                    </a>
                    <div className="text-xs text-muted-foreground">
                      {n.pubDate ? new Date(n.pubDate).toLocaleString() : ""}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Global</h3>
              <ul className="space-y-3">
                {globalNews.slice(0, 5).map((n: any, idx: number) => (
                  <li key={idx}>
                    <a href={n.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {n.title}
                    </a>
                    <div className="text-xs text-muted-foreground">
                      {n.pubDate ? new Date(n.pubDate).toLocaleString() : ""}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />
      <AffiliationsSection />
    </div>
  );
};

export default Index;
