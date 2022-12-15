import removeArrayItem from "../utils/remove-array-item";
// maybe refactor to make a local storage class so all of these functions imported can be rewritten as methods and more clear

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
            // add to local storage
            localStorage.setItem("favourites", JSON.stringify(newFavourites));
            // add to state
            return {
                ...state,
                favourites: newFavourites,
            };
        }
       case 'REMOVE_FROM_FAVOURITES':
        {
            const favouritesCopy = [...state.favourites];
            const newFavourites = removeArrayItem(action.payload, favouritesCopy);
            // remove from local storage
            localStorage.setItem("favourites", JSON.stringify(newFavourites));
            // remove from state
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
  