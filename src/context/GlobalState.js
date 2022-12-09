import React, { createContext, useReducer } from 'react';
import appReducer from './appReducer';

// Initial state
const initialState = {
  movieData: [],
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

  return (
    <GlobalContext.Provider
      value={{
        movieData: state.movieData,
        setMovieData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
