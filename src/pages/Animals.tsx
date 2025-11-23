import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Animals = () => {
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
          My Animals
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          A small space dedicated to the animals who share my daily life.  
          They bring balance, calm, and a bit of chaos — which research life 
          often needs.
        </p>

        {/* Example layout — you can add images if you want */}
        <div className="space-y-8">
          <div className="bg-card border border-border p-6 rounded-lg">
            <h2 className="text-2xl font-serif font-semibold mb-2">Cats</h2>
            <p className="text-muted-foreground">
              Description of your cats, their personalities, or funny habits.
            </p>
          </div>

          <div className="bg-card border border-border p-6 rounded-lg">
            <h2 className="text-2xl font-serif font-semibold mb-2">Other Animals</h2>
            <p className="text-muted-foreground">
              You can add more sections here based on what animals you have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animals;