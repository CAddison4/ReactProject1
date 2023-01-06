import {Link} from "react-router-dom";
// import '../styles/style.css';
import MoviePoster from './MoviePoster';
import MovieInfo from "./MovieInfo";

import FavButton from "./FavButton";

function MovieCard({ movie, isFav, classes, posterSize}) {
    return(
        <div className="movie-card">
            <div className="poster-and-info">
                <MoviePoster movie={movie} posterSize={posterSize}/>
                <MovieInfo movie={movie} classes={classes}/>
            </div>
            <div className="button-bar">
                <FavButton movie={movie} isFav={isFav}/>
                <Link to={`/movie/${movie.id}`} className="movie-details-link">More Info</Link>
            </div>
        </div>
    );
}

export default MovieCard;