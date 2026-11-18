import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useHabits } from '../../src/hooks/useHabits';
import { ProgressCard } from '../../src/components/ProgressCard';

export default function ProgressScreen() {
  const { calculateProgress } = useHabits();

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Estadísticas del Reto</Text>
      <ProgressCard progress={calculateProgress()} />
      <Text style={styles.infoText}>Continúa marcando tus hábitos diariamente para completar con éxito tu meta de 21 días.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', padding: 16, justifyContent: 'center' },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#1F2937', marginBottom: 20, textAlign: 'center' },
  infoText: { textAlign: 'center', color: '#6B7280', fontSize: 14, paddingHorizontal: 20 },
});