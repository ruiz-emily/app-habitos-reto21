import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Habit, AppColors } from '../constants/habitsData';
import { ThemedText } from './ThemedText';

interface Props {
  habit: Habit;
  completed: boolean;
  colors: AppColors;
  onPress: () => void;
}

export function HabitCard({ habit, completed, colors, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.card,
        { backgroundColor: colors.card, borderColor: completed ? colors.success : colors.border },
      ]}
    >
      <View style={{ flex: 1 }}>
        <ThemedText colors={colors} style={styles.title}>{habit.title}</ThemedText>
        <ThemedText colors={colors} muted>{habit.description}</ThemedText>
        <ThemedText colors={colors} muted style={styles.small}>
          {habit.completedDays.length}/21 días
        </ThemedText>
      </View>

      <View
        style={[
          styles.box,
          {
            backgroundColor: completed ? colors.success : 'transparent',
            borderColor: completed ? colors.success : colors.primary,
          },
        ]}
      >
        {completed && <ThemedText colors={colors} style={styles.check}>✓</ThemedText>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', padding: 14, borderRadius: 12, borderWidth: 1.5, marginBottom: 10 },
  title: { fontWeight: '600', fontSize: 16, marginBottom: 2 },
  small: { fontSize: 12, marginTop: 4 },
  box: { width: 26, height: 26, borderRadius: 6, borderWidth: 2, alignItems: 'center', justifyContent: 'center' },
  check: { color: '#FFF', fontWeight: '700' },
});