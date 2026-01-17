import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface DailyProgress {
  day_number: number;
  workout_completed: boolean;
  water_goal_completed: boolean;
  meal_plan_followed: boolean;
}

interface Profile {
  current_day: number;
  full_name: string | null;
}

export function useProgress() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [progress, setProgress] = useState<DailyProgress[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProgress = async () => {
    if (!user) return;

    try {
      const [progressResult, profileResult] = await Promise.all([
        supabase
          .from('daily_progress')
          .select('day_number, workout_completed, water_goal_completed, meal_plan_followed')
          .eq('user_id', user.id)
          .order('day_number', { ascending: true }),
        supabase
          .from('profiles')
          .select('current_day, full_name')
          .eq('user_id', user.id)
          .maybeSingle()
      ]);

      if (progressResult.error) throw progressResult.error;
      if (profileResult.error) throw profileResult.error;

      if (progressResult.data) {
        setProgress(progressResult.data);
      }

      if (profileResult.data) {
        setProfile(profileResult.data);
      }
    } catch (error: any) {
      console.error('Error fetching progress:', error);
      toast({
        title: "Erro ao carregar dados",
        description: error.message || "Verifique sua conexão.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProgress();
  }, [user]);

  const updateDayProgress = async (
    dayNumber: number,
    field: 'workout_completed' | 'water_goal_completed' | 'meal_plan_followed',
    value: boolean
  ) => {
    if (!user) return;

    // Optimistic Update
    const oldProgress = [...progress];
    setProgress(prev => {
      const index = prev.findIndex(p => p.day_number === dayNumber);
      if (index >= 0) {
        const newArr = [...prev];
        newArr[index] = { ...newArr[index], [field]: value };
        return newArr;
      } else {
        return [...prev, {
          day_number: dayNumber,
          workout_completed: field === 'workout_completed' ? value : false,
          water_goal_completed: field === 'water_goal_completed' ? value : false,
          meal_plan_followed: field === 'meal_plan_followed' ? value : false,
        }];
      }
    });

    try {
      // Try to update directly explicitly checking unique constraint via Upsert logic provided by Supabase
      // But since we want to be granular, let's check existence (or we rely on the state we just fetched).
      // Best approach: UPSERT with day_number + user_id.

      // Prepare the payload. We need all fields for an UPSERT if we don't want to overwrite with nulls? 
      // No, we can select first or just use what we have in state.

      const currentItem = progress.find(p => p.day_number === dayNumber);

      const payload = {
        user_id: user.id,
        day_number: dayNumber,
        workout_completed: field === 'workout_completed' ? value : currentItem?.workout_completed ?? false,
        water_goal_completed: field === 'water_goal_completed' ? value : currentItem?.water_goal_completed ?? false,
        meal_plan_followed: field === 'meal_plan_followed' ? value : currentItem?.meal_plan_followed ?? false,
      };

      const { error } = await supabase
        .from('daily_progress')
        .upsert(payload, { onConflict: 'user_id,day_number' });

      if (error) throw error;
      return true;

    } catch (error: any) {
      console.error('Error updating progress:', error);
      // Revert state
      setProgress(oldProgress);
      toast({
        title: "Erro ao salvar",
        description: "Não foi possível salvar sua alteração. " + (error.message || ""),
        variant: "destructive"
      });
      return false;
    }
  };

  const calculateOverallProgress = () => {
    const completedDays = progress.filter(
      p => p.workout_completed && p.water_goal_completed && p.meal_plan_followed
    ).length;
    return Math.round((completedDays / 28) * 100);
  };

  const getTodayProgress = () => {
    const currentDay = profile?.current_day || 1;
    return progress.find(p => p.day_number === currentDay) || {
      day_number: currentDay,
      workout_completed: false,
      water_goal_completed: false,
      meal_plan_followed: false,
    };
  };

  return {
    progress,
    profile,
    loading,
    updateDayProgress,
    calculateOverallProgress,
    getTodayProgress,
    refetch: fetchProgress,
  };
}
