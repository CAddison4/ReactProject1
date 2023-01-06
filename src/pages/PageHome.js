import '../styles/style.css';
import { appTitle } from '../globals/globals';
import { GlobalContext } from '../context/GlobalState';
import { useContext, useEffect, useState } from 'react';
import urlBuilder from '../utils/apiUrlBuilder';
import MovieCard from "../components/MovieCard";

// filters for building api endpopint for movie requests
const POP_API = "popular"; // default
const UPCOMING_API = "upcoming";
const NOW_PLAYING_API = "now_playing";
const TOP_RATED_API = "top_rated";

const PageHome = () => {
    // make movieFilter a state variable
    const [movieFilter, setMovieFilter] = useState(POP_API);
    // access required global vars and functions
    const {movieData, setMovieData} = useContext(GlobalContext);
    const {isFavourite} = useContext(GlobalContext);

    // fetch movie data from TMDB and save results to movieData
    const fetchMovieData = (filterStr) => {
        const apiEndpoint = urlBuilder(filterStr);
        fetch(apiEndpoint)
            .then(res => res.json())
            .then(data => {
                setMovieData(data.results.slice(0,12))
            })
            .catch((error) => {console.log(error.message)});
    }

    useEffect(() => {
		// update title
        document.title = `${appTitle} - Movies`;
        // fetch movie data again any time the user changes the movieFilter state 
        fetchMovieData(movieFilter);
	}, [movieFilter]);

    // adjust API endpoint for selected movieFilter
    function updateMovieFilter(e) {
        switch(e.target.value){
            case(POP_API):
               setMovieFilter(POP_API)
               break;
            case(TOP_RATED_API):
               setMovieFilter(TOP_RATED_API)
               break;
            case(UPCOMING_API):
               setMovieFilter(UPCOMING_API)
               break;
            case(NOW_PLAYING_API):
               setMovieFilter(NOW_PLAYING_API)
               break;
            default:
               setMovieFilter(POP_API)
               return POP_API;
        }
    }

    const createMovieCards = () => {
        const movieCards = movieData.map((movie) => 
            <MovieCard 
                key={ movie.id } 
                movie={ movie } 
                isFav={ isFavourite(movie) }
            />
        );
        return(
            <div className="movie-cards">
                {movieCards}
            </div>
        );
    }
    
    return (
        <section className="home-page">
            {/* <h2>Movies Page</h2> */}
            <div className="filter">
                <p>Filter Movies By: </p>
                <select onChange={(updateMovieFilter)}>
                    <option value="popular">Popular</option>
                    <option value="top_rated">Top Rated</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="now_playing">Now Playing</option>
                </select>
            </div>
            {createMovieCards()}
        </section>
    );

};

export default PageHome;