import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "conference" | "journal" | "workshop";
  links?: {
    pdf?: string;
    doi?: string;
    code?: string;
  };
}

const Publications = () => {
  const publications: Publication[] = [
    {
      title: "Rethinking Geolocalization on the Internet",
      authors: "Augustin Laouar, Loïc Desgeorges, Paul Schmitt, Francesco Bronzino",
      venue: "ACM HotNets",
      year: 2025,
      type: "workshop",
      links: {
        pdf: "https://conferences.sigcomm.org/hotnets/2025/papers/hotnets25-final353.pdf",
        doi: "https://dl.acm.org/doi/10.1145/3772356.3772421",
      },
    },
    {
      title: "SoK: Mapping the Privacy Landscape of Geolocation Ecosystems",
      authors: "Augustin Laouar, Paul Lachat, Loïc Desgeorges, Mathieu Cunche, Vincent Roca, Pascale Vicat-Blanc, Francesco Bronzino",
      venue: "PoPETs",
      year: 2026,
      type: "conference",
      links: {
        pdf: "",
        doi: "",
      },
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "conference":
        return "bg-primary/10 text-primary";
      case "journal":
        return "bg-secondary/10 text-secondary";
      case "workshop":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="page-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Publications</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Peer-reviewed research publications and preprints
          </p>

          <div className="space-y-8">
            {[...publications]
              .sort((a, b) => b.year - a.year)
              .map((pub, index) => (
              <article key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getTypeColor(pub.type)}`}>
                        {pub.type.toUpperCase()}
                      </span>
                      <span className="text-sm text-muted-foreground">{pub.year}</span>
                    </div>
                    <h2 className="text-xl font-serif font-semibold mb-2 leading-tight">
                      {pub.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                    <p className="text-sm italic text-muted-foreground mb-4">{pub.venue}</p>
                    
                    {pub.links && (
                      <div className="flex flex-wrap gap-2">
                        {pub.links.pdf && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={pub.links.pdf} target="_blank" rel="noopener noreferrer">
                              PDF <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        )}
                        {pub.links.doi && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={pub.links.doi} target="_blank" rel="noopener noreferrer">
                              DOI <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        )}
                        {pub.links.code && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={pub.links.code} target="_blank" rel="noopener noreferrer">
                              Code <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
