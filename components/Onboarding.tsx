import React, { useState } from 'react';
import { Flame } from 'lucide-react';
import { UserProfile } from '../types';

interface OnboardingProps {
  onComplete: (profile: UserProfile) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('8');
  const [diet, setDiet] = useState('none');
  const [focus, setFocus] = useState('barriga');

  const handleSubmit = () => {
    if (!name.trim()) return alert("Assine o contrato com seu nome.");
    onComplete({
      name,
      weightLossGoal: goal,
      dietRestriction: diet,
      bodyFocus: focus
    });
  };

  return (
    <div className="absolute inset-0 z-50 bg-black flex flex-col justify-center items-center p-6 text-center">
      <div className="mb-8 w-24 h-24 bg-red-600 rounded-full flex items-center justify-center neon-glow animate-pulse-fast">
        <Flame size={48} className="text-white" />
      </div>
      
      <h1 className="text-4xl font-black mb-2 text-white uppercase tracking-tighter leading-none">
        Protocolo<br />
        <span className="text-red-600">Natal Sem Vergonha™</span>
      </h1>
      
      <p className="text-gray-400 mb-10 text-sm max-w-xs font-medium">
        Você falhou o ano todo. Agora tem 21 dias para consertar. Vai encarar?
      </p>
      
      <div className="w-full max-w-md space-y-4 animate-slide-up">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="SEU NOME (ASSINATURA)"
          className="w-full p-5 bg-neutral-900 rounded-xl border border-neutral-800 text-white focus:border-red-600 outline-none transition font-bold placeholder-gray-600 text-center uppercase"
        />
        
        <div className="relative">
          <label className="absolute -top-2 left-4 bg-black px-1 text-[10px] text-red-500 font-bold uppercase">Meta de Peso</label>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full p-5 bg-neutral-900 rounded-xl border border-neutral-800 text-white outline-none appearance-none font-medium"
          >
            <option value="6">Quero perder 6kg (Mínimo)</option>
            <option value="9">Quero perder 9kg (Desafio)</option>
            <option value="12">Quero perder 12kg (Modo Hardcore)</option>
          </select>
        </div>

        <div className="flex gap-3">
          <select
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
            className="w-1/2 p-4 bg-neutral-900 rounded-xl border border-neutral-800 text-white outline-none text-sm font-medium"
          >
            <option value="none">Sem Restrições</option>
            <option value="lactose">Sem Lactose</option>
            <option value="gluten">Sem Glúten</option>
            <option value="vegan">Vegano</option>
          </select>
          
          <select
            value={focus}
            onChange={(e) => setFocus(e.target.value)}
            className="w-1/2 p-4 bg-neutral-900 rounded-xl border border-neutral-800 text-white outline-none text-sm font-medium"
          >
            <option value="barriga">Secar Barriga</option>
            <option value="perna">Pernas/Glúteo</option>
            <option value="geral">Corpo Todo</option>
          </select>
        </div>
        
        <button
          onClick={handleSubmit}
          className="w-full mt-4 bg-gradient-to-r from-red-700 to-red-600 text-white font-black py-6 rounded-xl uppercase tracking-widest shadow-lg transform active:scale-95 transition border border-red-500/50 hover:neon-glow"
        >
          ACESSAR PROTOCOLO
        </button>
      </div>
    </div>
  );
};

export default Onboarding;