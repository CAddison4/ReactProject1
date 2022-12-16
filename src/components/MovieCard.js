import {Link} from "react-router-dom";
import '../styles/App.css';
import MoviePoster from './MoviePoster';
import MovieInfo from "./MovieInfo";
import { posterSizes } from "../globals/globals";
import FavButton from "./FavButton";

function MovieCard({ movie, isFav }) {
    return(
        <div className="movie-card">
            <MoviePoster movie={movie} posterSize={posterSizes.card}/>
            <MovieInfo movie={movie}/>
            <div className="button-bar">
                <Link to={`/movie/${movie.id}`} className="button-bar-link">More Info</Link>
                <FavButton movie={movie} isFav={isFav}/>
            </div>
        </div>
    );
}

export default MovieCard;