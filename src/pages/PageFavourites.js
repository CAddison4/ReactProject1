// Page - Favourites
// My Favourites Page
//     - All the requirements from the “All Pages” requirements plus...
//     - If the user has NO favourited movies, then:
//         o Display a message similar to:
//              “Sorry you have no favourited movies. 
//                Return to the home page to add a favourite movie”
//     - If the user DOES HAVE favourited movies, then display all the favourited movies
//         o The movies should be retrieved from localstorage
//         o Each movie should display the following information
//              The movie’s poster (or generic placeholder if no poster is available)
//              The movie’s title
//              The movie’s release date
//              The movie’s rating (review rating – example: 67%)
//              A short summary of the movie’s plot
//              A “More Info” button that the user can click on to get additional 
//               information on the individual movie page
//                    • Optionally the entire movie listing can be clickable to 
//                      the individual movie page


import '../styles/App.css';
import { appTitle } from '../globals/globals';
import Movie from '../components/Movie';
import { Link, useParams, Navigate } from "react-router-dom";
import { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const PageFavourites = () => {
    const {favourites, removeFromFavourites} = useContext(GlobalContext);

    useEffect(() => {
		document.title = `${appTitle} - Favourites`;
	}, []);

    function displayEmptyMessage() {
        return(
        <p>
            Sorry, you have no favourites yet. Return to the <Link to="/">home</Link> page
            to add some movies to your favourites.
        </p>
      );
    }

    function createMovieComponents() {
        const movies = favourites.map((movie) => 
            <Movie 
                key={ movie.id } 
                movie={ movie } 
                handleFavourite={ removeFromFavourites } // don't need to check isFav since we are in favourites
                className="movie"
            />
        );
        return(
            <div className="movies">
                {movies}
            </div>
        );
    } 
    
    return (
        <section>
            <h2>Favourites</h2>
            {favourites.length > 0 ?  createMovieComponents() : displayEmptyMessage()}
        </section>
    );

};

export default PageFavourites;