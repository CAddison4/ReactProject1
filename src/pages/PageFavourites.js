import '../styles/style.css';
import { appTitle } from '../globals/globals';
import { Link } from "react-router-dom";
import { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from '../components/MovieCard';

const PageFavourites = () => {
    // access required global var
    const {favourites} = useContext(GlobalContext);

    // update title
    useEffect(() => {
		document.title = `${appTitle} - Favourites`;
	}, []);

    // message to display if there are no favourites
    function displayEmptyMessage() {
        return(
        <p>
            Sorry, you have no favourites yet. Return to the <Link to="/">home</Link> page
            to add some movies to your favourites.
        </p>
      );
    }

    function createMovieCards() {
        const movieCards = favourites.map((movie) => 
            <MovieCard
                key={ movie.id } 
                movie={ movie } 
                isFav={ true }
            />
        );
        return(
            <div className="movie-cards">
                {movieCards}
            </div>
        );
    } 
    
    return (
        <section className='movie-grid-layout'>
            <h2>Favourites</h2>
            {favourites.length > 0 ?  createMovieCards() : displayEmptyMessage()}
        </section>
    );

};

export default PageFavourites;