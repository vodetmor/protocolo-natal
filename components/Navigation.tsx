import React from 'react';
import { Home, Apple, Dumbbell, Layers } from 'lucide-react';
import { ViewState } from '../types';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const navItems = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'diet', label: 'Dieta', icon: Apple },
    { id: 'train', label: 'Treino', icon: Dumbbell },
    { id: 'arsenal', label: 'Arsenal', icon: Layers, hasPing: true },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-black/95 backdrop-blur-lg border-t border-gray-800 pb-safe z-40">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => setView(item.id as ViewState)}
              className={`flex flex-col items-center justify-center w-full h-full transition relative ${
                isActive ? 'text-red-500' : 'text-gray-500 hover:text-white'
              }`}
            >
              <Icon size={20} className="mb-1" />
              <span className="text-[9px] font-bold uppercase">{item.label}</span>
              {item.hasPing && !isActive && (
                <span className="absolute top-2 right-6 w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;