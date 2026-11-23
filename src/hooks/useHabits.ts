import { useState, useEffect } from 'react';
import { INITIAL_HABITS, Habit, LIGHT_COLORS, DARK_COLORS } from '../constants/habitsData';

let sharedHabits: Habit[] = INITIAL_HABITS;
let sharedDay = 1;
let sharedDark = false;
const listeners = new Set<() => void>();

function notifyAll() {
  listeners.forEach((fn) => fn());
}

export function useHabits() {
  const [, setTick] = useState(0);

  useEffect(() => {
    const update = () => setTick((n) => n + 1);
    listeners.add(update);
    return () => {
      listeners.delete(update);
    };
  }, []);

  const colors = sharedDark ? DARK_COLORS : LIGHT_COLORS;

  const setSelectedDay = (day: number) => {
    sharedDay = day;
    notifyAll();
  };

  const toggleHabit = (id: string) => {
    sharedHabits = sharedHabits.map((h) => {
      if (h.id !== id) return h;
      const done = h.completedDays.includes(sharedDay);
      return {
        ...h,
        completedDays: done
          ? h.completedDays.filter((d) => d !== sharedDay)
          : [...h.completedDays, sharedDay],
      };
    });
    notifyAll();
  };

  const toggleTheme = () => {
    sharedDark = !sharedDark;
    notifyAll();
  };

  const resetAll = () => {
    sharedHabits = sharedHabits.map((h) => ({ ...h, completedDays: [] }));
    sharedDay = 1;
    notifyAll();
  };

  const completedToday = sharedHabits.filter((h) => h.completedDays.includes(sharedDay)).length;
  const dailyPercent = Math.round((completedToday / sharedHabits.length) * 100);

  const totalChecks = sharedHabits.reduce((sum, h) => sum + h.completedDays.length, 0);
  const totalPercent = Math.round((totalChecks / (sharedHabits.length * 21)) * 100);

  return {
    habits: sharedHabits,
    selectedDay: sharedDay,
    setSelectedDay,
    isDark: sharedDark,
    colors,
    toggleHabit,
    toggleTheme,
    resetAll,
    completedToday,
    dailyPercent,
    totalChecks,
    totalPercent,
  };
}