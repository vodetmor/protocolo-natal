import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

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

      if (progressResult.data) {
        setProgress(progressResult.data);
      }

      if (profileResult.data) {
        setProfile(profileResult.data);
      }
    } catch (error) {
      console.error('Error fetching progress:', error);
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

    const existingDay = progress.find(p => p.day_number === dayNumber);

    if (existingDay) {
      const { error } = await supabase
        .from('daily_progress')
        .update({ [field]: value })
        .eq('user_id', user.id)
        .eq('day_number', dayNumber);

      if (!error) {
        setProgress(prev =>
          prev.map(p =>
            p.day_number === dayNumber ? { ...p, [field]: value } : p
          )
        );
      }
    } else {
      const { error } = await supabase
        .from('daily_progress')
        .insert({
          user_id: user.id,
          day_number: dayNumber,
          [field]: value,
        });

      if (!error) {
        setProgress(prev => [
          ...prev,
          {
            day_number: dayNumber,
            workout_completed: field === 'workout_completed' ? value : false,
            water_goal_completed: field === 'water_goal_completed' ? value : false,
            meal_plan_followed: field === 'meal_plan_followed' ? value : false,
          },
        ]);
      }
    }
  };

  const completeWorkout = async (dayNumber: number) => {
    await updateDayProgress(dayNumber, 'workout_completed', true);
  };

  const updateCurrentDay = async (newDay: number) => {
    if (!user) return;

    const { error } = await supabase
      .from('profiles')
      .update({ current_day: newDay })
      .eq('user_id', user.id);

    if (!error) {
      setProfile(prev => prev ? { ...prev, current_day: newDay } : null);
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
    completeWorkout,
    updateCurrentDay,
    calculateOverallProgress,
    getTodayProgress,
    refetch: fetchProgress,
  };
}
