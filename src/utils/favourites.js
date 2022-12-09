import { JSON } from "react-router-dom";
import { removeArrayItem } from "../utils/remove-array-item";

function addToFavourites(movie){
    const currentFavourites =  getFavourites();
    const newFavourites = currentFavourites.push(movie);
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
}

function removeFromFavourites(movie){
    const currentFavourites =  getFavourites();
    const newFavourites = removeArrayItem(movie, currentFavourites);
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
}

function getFavourites(){
    const favouritesString = localStorage.getItem("favourites");
    const favourites = JSON.parse(favouritesString);
    return favourites;
}

function toggleFavouritesButton(){
    return
}
export default {addToFavourites: addToFavourites, removeFromFavourites: removeFromFavourites,
    getFavourites: getFavourites, toggleFavouritesButton: toggleFavouritesButton};