import { useEffect } from 'react';
import { appTitle, localImageFolderPath } from '../globals/globals';
import '../styles/style.css';

const PageAbout = () => {
	// update title
	useEffect(() => {
		document.title = `${appTitle} - About`;
	}, []);

	return (
		<section>
			<h2>About</h2>
			<p>The Movie App allows you to explore movies and save your favourites.</p>
			<p>Browse by popularity, rating, upcoming, or currently playing.</p>

			<p>The Movie App is intended to be used exclusively for educational purposes.</p>
			<p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
			<img src={`${localImageFolderPath}tmbd-logo.svg`} alt="TMDB logo" className="tmdb-logo"/>
		</section>
	);
	
};

export default PageAbout;