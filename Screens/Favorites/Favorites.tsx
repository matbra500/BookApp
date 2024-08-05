import React, {useContext} from 'react';
import {View, FlatList, Text} from 'react-native';
import {FavoritesContext} from '../../Context/FavoritesContext';
import styles from './Favorites.styles';
import {Book} from '../../Interfaces/Interfaces';
import BookItem from '../../Components/BookItem/BookItem';

const Favorites = () => {
  const {favorites} = useContext(FavoritesContext);

  const renderItem = ({item}: {item: Book}) => <BookItem book={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Nothing out here, add some book to your favorites!
          </Text>
        }
      />
    </View>
  );
};

export default Favorites;
