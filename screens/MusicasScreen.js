import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const musicas = [
  { id: '1', titulo: 'Metamorfose Ambulante' },
  { id: '2', titulo: 'Como Nossos Pais' },
  { id: '3', titulo: 'Todo Sentimento' },
];

export default function MusicasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Músicas Brasileiras</Text>
      <FlatList
        data={musicas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.titulo}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 10 },
  item: { fontSize: 18, marginVertical: 5 },
});
