import React from 'react';
import { ScrollView, View, Text, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useHabits } from '../../src/hooks/useHabits';
import { MenuItem } from '../../src/components/MenuItem';

export default function ProfileScreen() {
  const { isDark, toggleTheme, resetToday, stats } = useHabits();
  const bg = isDark ? '#0F172A' : '#F8FAFC';
  const txtPrimary = isDark ? '#F8FAFC' : '#0F172A';
  const txtMuted = isDark ? '#94A3B8' : '#64748B';
  const bgCard = isDark ? '#1E293B' : '#FFFFFF';
  const borderColor = isDark ? '#334155' : '#E2E8F0';

  const handleReset = () => {
    Alert.alert(
      '⚠️ Reiniciar día',
      '¿Deseas desmarcar todos los hábitos completados hoy?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Reiniciar', style: 'destructive', onPress: resetToday },
      ]
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={[styles.profileCard, { backgroundColor: bgCard, borderColor }]}>
          <View style={styles.avatar}>
            <Text style={styles.avatarEmoji}>👑</Text>
          </View>
          <Text style={[styles.name, { color: txtPrimary }]}>Estudiante 3º Bachillerato</Text>
          <Text style={[styles.school, { color: txtMuted }]}>🎓 Técnico Salesiano • Reto 21 Días</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>⭐ Efectividad global: {stats.challengePercentage}%</Text>
          </View>
        </View>

        <Text style={[styles.sectionTitle, { color: txtPrimary }]}>⚙️ Ajustes y Opciones</Text>

        <MenuItem
          icon={isDark ? 'moon' : 'sunny'}
          title="Modo Oscuro / Claro"
          subtitle={isDark ? '🌙 Tema oscuro activo' : '☀️ Tema claro activo'}
          isDark={isDark}
          rightSwitchValue={isDark}
          onSwitchChange={toggleTheme}
        />

        <MenuItem
          icon="refresh"
          title="Reiniciar Día Actual"
          subtitle="🔄 Desmarcar hábitos del día de hoy"
          isDark={isDark}
          onPress={handleReset}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 20, paddingBottom: 35 },
  profileCard: { alignItems: 'center', padding: 24, borderRadius: 20, marginBottom: 20, borderWidth: 1.5, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 2 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#10B98120', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  avatarEmoji: { fontSize: 36 },
  name: { fontSize: 18, fontWeight: '900' },
  school: { fontSize: 13, marginTop: 2 },
  badge: { backgroundColor: '#10B98120', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 20, marginTop: 14 },
  badgeText: { color: '#10B981', fontSize: 12, fontWeight: '800' },
  sectionTitle: { fontSize: 18, fontWeight: '800', marginBottom: 12 },
});