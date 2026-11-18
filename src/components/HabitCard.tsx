import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Habit } from '../constants/habitsData';

interface HabitCardProps {
  habit: Habit;
  currentDay: number;
  isCompleted: boolean;
  onToggle: () => void;
}

export const HabitCard: React.FC<HabitCardProps> = ({ habit, currentDay, isCompleted, onToggle }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{habit.icon}</Text>
      <View style={styles.info}>
        <Text style={styles.title}>{habit.title}</Text>
        <Text style={styles.category}>{habit.category} • Día {currentDay} de 21</Text>
      </View>
      <TouchableOpacity 
        style={[styles.button, isCompleted ? styles.btnDone : styles.btnPending]} 
        onPress={onToggle}
      >
        <Text style={[styles.btnText, isCompleted ? styles.textDone : styles.textPending]}>
          {isCompleted ? '✓ Hecho' : 'Marcar'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#FFFFFF', 
    padding: 16, 
    borderRadius: 12, 
    marginBottom: 12, 
    borderWidth: 1,
    borderColor: '#E5E7EB' 
  },
  icon: { fontSize: 28, marginRight: 12 },
  info: { flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#1F2937' },
  category: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  button: { paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8 },
  btnDone: { backgroundColor: '#10B981' }, 
  btnPending: { backgroundColor: '#F3F4F6' }, 
  btnText: { fontSize: 14, fontWeight: 'bold' },
  textDone: { color: '#FFFFFF' },
  textPending: { color: '#374151' },
});