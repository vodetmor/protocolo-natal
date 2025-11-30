import React, { useState } from 'react';
import { Play, Download, CheckCircle2, Circle, Timer, Flame, Check } from 'lucide-react';
import { ContentId } from '../types';

interface WorkoutProps {
  openContent: (id: ContentId) => void;
}

const Workout: React.FC<WorkoutProps> = ({ openContent }) => {
  // Local state for exercise completion
  const [exercises, setExercises] = useState([
    { id: 1, name: "Polichinelos", duration: "45s", rest: "15s", completed: false },
    { id: 2, name: "Agachamento com Salto", duration: "45s", rest: "15s", completed: false },
    { id: 3, name: "Mountain Climbers", duration: "45s", rest: "15s", completed: false },
    { id: 4, name: "Flexão de Braço", duration: "45s", rest: "15s", completed: false },
    { id: 5, name: "Burpees (Modo Hard)", duration: "45s", rest: "15s", completed: false },
  ]);

  const toggleExercise = (id: number) => {
    setExercises(prev => prev.map(ex => 
        ex.id === id ? { ...ex, completed: !ex.completed } : ex
    ));
    if (navigator.vibrate) navigator.vibrate(50);
  };

  return (
    <div className="p-6 space-y-6 animate-slide-up pb-24">
      <h2 className="text-2xl font-black italic uppercase text-red-600">Queimar Gordura</h2>
      
      {/* Hero Video Player */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-red-900/30 group bg-black z-10">
        <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/mmq5zZfmIws?rel=0&modestbranding=1&controls=1&playsinline=1" 
            title="Treino HIIT 7 Minutos" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
      
      <div className="flex justify-between items-center -mt-2">
         <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded inline-block shadow-lg flex items-center gap-1">
            <Flame size={10} fill="currentColor" /> CARDIO ACELERADO
         </span>
         <span className="text-xs text-gray-500 font-mono">Duração: 07:00</span>
      </div>

      {/* Exercise List */}
      <div className="space-y-3">
        <h3 className="text-white font-bold uppercase text-sm">Lista de Movimentos (Toque para marcar)</h3>
        {exercises.map((ex, idx) => (
            <div 
                key={ex.id} 
                onClick={() => toggleExercise(ex.id)}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 cursor-pointer active:scale-[0.98] ${
                    ex.completed 
                    ? 'bg-green-900/20 border-green-600/50' 
                    : 'bg-neutral-900/50 border-neutral-800 hover:bg-neutral-800'
                }`}
            >
                <div className={`font-black text-xl w-6 transition-colors ${ex.completed ? 'text-green-500' : 'text-red-600 opacity-80'}`}>
                    0{idx + 1}
                </div>
                <div className="flex-1">
                    <h4 className={`font-bold text-sm transition-colors ${ex.completed ? 'text-green-400 line-through' : 'text-white'}`}>
                        {ex.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <Timer size={10} />
                        <span>{ex.duration} execução / {ex.rest} descanso</span>
                    </div>
                </div>
                {ex.completed ? (
                    <CheckCircle2 className="text-green-500" size={20} />
                ) : (
                    <Circle className="text-gray-700" size={20} />
                )}
            </div>
        ))}
      </div>

      {/* PDF Bonus */}
      <div 
        onClick={() => openContent('hiit')}
        className="mt-6 p-5 bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-xl border border-yellow-600/20 flex items-center justify-between shadow-lg cursor-pointer active:scale-[0.98] transition hover:border-yellow-600/50"
      >
          <div className="flex gap-4 items-center">
              <div className="bg-yellow-600/20 p-3 rounded-lg">
                  <Download className="text-yellow-500" size={20} />
              </div>
              <div>
                  <div className="text-[10px] font-bold text-yellow-500 uppercase tracking-wider">Material de Apoio</div>
                  <div className="text-sm font-bold text-white">Ler Manual HIIT (Teoria)</div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Workout;