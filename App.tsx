import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {FavoritesProvider} from './Context/FavoritesContext';
import AppNavigator from './Screens/AppNavigator';

const App = () => {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </FavoritesProvider>
  );
};

export default App;
