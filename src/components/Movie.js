import {Link} from "react-router-dom";
import { imgBasePath } from "../globals/globals";
import '../styles/App.css';

function Movie({ movie, handleFavourite }) {
    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`${imgBasePath}${movie.poster_path}`} alt={`Poster for ${movie.title}`}/>
            </div>

            <div className="movie-details">
                <p>Title: { movie.title }</p>
                <p>Average Rating: {movie.vote_average}/10</p>
                <p>Year: { movie.release_date }</p>
                <p>Genres: { movie.genre_ids }</p> 
                <p>Description: { movie.overview }</p>
            </div>

            <div className="button-bar">
                <Link to={`/movie/${movie.id}`} className="details-link">Details</Link>
                <button onClick={handleFavourite} className="favourites-button">Add to Favourites</button>
            </div>
        </div>


    );
}

export default Movie;