import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';

type ListItemProps = {
  title: string;
  category: string;
  rating: number;
  tags: string;
  isFavorite?: boolean;
  onPress: () => void;
};

export const ListItem: React.FC<ListItemProps> = ({
  title,
  category,
  rating,
  tags,
  isFavorite = false,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imagePlaceholder}>
        <Icon name="image" size={30} color="#999" />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.ratingContainer}>
            {[...Array(5)].map((_, i) => (
              <Icon 
                key={i} 
                name={i < Math.floor(rating) ? "star" : "star-border"} 
                size={16} 
                color={Colors.darkBlue} 
              />
            ))}
          </View>
        </View>
        
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.tags}>{tags}</Text>
      </View>

      <Icon 
        name={isFavorite ? "favorite" : "favorite-border"} 
        size={24} 
        color={Colors.darkBlue} 
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: Colors.neutralWhite,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDefault,
    alignItems: 'center',
    marginBottom: 8,
    borderRadius: 8,
    marginHorizontal: 16,
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
    paddingRight: 8,
  },
  title: {
    ...Typography.h2,
    color: Colors.darkBlue,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  category: {
    ...Typography.caption,
    color: '#666',
    marginBottom: 2,
  },
  tags: {
    ...Typography.caption,
    color: Colors.darkBlue,
    opacity: 0.7,
  },
});