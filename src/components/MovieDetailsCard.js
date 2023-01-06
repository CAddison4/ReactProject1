import React from 'react';
import { Link } from 'react-router-dom';
import { posterSizes } from '../globals/globals';
import FavButton from './FavButton';
import MoviePoster from './MoviePoster';
import MovieInfo from './MovieInfo';

function MovieDetailsCard({movie, isFav}) {
    return(
        <div className="movie-card">
            <div className="poster"><MoviePoster movie={movie} posterSize={posterSizes.details}/></div>
            <div className="info"><MovieInfo movie={movie}/></div>
            
            <div className="button-bar-details">
                <Link to={"/"} className="button-bar-link-details">Back to Movies</Link>
                <FavButton movie={movie} isFav={isFav}/>
            </div>
        </div>
    );
};

export default MovieDetailsCard;