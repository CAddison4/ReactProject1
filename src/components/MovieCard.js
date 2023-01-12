import {Link} from "react-router-dom";
// import '../styles/style.css';
import MoviePoster from './MoviePoster';
import MovieInfo from "./MovieInfo";

import FavButton from "./FavButton";

function MovieCard({ movie, isFav, classes, isDetailsPage}) {
    return(
        <div className="movie-card">
            <div className="poster-and-info">
                <MoviePoster movie={movie} isDetailsPage={isDetailsPage}/>
                <MovieInfo movie={movie} classes={classes}/>
            </div>
            <div className="button-bar">
                <FavButton movie={movie} isFav={isFav}/>
                <Link to={!isDetailsPage ? `/movie/${movie.id}` : "/"} className="button-bar-link">{!isDetailsPage ? "More Info" : "Back to All Movies"}</Link>
            </div>
        </div>
    );
}

export default MovieCard;