export interface Habit {
  id: string;
  title: string;
  description: string;
  completedDays: number[];
}

export const LIGHT_COLORS = {
  bg: '#FFF8FA',
  card: '#FFFFFF',
  text: '#1F242D',
  muted: '#6B7280',
  primary: '#E06D94',
  border: '#E5E7EB',
  success: '#2E9E6B',
};

export const DARK_COLORS = {
  bg: '#14171D',
  card: '#1E232C',
  text: '#F3F4F6',
  muted: '#9CA3AF',
  primary: '#F085A8',
  border: '#2E3644',
  success: '#45C486',
};

export type AppColors = typeof LIGHT_COLORS;

export const INITIAL_HABITS: Habit[] = [
  { id: '1', title: 'Estudiar programación', description: 'Practicar código 45 min', completedDays: [1, 2] },
  { id: '2', title: 'Leer 20 minutos', description: 'Lectura diaria sin celular', completedDays: [1] },
  { id: '3', title: 'Realizar ejercicio físico', description: 'Caminata o rutina en casa', completedDays: [1, 2] },
  { id: '4', title: 'Beber agua', description: 'Tomar 2 litros de agua al día', completedDays: [1, 2, 3] },
];