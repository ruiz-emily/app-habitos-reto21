import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { useHabits } from '../../src/hooks/useHabits';
import { ThemedView } from '../../src/components/ThemedView';
import { ThemedText } from '../../src/components/ThemedText';
import { ProgressCard } from '../../src/components/ProgressCard';
import { HabitCard } from '../../src/components/HabitCard';

export default function HoyScreen() {
  const { habits, selectedDay, setSelectedDay, colors, toggleHabit, completedToday, dailyPercent } =
    useHabits();

  const days = Array.from({ length: 21 }, (_, i) => i + 1);

  return (
    <ThemedView colors={colors}>
      <Stack.Screen options={{ title: 'Hoy' }} />
      <ScrollView contentContainerStyle={styles.container}>
        <ThemedText colors={colors} title>Hoy · Día {selectedDay}</ThemedText>
        <ThemedText colors={colors} muted style={styles.sub}>
          Elige el día y marca tus hábitos cumplidos
        </ThemedText>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.days}>
          {days.map((day) => {
            const active = day === selectedDay;
            return (
              <TouchableOpacity
                key={day}
                onPress={() => setSelectedDay(day)}
                style={[
                  styles.chip,
                  {
                    backgroundColor: active ? colors.primary : colors.card,
                    borderColor: active ? colors.primary : colors.border,
                  },
                ]}
              >
                <ThemedText colors={colors} style={{ color: active ? '#FFF' : colors.text }}>
                  Día {day}
                </ThemedText>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <ProgressCard
          title={`Avance Día ${selectedDay}`}
          subtitle={`${completedToday} de ${habits.length} hábitos`}
          percentage={dailyPercent}
          colors={colors}
        />

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
  sub: { marginTop: 4, marginBottom: 12 },
  days: { marginBottom: 14 },
  chip: { paddingHorizontal: 12, paddingVertical: 7, borderRadius: 20, borderWidth: 1, marginRight: 8 },
});