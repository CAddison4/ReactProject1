// Individual Movie Page
// - This page is accessed when a user clicks on the “More Info” link on an 
//   individual movie
// - All the requirements from the “All Pages” requirements plus...
// - The movie’s poster (or generic placeholder if no poster is available)
// - The movie’s title
// - The movie’s release date
// - The movie’s rating (review rating – example: 67%)
// - A short summary of the movie’s plot
// - A button or similar user interface element that allows the user to “favourite” or 
//  “heart” or “like” a movie or “unfavourite” or “unheart” or “unlike” a movie if a 
//   user has already favourited the movie
//     o When a user favourites a movie, the application should store information about
//       the movie in localstorage using the localstorage web api
//     o When a user unfavourites a movie that movie should be removed from 
//       localstorage

//Add guard redirect if id is not in data array. 
// if (isNaN(id) || id % 1 !== 0 || id < 0 || id > 5) {
//     return <Navigate to="/portfolio" replace={true} />;
//   }


  // Make sure id is a whole number between 1 and 6 (inclusive)
  // ...If is not...then send them back to the Portfolio page

import '../styles/App.css';
import { appTitle } from '../globals/globals';
import { imgBasePath, localImageFolderPath } from "../globals/globals";
import { Link, useParams, Navigate } from "react-router-dom";
import { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const PageMovieDetails = ({handleFavourite }) => {
    const {favourites, addToFavourites, removeFromFavourites} = useContext(GlobalContext);
    const {movieData} = useContext(GlobalContext);
    let { id } = useParams();
    id = id * 1;
    useEffect(() => {
        document.title = `${appTitle} - Details`;
	}, [id]);
    
    // guard to make sure id is a number
    if (isNaN(id)) {
        return <Navigate to="/" replace={true} />;
      }
    // check if id is in movieData, otherwise redirect to home
    const movie = movieData.filter((item) => item.id === id)[0];
    if (!movie) {
        console.log("we got here");
        return <Navigate to="/" replace={true} />;
    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.poster_path ? `${imgBasePath}${movie.poster_path}` :`${localImageFolderPath}logo192.png`} alt={`Poster for ${movie.title}`}/>
            </div>

            <div className="movie-details">
                <p>Title: { movie.title }</p>
                <p>Average Rating: {movie.vote_average}/10</p>
                <p>Year: { movie.release_date }</p>
                <p>Description: { movie.overview }</p>
            </div>

            <div className="button-bar">
                <Link to={`/movie/${movie.id}`} className="details-link">Details</Link>
                <button onClick={handleFavourite} className="favourites-button">Add to Favourites</button>
            </div>
        </div>

        // add back button
    );
};

export default PageMovieDetails;    
