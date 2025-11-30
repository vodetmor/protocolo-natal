import React, { useState, useEffect } from 'react';
import { TrendingUp, Skull, ChevronRight, CheckCircle2, Circle, Activity, Utensils, GlassWater, Flame } from 'lucide-react';
import { UserProfile, Task, ViewState } from '../types';

interface DashboardProps {
  user: UserProfile;
  openPanic: () => void;
  setView: (view: ViewState) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, openPanic, setView }) => {
  const [progress, setProgress] = useState(0);
  
  // Initial tasks state
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Shot Matinal (Limão + Cúrcuma)", icon: "glass", color: "text-yellow-400", completed: false },
    { id: 2, text: "Seguir Dieta 100%", icon: "utensils", color: "text-green-400", completed: false },
    { id: 3, text: "Beber 3L de Água", icon: "water", color: "text-blue-400", completed: false },
    { id: 4, text: "Treino HIIT 7 Min", icon: "flame", color: "text-red-500", completed: false }
  ]);

  useEffect(() => {
    const completedCount = tasks.filter(t => t.completed).length;
    // Animate progress bar slightly
    setProgress((completedCount / tasks.length) * 100);
  }, [tasks]);

  const toggleTask = (id: number) => {
    setTasks(prev => prev.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
    if (navigator.vibrate) navigator.vibrate(50);
  };

  const getIcon = (name: string, color: string) => {
    const props = { className: color, size: 20 };
    switch(name) {
      case 'glass': return <GlassWater {...props} />;
      case 'utensils': return <Utensils {...props} />;
      case 'water': return <Activity {...props} />;
      case 'flame': return <Flame {...props} />;
      default: return <Activity {...props} />;
    }
  };

  return (
    <div className="p-6 space-y-6 animate-slide-up pb-24">
      {/* Welcome */}
      <div className="flex justify-between items-end">
        <div>
           <h2 className="text-gray-400 text-xs font-bold uppercase tracking-wider">Compromisso de</h2>
           <h1 className="text-2xl font-black text-white italic">{user.name}</h1>
        </div>
      </div>

      {/* Status Card */}
      <div className="glass p-5 rounded-2xl relative overflow-hidden border-t border-gray-700">
        <div className="absolute top-0 right-0 p-3 opacity-5">
            <TrendingUp size={80} className="text-white" />
        </div>
        <h3 className="text-gray-400 text-[10px] font-bold uppercase mb-2 tracking-widest">Progresso da Meta</h3>
        <div className="flex justify-between items-end mb-3">
          <span className="text-4xl font-black text-white leading-none">0.0 <span className="text-sm text-gray-500 font-normal">kg</span></span>
          <span className="text-sm text-green-500 font-bold mb-1 bg-green-900/20 px-2 py-1 rounded">Meta: -{user.weightLossGoal}kg</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-red-600 to-orange-500 h-full rounded-full transition-all duration-1000 ease-out" 
            style={{ width: `${Math.max(2, progress)}%` }}
          ></div>
        </div>
        <p className="text-[10px] text-gray-500 mt-2 text-right">Continue completando missões para avançar.</p>
      </div>

      {/* Panic Button */}
      <button 
        onClick={openPanic}
        className="w-full bg-red-900/10 border border-red-900/40 p-5 rounded-xl flex items-center justify-between group hover:bg-red-900/20 transition-all active:scale-[0.99]"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.4)] group-hover:animate-pulse">
            <Skull size={24} className="text-white" />
          </div>
          <div className="text-left">
            <div className="font-bold text-red-500 text-sm tracking-wide">SOS ANSIEDADE</div>
            <div className="text-[10px] text-red-300/80 font-medium">Clique aqui antes de comer besteira</div>
          </div>
        </div>
        <ChevronRight className="text-red-500 opacity-50 group-hover:opacity-100 transition-opacity" />
      </button>

      {/* Quick Bonus Access */}
      <div>
        <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
            <Flame size={18} className="text-orange-500" />
            Seus Guias Ativos
        </h3>
        <div className="grid grid-cols-2 gap-3">
            {/* HIIT Card */}
            <div onClick={() => setView('train')} className="bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 p-4 rounded-xl relative overflow-hidden group cursor-pointer hover:border-red-900/50 transition">
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-600/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                <div className="relative z-10 flex flex-col h-full justify-between min-h-[110px]">
                    <div className="w-8 h-8 rounded bg-red-600/20 border border-red-600/50 flex items-center justify-center mb-3">
                        <Flame size={14} className="text-red-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm leading-tight mb-1 text-gray-100">Treino HIIT<br/>7 Minutos</h4>
                        <p className="text-[10px] text-gray-500">Derreter gordura</p>
                    </div>
                </div>
            </div>

            {/* Recipes Card */}
            <div onClick={() => setView('diet')} className="bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 p-4 rounded-xl relative overflow-hidden group cursor-pointer hover:border-orange-900/50 transition">
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange-600/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                <div className="relative z-10 flex flex-col h-full justify-between min-h-[110px]">
                    <div className="w-8 h-8 rounded bg-orange-600/20 border border-orange-600/50 flex items-center justify-center mb-3">
                        <Utensils size={14} className="text-orange-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm leading-tight mb-1 text-gray-100">50 Receitas<br/>Saborosas</h4>
                        <p className="text-[10px] text-gray-500">Sem passar fome</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      {/* Daily Checklist */}
      <div>
          <h3 className="font-bold text-lg text-white mb-4">Missões de Hoje</h3>
          <div className="space-y-3">
            {tasks.map(task => (
                <div 
                    key={task.id} 
                    onClick={() => toggleTask(task.id)}
                    className={`glass p-4 rounded-xl flex items-center justify-between cursor-pointer transition-all duration-300 border ${task.completed ? 'border-green-500/30 bg-green-900/10' : 'border-white/5 hover:bg-neutral-800'}`}
                >
                    <div className="flex items-center gap-4">
                        {getIcon(task.icon, task.completed ? 'text-green-500' : task.color)}
                        <span className={`text-sm font-medium transition-colors ${task.completed ? 'text-green-400 line-through' : 'text-gray-300'}`}>
                            {task.text}
                        </span>
                    </div>
                    {task.completed ? (
                        <CheckCircle2 className="text-green-500 animate-pulse-fast" size={24} />
                    ) : (
                        <Circle className="text-gray-700" size={24} />
                    )}
                </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Dashboard;