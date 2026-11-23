import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { AppColors } from '../constants/habitsData';
import { ThemedText } from './ThemedText';

interface Props {
  label: string;
  value?: string;
  colors: AppColors;
  onPress: () => void;
}

export function MenuItem({ label, value, colors, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, { backgroundColor: colors.card, borderColor: colors.border }]}
    >
      <ThemedText colors={colors} style={styles.label}>{label}</ThemedText>
      <View style={styles.right}>
        {value && <ThemedText colors={colors} style={{ color: colors.primary }}>{value}</ThemedText>}
        <ThemedText colors={colors} muted> ›</ThemedText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 14, borderRadius: 12, borderWidth: 1, marginBottom: 10 },
  label: { fontWeight: '600' },
  right: { flexDirection: 'row', alignItems: 'center' },
});