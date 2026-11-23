import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppColors } from '../constants/habitsData';
import { ThemedText } from './ThemedText';

interface Props {
  title: string;
  subtitle: string;
  percentage: number;
  colors: AppColors;
}

export function ProgressCard({ title, subtitle, percentage, colors }: Props) {
  return (
    <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <ThemedText colors={colors} style={styles.title}>{title}</ThemedText>
          <ThemedText colors={colors} muted>{subtitle}</ThemedText>
        </View>
        <ThemedText colors={colors} style={[styles.percent, { color: colors.primary }]}>
          {percentage}%
        </ThemedText>
      </View>

      <View style={[styles.track, { backgroundColor: colors.border }]}>
        <View style={[styles.fill, { width: `${percentage}%`, backgroundColor: colors.primary }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 14, borderRadius: 12, borderWidth: 1, marginBottom: 14 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  title: { fontWeight: '600', fontSize: 16 },
  percent: { fontWeight: '700', fontSize: 20 },
  track: { height: 10, borderRadius: 99, overflow: 'hidden' },
  fill: { height: '100%' },
});