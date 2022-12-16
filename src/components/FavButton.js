import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function FavButton({isFav, movie}) {
    const {addToFavourites, removeFromFavourites} = useContext(GlobalContext);
    const favButtonText = {
        add: "Add to favourites",
        remove: "Remove from favourites",
    };
    return(
        <button 
            onClick={() => {
                isFav ? removeFromFavourites(movie) : addToFavourites(movie)
            }} 
            className="favourites-button"
        >
            {isFav ? favButtonText.remove : favButtonText.add}
        </button>
    );
};

export default FavButton;