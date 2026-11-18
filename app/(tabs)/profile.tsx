// app/(tabs)/profile.tsx (Vista 4: Perfil / Ajustes)
import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { MenuItem } from '../../src/components/MenuItem';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Perfil y Ajustes</Text>
      
      <MenuItem title="Notificaciones del Reto" icon="🔔" onPress={() => Alert.alert('Aviso', 'Notificaciones activadas')} />
      <MenuItem title="Reiniciar Progreso" icon="🔄" onPress={() => Alert.alert('Aviso', 'Progreso reiniciado')} />
      <MenuItem title="Acerca de la Aplicación" icon="ℹ️" onPress={() => Alert.alert('Aviso', 'Desarrollado para Programación Móvil')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', padding: 16, paddingTop: 60 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#1F2937', marginBottom: 20 },
});