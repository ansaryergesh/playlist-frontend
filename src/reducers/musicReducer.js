export const musicReducer = (state = {
    isLoading: false,
    errMess: null,
    musics: [],
  }, action) => {
    switch (action.type) {
      case 'ADD_MUSIC':
        return {
          ...state, isLoading: false, errMess: null, musics: action.payload,
        };
      case 'MUSIC_LOADING':
        return {
          ...state, isLoading: true, errMess: null, musics: [],
        };
  
      case 'MUSIC_FAILED':
        return {
          ...state, isLoading: false, errMess: action.payload, musics: [],
        };
      default:
        return state;
    }
  };
  
  export default musicReducer;