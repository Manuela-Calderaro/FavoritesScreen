import React from 'react';
import { FavoritesProvider } from './src/context/FavoritesContext';
import { FavoritesScreen } from './src/screens/FavoritesScreen';

export default function App() {
  return (
    <FavoritesProvider>
      <FavoritesScreen />
    </FavoritesProvider>
  );
}