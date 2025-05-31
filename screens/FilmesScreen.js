import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const filmes = [
  { id: '1', titulo: 'O Auto da Compadecida' },
  { id: '2', titulo: 'Cidade de Deus' },
  { id: '3', titulo: 'Tropa de Elite' },
];

export default function FilmesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmes Brasileiros</Text>
      <FlatList
        data={filmes}
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
