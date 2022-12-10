import removeArrayItem from "../utils/remove-array-item";
import { addToFavouritesLS, removeFromFavouritesLS } from "../utils/favourites";
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
            // add to local storage
            // addToFavouritesLS(action.payload);
            // save to context
            const newFavourites = [...state.favourites, action.payload];
            console.log("after add", newFavourites);
            return {
                ...state,
                favourites: newFavourites,
            };
        }
       case 'REMOVE_FROM_FAVOURITES':
        {
            // remove from local storage
            // removeFromFavouritesLS(action.payload);
            // remove from context
            const favouritesCopy = state.favourites;
            const newFavourites = removeArrayItem(action.payload, favouritesCopy);
            console.log("after remove", newFavourites);
            return {
              ...state,
              favourites: newFavourites,
            };  
        }
        // case 'GET_FAVOURITES':
        // {
        //     // load from local storage
        //     return {
        //       ...state,
        //       favourites: getFavouritesLS(),
        //     };
        // }
      default:
        return state;
    }
  }
  
  export default appReducer;
  