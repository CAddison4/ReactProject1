import React from 'react';
import { imgBasePath, localImageFolderPath } from "../globals/globals";

// make two default images with corresponding sizes and save name also in globals

function MoviePoster({ movie, posterSize }) {
  return (
    <div className="movie-poster">
        <img src={movie.poster_path ? 
                imgBasePath + posterSize + movie.poster_path : 
                localImageFolderPath + "logo192.png"} 
             alt={`Poster for ${movie.title}`}
        />
    </div>
  );
};

export default MoviePoster;