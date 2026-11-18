import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useHabits } from '../../src/hooks/useHabits';
import { ProgressCard } from '../../src/components/ProgressCard';
import { HabitCard } from '../../src/components/HabitCard';

export default function TodayScreen() {
  const { habits, stats, isDark, toggleHabit } = useHabits();
  const bg = isDark ? '#0F172A' : '#F8FAFC';
  const txtPrimary = isDark ? '#F8FAFC' : '#0F172A';
  const txtMuted = isDark ? '#94A3B8' : '#64748B';

  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.accentText}>🔥 DÍA {stats.currentDay} DE 21 DEL RETO</Text>
          <Text style={[styles.title, { color: txtPrimary }]}>¡Hola de nuevo! 👋</Text>
          <Text style={[styles.subtitle, { color: txtMuted }]}>
            Marca tus hábitos de hoy para mantener tu buena racha diaria.
          </Text>
        </View>

        <ProgressCard
          title="Progreso Diario 🎯"
          subtitle={`${stats.completed} de ${stats.total} hábitos completados`}
          percentage={stats.dailyPercentage}
          badgeText={`Faltan ${stats.remainingDays} días`}
          isDark={isDark}
        />

        <Text style={[styles.sectionTitle, { color: txtPrimary }]}>📋 Lista de Hábitos de Hoy</Text>
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} isDark={isDark} onToggle={toggleHabit} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 20, paddingBottom: 35 },
  header: { marginBottom: 16 },
  accentText: { color: '#10B981', fontSize: 13, fontWeight: '800', marginBottom: 4 },
  title: { fontSize: 26, fontWeight: '900' },
  subtitle: { fontSize: 14, marginTop: 2 },
  sectionTitle: { fontSize: 18, fontWeight: '800', marginBottom: 12, marginTop: 8 },
});