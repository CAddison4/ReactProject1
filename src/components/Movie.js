import {Link} from "react-router-dom";
import { imgBasePath, localImageFolderPath } from "../globals/globals";
import '../styles/App.css';

function Movie({ movie, handleFavourite, favButtonText }) {
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
                <button onClick={() => {handleFavourite(movie)}} className="favourites-button">{favButtonText}</button>
            </div>
        </div>


    );
}

export default Movie;