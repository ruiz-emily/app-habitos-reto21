import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface MenuItemProps {
  title: string;
  icon: string;
  onPress: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 16, borderRadius: 10, marginBottom: 10, borderWidth: 1, borderColor: '#E5E7EB' },
  icon: { fontSize: 18, marginRight: 12 },
  title: { flex: 1, fontSize: 16, color: '#333', fontWeight: '500' },
  arrow: { fontSize: 20, color: '#9CA3AF' },
});