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

            <img
                src="/images/boxing.jpg"
                alt="Boxing"
                className="w-full h-auto rounded-lg object-cover mb-6 shadow"
            />

            <p className="text-muted-foreground leading-relaxed">
                I am a French elite amateur boxer and have been training since
                2017. Over the years, I have competed in several dozen amateur
                fights, gaining both experience and discipline in the ring. I am
                currently licensed at the Rillieux-la-Pape Boxing Club (69), where
                I train under the guidance of Hacine Cherifi, former WBC
                Middleweight World Champion (1998). Boxing has become a central
                part of my daily routine, shaping my resilience and focus,
                qualities that naturally carry over into my research work.
            </p>
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
                alt="Sport 1"
                className="w-full h-48 object-cover rounded-lg shadow"
                />
                <img
                src="/images/ski.jpg"
                alt="Sport 2"
                className="w-full h-48 object-cover rounded-lg shadow"
                />
            </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Sports;