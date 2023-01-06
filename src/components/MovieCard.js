import {Link} from "react-router-dom";
// import '../styles/style.css';
import MoviePoster from './MoviePoster';
import MovieInfo from "./MovieInfo";
import { posterSizes } from "../globals/globals";
import FavButton from "./FavButton";

function MovieCard({ movie, isFav }) {
    return(
        <div className="movie-card">
            <div className="poster-and-info">
                <MoviePoster movie={movie} posterSize={posterSizes.card}/>
                <MovieInfo movie={movie}/>
            </div>
            <div className="button-bar">
                <FavButton movie={movie} isFav={isFav}/>
                <Link to={`/movie/${movie.id}`} className="movie-details-link">More Info</Link>
            </div>
        </div>
    );
}

export default MovieCard;