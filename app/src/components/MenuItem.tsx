import React from 'react';
import { Pressable, View, Text, Switch, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MenuItemProps {
  icon: string;
  title: string;
  subtitle?: string;
  isDark: boolean;
  onPress?: () => void;
  rightSwitchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
}

export function MenuItem({
  icon,
  title,
  subtitle,
  isDark,
  onPress,
  rightSwitchValue,
  onSwitchChange,
}: MenuItemProps) {
  const bgCard = isDark ? '#1E293B' : '#FFFFFF';
  const txtPrimary = isDark ? '#F8FAFC' : '#0F172A';
  const txtMuted = isDark ? '#94A3B8' : '#64748B';
  const borderColor = isDark ? '#334155' : '#E2E8F0';

  return (
    <Pressable onPress={onPress} disabled={!onPress} style={styles.container}>
      <View style={[styles.card, { backgroundColor: bgCard, borderColor }]}>
        <View style={styles.left}>
          <View style={styles.iconBox}>
            <Ionicons name={icon as any} size={20} color="#10B981" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.title, { color: txtPrimary }]}>{title}</Text>
            {subtitle && <Text style={[styles.subtitle, { color: txtMuted }]}>{subtitle}</Text>}
          </View>
        </View>

        {typeof rightSwitchValue === 'boolean' && onSwitchChange ? (
          <Switch
            value={rightSwitchValue}
            onValueChange={onSwitchChange}
            trackColor={{ false: '#CBD5E1', true: '#10B981' }}
            thumbColor="#FFFFFF"
          />
        ) : (
          <Ionicons name="chevron-forward" size={18} color={txtMuted} />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 12 },
  card: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, borderRadius: 16, borderWidth: 1 },
  left: { flexDirection: 'row', alignItems: 'center', flex: 1, marginRight: 10 },
  iconBox: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#10B98120', alignItems: 'center', justifyContent: 'center', marginRight: 14 },
  title: { fontSize: 16, fontWeight: '700' },
  subtitle: { fontSize: 12, marginTop: 2 },
});