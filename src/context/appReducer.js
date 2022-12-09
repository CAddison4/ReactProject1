import removeArrayItem from "../utils/remove-array-item";

function appReducer(state, action) {
    switch (action.type) {
      case 'SET_MOVIE_DATA':
        return {
          ...state,
          movieData: action.payload,
        };
       case 'ADD_TO_FAVOURITES':
        {
            const newFavourites = [...state.favourites, action.payload];
            return {
                ...state,
                favourites: newFavourites,
            };
        }
       case 'REMOVE_FROM_FAVOURITES':
        {
            const favouritesCopy = state.favourites;
            const newFavourites = removeArrayItem(action.payload, favouritesCopy);
            return {
              ...state,
              favourites: newFavourites,
            };  
        }
 
      default:
        return state;
    }
  }
  
  export default appReducer;
  