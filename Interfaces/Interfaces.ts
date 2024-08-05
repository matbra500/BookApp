export type Book = {
  key: string;
  title: string;
  cover_i?: number;
  author_name?: string[];
  first_publish_year?: number;
};

export type RootStackParamList = {
  BookList: undefined;
  BookDetails: {book: Book};
  Favorites: undefined;
};
