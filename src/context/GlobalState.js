import React, { createContext, useReducer } from 'react';
import appReducer from './appReducer';

// Initial state
const initialState = {
  movieData: [],
  favourites: [],
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

  return (
    <GlobalContext.Provider
      value={{
        movieData: state.movieData,
        favourites: state.favourites,
        setMovieData,
        addToFavourites, 
        removeFromFavourites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
