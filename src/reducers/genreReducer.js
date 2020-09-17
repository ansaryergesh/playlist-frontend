export const genreReducer = (state = {
    isLoading: false,
    errMess: null,
    genres: [],
  }, action) => {
    switch (action.type) {
      case 'ADD_GENRE':
        return {
          ...state, isLoading: false, errMess: null, genres: action.payload,
        };
      case 'GENRE_LOADING':
        return {
          ...state, isLoading: true, errMess: null, genres: [],
        };
  
      case 'GENRE_FAILED':
        return {
          ...state, isLoading: false, errMess: action.payload, genres: [],
        };
      default:
        return state;
    }
  };
  
  export default genreReducer;