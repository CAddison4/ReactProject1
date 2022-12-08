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
