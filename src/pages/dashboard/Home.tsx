import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useProgress } from '@/hooks/useProgress';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Circle, Droplets, Dumbbell, Utensils, ArrowRight, Sparkles } from 'lucide-react';

export default function DashboardHome() {
  const { user } = useAuth();
  const { profile, loading, calculateOverallProgress, getTodayProgress, updateDayProgress } = useProgress();

  const overallProgress = calculateOverallProgress();
  const todayProgress = getTodayProgress();
  const currentDay = profile?.current_day || 1;
  const firstName = profile?.full_name?.split(' ')[0] || 'Musa';

  const weekNumber = Math.ceil(currentDay / 7);
  const dayOfWeek = ((currentDay - 1) % 7) + 1;

  const todayTasks = [
    {
      id: 'workout',
      label: 'Treino do Dia',
      description: currentDay % 2 === 0 ? 'Treino B - Inferiores' : 'Treino A - Superiores',
      icon: Dumbbell,
      completed: todayProgress.workout_completed,
      field: 'workout_completed' as const,
    },
    {
      id: 'water',
      label: 'Meta de Hidratação',
      description: '2L de água',
      icon: Droplets,
      completed: todayProgress.water_goal_completed,
      field: 'water_goal_completed' as const,
    },
    {
      id: 'meal',
      label: 'Plano Alimentar',
      description: 'Seguir a estrutura do dia',
      icon: Utensils,
      completed: todayProgress.meal_plan_followed,
      field: 'meal_plan_followed' as const,
    },
  ];

  const handleToggleTask = async (field: 'workout_completed' | 'water_goal_completed' | 'meal_plan_followed', current: boolean) => {
    await updateDayProgress(currentDay, field, !current);
  };

  if (loading) {
    return (
      <div className="animate-pulse space-y-6">
        <div className="h-24 bg-muted rounded-2xl" />
        <div className="h-48 bg-muted rounded-2xl" />
        <div className="h-32 bg-muted rounded-2xl" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-sm text-primary font-medium">Semana {weekNumber} • Dia {dayOfWeek}</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold">
          Olá, {firstName}! 💕
        </h1>
        <p className="text-muted-foreground">
          Vamos para o dia <span className="font-semibold text-primary">{currentDay}</span> do seu protocolo?
        </p>
      </div>

      {/* Progress Card */}
      <Card id="tour-progress" className="card-musa overflow-hidden">
        <div className="gradient-pink p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm opacity-90">Progresso Geral</p>
              <p className="text-3xl font-bold">{overallProgress}%</p>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">Dias completados</p>
              <p className="text-xl font-semibold">
                {Math.floor((overallProgress / 100) * 28)} de 28
              </p>
            </div>
          </div>
          <Progress
            value={overallProgress}
            className="h-3 bg-white/30"
          />
        </div>
      </Card>

      {/* Today's Tasks */}
      <Card id="tour-checklist" className="card-musa">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>Checklist do Dia {currentDay}</span>
          </CardTitle>
          <CardDescription>Marque conforme completar cada tarefa</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {todayTasks.map((task) => (
            <button
              key={task.id}
              onClick={() => handleToggleTask(task.field, task.completed)}
              className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left ${task.completed
                  ? 'bg-primary/10 border-primary/30'
                  : 'bg-muted/50 border-transparent hover:border-primary/20'
                }`}
            >
              {task.completed ? (
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              ) : (
                <Circle className="w-6 h-6 text-muted-foreground flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <p className={`font-medium ${task.completed ? 'text-primary' : ''}`}>
                  {task.label}
                </p>
                <p className="text-sm text-muted-foreground truncate">
                  {task.description}
                </p>
              </div>
              <task.icon className={`w-5 h-5 flex-shrink-0 ${task.completed ? 'text-primary' : 'text-muted-foreground'
                }`} />
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Link to="/dashboard/treinos">
          <Card className="card-musa hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-2">
              <Dumbbell className="w-8 h-8 text-primary" />
              <span className="font-medium text-sm">Ver Treinos</span>
            </CardContent>
          </Card>
        </Link>
        <Link to="/dashboard/protocolo">
          <Card className="card-musa hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-2">
              <Utensils className="w-8 h-8 text-primary" />
              <span className="font-medium text-sm">Plano Alimentar</span>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Motivation */}
      <Card className="card-musa bg-gradient-to-br from-card to-accent/30">
        <CardContent className="p-6 text-center">
          <p className="text-lg font-medium italic text-foreground/80">
            "Consistência é a chave. Cada dia conta na sua transformação." ✨
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
