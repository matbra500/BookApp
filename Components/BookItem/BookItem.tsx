import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Book} from '../../Interfaces/Interfaces';
import styles from './BookItem.styles';
import {useNavigation} from '@react-navigation/native';

interface BookItemProps {
  book: Book;
}

const BookItem = ({book}: BookItemProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('BookDetails', {book})}
      style={styles.bookContainer}>
      <View style={styles.bookItem}>
        <View style={styles.bookImageContainer}>
          {book.cover_i ? (
            <FastImage
              style={styles.bookImage}
              source={{
                uri: `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          ) : (
            <Text style={styles.noCoverText}>No cover</Text>
          )}
        </View>
        <View style={styles.bookInfo}>
          <Text numberOfLines={1} style={styles.bookTitle}>
            {book.title}
          </Text>
          <Text numberOfLines={1} style={styles.bookTitle}>
            {book?.author_name && book.author_name.length > 0
              ? book.author_name[0]
              : 'Autor desconhecido'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookItem;
