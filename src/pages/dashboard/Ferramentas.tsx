import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { useProgress } from '@/hooks/useProgress';
import { Star, Zap, AlertCircle, CheckSquare, Utensils, MapPin } from 'lucide-react';

const emergencyMeals = [
  { category: 'Café da Manhã Rápido', items: ['2 ovos cozidos + 1 banana', 'Iogurte natural + granola sem açúcar', 'Tapioca com queijo cottage'] },
  { category: 'Almoço Express', items: ['Salada pronta + frango desfiado', 'Wrap de alface com atum', 'Marmita fit congelada'] },
  { category: 'Jantar Emergencial', items: ['Omelete de 3 ovos com legumes', 'Sopa instantânea + proteína', 'Sanduíche natural de frango'] },
  { category: 'Lanches de Emergência', items: ['Punhado de castanhas', 'Banana com pasta de amendoim', 'Queijo cottage com tomate'] },
];

const outsideEatingGuide = [
  {
    title: '1. Não entre em pânico',
    content: 'Um deslize não destrói seu progresso. O importante é voltar ao plano na próxima refeição.',
  },
  {
    title: '2. Estratégias para restaurantes',
    content: 'Peça proteína grelhada + salada. Evite molhos e frituras. Beba água antes de comer.',
  },
  {
    title: '3. Em festas e eventos',
    content: 'Coma algo leve antes de sair. Foque em proteínas e vegetais. Limite bebidas alcoólicas.',
  },
  {
    title: '4. Fast food de emergência',
    content: 'Escolha saladas ou wraps. Retire o pão se possível. Peça água ao invés de refrigerante.',
  },
  {
    title: '5. O dia seguinte',
    content: 'Beba mais água. Faça um treino mesmo que leve. Volte 100% ao plano alimentar.',
  },
];

export default function Ferramentas() {
  const { profile, getTodayProgress, updateDayProgress } = useProgress();
  const currentDay = profile?.current_day || 1;
  const todayProgress = getTodayProgress();

  const weeklyChecklist = [
    { id: 'workout', label: 'Treino feito', checked: todayProgress.workout_completed, field: 'workout_completed' as const },
    { id: 'water', label: 'Água ok (2L+)', checked: todayProgress.water_goal_completed, field: 'water_goal_completed' as const },
    { id: 'meal', label: 'Segui o plano alimentar', checked: todayProgress.meal_plan_followed, field: 'meal_plan_followed' as const },
  ];

  const handleCheckChange = async (field: 'workout_completed' | 'water_goal_completed' | 'meal_plan_followed', checked: boolean) => {
    await updateDayProgress(currentDay, field, checked);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Ferramentas & Bônus</h1>
        <p className="text-muted-foreground">Materiais extras para potencializar seus resultados</p>
      </div>

      {/* Weekly Checklist */}
      <Card className="card-musa">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">Checklist do Dia {currentDay}</CardTitle>
            </div>
          </div>
          <CardDescription>Marque suas conquistas de hoje</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {weeklyChecklist.map((item) => (
            <div
              key={item.id}
              className={`flex items-center space-x-4 p-4 rounded-xl border transition-all duration-200 ${
                item.checked
                  ? 'bg-primary/10 border-primary/30'
                  : 'bg-muted/30 border-transparent hover:border-primary/20'
              }`}
            >
              <Checkbox
                id={item.id}
                checked={item.checked}
                onCheckedChange={(checked) => handleCheckChange(item.field, checked as boolean)}
                className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <label
                htmlFor={item.id}
                className={`flex-1 font-medium cursor-pointer ${
                  item.checked ? 'text-primary' : ''
                }`}
              >
                {item.label}
              </label>
              {item.checked && (
                <span className="text-lg">✨</span>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Emergency Menu */}
      <Card className="card-musa">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Cardápio de Emergência</CardTitle>
            <span className="badge-premium">
              <Star className="w-3 h-3" />
              Bônus
            </span>
          </div>
          <CardDescription>Opções rápidas para dias corridos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            {emergencyMeals.map((meal, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-muted/50">
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-primary" />
                  {meal.category}
                </h4>
                <ul className="space-y-1">
                  {meal.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Outside Eating Guide */}
      <Card className="card-musa">
        <CardHeader>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Guia "Comi fora, e agora?"</CardTitle>
            <span className="badge-premium">
              <Star className="w-3 h-3" />
              Bônus
            </span>
          </div>
          <CardDescription>Estratégias para voltar ao foco</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {outsideEatingGuide.map((step, idx) => (
              <AccordionItem key={idx} value={`step-${idx}`}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                      {idx + 1}
                    </span>
                    <span>{step.title.substring(3)}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-9 text-muted-foreground">
                  {step.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Motivation Card */}
      <Card className="card-musa bg-gradient-to-br from-primary/5 to-accent/30 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold mb-1">Lembre-se, Musa!</h3>
              <p className="text-sm text-muted-foreground">
                O progresso não é linear. Dias difíceis fazem parte da jornada. 
                O importante é nunca desistir e sempre voltar ao plano. 
                Você é mais forte do que imagina! 💪💕
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
