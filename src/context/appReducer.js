import removeArrayItem from "../utils/remove-array-item";
import { addToFavouritesLS, removeFromFavouritesLS } from "../utils/favourites";
// maybe refactor to make a local storage class so all of these functions imported can be rewritten as methods and more clear

function appReducer(state, action) {
    switch (action.type) {
      case 'SET_MOVIE_DATA':
        // localStorage.clear();
        let newFavourites = localStorage.getItem("test");
        if(newFavourites === null){
          newFavourites = [];
        }
        else{
          newFavourites = JSON.parse(newFavourites)
        }
        // state.favourites = newFavourites;
        return {
          ...state,
          movieData: action.payload,
          favourites: newFavourites,
        };
       case 'ADD_TO_FAVOURITES':
        {
            // add to local storage
            // addToFavouritesLS(action.payload);
            // save to context
            // localStorage.clear();
            console.log("state favourites", state.favourites)
            let currentFavourites = localStorage.getItem("test");
            if(currentFavourites === null){
              currentFavourites = [];
            }
            else{
              currentFavourites = JSON.parse(currentFavourites)
            }

            let newFavs = []
            if(!currentFavourites.includes(action.payload)){
              console.log("action payload", action.payload);
              newFavs = [...currentFavourites, action.payload]
              localStorage.setItem("test", JSON.stringify(newFavs))
              console.log("newFavs", newFavs);
            }
            // const newFavs = [action.payload]
            else{
              newFavs = [...currentFavourites]
              localStorage.setItem("test", JSON.stringify(newFavs))
              console.log("newfavs no add", newFavs)
            }

            //state.favourites = newFavs;

            return {
              ...state,
              favourites: newFavs};

            // console.log(localStorage)
            // if(state.favourites.length < 1){
            //   const getItem = localStorage.getItem("test");
            //   newFavourites = [JSON.parse(getItem), action.payload];
            //   console.log("length less than 1");
            //   console.log("newFaves", newFavourites);
            // }
            // else{
            //   console.log('length greater than 1')
            //   newFavourites = [...state.favourites, action.payload];
            // }
            // localStorage.setItem("test", JSON.stringify(newFavourites));
            // console.log("action payload", action.payload);
            // // const testGetLS = JSON.parse(localStorage.getItem("test"));
            // // console.log("testGetLS", testGetLS);
            // console.log("new favourites", newFavourites)
            // return {
            //     ...state,
            //     favourites: newFavourites,
            // };
        }
       case 'REMOVE_FROM_FAVOURITES':
        {
            // remove from local storage
            // removeFromFavouritesLS(action.payload);
            // remove from context
            const favouritesCopy = localStorage.getItem("test");
            const newFavourites = removeArrayItem(action.payload, favouritesCopy);
            console.log("after remove", newFavourites);
            state.favourites = newFavourites
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
  