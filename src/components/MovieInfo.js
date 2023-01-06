import React from 'react';

function MovieInfo({movie, classes}) {
    return (
        <div className={classes.movieInfo}>
            <p className="movie-info-home">Title: { movie.title }</p>
            <p className="movie-info-home">Average Rating: {movie.vote_average}/10</p>
            <p className="movie-info-home">Year: { movie.release_date.split("-")[0] }</p>
            <p className={classes.movieInfoDesc}>Description: { movie.overview }</p>
        </div>
    );
};

export default MovieInfo;