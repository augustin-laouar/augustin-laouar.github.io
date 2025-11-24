import { Mail, Github, Linkedin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="page-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-8">About Me</h1>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* LEFT BLOCK (TEXT) */}
            <div className="md:col-span-2 space-y-6 text-lg leading-relaxed">
              <p>
                I am a doctoral student at the École Normale Supérieure de Lyon,
                specializing in networking with a strong emphasis on privacy and
                security. My research focuses on the architecture of Internet
                systems, with an emphasis on network performance and privacy.
              </p>

              <p>
                Before beginning my PhD, I completed a Master's degree in
                Networking and Security and worked as a research engineer at the
                École Normale Supérieure de Lyon, where I conducted empirical
                studies on the network performance of IoT devices.
              </p>

              <p>
                My approach combines rigorous theoretical foundations with
                practical applications, always considering the societal impact of
                the technologies we create. I am passionate about making the
                Internet more transparent and respectful of users' privacy.
              </p>
            </div>

            {/* RIGHT BLOCK (PHOTO + CONTACT) */}
            <div className="space-y-6">
              {/* PHOTO */}
              <div className="text-center">
                <img
                  src="/images/profile.png"
                  alt="Profile photo"
                  className="w-52 h-52 rounded-full object-cover mx-auto mb-6 shadow"
                />
              </div>

              {/* CONTACT BOX */}
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-serif font-semibold text-lg mb-4">Contact</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:augustin.laouar@ens-lyon.fr"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">augustin.laouar@ens-lyon.fr</span>
                  </a>

                  <a
                    href="https://github.com/augustin-laouar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm">GitHub Profile</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/augustin-laouar-b3b791225/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="text-sm">LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RESEARCH INTERESTS
          <section>
            <h2 className="text-3xl font-serif font-semibold mb-6">
              Research Interests
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-border p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Geolocation systems</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Network Performances</li>
                  <li>• Users' privacy</li>
                  <li>• System Architecture</li>
                </ul>
              </div>
            </div>
          </section> */}

          {/* BEYOND RESEARCH */}
          <section className="mt-16">
            <h2 className="text-3xl font-serif font-semibold mb-4">Beyond Research</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Outside of research, I enjoy spending time with animals and practicing
              boxing and various other sports. You can learn more below.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline">
                <Link to="/animals">My Animals</Link>
              </Button>

              <Button asChild variant="outline">
                <Link to="/sports">Sports</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;