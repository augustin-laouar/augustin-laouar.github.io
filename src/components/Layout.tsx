import { ReactNode } from "react";
import Navigation from "./Navigation";
import { ThemeProvider } from "next-themes";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t border-border/40 py-8 mt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Augustin Laouar.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
