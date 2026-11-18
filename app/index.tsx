import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎯</Text>
      <Text style={styles.title}>Reto 21 Días</Text>
      <Text style={styles.subtitle}>Construye hábitos sólidos y registra tu progreso personal día a día.</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => router.replace('/(tabs)/habits')}>
        <Text style={styles.buttonText}>Comenzar Reto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F9FAFB', padding: 20 },
  emoji: { fontSize: 60, marginBottom: 16 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1F2937', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#6B7280', textAlign: 'center', marginBottom: 30, paddingHorizontal: 20 },
  button: { backgroundColor: '#4F46E5', paddingVertical: 14, paddingHorizontal: 32, borderRadius: 12 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});