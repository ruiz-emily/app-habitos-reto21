import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProgressCardProps {
  title: string;
  subtitle: string;
  percentage: number;
  badgeText?: string;
  isDark: boolean;
}

export function ProgressCard({ title, subtitle, percentage, badgeText, isDark }: ProgressCardProps) {
  const bgCard = isDark ? '#1E293B' : '#FFFFFF';
  const txtPrimary = isDark ? '#F8FAFC' : '#0F172A';
  const txtMuted = isDark ? '#94A3B8' : '#64748B';
  const borderColor = isDark ? '#334155' : '#E2E8F0';

  return (
    <View style={[styles.card, { backgroundColor: bgCard, borderColor }]}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.title, { color: txtPrimary }]}>{title}</Text>
          <Text style={[styles.subtitle, { color: txtMuted }]}>{subtitle}</Text>
        </View>
        {badgeText && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>⚡ {badgeText}</Text>
          </View>
        )}
      </View>

      <View style={styles.statsRow}>
        <Text style={styles.percentage}>{percentage}%</Text>
        <Text style={{ color: txtMuted, fontSize: 13, fontWeight: '600' }}>
          {percentage === 100 ? '🎉 ¡Meta cumplida!' : '🚀 ¡Tú puedes!'}
        </Text>
      </View>

      <View style={[styles.barBg, { backgroundColor: isDark ? '#334155' : '#E2E8F0' }]}>
        <View style={[styles.barFill, { width: `${percentage}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 20, borderRadius: 20, marginBottom: 18, borderWidth: 1.5, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 2 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  title: { fontSize: 17, fontWeight: '800' },
  subtitle: { fontSize: 13, marginTop: 2 },
  badge: { backgroundColor: '#10B98120', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 12 },
  badgeText: { color: '#10B981', fontSize: 12, fontWeight: '700' },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginVertical: 10 },
  percentage: { fontSize: 34, fontWeight: '900', color: '#10B981' },
  barBg: { width: '100%', height: 10, borderRadius: 5, overflow: 'hidden' },
  barFill: { height: '100%', backgroundColor: '#10B981', borderRadius: 5 },
});