import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {searchBooks} from '../../API/OpenLibraryAPI';
import {Book} from '../../Interfaces/Interfaces';
import styles from './BookList.styles';
import SkeletonLoading from '../../Components/SkeletonLoading/SkeletonLoading';
import SearchInput from '../../Components/SearchInput/SearchInput';
import BookItem from '../../Components/BookItem/BookItem';

const BookList = () => {
  const [query, setQuery] = useState('harry potter');
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      const results = await searchBooks(query || 'harry potter', 1);
      if (results) {
        setBooks(results);
        setPage(1);
      }
      setLoading(false);
    };
    getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    const results = await searchBooks(query, 1);
    if (results) {
      setBooks(results);
      setPage(1);
    }
    setLoading(false);
  };

  const handlePagination = async (isNext: boolean) => {
    setLoading(true);
    let newPage = page;
    if (isNext) {
      newPage = page + 1;
    } else {
      newPage = page - 1;
    }
    const results = await searchBooks(query, newPage);
    if (results) {
      setBooks(results);
      setPage(newPage);
    }
    setLoading(false);
  };

  const renderItem = ({item}: {item: Book}) => <BookItem book={item} />;

  return (
    <View style={styles.container}>
      {loading ? (
        <>
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
        </>
      ) : (
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          ListHeaderComponent={
            <SearchInput
              value={query}
              onChangeText={setQuery}
              onSearch={handleSearch}
            />
          }
          ListFooterComponent={
            <View style={styles.paginationRow}>
              <TouchableOpacity
                disabled={page <= 1}
                onPress={() => handlePagination(false)}>
                <View style={styles.standardLeftWidth}>
                  <Text
                    style={[
                      styles.generalText,

                      page <= 1 ? styles.disabledPagination : {},
                    ]}>
                    Previous
                  </Text>
                </View>
              </TouchableOpacity>
              {books && books.length > 0 && (
                <Text style={styles.generalText}>{page}</Text>
              )}
              <TouchableOpacity
                disabled={books.length < 10}
                onPress={() => handlePagination(true)}>
                <View style={styles.standardRightWidth}>
                  <Text
                    style={[
                      styles.generalText,
                      books.length < 10 ? styles.disabledPagination : {},
                    ]}>
                    Next
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          }
        />
      )}
    </View>
  );
};

export default BookList;
