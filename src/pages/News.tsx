import { useEffect, useState } from "react";
import { Calendar, ExternalLink } from "lucide-react";

interface NewsItem {
  date: string;
  title: string;
  description: string;
  link?: string;
}

const News = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data: NewsItem[]) => setNewsItems(data))
      .catch((err) => console.error("Failed to load news:", err));
  }, []);

  return (
    <div className="page-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            News & Updates
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Recent activities, achievements, and announcements
          </p>

          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <article
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                    <h2 className="text-xl font-serif font-semibold mb-3">{item.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    {item.link && (
                      <a
                        href={item.link}
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read more <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg text-center">
            <p className="text-muted-foreground">
              Want to stay updated? Follow me on{" "}
              <a
                href="https://twitter.com"
                className="text-primary hover:underline"
              >
                Twitter
              </a>{" "}
              or{" "}
              <a
                href="https://linkedin.com"
                className="text-primary hover:underline"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;