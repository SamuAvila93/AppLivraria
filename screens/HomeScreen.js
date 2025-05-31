import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao App Cultural</Text>
      <Button title="Livraria" onPress={() => navigation.navigate('Livros')} />
      <Button title="Músicas" onPress={() => navigation.navigate('Músicas')} />
      <Button title="Filmes" onPress={() => navigation.navigate('Filmes')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
