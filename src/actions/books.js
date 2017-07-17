import BooksApi from './../utils/api/booksApi';

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR';

export const CHANGE_BOOK = 'CHANGE_BOOK';
export const CHANGE_BOOK_SUCCESS = 'CHANGE_BOOK_SUCCESS';
export const CHANGE_BOOK_ERROR = 'CHANGE_BOOK_ERROR';

export const DELETED_BOOK = 'DELETE_BOOK';
export const DELETED_BOOK_SUCCESS = 'DELETED_BOOK_SUCCESS';
export const DELETED_BOOK_ERROR = 'DELETED_BOOK_ERROR';

export function fetchBooks() {
  return async dispatch => {
    dispatch({ type: FETCH_BOOKS });

    try {
      const data = await BooksApi.getAllBooks();

      return dispatch({
        type: FETCH_BOOKS_SUCCESS,
        data,
      });
    } catch (error) {
      return dispatch({
        type: FETCH_BOOKS_ERROR,
        error,
      });
    }
  };
}

export function deletedBook(id) {
  return async (dispatch, getState) => {
    const book = getState().books.data.filter(book => book.id === id)[0];
    dispatch({ type: DELETED_BOOK, id });

    try {
      await BooksApi.deletedBook(id);
      return dispatch({ type: DELETED_BOOK_SUCCESS });
    } catch (error) {
      return dispatch({
        type: DELETED_BOOK_ERROR,
        error,
        book,
      });
    }
  };
}

export function changeBook(id, data) {
    return async (dispatch, getState) => {
        const book = getState().books.data.filter(book => book.id === id)[0];
        dispatch({ type: CHANGE_BOOK, id, data });

        try {
            await BooksApi.changeBook(id, data);
            return dispatch({ type: CHANGE_BOOK_SUCCESS });
        } catch (error) {
            return dispatch({
                type: CHANGE_BOOK_ERROR,
                error,
                id,
                book,
            });
        }
    };
}
