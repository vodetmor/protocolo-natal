import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import { AuthProvider } from "@/contexts/AuthContext";
import Auth from "./pages/Auth";
import { DashboardLayout } from "./layouts/DashboardLayout";
import DashboardHome from "./pages/dashboard/Home";
import Protocolo from "./pages/dashboard/Protocolo";
import Treinos from "./pages/dashboard/Treinos";
import Ferramentas from "./pages/dashboard/Ferramentas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Client Area Routes */}
            <Route path="/login" element={<Auth />} />

            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="protocolo" element={<Protocolo />} />
              <Route path="treinos" element={<Treinos />} />
              <Route path="ferramentas" element={<Ferramentas />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
