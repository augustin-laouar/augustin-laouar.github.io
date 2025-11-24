import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Sports = () => {
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
          Sports & Training
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          Strength training and combat sports play an important role in my daily
          routine. They provide balance, focus, and discipline — qualities that
          directly support my academic work.
        </p>

        <div className="space-y-12">

            {/* BOXING SECTION */}
            <div className="bg-card border border-border p-6 rounded-lg">
                <h2 className="text-2xl font-serif font-semibold mb-4">Boxing</h2>
                <p className="text-muted-foreground leading-relaxed">
                    I am a French elite amateur boxer and have been training since
                    2017. Over the years, I have competed in several dozen amateur
                    fights. I am currently licensed at the Rillieux-la-Pape Boxing 
                    Club (near Lyon, France), where
                    I train under the guidance of Hacine Cherifi, former WBC
                    Middleweight World Champion (1998). Boxing has become a central
                    part of my daily routine, shaping my resilience and focus,
                    qualities that naturally carry over into my research work.
                </p>
                <div className="mt-6">
                    <img
                        src="/images/boxing.jpg"
                        alt="Boxing"
                        className="w-full max-w-md mx-auto rounded-xl object-cover"
                        style={{ maxHeight: "500px" }}              
                    />
                    <p className="text-sm text-muted-foreground text-center mt-3">
                    Me and my coach Hacine Cherifi before a boxing bout
                    </p>
                </div>
            </div>

            {/* OTHER SPORTS SECTION */}
            <div className="bg-card border border-border p-6 rounded-lg">
            <h2 className="text-2xl font-serif font-semibold mb-2">Other Sports</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
                Alongside boxing, I practice running and strength training / conditioning on a 
                regular basis. I also enjoy other sports such as swimming, climbing, and skiing.
            </p>

            {/* IMAGES SIDE BY SIDE */}
            <div className="grid grid-cols-2 gap-4">
                <img
                src="/images/climbing.jpg"
                alt="Me climbing"
                className="w-full max-w-md mx-auto rounded-xl object-cover"
                style={{ maxHeight: "420px" }}  
                />
                <img
                src="/images/ski.jpg"
                alt="Me Skiing"
                className="w-full max-w-md mx-auto rounded-xl object-cover"
                style={{ maxHeight: "420px" }}  
                />
            </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Sports;