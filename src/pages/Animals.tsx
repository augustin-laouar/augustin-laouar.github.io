import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Animals = () => {
  return (
    <div className="page-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 max-w-3xl">

        {/* Back Button */}
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to About
        </Link>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
          My Animals
        </h1>

        {/* INTRO */}
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          I have always loved animals — all of them, even spiders 
          (although I prefer them at a safe distance). I try to support animal
          welfare associations whenever possible, and I hope to take part in
          volunteer work myself once I find the time to commit to it properly.
          Below are the animals who have shared my life in recent years.  
          I have also had other companions in the past, including fish, hamsters,
          and a cat.
        </p>

        <div className="space-y-12">

          {/* SUKI */}
          <div className="bg-card border border-border p-6 rounded-lg">
            <h2 className="text-2xl font-serif font-semibold mb-2">Suki</h2>
            <p className="text-muted-foreground leading-relaxed">
              Suki is a Russian Blue cat, born in April 2025 and adopted in
              September 2025. Intelligent, affectionate, and a real ball of 
              energy, she brings an incredible amount of life and curiosity to 
              the home.
            </p>
            <img
              src="/images/suki.jpg"
              alt="Suki"
              className="w-full max-h-80 object-contain rounded-lg mb-4 bg-black/5 p-2 shadow mx-auto"
            />
          </div>

          {/* JACK */}
          <div className="bg-card border border-border p-6 rounded-lg">
            <h2 className="text-2xl font-serif font-semibold mb-2">Jack</h2>
            <p className="text-muted-foreground leading-relaxed">
              Jack was a European Shorthair cat, born in February 2011 and 
              passed away in June 2024. Adopted in 2014 from the French Society 
              for the Protection of Animals (SPA), he was a deeply loyal and 
              gentle companion. He was a true star in the neighborhood, known 
              and loved by everyone.
            </p>
            <img
              src="/images/jack.jpg"
              alt="Jack"
              className="w-full max-h-80 object-contain rounded-lg mb-4 bg-black/5 p-2 shadow mx-auto"
            />
          </div>

          {/* TUTI */}
          <div className="bg-card border border-border p-6 rounded-lg">
            <h2 className="text-2xl font-serif font-semibold mb-2">Tuti</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tuti was a Russian dwarf hamster, born in October 2022 and passed
              away in January 2025. Despite his small size, he brought a lot of
              joy and energy to everyday life.
            </p>
            <img
              src="/images/tuti.jpg"
              alt="Tuti"
              className="w-full max-h-80 object-contain rounded-lg mb-4 bg-black/5 p-2 shadow mx-auto"
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Animals;