import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NewsItem {
  date: string;
  title: string;
  description: string;
  link?: string;
}

const Home = () => {
  const [recentNews, setRecentNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data: NewsItem[]) => {
        const sorted = [...data].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setRecentNews(sorted.slice(0, 5)); // Only latest 5
      })
      .catch((err) => console.error("Failed to load news:", err));
  }, []);

  return (
    <div className="page-transition">

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight">
            Augustin <span className="text-primary">Laouar</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            PhD student exploring the intersection of networking, privacy, and system architecture
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="group">
              <Link to="/publications">
                View Publications
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-8">
            Recent Highlights
          </h2>

          <div className="space-y-6">
            {recentNews.length === 0 && (
              <p className="text-muted-foreground">No news available yet.</p>
            )}

            {recentNews.map((item, idx) => (
              <div key={idx} className="border-l-2 border-primary pl-6 py-2">
                <p className="text-sm text-muted-foreground mb-1">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </p>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button asChild variant="outline">
              <Link to="/news">View All News</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;