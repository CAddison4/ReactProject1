// Page - Favourites
// My Favourites Page
//     - All the requirements from the “All Pages” requirements plus...
//     - If the user has NO favourited movies, then:
//         o Display a message similar to:
//              “Sorry you have no favourited movies. 
//                Return to the home page to add a favourite movie”
//     - If the user DOES HAVE favourited movies, then display all the favourited movies
//         o The movies should be retrieved from localstorage
//         o Each movie should display the following information
//              The movie’s poster (or generic placeholder if no poster is available)
//              The movie’s title
//              The movie’s release date
//              The movie’s rating (review rating – example: 67%)
//              A short summary of the movie’s plot
//              A “More Info” button that the user can click on to get additional 
//               information on the individual movie page
//                    • Optionally the entire movie listing can be clickable to 
//                      the individual movie page


import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import '../styles/App.css';

const PageFavourites = () => {

    useEffect(() => {
		document.title = `${appTitle} - Favourites`;
	}, []);

    return (
        <section>
            <h2>Favourites Page</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit porro, dolorem, quod facere enim voluptate provident quo labore vero repellat nemo animi ad exercitationem rem quos, possimus libero deleniti laudantium?</p>
        </section>
    );

};

export default PageFavourites;