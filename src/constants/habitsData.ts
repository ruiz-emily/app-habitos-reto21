// src/constants/habitsData.ts
export interface Habit {
  id: string;
  title: string;
  icon: string;
  category: string;
}

export const INITIAL_HABITS: Habit[] = [
  { id: '1', title: 'Estudiar programación', icon: '💻', category: 'Académico' },
  { id: '2', title: 'Leer 20 minutos', icon: '📖', category: 'Desarrollo' },
  { id: '3', title: 'Realizar ejercicio físico', icon: '🏃‍♂️', category: 'Salud' },
  { id: '4', title: 'Beber agua (2 litros)', icon: '💧', category: 'Salud' },
  { id: '5', title: 'Meditar o respirar', icon: '🧘‍♀️', category: 'Bienestar' },
  { id: '6', title: 'Organizar espacio de trabajo', icon: '🧹', category: 'Productividad' },
];