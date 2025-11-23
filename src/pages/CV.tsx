import {
  Download,
  Briefcase,
  Award,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CV = () => {
  return (
    <div className="page-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold">
              Curriculum Vitae
            </h1>
            <Button variant="outline" asChild>
              <a href="/cv.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-6">Education</h2>
            <div className="space-y-6">

              <div className="flex gap-4">
                <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">PhD in Computer Science</h3>
                  <p className="text-muted-foreground">
                    École Normale Supérieure de Lyon, March 2025 - Present
                  </p>
                  <p className="mt-2">
                    Research focus: architecture of Internet systems with an
                    emphasis on network performance and privacy.
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
                  <p className="text-muted-foreground">
                    Université Claude Bernard Lyon 1, 2022 - 2024
                  </p>
                  <p className="mt-2">
                    Graduated with a GPA of 3.9/4.0 and completed an
                    apprenticeship as a network engineer at{" "}
                    <a
                      href="https://www.viveris.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Viveris
                    </a>.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">BSc in Computer Science</h3>
                  <p className="text-muted-foreground">
                    Université de Lorraine, 2019 - 2022
                  </p>
                  <p className="mt-2">
                    Graduated with a GPA of 4.0/4.0 and completed an internship
                    as a software engineer at{" "}
                    <a
                      href="https://worldline.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WorldLine
                    </a>.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Research Experience */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-serif font-semibold">
                Research Experience
              </h2>
            </div>

            <div className="space-y-6 border-l-2 border-border pl-6 ml-3">

              <div>
                <h3 className="text-xl font-semibold">Doctoral Researcher</h3>
                <p className="text-muted-foreground">
                  École Normale Supérieure de Lyon • Mar 2025 – Present
                </p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Research on Internet system architecture.</li>
                  <li>• Focus on network performance and privacy.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Research Engineer</h3>
                <p className="text-muted-foreground">
                  École Normale Supérieure de Lyon • Oct 2024 – Feb 2025
                </p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Network performance analysis of wireless IoT devices.</li>
                  <li>
                    • Built a multivariate traffic model improving accuracy by 23%.
                  </li>
                  <li>• Implemented the model in an NS3 (C++) module.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Undergraduate Research Assistant
                </h3>
                <p className="text-muted-foreground">
                  Université Claude Bernard Lyon 1 • Nov 2024 – Jun 2025
                </p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Studied security and privacy impact of IoT devices.</li>
                  <li>• Reverse-engineered IoT devices using Ghidra and Wireshark.</li>
                  <li>• Discovered several vulnerabilities.</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Industry Experience */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-serif font-semibold">
                Industry Experience
              </h2>
            </div>

            <div className="space-y-6 border-l-2 border-border pl-6 ml-3">

              <div>
                <h3 className="text-xl font-semibold">
                  Network Engineer Apprentice
                </h3>
                <p className="text-muted-foreground">
                  Viveris • Sept 2023 – Sept 2024
                </p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>
                    • Led network infrastructure upgrades toward ISO 27001
                    alignment.
                  </li>
                  <li>
                    • Reduced infrastructure costs by 25% using OPNSense,
                    OpenVAS, and Zabbix.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Software Engineer Intern
                </h3>
                <p className="text-muted-foreground">
                  Worldline • Apr 2022 – Aug 2022
                </p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Built financial tools using Java Spring and PostgreSQL.</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Teaching Experience */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-serif font-semibold">Teaching Experience</h2>
            </div>

            <div className="space-y-6 border-l-2 border-border pl-6 ml-3">

              <div>
                <h3 className="text-xl font-semibold">Teaching Assistant</h3>
                <p className="text-muted-foreground">
                  École Normale Supérieure de Lyon • Sept 2025 – Present
                </p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Software engineering (C/C++, Python, Rust, Git) for master’s and bachelor’s students.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Teaching Assistant</h3>
                <p className="text-muted-foreground">
                  Université Claude Bernard Lyon 1 • Oct 2024 – Jan 2025
                </p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Computer networking for master’s students.</li>
                </ul>
              </div>

            </div>
          </section>
          {/* Publications */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-serif font-semibold">Publications</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold">
                  Rethinking Geolocalization on the Internet
                </h3>
                <p className="text-sm text-muted-foreground">
                  ACM HotNets 2025
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold">
                  SoK: Privacy Analysis of Geolocation Data Infrastructures
                </h3>
                <p className="text-sm text-muted-foreground">In preparation</p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-6">Projects</h2>

            <div className="space-y-6">

              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold">Crowdsourced VPN platform</h3>
                <p className="text-muted-foreground text-sm">
                  Go, Rust, Python, WireGuard, ReactJS
                </p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• WireGuard-based VPN marketplace.</li>
                  <li>• AI-driven server selection and load balancing.</li>
                  <li>• Supports onion routing (multi-hop and packet slicing).</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold">Firefox/Chrome Web Extension</h3>
                <p className="text-muted-foreground text-sm">
                  JavaScript, HTML, CSS
                </p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Browser extension for temporary emails.</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold">Windows Network Monitoring</h3>
                <p className="text-muted-foreground text-sm">
                  C++, Npcap, Windows ETW
                </p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Real-time TCP/UDP flow monitoring tool.</li>
                  <li>• Process-flow association using ETW.</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-6">Skills</h2>

            <div className="grid sm:grid-cols-2 gap-6">

              <div>
                <h3 className="font-semibold mb-3 text-lg">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "C/C++",
                    "Rust",
                    "Go",
                    "Python",
                    "Java",
                    "PHP",
                    "JavaScript",
                    "HTML",
                    "CSS"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-lg">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "RIPE Atlas",
                    "Wireshark", 
                    "Ghidra", 
                    "NS-3",
                    "Nmap",
                    "AWS"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-lg">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {["CCNA 1 & 2", "CCNA Security", "INE eJPT"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-lg">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "French (Native)",
                    "English (Fluent)",
                    "Spanish (Intermediate)",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CV;