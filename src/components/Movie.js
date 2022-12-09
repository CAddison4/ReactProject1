import {Link} from "react-router-dom";

function Movie({ movie, handleFavourite }) {
    return(
        <div className="movie-card">
            <div className="movie-poster">
                {/* movie.poster_path */}
                <p>Image will go here</p>
            </div>

            <div className="movie-details">
                <p>Title: { movie.title }</p>
                <p>Average Rating: {movie.vote_average}/10</p>
                <p>Year: { movie.release_date }</p>
                <p>Genres: { movie.genres }</p>
                <p>Description: { movie.overview }</p>
            </div>

            <div className="button-bar">
                <button onClick={handleFavourite} className="favourites-button">Add to Favourites</button>
                <Link to={`/movie/${movie.id}`} className="details-link">Details</Link>
            </div>
        </div>


    );
}

export default Movie;