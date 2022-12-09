//Home Page
// - All the requirements from the “All Pages” requirements plus...
// - Form select element or other UI element (select box, radio buttons, links or 
//   just buttons...the UI is up to you) that allows a user to change the current 
//   movies displayed between the following options:
//     o Popular
//     o Top Rated
//     o Now Playing
//     o Upcoming (yet to be released)
// - On initial load of the application the page should display 12 of the most current 
//   popular movies (The Movie DB considers popular movies to be those that have the 
//   most ratings)
//     o The user can switch this list by using the form select or other UI element to 
//       change these 12 movies to:
//          The 12 most highly rated movies currently out
//          The 12 most recently released movies (movies that are currently playing)
//          The next 12 movies that will be released soon (upcoming)
// o Each movie should display the following information:
//          The movie’s poster
//             • If a poster is not available, then you should load a generic 
//               placeholder image
//          The movie’s title
//          The movie’s release date
//          The movie’s rating (review rating – example: 67%)
//          A short summary about the movie
//          A “More Info” button that the user can click on to get additional 
//           information on the individual movie page
//             • Optionally the entire movie listing can be clickable to the 
//               individual movie page

import { useEffect, useState } from 'react';
import { appTitle } from '../globals/globals';
import urlBuilder from '../utils/api-url-builder';
import Movie from "../components/Movie";

const PageHome = () => {
    const [movieFilter, setMovieFilter] = useState("popular");
    const [movieData, setMovieData] = useState([]);

    async function fetchMovieData(filterStr) {
        try {
            const apiEndpoint = urlBuilder(filterStr);
            const res = await fetch(apiEndpoint);
            console.log("res", res);
            const resData = await res.json();
            console.log("resData", resData);
            const newMovieData = resData.results;
            console.log("new movie data", newMovieData);
            setMovieData(newMovieData);
            console.log("movie data state", movieData);
        }
        catch(error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
		document.title = `${appTitle} - Movies`;
        fetchMovieData("popular");
	}, []);


    function createMovieComponents() {
        movieData.map((movie, i) => {
            return(
                <Movie key={i} title={movie.title}/>
            );
        })
    }

    return (
        <section>
            <h2>Movies Page</h2>
            <div className="movies">
                {createMovieComponents()}
            </div>
        </section>
    );

};

export default PageHome;