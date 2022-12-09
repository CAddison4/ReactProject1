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
    const [loading, setLoading] = useState(false);

    async function getMovieData(filterStr) {
        const apiEndpoint = urlBuilder(filterStr);
        setLoading(true);
        const dataObject = await fetch(apiEndpoint)
            .then((res) => res.json())
            .then((movieData) => {
                setMovieData(movieData);            
                console.log("data: ", movieData);
            return movieData;})
            // console.log("data object", dataObject)
            // movieData &&

            // const results = dataObject.results;
            // console.log("results", results);
            // const movieResults = await results.json();
            // console.log("movie results:", movieResults);

            .catch ((error) => {
                console.log("Error loading movie data 1", error);
                // return [];
            })
            .finally(() => {
                setLoading(false);
            });

        if(loading){
            return <p>Data is loading...</p>
        }
        // return movieData;
    }

    useEffect(() => {
		document.title = `${appTitle} - Movies`;

        const newMovieData = getMovieData(movieFilter);
        console.log("newMovieData", newMovieData);
        setMovieData(newMovieData);
	}, [movieFilter]);


    function createMovieComponents() {
        movieData &&

        console.log("movie Data", movieData)
        movieData.map((movie) => {
            return(
                <Movie key={movie.id} title={movie.title}/>
            );
        })
    }

    // console.log(movieData);
    if (!movieData.length) return <h3>Loading...</h3>;
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