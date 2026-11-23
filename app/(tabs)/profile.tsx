import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { useHabits } from '../../src/hooks/useHabits';
import { ThemedView } from '../../src/components/ThemedView';
import { ThemedText } from '../../src/components/ThemedText';
import { MenuItem } from '../../src/components/MenuItem';

export default function ProfileScreen() {
  const { isDark, toggleTheme, resetAll, colors } = useHabits();

  return (
    <ThemedView colors={colors}>
      <Stack.Screen options={{ title: 'Perfil' }} />
      <ScrollView contentContainerStyle={styles.container}>
        <ThemedText colors={colors} title>Perfil y Ajustes</ThemedText>
        <ThemedText colors={colors} muted style={styles.sub}>
          Configuración visual y del reto
        </ThemedText>

        <View style={[styles.box, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <ThemedText colors={colors} style={{ fontWeight: '600' }}>Reto 21 Días</ThemedText>
          <ThemedText colors={colors} muted>3º Bachillerato Técnico · Programación Móvil</ThemedText>
        </View>

        <MenuItem
          label="Tema claro / oscuro"
          value={isDark ? 'Oscuro' : 'Claro'}
          colors={colors}
          onPress={toggleTheme}
        />

        <MenuItem
          label="Reiniciar progreso"
          value="Reiniciar"
          colors={colors}
          onPress={resetAll}
        />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  sub: { marginTop: 4, marginBottom: 14 },
  box: { padding: 14, borderRadius: 12, borderWidth: 1, marginBottom: 14 },
});