import React, { createContext, useReducer } from 'react';
import appReducer from './appReducer';
import { getFavouritesLS } from "../utils/favourites";

// Initial state
const initialState = {
  movieData: [],
  favourites: [], // getFavouritesLS()
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
    console.log("movie", movie);
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

  // function getFavourites(){
  //   dispatch({
  //       type: "GET_FAVOURITES",
  //       payload: {},
  //   });
  // };

  return (
    <GlobalContext.Provider
      value={{
        movieData: state.movieData,
        favourites: state.favourites,
        setMovieData,
        addToFavourites, 
        removeFromFavourites,
        // getFavourites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
