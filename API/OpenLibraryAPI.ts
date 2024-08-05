import axios from 'axios';
import {Book} from '../Interfaces/Interfaces';

const BASE_URL = 'https://openlibrary.org/search.json';

export const searchBooks = async (
  query: string,
  page: number,
): Promise<Book[]> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {q: query, page, limit: 10},
    });
    return response.data.docs;
  } catch (error) {
    console.error(error);
    return [];
  }
};
