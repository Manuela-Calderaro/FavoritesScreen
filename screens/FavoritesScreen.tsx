import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';
import { ListItem } from '../components/ListItem';
import { useFavorites } from '../context/FavoritesContext';

const ALL_PLACES = [
  { id: '1', title: 'Academia Fit', category: 'Academia', rating: 4, tags: 'Auditivo • Física' },
  { id: '2', title: 'Lanchonete Bom Sabor', category: 'Lanchonete', rating: 5, tags: 'Visual • Física' },
  { id: '3', title: 'Loja Fashion', category: 'Loja', rating: 3, tags: 'Física' },
  { id: '4', title: 'Cinema Central', category: 'Lazer', rating: 4.5, tags: 'Auditivo • Visual' },
  { id: '5', title: 'Mercado Central', category: 'Mercado', rating: 5, tags: 'Física • Visual' },
];

export const FavoritesScreen = ({ navigation }: any) => {
  const { favoriteIds } = useFavorites();
  const myFavorites = ALL_PLACES.filter(place => favoriteIds.includes(place.id));

  const renderFilterPill = (label: string, iconName: string) => (
    <TouchableOpacity style={styles.filterPill}>
      <Icon name={iconName} size={18} color={Colors.darkBlue} style={{marginRight: 6}}/>
      <Text style={styles.filterText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="arrow-back" size={24} color={Colors.neutralWhite} />
            <Text style={styles.backButtonText}>Voltar</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Favoritos</Text>
        <View style={{width: 60}} /> 
      </View>

      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 16}}>
          {renderFilterPill("Academias", "fitness-center")}
          {renderFilterPill("Lanchonetes", "fastfood")}
          {renderFilterPill("Lojas", "storefront")}
          {renderFilterPill("Cinemas", "movie")}
        </ScrollView>
      </View>

      {myFavorites.length === 0 ? (
        <View style={styles.emptyState}>
          <Icon name="favorite-border" size={60} color="#CCC" />
          <Text style={styles.emptyText}>Nenhum favorito ainda.</Text>
        </View>
      ) : (
        <FlatList
          data={myFavorites}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              category={item.category}
              rating={item.rating}
              tags={item.tags}
              isFavorite={true}
              onPress={() => {}}
            />
          )}
          contentContainerStyle={{ paddingTop: 16, paddingBottom: 20 }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.backgroundLight,
  },
  header: {
    backgroundColor: Colors.primaryBlue,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerTitle: {
    ...Typography.h1,
    color: Colors.neutralWhite,
  },
  backButtonText: {
    ...Typography.button,
    color: Colors.neutralWhite,
    marginLeft: 5,
  },
  filterContainer: {
    backgroundColor: Colors.primaryBlue,
    paddingBottom: 20,
  },
  filterPill: {
    flexDirection: 'row',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    alignItems: 'center',
  },
  filterText: {
    ...Typography.button,
    color: Colors.darkBlue,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    ...Typography.body,
    color: Colors.darkBlue,
    marginTop: 16,
  },
});