import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LivrosScreen from './screens/LivrosScreen';
import MusicasScreen from './screens/MusicasScreen';
import FilmesScreen from './screens/FilmesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Início">
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Livros" component={LivrosScreen} />
        <Stack.Screen name="Músicas" component={MusicasScreen} />
        <Stack.Screen name="Filmes" component={FilmesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
