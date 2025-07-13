
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import FlightResults from "./pages/FlightResults";
import NotFound from "./pages/NotFound";
import PerformanceMonitor from "./components/PerformanceMonitor";

// Lazy load pages for better performance
const TravelInsurance = lazy(() => import("./pages/TravelInsurance"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactSupport = lazy(() => import("./pages/ContactSupport"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TravelDocuments = lazy(() => import("./pages/TravelDocuments"));
const Reviews = lazy(() => import("./pages/Reviews"));

const queryClient = new QueryClient();

// Loading component for lazy-loaded pages
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/flights" element={<FlightResults />} />
            <Route path="/insurance" element={<TravelInsurance />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactSupport />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/documents" element={<TravelDocuments />} />
            <Route path="/reviews" element={<Reviews />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <PerformanceMonitor />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
