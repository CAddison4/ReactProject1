import removeArrayItem from "../utils/remove-array-item";

function addToFavouritesLS(movie){
    const currentFavourites = getFavouritesLS();
    console.log(currentFavourites);
    const newFavourites = currentFavourites.push(movie);
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
}

function removeFromFavouritesLS(movie){
    const currentFavourites =  getFavouritesLS();
    const newFavourites = removeArrayItem(movie, currentFavourites);
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
}

function getFavouritesLS(){
    let favourites = [];
    let favouritesString = localStorage.getItem("favourites");
    if (favouritesString) {
        favourites = JSON.parse(favouritesString);    
    }
    return favourites;
}

export {addToFavouritesLS, removeFromFavouritesLS, getFavouritesLS};