import React, {useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {FavoritesContext} from '../../Context/FavoritesContext';
import styles from './BookDetails.styles';
import {Book, RootStackParamList} from '../../Interfaces/Interfaces';
import FastImage from 'react-native-fast-image';

type BookDetailsRouteProp = RouteProp<RootStackParamList, 'BookDetails'>;

interface Props {
  route: BookDetailsRouteProp;
}

const BookDetails = ({route}: Props) => {
  const {book} = route.params;
  const {favorites, addToFavorites, removeFromFavorites} =
    useContext(FavoritesContext);

  const isFavorite = favorites.some((fav: Book) => fav.key === book.key);

  return (
    <View style={styles.container}>
      {book.cover_i && (
        <FastImage
          style={styles.bookImage}
          source={{
            uri: `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      )}
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>by {book.author_name?.join(', ')}</Text>
      <Text style={styles.publishYear}>{book.first_publish_year}</Text>
      <TouchableOpacity
        onPress={() =>
          isFavorite ? removeFromFavorites(book) : addToFavorites(book)
        }
        style={styles.button}>
        <Text style={styles.buttonText}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookDetails;
