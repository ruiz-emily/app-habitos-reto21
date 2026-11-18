import { useState, useMemo } from 'react';
import { Habit, INITIAL_HABITS, CHALLENGE_DAYS } from '../constants/habitsData';

export function useHabits() {
  const [habits, setHabits] = useState<Habit[]>(INITIAL_HABITS);
  const [currentDay, setCurrentDay] = useState<number>(15);
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleHabit = (id: string) => {
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== id) return habit;
        const nextStatus = !habit.completedToday;
        const nextDays = nextStatus
          ? Math.min(habit.completedDays + 1, CHALLENGE_DAYS)
          : Math.max(habit.completedDays - 1, 0);

        return { ...habit, completedToday: nextStatus, completedDays: nextDays };
      })
    );
  };

  const resetToday = () => {
    setHabits((prev) =>
      prev.map((h) =>
        h.completedToday
          ? { ...h, completedToday: false, completedDays: Math.max(h.completedDays - 1, 0) }
          : h
      )
    );
  };

  const toggleTheme = () => setIsDark((prev) => !prev);

  const stats = useMemo(() => {
    const total = habits.length;
    const completed = habits.filter((h) => h.completedToday).length;
    const dailyPercentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    const totalPossible = total * CHALLENGE_DAYS;
    const accumulated = habits.reduce((acc, h) => acc + h.completedDays, 0);
    const challengePercentage = totalPossible > 0 ? Math.round((accumulated / totalPossible) * 100) : 0;

    return {
      total,
      completed,
      dailyPercentage,
      challengePercentage,
      currentDay,
      remainingDays: CHALLENGE_DAYS - currentDay,
    };
  }, [habits, currentDay]);

  return { habits, stats, isDark, toggleHabit, resetToday, toggleTheme };
}