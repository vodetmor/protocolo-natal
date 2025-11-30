import React from 'react';
import { Flame, Utensils, Leaf, CalendarCheck, Lock } from 'lucide-react';
import { ContentId } from '../types';

interface ArsenalProps {
  openContent: (id: ContentId) => void;
}

const Arsenal: React.FC<ArsenalProps> = ({ openContent }) => {
  const bonuses = [
    { 
      id: 'hiit', 
      title: "TREINO HIIT DE 7 MINUTOS", 
      desc: "Para derreter gordura em casa.", 
      icon: Flame, 
      gradient: "from-red-600 to-red-800",
      btn: "ABRIR GUIA"
    },
    { 
      id: 'recipes', 
      title: "50 RECEITAS SABOROSAS", 
      desc: "Guia saudável e gourmet.", 
      icon: Utensils, 
      gradient: "from-orange-500 to-orange-700",
      btn: "ABRIR LIVRO"
    },
    { 
      id: 'teas', 
      title: "GUIA DE CHÁS DETOX", 
      desc: "Para desinchar rápido.", 
      icon: Leaf, 
      gradient: "from-green-500 to-green-700",
      btn: "VER FÓRMULAS"
    },
    { 
      id: 'manual', 
      title: "MANUAL SEMANA PERFEITA", 
      desc: "Organize tudo em poucas horas.", 
      icon: CalendarCheck, 
      gradient: "from-yellow-500 to-yellow-700",
      btn: "LER MANUAL"
    },
  ];

  return (
    <div className="p-6 space-y-6 animate-slide-up pb-24">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-black text-white uppercase tracking-tight">Seu Arsenal</h2>
        <p className="text-xs text-gray-400 font-medium mt-1">Ferramentas desbloqueadas para o Natal.</p>
      </div>

      <div className="space-y-4">
        {bonuses.map((bonus) => {
          const Icon = bonus.icon;
          return (
            <div 
              key={bonus.id} 
              onClick={() => openContent(bonus.id as ContentId)}
              className="flex bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden h-32 relative group hover:border-neutral-700 transition cursor-pointer shadow-lg active:scale-[0.98]"
            >
                <div className={`w-1/3 bg-gradient-to-br ${bonus.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <Icon size={32} className="text-white relative z-10 drop-shadow-md" />
                </div>
                <div className="w-2/3 p-5 flex flex-col justify-center">
                    <h3 className="font-bold text-white text-sm leading-tight mb-1">{bonus.title}</h3>
                    <p className="text-[10px] text-gray-400 mb-3">{bonus.desc}</p>
                    <button className="text-[10px] bg-white text-black font-bold py-2 px-4 rounded w-fit self-start uppercase tracking-wider hover:bg-gray-200 transition">
                        {bonus.btn}
                    </button>
                </div>
            </div>
          );
        })}

        {/* Locked Item Example */}
        <div className="flex bg-neutral-900/50 border border-neutral-800/50 rounded-2xl overflow-hidden h-32 relative opacity-60">
             <div className="w-1/3 bg-neutral-800 flex items-center justify-center">
                <Lock size={32} className="text-gray-500" />
            </div>
            <div className="w-2/3 p-5 flex flex-col justify-center">
                <h3 className="font-bold text-gray-500 text-sm leading-tight mb-1">PROTOCOLO PÓS-NATAL</h3>
                <p className="text-[10px] text-gray-600 mb-2">Desbloqueia dia 26/12</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Arsenal;