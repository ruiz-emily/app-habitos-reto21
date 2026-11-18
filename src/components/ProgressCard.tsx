// src/components/ProgressCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProgressCardProps {
  progress: number;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({ progress }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Progreso General del Reto</Text>
      <Text style={styles.percentage}>{progress}%</Text>
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.subtitle}>¡Mantente constante durante los 21 días!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#4F46E5', padding: 20, borderRadius: 16, marginBottom: 20, alignItems: 'center' },
  title: { color: '#E0E7FF', fontSize: 14, fontWeight: '500' },
  percentage: { color: '#fff', fontSize: 36, fontWeight: 'bold', marginVertical: 8 },
  progressBarBackground: { width: '100%', height: 10, backgroundColor: '#312E81', borderRadius: 5, overflow: 'hidden', marginBottom: 8 },
  progressBarFill: { height: '100%', backgroundColor: '#34D399', borderRadius: 5 },
  subtitle: { color: '#C7D2FE', fontSize: 12 },
});