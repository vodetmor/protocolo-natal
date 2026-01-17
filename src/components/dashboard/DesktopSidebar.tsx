import { NavLink as RouterNavLink, useNavigate } from 'react-router-dom';
import { Home, Book, Dumbbell, Gift, LogOut, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const navItems = [
  { to: '/dashboard', icon: Home, label: 'Home', end: true },
  { to: '/dashboard/protocolo', icon: Book, label: 'O Protocolo' },
  { to: '/dashboard/treinos', icon: Dumbbell, label: 'Treinos' },
  { to: '/dashboard/ferramentas', icon: Gift, label: 'Ferramentas & Bônus' },
];

export function DesktopSidebar() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  return (
    <aside className="hidden md:flex flex-col w-64 bg-card border-r border-border/50 h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-primary" />
          <div>
            <h1 className="font-bold text-lg bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
              Corpo de Musa
            </h1>
            <p className="text-xs text-muted-foreground">Protocolo 28</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav id="tour-sidebar" className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <RouterNavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200',
                isActive
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </RouterNavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-border/50">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive"
          onClick={handleSignOut}
        >
          <LogOut className="w-5 h-5" />
          <span>Sair</span>
        </Button>
      </div>
    </aside>
  );
}
