// Individual Movie Page
// - This page is accessed when a user clicks on the “More Info” link on an 
//   individual movie
// - All the requirements from the “All Pages” requirements plus...
// - The movie’s poster (or generic placeholder if no poster is available)
// - The movie’s title
// - The movie’s release date
// - The movie’s rating (review rating – example: 67%)
// - A short summary of the movie’s plot
// - A button or similar user interface element that allows the user to “favourite” or 
//  “heart” or “like” a movie or “unfavourite” or “unheart” or “unlike” a movie if a 
//   user has already favourited the movie
//     o When a user favourites a movie, the application should store information about
//       the movie in localstorage using the localstorage web api
//     o When a user unfavourites a movie that movie should be removed from 
//       localstorage

//Add guard redirect if id is not in data array. 
// if (isNaN(id) || id % 1 !== 0 || id < 0 || id > 5) {
//     return <Navigate to="/portfolio" replace={true} />;
//   }


  // Make sure id is a whole number between 1 and 6 (inclusive)
  // ...If is not...then send them back to the Portfolio page
import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

const PageMovieDetails = () => {
    useEffect(() => {
		document.title = `${appTitle} - Movie Details`;
	}, []);

    return (
        <section>
            <h2>Movie Page</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit porro, dolorem, quod facere enim voluptate provident quo labore vero repellat nemo animi ad exercitationem rem quos, possimus libero deleniti laudantium?</p>
        </section>
    );
};

export default PageMovieDetails;    
