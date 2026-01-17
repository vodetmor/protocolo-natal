import { NavLink } from 'react-router-dom';
import { Home, Book, Dumbbell, Gift } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/dashboard', icon: Home, label: 'Home', end: true },
  { to: '/dashboard/protocolo', icon: Book, label: 'Protocolo' },
  { to: '/dashboard/treinos', icon: Dumbbell, label: 'Treinos' },
  { to: '/dashboard/ferramentas', icon: Gift, label: 'Bônus' },
];

export function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border/50 shadow-lg md:hidden">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-200',
                isActive
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-primary'
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="text-xs font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
