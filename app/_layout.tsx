import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useHabits } from '../src/hooks/useHabits'; // Corregido a un solo nivel '../'

export default function RootLayout() {
  const { isDark } = useHabits();
  const bg = isDark ? '#0F172A' : '#FFFFFF';
  const text = isDark ? '#F8FAFC' : '#0F172A';

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: bg },
          headerTintColor: text,
          drawerStyle: { backgroundColor: bg },
          drawerActiveTintColor: '#10B981',
          drawerInactiveTintColor: isDark ? '#94A3B8' : '#64748B',
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: '✨ Reto 21 Días',
            title: 'Reto 21 Días',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="leaf-outline" size={size} color={color as string} />
            ),
          }}
        />
        <Drawer.Screen name="index" options={{ drawerItemStyle: { display: 'none' } }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}