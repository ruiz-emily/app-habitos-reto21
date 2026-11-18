import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Habit } from '../constants/habitsData';

interface HabitCardProps {
  habit: Habit;
  isDark: boolean;
  onToggle: (id: string) => void;
  showStreak?: boolean;
}

export function HabitCard({ habit, isDark, onToggle, showStreak = false }: HabitCardProps) {
  const bgCard = isDark ? '#1E293B' : '#FFFFFF';
  const txtPrimary = isDark ? '#F8FAFC' : '#0F172A';
  const txtMuted = isDark ? '#94A3B8' : '#64748B';
  const borderColor = isDark ? '#334155' : '#E2E8F0';

  return (
    <Pressable onPress={() => onToggle(habit.id)} style={styles.container}>
      <View
        style={[
          styles.card,
          { backgroundColor: bgCard, borderColor: habit.completedToday ? '#10B981' : borderColor },
          habit.completedToday && styles.cardActive,
        ]}
      >
        <View style={styles.left}>
          <View style={[styles.emojiBox, { backgroundColor: isDark ? '#334155' : '#F1F5F9' }]}>
            <Text style={styles.emoji}>{habit.emoji}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={[
                styles.title,
                { color: txtPrimary },
                habit.completedToday && styles.completedText,
              ]}
            >
              {habit.title}
            </Text>
            <Text style={[styles.goal, { color: txtMuted }]} numberOfLines={1}>
              {habit.goal}
            </Text>
            {showStreak && (
              <Text style={styles.streakText}>🔥 Racha: {habit.completedDays} / 21 días</Text>
            )}
          </View>
        </View>

        <View style={[styles.checkCircle, habit.completedToday && styles.checkCircleActive]}>
          <Ionicons
            name={habit.completedToday ? 'checkmark' : 'ellipse-outline'}
            size={18}
            color={habit.completedToday ? '#FFFFFF' : txtMuted}
          />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 12 },
  card: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, borderRadius: 18, borderWidth: 1.5 },
  cardActive: { backgroundColor: '#10B98108' },
  left: { flexDirection: 'row', alignItems: 'center', flex: 1, marginRight: 10 },
  emojiBox: { width: 48, height: 48, borderRadius: 14, alignItems: 'center', justifyContent: 'center', marginRight: 14 },
  emoji: { fontSize: 22 },
  title: { fontSize: 16, fontWeight: '700' },
  completedText: { textDecorationLine: 'line-through', opacity: 0.6 },
  goal: { fontSize: 13, marginTop: 2 },
  streakText: { fontSize: 12, fontWeight: '600', color: '#10B981', marginTop: 4 },
  checkCircle: { width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center', borderWidth: 1.5, borderColor: '#CBD5E1' },
  checkCircleActive: { backgroundColor: '#10B981', borderColor: '#10B981' },
});