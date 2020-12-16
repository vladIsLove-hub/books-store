export function setItemsToLocalStorage(key = '', values){
    localStorage.setItem(key, JSON.stringify(values))
}

export function getItemsFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(key)) || []
}