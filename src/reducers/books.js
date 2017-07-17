import {
  FETCH_BOOKS,
  FETCH_BOOKS_ERROR,
  FETCH_BOOKS_SUCCESS,
  DELETED_BOOK,
  DELETED_BOOK_ERROR,
  DELETED_BOOK_SUCCESS,
  CHANGE_BOOK,
  CHANGE_BOOK_SUCCESS,
  CHANGE_BOOK_ERROR,
} from '../actions/books';

const initialState = {
  data: [],
  error: null,
  isFetched: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return state;
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetched: true,
      };
    case FETCH_BOOKS_ERROR:
      return {
        ...state,
        error: action.error,
        isFetched: true,
      };
    case DELETED_BOOK:
      return {
        ...state,
        data: state.data.filter(book => book.id !== action.id),
      };
    case DELETED_BOOK_SUCCESS:
      return state;
    case DELETED_BOOK_ERROR:
      return {
        ...state,
        error: action.error,
        data: [...state.data, action.book],
      };
    case CHANGE_BOOK:
      return {
        ...state,
        data: state.data.map(book => {
          if (book.id === action.id) {
            book = {...book, ...action.data}
          }
          return book;
        }),
      };
    case CHANGE_BOOK_SUCCESS:
      return state;
    case CHANGE_BOOK_ERROR:
      return {
        ...state,
        error: action.error,
        data: state.data.map(book => {
            if (book.id === action.id) {
                book = {...action.book}
            }
            return book;
        }),
      };
    default:
      return state;
  }
};
