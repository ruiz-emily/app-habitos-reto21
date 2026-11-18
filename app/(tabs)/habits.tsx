// app/(tabs)/habits.tsx (Vista 2: Hábitos)
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { useHabits } from '../../src/hooks/useHabits';
import { HabitCard } from '../../src/components/HabitCard';

export default function HabitsListScreen() {
  const { habits, isCompleted, toggleHabitDay } = useHabits();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Gestión de Hábitos 📋</Text>
      <Text style={styles.subtitle}>Listado oficial de hábitos para tu reto de 21 días.</Text>
      
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          currentDay={1}
          isCompleted={isCompleted(habit.id, 1)}
          onToggle={() => toggleHabitDay(habit.id, 1)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', padding: 16 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#1F2937', marginTop: 40, marginBottom: 4 },
  subtitle: { fontSize: 14, color: '#6B7280', marginBottom: 16 },
});