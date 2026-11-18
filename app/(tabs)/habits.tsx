import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useHabits } from '../../src/hooks/useHabits';
import { HabitCard } from '../../src/components/HabitCard';
import { ProgressCard } from '../../src/components/ProgressCard';

export default function HabitsScreen() {
  const { habits, isCompleted, toggleHabitDay, calculateProgress } = useHabits();
  const [currentDay] = useState<number>(1); // Día actual del reto

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Reto de 21 Días 🚀</Text>
      
      <ProgressCard progress={calculateProgress()} />

      <Text style={styles.sectionTitle}>Hábitos de Hoy (Día {currentDay})</Text>
      
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          currentDay={currentDay}
          isCompleted={isCompleted(habit.id, currentDay)}
          onToggle={() => toggleHabitDay(habit.id, currentDay)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', padding: 16 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#1F2937', marginTop: 40, marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#4B5563', marginBottom: 12 },
});