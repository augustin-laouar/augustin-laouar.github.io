import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Sports = () => {
  return (
    <div className="page-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 max-w-3xl">
        
        <Link 
          to="/about"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to About
        </Link>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
          Sports & Training
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          Strength training and combat sports are an important part of my 
          routine. They bring discipline, focus, and balance — qualities that 
          carry directly into my research work.
        </p>

        <div className="space-y-8">
          <div className="bg-card border border-border p-6 rounded-lg">
            <h2 className="text-2xl font-serif font-semibold mb-2">Strength Training</h2>
            <p className="text-muted-foreground">
              Your training style, goals, routine, or why lifting matters to you.
            </p>
          </div>

          <div className="bg-card border border-border p-6 rounded-lg">
            <h2 className="text-2xl font-serif font-semibold mb-2">Combat Sports</h2>
            <p className="text-muted-foreground">
              Boxing, MMA, Kickboxing — describe your practice and what you enjoy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;