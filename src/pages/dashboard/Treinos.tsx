import { useState } from 'react';
import { useProgress } from '@/hooks/useProgress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Dumbbell, Home, Timer, Star, CheckCircle2, Play } from 'lucide-react';

const workouts = {
  gym: [
    {
      id: 'a',
      name: 'Treino A - Superiores',
      description: 'Peito, costas e braços',
      exercises: [
        { name: 'Supino reto', sets: '4x12', rest: '60s' },
        { name: 'Remada curvada', sets: '4x12', rest: '60s' },
        { name: 'Desenvolvimento', sets: '3x12', rest: '60s' },
        { name: 'Rosca direta', sets: '3x15', rest: '45s' },
        { name: 'Tríceps corda', sets: '3x15', rest: '45s' },
        { name: 'Elevação lateral', sets: '3x15', rest: '45s' },
      ],
    },
    {
      id: 'b',
      name: 'Treino B - Inferiores',
      description: 'Glúteos, coxas e panturrilha',
      exercises: [
        { name: 'Agachamento livre', sets: '4x15', rest: '60s' },
        { name: 'Leg press 45°', sets: '4x12', rest: '60s' },
        { name: 'Stiff', sets: '4x12', rest: '60s' },
        { name: 'Cadeira extensora', sets: '3x15', rest: '45s' },
        { name: 'Mesa flexora', sets: '3x15', rest: '45s' },
        { name: 'Elevação pélvica', sets: '4x20', rest: '45s' },
        { name: 'Panturrilha em pé', sets: '4x20', rest: '30s' },
      ],
    },
    {
      id: 'c',
      name: 'Treino C - Full Body',
      description: 'Treino completo para dias alternados',
      exercises: [
        { name: 'Agachamento sumô', sets: '4x15', rest: '60s' },
        { name: 'Supino inclinado', sets: '3x12', rest: '60s' },
        { name: 'Puxada frontal', sets: '3x12', rest: '60s' },
        { name: 'Afundo', sets: '3x12 cada', rest: '45s' },
        { name: 'Remada unilateral', sets: '3x12', rest: '45s' },
        { name: 'Abdominais', sets: '3x20', rest: '30s' },
      ],
    },
  ],
  home: [
    {
      id: 'home-a',
      name: 'Treino A - Superiores (Casa)',
      description: 'Sem equipamentos ou com elásticos',
      exercises: [
        { name: 'Flexão de braço', sets: '4x max', rest: '60s' },
        { name: 'Flexão diamante', sets: '3x max', rest: '60s' },
        { name: 'Remada com elástico', sets: '4x15', rest: '45s' },
        { name: 'Tríceps banco', sets: '3x15', rest: '45s' },
        { name: 'Rosca com elástico', sets: '3x15', rest: '45s' },
        { name: 'Prancha', sets: '3x45s', rest: '30s' },
      ],
    },
    {
      id: 'home-b',
      name: 'Treino B - Inferiores (Casa)',
      description: 'Foco em glúteos sem equipamentos',
      exercises: [
        { name: 'Agachamento livre', sets: '4x20', rest: '60s' },
        { name: 'Afundo alternado', sets: '4x15 cada', rest: '60s' },
        { name: 'Elevação pélvica', sets: '4x25', rest: '45s' },
        { name: 'Agachamento sumô', sets: '3x20', rest: '45s' },
        { name: 'Coice (Kickback)', sets: '3x20 cada', rest: '45s' },
        { name: 'Abdução lateral', sets: '3x20 cada', rest: '30s' },
        { name: 'Panturrilha unilateral', sets: '3x25 cada', rest: '30s' },
      ],
    },
  ],
  quick: [
    {
      id: 'quick-hiit',
      name: 'HIIT 30min',
      description: 'Queima máxima em pouco tempo',
      premium: true,
      exercises: [
        { name: 'Aquecimento (Polichinelo)', sets: '3min', rest: '-' },
        { name: 'Burpees', sets: '45s on / 15s off x4', rest: '-' },
        { name: 'Mountain climber', sets: '45s on / 15s off x4', rest: '-' },
        { name: 'Agachamento com salto', sets: '45s on / 15s off x4', rest: '-' },
        { name: 'Corrida no lugar (joelhos altos)', sets: '45s on / 15s off x4', rest: '-' },
        { name: 'Prancha dinâmica', sets: '45s on / 15s off x4', rest: '-' },
        { name: 'Alongamento', sets: '3min', rest: '-' },
      ],
    },
    {
      id: 'quick-glutes',
      name: 'Glúteos Express',
      description: 'Foco máximo em 30 minutos',
      premium: true,
      exercises: [
        { name: 'Agachamento profundo', sets: '4x20', rest: '30s' },
        { name: 'Elevação pélvica', sets: '4x25', rest: '30s' },
        { name: 'Afundo búlgaro', sets: '3x15 cada', rest: '30s' },
        { name: 'Abdução com elástico', sets: '3x20', rest: '30s' },
        { name: 'Coice no solo', sets: '3x20 cada', rest: '30s' },
        { name: 'Isometria em agachamento', sets: '3x30s', rest: '30s' },
      ],
    },
  ],
};

