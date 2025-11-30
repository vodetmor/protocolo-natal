import React, { useState, useEffect } from 'react';
import { RefreshCw, Clock, ChefHat } from 'lucide-react';
import { UserProfile, DietMeal, ContentId } from '../types';

interface DietProps {
  user: UserProfile;
  openContent: (id: ContentId) => void;
}

const Diet: React.FC<DietProps> = ({ user, openContent }) => {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState<DietMeal[]>([]);

  const generatePlan = () => {
    setLoading(true);
    // Simulate API delay for engagement
    setTimeout(() => {
        const isVegan = user.dietRestriction === 'vegan';
        const isGlutenFree = user.dietRestriction === 'gluten';

        const protein = isVegan ? 'Tofu Grelhado ou Grão de Bico' : 'Frango Desfiado ou Peixe Branco';
        const carb = isGlutenFree ? 'Mandioca' : 'Arroz Integral';
        const snack = isVegan ? 'Mix de Castanhas' : 'Iogurte Natural Desnatado';

        setMeals([
            {
                time: '07:00',
                title: 'Café da Manhã',
                description: `${isVegan ? 'Mexido de Tofu com Cúrcuma' : '2 Ovos Mexidos'} + Café preto sem açúcar + 1 fatia de Melão.`,
                color: 'border-green-500'
            },
            {
                time: '12:00',
                title: 'Almoço',
                description: `Salada de folhas verdes (à vontade) + 150g de ${protein} + 3 colheres de ${carb}. Azeite: max 1 fio.`,
                color: 'border-yellow-500'
            },
            {
                time: '16:00',
                title: 'Lanche da Tarde',
                description: `1 Maçã ou Pera + ${snack}. Beba 500ml de água antes de comer.`,
                color: 'border-orange-500'
            },
            {
                time: '20:00',
                title: 'Jantar Low Carb',
                description: `Omelete de 2 ovos com espinafre (ou Proteína Vegetal) + Legumes no vapor. SEM CARBOIDRATO.`,
                color: 'border-blue-500'
            }
        ]);
        setLoading(false);
    }, 1200);
  };

  useEffect(() => {
    generatePlan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-6 space-y-6 animate-slide-up pb-24">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-black italic uppercase text-white">Protocolo Alimentar</h2>
        <button 
            onClick={generatePlan}
            disabled={loading}
            className="text-xs bg-neutral-800 px-3 py-2 rounded-lg border border-neutral-700 hover:bg-neutral-700 flex items-center gap-2 transition active:scale-95 text-gray-300"
        >
            <RefreshCw size={12} className={loading ? 'animate-spin' : ''} />
            Gerar Novo
        </button>
      </div>
      
      <p className="text-sm text-gray-400">
        Plano ajustado para: <span className="text-white font-bold capitalize">{user.dietRestriction === 'none' ? 'Sem Restrições' : user.dietRestriction}</span>
      </p>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-12 h-12 border-4 border-t-red-600 border-gray-800 rounded-full animate-spin"></div>
            <p className="text-xs text-red-500 font-bold animate-pulse">Calculando macros para secar...</p>
        </div>
      ) : (
        <div className="space-y-4">
            {meals.map((meal, idx) => (
                <div key={idx} className={`glass p-5 rounded-xl border-l-4 ${meal.color} relative group hover:bg-neutral-800 transition`}>
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-neutral-900 px-2 py-1 rounded text-[10px] text-gray-400 font-mono border border-neutral-800">
                        <Clock size={10} />
                        {meal.time}
                    </div>
                    <h4 className="font-bold text-white mb-2 text-lg">{meal.title}</h4>
                    <p className="text-sm text-gray-300 leading-relaxed font-medium">{meal.description}</p>
                </div>
            ))}
        </div>
      )}

      {/* Embedded Recipe Bonus */}
      <div className="mt-8 pt-6 border-t border-gray-800/50">
        <div 
          onClick={() => openContent('recipes')}
          className="glass border border-orange-900/30 rounded-xl p-4 flex gap-4 items-center cursor-pointer hover:bg-orange-900/10 transition group"
        >
            <div className="w-16 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded shadow-lg flex flex-col items-center justify-center shrink-0 group-hover:scale-105 transition">
                <ChefHat className="text-white text-xl mb-1" />
                <span className="text-[8px] font-bold text-white uppercase">E-book</span>
            </div>
            <div>
                <h4 className="font-bold text-orange-400 text-sm">Precisa de um doce?</h4>
                <p className="text-xs text-gray-400 mb-3">Acesse o Guia de 50 Receitas Saborosas & Fit.</p>
                <span className="text-[10px] bg-orange-600/20 text-orange-200 border border-orange-600/50 px-2 py-1 rounded font-bold uppercase tracking-wide">Abrir Livro</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Diet;