import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Leaf, Droplets, Apple, Coffee } from 'lucide-react';

const weeklyContent = [
  {
    week: 1,
    title: 'Semana 1 - Adaptação',
    focus: 'Desintoxicação e Preparação',
    description: 'Nesta primeira semana, o foco é limpar o organismo e preparar seu corpo para a transformação. Reduza açúcares processados, aumente a hidratação e comece a criar novos hábitos.',
    tips: [
      'Beba no mínimo 2L de água por dia',
      'Evite refrigerantes e sucos industrializados',
      'Reduza o consumo de sal e temperos prontos',
      'Durma pelo menos 7 horas por noite',
    ],
    meals: {
      breakfast: ['Ovos mexidos com legumes', 'Iogurte natural com frutas', 'Tapioca com queijo cottage'],
      lunch: ['Proteína magra (frango, peixe ou carne)', 'Salada verde abundante', 'Arroz integral ou batata doce'],
      dinner: ['Sopa de legumes com frango', 'Omelete com salada', 'Peixe grelhado com legumes'],
      snacks: ['Frutas frescas', 'Castanhas (punhado)', 'Iogurte natural'],
    },
  },
  {
    week: 2,
    title: 'Semana 2 - Aceleração',
    focus: 'Intensificação do Metabolismo',
    description: 'Seu corpo já está mais adaptado. Agora vamos acelerar o metabolismo com alimentação estratégica e treinos mais intensos. Mantenha a consistência!',
    tips: [
      'Adicione alimentos termogênicos (gengibre, canela, pimenta)',
      'Faça refeições a cada 3-4 horas',
      'Aumente a proteína em cada refeição',
      'Mantenha os treinos regulares',
    ],
    meals: {
      breakfast: ['Panqueca de banana com whey', 'Mingau de aveia com canela', 'Smoothie verde proteico'],
      lunch: ['Frango grelhado com quinoa', 'Carne magra com legumes assados', 'Salmão com aspargos'],
      dinner: ['Salada proteica completa', 'Wrap de alface com frango', 'Creme de abóbora com frango desfiado'],
      snacks: ['Shake proteico', 'Ovos cozidos', 'Pasta de amendoim com maçã'],
    },
  },
  {
    week: 3,
    title: 'Semana 3 - Potencialização',
    focus: 'Resultados Visíveis',
    description: 'Você está no auge! Os resultados começam a aparecer de forma mais visível. Continue firme, ajuste a intensidade dos treinos e mantenha a alimentação limpa.',
    tips: [
      'Aumente a intensidade dos treinos',
      'Reduza ainda mais os carboidratos simples',
      'Foque em proteínas de alta qualidade',
      'Tire fotos para comparar sua evolução',
    ],
    meals: {
      breakfast: ['Omelete de claras com espinafre', 'Bowl de açaí fit (sem açúcar)', 'Crepioca recheada'],
      lunch: ['Bowl de frango com legumes grelhados', 'Picanha light com salada', 'Moqueca fit de peixe'],
      dinner: ['Carpaccio de abobrinha com frango', 'Espaguete de abobrinha com molho', 'Poke bowl fit'],
      snacks: ['Whey com água de coco', 'Mix de oleaginosas', 'Palitos de cenoura com homus'],
    },
  },
  {
    week: 4,
    title: 'Semana 4 - Consolidação',
    focus: 'Manutenção e Resultados',
    description: 'Última semana! Hora de consolidar todos os hábitos criados. Você construiu uma nova versão de si mesma. Agora é sobre manter e celebrar sua transformação.',
    tips: [
      'Mantenha os hábitos que funcionaram',
      'Celebre cada conquista',
      'Planeje como manter os resultados',
      'Considere repetir o protocolo para potencializar',
    ],
    meals: {
      breakfast: ['Suas opções favoritas das semanas anteriores', 'Variar conforme preferência', 'Manter padrão proteico'],
      lunch: ['Refeições que você mais gostou', 'Manter equilíbrio de macros', 'Continuar com proteínas magras'],
      dinner: ['Opções leves e nutritivas', 'Evitar carboidratos à noite', 'Finalizar o dia com leveza'],
      snacks: ['Snacks que você mais curtiu', 'Manter hidratação', 'Frutas e proteínas'],
    },
  },
];

export default function Protocolo() {
  const [activeWeek, setActiveWeek] = useState('1');

  const currentWeekData = weeklyContent.find(w => w.week.toString() === activeWeek);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">O Protocolo</h1>
        <p className="text-muted-foreground">Seu guia completo de 28 dias</p>
      </div>

      {/* Week Tabs */}
      <Tabs value={activeWeek} onValueChange={setActiveWeek} className="w-full">
        <TabsList className="grid grid-cols-4 h-auto p-1 bg-muted/50">
          {weeklyContent.map((week) => (
            <TabsTrigger
              key={week.week}
              value={week.week.toString()}
              className="flex flex-col gap-0.5 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
            >
              <span className="text-xs opacity-80">Semana</span>
              <span className="text-lg font-bold">{week.week}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {weeklyContent.map((week) => (
          <TabsContent key={week.week} value={week.week.toString()} className="mt-6 space-y-6">
            {/* Week Overview */}
            <Card className="card-musa overflow-hidden">
              <div className="gradient-pink p-6 text-white">
                <Badge variant="secondary" className="bg-white/20 text-white border-0 mb-2">
                  {week.focus}
                </Badge>
                <h2 className="text-xl font-bold">{week.title}</h2>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">{week.description}</p>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="card-musa">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Dicas da Semana
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {week.tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      {index + 1}
                    </span>
                    <span>{tip}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Meal Plan */}
            <Card className="card-musa">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Leaf className="w-5 h-5 text-primary" />
                  Estrutura Alimentar Flexível
                </CardTitle>
                <CardDescription>Escolha uma opção de cada refeição</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="breakfast">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Coffee className="w-5 h-5 text-primary" />
                        <span>Café da Manhã</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pl-8">
                        {week.meals.breakfast.map((meal, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {meal}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="lunch">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Apple className="w-5 h-5 text-primary" />
                        <span>Almoço</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pl-8">
                        {week.meals.lunch.map((meal, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {meal}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="dinner">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Droplets className="w-5 h-5 text-primary" />
                        <span>Jantar</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pl-8">
                        {week.meals.dinner.map((meal, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {meal}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="snacks">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Leaf className="w-5 h-5 text-primary" />
                        <span>Lanches</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pl-8">
                        {week.meals.snacks.map((meal, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {meal}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
