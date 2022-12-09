function appReducer(state, action) {
    switch (action.type) {
      case 'SET_MOVIE_DATA':
        return {
          ...state,
          movieData: action.payload,
        };
      default:
        return state;
    }
  }
  
  export default appReducer;
  