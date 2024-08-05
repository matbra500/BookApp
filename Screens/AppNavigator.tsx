import React from 'react';
import BookList from './BookList/BookList';
import BookDetails from './BookDetails/BookDetails';
import Favorites from './Favorites/Favorites';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../Interfaces/Interfaces';
import {Text, TouchableOpacity} from 'react-native';
import styles from './AppNavigator.styles';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const navigation = useNavigation();
  const favoritesButton = (isFavoritesScreen?: boolean) =>
    !isFavoritesScreen && (
      <TouchableOpacity
        onPress={() => navigation.navigate('Favorites')}
        style={styles.button}>
        <Text style={styles.buttonText}>Favorites</Text>
      </TouchableOpacity>
    );

  return (
    <Stack.Navigator
      initialRouteName="BookList"
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerRight: () => favoritesButton(),
      }}>
      <Stack.Screen name="BookList" component={BookList} />
      <Stack.Screen name="BookDetails" component={BookDetails} />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{headerRight: () => favoritesButton(true)}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
