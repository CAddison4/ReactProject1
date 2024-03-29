import '../styles/style.css';
import { appTitle } from '../globals/globals';
import { useParams, Navigate } from "react-router-dom";
import { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from '../components/MovieCard';

const PageMovieDetails = () => {
    // access required global vars and functions
    const {movieData, isFavourite} = useContext(GlobalContext);
    // get id from route param and convert to number
    let { id } = useParams();
    id = id * 1;

    // update title
    useEffect(() => {
        document.title = `${appTitle} - Details`;
	}, []);
    
    // guard to make sure id is a number
    if (isNaN(id)) {
        return <Navigate to="/" replace={true} />;
      }
    // check if id is in movieData, otherwise redirect to home
    const movie = movieData.filter((item) => item.id === id)[0];
    if (!movie) {
        return <Navigate to="/" replace={true} />;
    }

    return(
        <MovieCard 
            movie={ movie }
            isFav={ isFavourite(movie) }
            classes={{movieInfo: "movie-info-details", movieInfoDesc:"movie-info-desc-details"}}
            isDetailsPage = {true}    
        />
    );
};

export default PageMovieDetails;    
