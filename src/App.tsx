// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom"; // Import Outlet
import Header from "./components/Header"; // Import Header
import Footer from "./components/Footer"; // Import Footer

const queryClient = new QueryClient();

// This component is now your main layout
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* The Header is now part of the main layout */}
      <Header />

      <main>
        {/* Outlet renders the correct page (Index, NotFound, etc.) */}
        <Outlet />
      </main>

      {/* The Footer is now part of the main layout */}
      <Footer />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
