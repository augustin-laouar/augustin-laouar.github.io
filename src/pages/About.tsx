import { Mail, Github, Linkedin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="page-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-8">About Me</h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 space-y-6 text-lg leading-relaxed">
              <p>
                I am a doctoral student at the École Normale Supérieure de Lyon, specializing  
                in networking with a strong emphasis on privacy and security. My research focuses 
                on the architecture of Internet systems, with an emphasis on network performance 
                and privacy.
              </p>
              <p>
                Before beginning my PhD, I completed a Master's degree in Networking and  
                Security and worked as a research engineer at the École Normale Supérieure de  
                Lyon, where I conducted empirical studies on the network performance of IoT 
                devices.
              </p>
              <p>
                My approach combines rigorous theoretical foundations with practical  
                applications, always considering the societal impact of the technologies we  
                create. I am passionate about making the Internet more transparent and  
                respectful of users' privacy.  
              </p>

            </div>
            
            <div className="space-y-6">
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-serif font-semibold text-lg mb-4">Contact</h3>
                <div className="space-y-3">
                  <a 
                    href="mailto:researcher@university.edu" 
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">name.lastname@ens-lyon.fr</span>
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

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-6">Education</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">PhD in Computer Science</h3>
                  <p className="text-muted-foreground">École Normale Supérieure de Lyon, March 2025 - Present</p>
                  <p className="mt-2">
                    Research focus: architecture of Internet systems with an emphasis on network performance and privacy.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Advisor: Francesco Bronzino, Loïc Desgeorges
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">MSc in Computer Science</h3>
                  <p className="text-muted-foreground">Université Claude Bernard Lyon 1, 2022 - 2024</p>
                  <p className="mt-2">
                  Graduated with a GPA of 3.9/4.0 and completed an apprenticeship as a network engineer at
                  <a href="https://www.viveris.fr" target="_blank" rel="noopener noreferrer">Viveris</a>.                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">BSc in Computer Science</h3>
                  <p className="text-muted-foreground">Université de Lorraine, 2019 - 2022</p>
                  <p className="mt-2">
                    Graduated with a GPA of 4.0/4.0 and completed an internship as a software engineer at
                    <a href="https://worldline.com/" target="_blank" rel="noopener noreferrer">WorldLine</a>. 
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif font-semibold mb-6">Research Interests</h2>
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
