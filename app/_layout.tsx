import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { useHabits } from '../src/hooks/useHabits';

export default function RootLayout() {
  const { colors } = useHabits();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: colors.card },
          headerTintColor: colors.text,
          drawerStyle: { backgroundColor: colors.bg },
          drawerActiveTintColor: colors.primary,
          drawerInactiveTintColor: colors.muted,
        }}
      >
        <Drawer.Screen name="(tabs)" options={{ title: 'Reto 21 Días', drawerLabel: 'Inicio' }} />
        <Drawer.Screen name="index" options={{ drawerItemStyle: { display: 'none' } }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}