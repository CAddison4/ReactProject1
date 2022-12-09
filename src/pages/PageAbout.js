//About Page
// - All the requirements from the “All Pages” requirements plus...
// - A simple generic description about the application
// - Meet the TMDb attribution requirements on this page
//     o The TMDb attribution requirements include showing the TMDb logo and 
//       the following message:
//              "This product uses the TMDb API but is not endorsed or certified 
//               by TMDb."
//              The TMDb logo should be less prominent then the application logo 
//               and the logo should be placed in a way that does not give the 
//               appearance that your application is endorsed by TMDb
//              Read about attribution requirements on the FAQ page (look under the 
//               “What are the attribution requirements?” section)
//                 • https://www.themoviedb.org/faq/api
//                 • Click the link below for TMDb logo images:
//                      o https://www.themoviedb.org/about/logos-attribution

import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import '../styles/App.css';

const PageAbout = () => {

	useEffect(() => {
		document.title = `${appTitle} - About`;
	}, []);

	return (
		<section>
			<h2>About Page</h2>
			<p>Saepe vitae deserunt cupiditate vel reiciendis adipisci quasi. At, dolore qui, saepe similique id repellat ipsam sapiente repellendus commodi deleniti natus itaque hic temporibus nam nobis tempora enim suscipit quas!</p>
		</section>
	);
	
};

export default PageAbout;