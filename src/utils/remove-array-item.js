function getIndex(item, arr){
    return arr.findIndex(arrItem => arrItem.id === item.id);
}

function removeArrayItem(item, arr){
    return arr.splice(getIndex(item, arr), 1);
}

export default removeArrayItem;