export const singerReducer = (state = {
    isLoading: false,
    errMess: null,
    singers: [],
  }, action) => {
    switch (action.type) {
      case 'ADD_SINGER':
        return {
          ...state, isLoading: false, errMess: null, singers: action.payload,
        };
      case 'SINGER_LOADING':
        return {
          ...state, isLoading: true, errMess: null, singers: [],
        };
  
      case 'SINGER_FAILED':
        return {
          ...state, isLoading: false, errMess: action.payload, singers: [],
        };
      default:
        return state;
    }
  };
  
  export default singerReducer;