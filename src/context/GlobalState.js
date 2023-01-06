import React, { createContext, useReducer } from 'react';
import appReducer from './appReducer';

function getFavourites() {
    let favouritesFromStorage = localStorage.getItem("favourites");
    if(favouritesFromStorage === null) {
        favouritesFromStorage = [];
    }
    else {
        favouritesFromStorage = JSON.parse(favouritesFromStorage);
    }
    return favouritesFromStorage;
}

// Initial state
const initialState = {
  movieData: [],
  favourites: getFavourites(),
};

// Create context
const GlobalContext = createContext(initialState);

// Provider component
function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Actions
  function setMovieData(data) {
    dispatch({
      type: 'SET_MOVIE_DATA',
      payload: data,
    });
  }

  function addToFavourites(movie){
    dispatch({
        type: "ADD_TO_FAVOURITES",
        payload: movie,
    });
  };

  function removeFromFavourites(movie){
    dispatch({
        type: "REMOVE_FROM_FAVOURITES",
        payload: movie,
    });
  };

  function isFavourite(targetMovie){
    const favourites = [...state.favourites];
    const targetId = targetMovie.id; // id of movie to check
    if(favourites.length === 0){
        return false;
    }
      
    // Checks whether id matches the id of any favourited movie
    return favourites.some((movie) => movie.id === targetId);
  };

  return (
    <GlobalContext.Provider
      value={{
        movieData: state.movieData,
        favourites: state.favourites,
        setMovieData,
        addToFavourites, 
        removeFromFavourites,
        isFavourite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
