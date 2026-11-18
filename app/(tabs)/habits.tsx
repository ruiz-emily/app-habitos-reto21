import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useHabits } from '../src/hooks/useHabits';
import { HabitCard } from '../src/components/HabitCard';

export default function HabitsScreen() {
  const { habits, isDark, toggleHabit } = useHabits();
  const bg = isDark ? '#0F172A' : '#F8FAFC';
  const txtPrimary = isDark ? '#F8FAFC' : '#0F172A';
  const txtMuted = isDark ? '#94A3B8' : '#64748B';

  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: txtPrimary }]}>✨ Mis Hábitos</Text>
          <Text style={[styles.subtitle, { color: txtMuted }]}>
            Todos los hábitos del Reto 21 Días
          </Text>
        </View>

        {habits.map((habit) => (
          <View key={habit.id} style={{ marginBottom: 6 }}>
            <Text style={styles.category}>🏷️ Categoría: {habit.category}</Text>
            <HabitCard 
              habit={habit} 
              isDark={isDark} 
              onToggle={toggleHabit} 
              showStreak 
            />
          </View>
        ))}
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
  category: { fontSize: 12, fontWeight: '700', color: '#10B981', marginBottom: 6, marginLeft: 4 },
});