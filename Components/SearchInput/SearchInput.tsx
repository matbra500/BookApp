import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './SearchInput.styles';

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSearch: () => void;
}

const SearchInput = ({value, onChangeText, onSearch}: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Search"
      />
      <TouchableOpacity style={styles.button} onPress={onSearch}>
        <Text style={styles.searchText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
