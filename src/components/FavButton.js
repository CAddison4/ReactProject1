import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function FavButton({isFav, movie}) {
    const {addToFavourites, removeFromFavourites} = useContext(GlobalContext);
    const favButtonText = {
        add: <div className="unfav"><img src={require("../favourites-buttons/heart.png")} alt="unfavourited heart"></img></div>,
        remove: <div className="fav"><img src={require("../favourites-buttons/heart-liked.png")} alt="favourited heart"></img></div>,
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