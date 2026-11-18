import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useHabits } from '../../src/hooks/useHabits';
import { CHALLENGE_DAYS } from '../../src/constants/habitsData';
import { ProgressCard } from '../../src/components/ProgressCard';

export default function ProgressScreen() {
  const { habits, stats, isDark } = useHabits();
  const bg = isDark ? '#0F172A' : '#F8FAFC';
  const txtPrimary = isDark ? '#F8FAFC' : '#0F172A';
  const txtMuted = isDark ? '#94A3B8' : '#64748B';
  const bgCard = isDark ? '#1E293B' : '#FFFFFF';
  const borderColor = isDark ? '#334155' : '#E2E8F0';

  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: txtPrimary }]}>📊 Progreso del Reto</Text>
          <Text style={[styles.subtitle, { color: txtMuted }]}>
            Estadísticas generales y constancia acumulada de 21 días.
          </Text>
        </View>

        <ProgressCard
          title="Avance Global 🌟"
          subtitle="Constancia general en todos los hábitos"
          percentage={stats.challengePercentage}
          badgeText="Meta 21 días"
          isDark={isDark}
        />

        <Text style={[styles.sectionTitle, { color: txtPrimary }]}>📈 Desglose por Hábito</Text>
        {habits.map((habit) => {
          const pct = Math.round((habit.completedDays / CHALLENGE_DAYS) * 100);
          return (
            <View key={habit.id} style={[styles.habitCard, { backgroundColor: bgCard, borderColor }]}>
              <View style={styles.row}>
                <Text style={[styles.habitTitle, { color: txtPrimary }]}>
                  {habit.emoji} {habit.title}
                </Text>
                <Text style={styles.habitPct}>🔥 {habit.completedDays}/21 días ({pct}%)</Text>
              </View>
              <View style={[styles.miniBarBg, { backgroundColor: isDark ? '#334155' : '#E2E8F0' }]}>
                <View style={[styles.miniBarFill, { width: `${pct}%` }]} />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 20, paddingBottom: 35 },
  header: { marginBottom: 16 },
  title: { fontSize: 26, fontWeight: '900' },
  subtitle: { fontSize: 14, marginTop: 2 },
  sectionTitle: { fontSize: 18, fontWeight: '800', marginBottom: 12, marginTop: 8 },
  habitCard: { padding: 16, borderRadius: 16, marginBottom: 12, borderWidth: 1.5 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8, alignItems: 'center' },
  habitTitle: { fontSize: 15, fontWeight: '700' },
  habitPct: { fontSize: 12, fontWeight: '700', color: '#10B981' },
  miniBarBg: { width: '100%', height: 8, borderRadius: 4, overflow: 'hidden' },
  miniBarFill: { height: '100%', backgroundColor: '#10B981', borderRadius: 4 },
});