export default function Treinos() {
  const [activeTab, setActiveTab] = useState('gym');
  const { profile, completeWorkout } = useProgress();
  const { toast } = useToast();
  const [completedWorkouts, setCompletedWorkouts] = useState<string[]>([]);

  const currentDay = profile?.current_day || 1;

  const handleCompleteWorkout = async (workoutId: string) => {
    if (completedWorkouts.includes(workoutId)) {
      toast({
        title: 'Treino já concluído! 💪',
        description: 'Você já finalizou este treino hoje.',
      });
      return;
    }

    await completeWorkout(currentDay);
    setCompletedWorkouts(prev => [...prev, workoutId]);
    
    toast({
      title: 'Parabéns, Musa! 🎉',
      description: 'Treino concluído com sucesso! Continue assim!',
    });
  };

  const currentWorkouts = workouts[activeTab as keyof typeof workouts];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Área de Treinos</h1>
        <p className="text-muted-foreground">Escolha o tipo de treino ideal para você</p>
      </div>

      {/* Filter Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 h-auto p-1 bg-muted/50">
          <TabsTrigger
            value="gym"
            className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
          >
            <Dumbbell className="w-4 h-4" />
            <span className="hidden sm:inline">Academia</span>
            <span className="sm:hidden">Gym</span>
          </TabsTrigger>
          <TabsTrigger
            value="home"
            className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
          >
            <Home className="w-4 h-4" />
            <span>Em Casa</span>
          </TabsTrigger>
          <TabsTrigger
            value="quick"
            className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
          >
            <Timer className="w-4 h-4" />
            <span className="hidden sm:inline">Rápido</span>
            <span className="sm:hidden">30min</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6 space-y-4">
          {currentWorkouts.map((workout) => (
            <Card key={workout.id} className="card-musa overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <CardTitle className="text-lg">{workout.name}</CardTitle>
                      {'premium' in workout && workout.premium && (
                        <span className="badge-premium">
                          <Star className="w-3 h-3" />
                          Bônus
                        </span>
                      )}
                    </div>
                    <CardDescription>{workout.description}</CardDescription>
                  </div>
                  {completedWorkouts.includes(workout.id) && (
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Exercises List */}
                <div className="space-y-2">
                  {workout.exercises.map((exercise, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                          {idx + 1}
                        </span>
                        <span className="font-medium text-sm">{exercise.name}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <Badge variant="secondary" className="font-mono">
                          {exercise.sets}
                        </Badge>
                        {exercise.rest !== '-' && (
                          <span className="text-primary">⏱ {exercise.rest}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Complete Button */}
                <Button
                  className={`w-full rounded-xl ${
                    completedWorkouts.includes(workout.id)
                      ? 'bg-primary/20 text-primary hover:bg-primary/30'
                      : 'gradient-pink'
                  }`}
                  onClick={() => handleCompleteWorkout(workout.id)}
                >
                  {completedWorkouts.includes(workout.id) ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Treino Concluído!
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Concluir Treino
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Tips */}
      <Card className="card-musa bg-gradient-to-br from-card to-accent/30">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Star className="w-4 h-4 text-primary" />
            Dica de Ouro
          </h3>
          <p className="text-sm text-muted-foreground">
            Lembre-se: a técnica correta é mais importante que a carga. Faça cada movimento com 
            atenção e controle. Seu corpo vai agradecer! 💕
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
