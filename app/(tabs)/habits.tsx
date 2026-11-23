import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { useHabits } from '../../src/hooks/useHabits';
import { ThemedView } from '../../src/components/ThemedView';
import { ThemedText } from '../../src/components/ThemedText';
import { HabitCard } from '../../src/components/HabitCard';

export default function HabitsScreen() {
  const { habits, selectedDay, colors, toggleHabit } = useHabits();

  return (
    <ThemedView colors={colors}>
      <Stack.Screen options={{ title: 'Hábitos' }} />
      <ScrollView contentContainerStyle={styles.container}>
        <ThemedText colors={colors} title>Mis Hábitos</ThemedText>
        <ThemedText colors={colors} muted style={styles.sub}>
          Toca para marcar o desmarcar en el Día {selectedDay}
        </ThemedText>

        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            completed={habit.completedDays.includes(selectedDay)}
            colors={colors}
            onPress={() => toggleHabit(habit.id)}
          />
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  sub: { marginTop: 4, marginBottom: 14 },
});