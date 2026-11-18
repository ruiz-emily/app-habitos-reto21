export interface Habit {
  id: string;
  title: string;
  category: string;
  goal: string;
  emoji: string;
  completedToday: boolean;
  completedDays: number;
}

export const INITIAL_HABITS: Habit[] = [
  {
    id: '1',
    title: 'Estudiar programación',
    category: 'Código',
    goal: 'React Native / TypeScript',
    emoji: '💻',
    completedToday: true,
    completedDays: 14,
  },
  {
    id: '2',
    title: 'Leer 20 minutos',
    category: 'Lectura',
    goal: 'Lectura técnica o hábitos',
    emoji: '📚',
    completedToday: false,
    completedDays: 11,
  },
  {
    id: '3',
    title: 'Realizar ejercicio físico',
    category: 'Salud',
    goal: '30 min de actividad o cardio',
    emoji: '🔥',
    completedToday: false,
    completedDays: 16,
  },
  {
    id: '4',
    title: 'Beber agua',
    category: 'Salud',
    goal: 'Completar 2 litros diarios',
    emoji: '💧',
    completedToday: true,
    completedDays: 19,
  },
];

export const CHALLENGE_DAYS = 21;