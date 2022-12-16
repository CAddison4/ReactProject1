function getIndex(item, arr){
    return arr.findIndex(arrItem => arrItem.id === item.id);
}

function removeArrayItem(item, arr){
    const index = getIndex(item, arr);
    console.log("index", index);
    if (index >= 0) {
        arr.splice(index, 1);
        console.log("after splice", arr);   
    }
    return arr;
}

export default removeArrayItem;