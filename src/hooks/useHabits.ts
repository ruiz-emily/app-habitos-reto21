// src/hooks/useHabits.ts
import { useState } from 'react';
import { INITIAL_HABITS, Habit } from '../constants/habitsData';

export function useHabits() {
  const [habits] = useState<Habit[]>(INITIAL_HABITS);
  const [completedDays, setCompletedDays] = useState<Record<string, boolean>>({});

  const toggleHabitDay = (habitId: string, day: number) => {
    const key = `${habitId}-${day}`;
    setCompletedDays((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isCompleted = (habitId: string, day: number) => {
    return !!completedDays[`${habitId}-${day}`];
  };

  const calculateProgress = () => {
    const totalPossible = habits.length * 21;
    const totalCompleted = Object.values(completedDays).filter(Boolean).length;
    if (totalPossible === 0) return 0;
    return Math.round((totalCompleted / totalPossible) * 100);
  };

  return {
    habits,
    completedDays,
    toggleHabitDay,
    isCompleted,
    calculateProgress,
  };
}