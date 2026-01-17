import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { DesktopSidebar } from '@/components/dashboard/DesktopSidebar';
import { MobileNav } from '@/components/dashboard/MobileNav';
import { Loader2 } from 'lucide-react';
import { GuidedTour } from '@/components/GuidedTour';

export function DashboardLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen flex w-full bg-background">
      <GuidedTour />
      <DesktopSidebar />

      <main className="flex-1 pb-20 md:pb-0">
        <div className="max-w-4xl mx-auto p-4 md:p-8">
          <Outlet />
        </div>
      </main>

      <MobileNav />
    </div>
  );
}
