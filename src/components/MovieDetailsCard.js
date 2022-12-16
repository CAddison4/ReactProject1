import React from 'react';
import { Link } from 'react-router-dom';
import { posterSizes } from '../globals/globals';
import FavButton from './FavButton';
import MoviePoster from './MoviePoster';
import MovieInfo from './MovieInfo';

function MovieDetailsCard({movie, isFav}) {
    return(
        <div className="movie-details">
            <MoviePoster movie={movie} posterSize={posterSizes.details}/>
            <MovieInfo movie={movie}/>
            <div className="button-bar">
                <Link to={"/"} className="button-bar-link">Back to Movies</Link>
                <FavButton movie={movie} isFav={isFav}/>
            </div>
        </div>
    );
};

export default MovieDetailsCard;