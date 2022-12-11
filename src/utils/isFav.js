// Is Fav

function isFav(arr, id){

    // If there are no favourited kittens...
    // then no need to check if the kitten has
    // been favourited...
    if(arr.length === 0){
      return false;
    }

    // Checks whether the object is favourited
    return arr.some((obj) => obj.id === id);

}

export default isFav;