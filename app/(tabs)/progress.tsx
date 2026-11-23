import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { useHabits } from '../../src/hooks/useHabits';
import { ThemedView } from '../../src/components/ThemedView';
import { ThemedText } from '../../src/components/ThemedText';
import { ProgressCard } from '../../src/components/ProgressCard';

export default function ProgressScreen() {
  const { habits, selectedDay, colors, completedToday, dailyPercent, totalChecks, totalPercent } =
    useHabits();

  return (
    <ThemedView colors={colors}>
      <Stack.Screen options={{ title: 'Progreso' }} />
      <ScrollView contentContainerStyle={styles.container}>
        <ThemedText colors={colors} title>Progreso del Reto</ThemedText>
        <ThemedText colors={colors} muted style={styles.sub}>
          Resumen diario y acumulado de los 21 días
        </ThemedText>

        <ProgressCard
          title={`Día ${selectedDay}`}
          subtitle={`${completedToday} de ${habits.length} completados hoy`}
          percentage={dailyPercent}
          colors={colors}
        />

        <ProgressCard
          title="Total Reto 21 Días"
          subtitle={`${totalChecks} de ${habits.length * 21} marcas totales`}
          percentage={totalPercent}
          colors={colors}
        />

        {habits.map((h) => (
          <View
            key={h.id}
            style={[styles.row, { backgroundColor: colors.card, borderColor: colors.border }]}
          >
            <ThemedText colors={colors} style={{ fontWeight: '600' }}>{h.title}</ThemedText>
            <ThemedText colors={colors} muted>{h.completedDays.length} / 21 días</ThemedText>
          </View>
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  sub: { marginTop: 4, marginBottom: 14 },
  row: { padding: 12, borderRadius: 10, borderWidth: 1, marginBottom: 8 },
});