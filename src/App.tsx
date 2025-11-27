import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Publications from "./pages/Publications";
import CV from "./pages/CV";
import News from "./pages/News";
import Teaching from "./pages/Teaching";
import Animals from "./pages/Animals";
import Sports from "./pages/Sports";
import NotFound from "./pages/NotFound";
import Appointment from "./pages/Appointements";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/news" element={<News />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/animals" element={<Animals />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/appointements" element={<Appointment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
