import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Teaching = () => {
  return (
    <div className="page-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">

          {/* Page Title */}
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
            Teaching
          </h1>

          {/* Intro */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Here you can find various resources related to the courses I teach.
          </p>

          {/* Course 1 */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif font-semibold mb-4">
              Programming — Licence 3
            </h2>

            <div className="space-y-4">

              <div className="border border-border rounded-lg p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Introduction to Rust Lab</h3>
                  <p className="text-sm text-muted-foreground">
                    A small lab designed to introduce students to Rust programming.
                  </p>
                </div>
                <Button asChild>
                  <a href="/teaching/l3-rust.pdf" download>
                    <FileDown className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </div>

            </div>
          </section>

          {/* Course 2 */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif font-semibold mb-4">
              Programming — Master 2 Agrégation
            </h2>

            <div className="space-y-4">

              <div className="border border-border rounded-lg p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">C Programming Lab 1: Introduction</h3>
                  <p className="text-sm text-muted-foreground">
                    A set of exercises of various difficulty levels.
                  </p>
                </div>
                <Button asChild>
                  <a href="/teaching/m2-lab1.pdf" download>
                    <FileDown className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </div>

              <div className="border border-border rounded-lg p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">C Programming Lab 2: Memory</h3>
                  <p className="text-sm text-muted-foreground">
                    Lab covering process memory, paging, and a brief introduction to buffer overflows.
                  </p>
                </div>
                <Button asChild>
                  <a href="/teaching/m2-lab2.pdf" download>
                    <FileDown className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </div>

              <div className="border border-border rounded-lg p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">C Programming Lab 3: Nano Nano</h3>
                  <p className="text-sm text-muted-foreground">
                    This lab focuses on building a minimal, hand-crafted version of the Nano text editor.
                  </p>
                </div>
                <Button asChild>
                  <a href="/teaching/m2-lab3.pdf" download>
                    <FileDown className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </div>

              <div className="border border-border rounded-lg p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Nano Nano Code Skeleton</h3>
                  <p className="text-sm text-muted-foreground">
                    Base source code for the Nano Nano lab.
                  </p>
                </div>
                <Button asChild>
                  <a href="/teaching/m2-lab3-code.zip" download>
                    <FileDown className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </div>

            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Teaching;