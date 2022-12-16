import React from 'react';

function MovieInfo({movie}) {
    return (
        <div className="movie-info">
            <p>Title: { movie.title }</p>
            <p>Average Rating: {movie.vote_average}/10</p>
            <p>Year: { movie.release_date }</p>
            <p>Description: { movie.overview }</p>
        </div>
    );
};

export default MovieInfo;