import React, {createContext, useState, ReactNode} from 'react';
import {Book} from '../Interfaces/Interfaces';

interface FavoritesContextProps {
  favorites: Book[];
  addToFavorites: (book: Book) => void;
  removeFromFavorites: (book: Book) => void;
}

export const FavoritesContext = createContext<FavoritesContextProps>({
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});

export const FavoritesProvider = ({children}: {children: ReactNode}) => {
  const [favorites, setFavorites] = useState<Book[]>([]);

  const addToFavorites = (book: Book) => {
    setFavorites([...favorites, book]);
  };

  const removeFromFavorites = (book: Book) => {
    setFavorites(favorites.filter(fav => fav.key !== book.key));
  };

  return (
    <FavoritesContext.Provider
      value={{favorites, addToFavorites, removeFromFavorites}}>
      {children}
    </FavoritesContext.Provider>
  );
};
