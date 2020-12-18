export const authorsLoaded = ( newAuthors ) => {
    return {
        type: 'AUTHORS_LOADED',
        payload: newAuthors
    }
}

export const authorsRequested = () => {
    return {
        type: 'AUTHORS_REQUESTED'
    }
}

const authorsError = ( error ) => {
    return{
        type: 'AUTHORS_ERROR',
        payload: error
    }
}

export const authorEdited = ( objValues, editId, books ) => {
    return {
        type: 'AUTHOR_EDIT',
        payload: objValues,
        editId,
        books
    }
}

export const authorAdded = ( objValues ) => {
    return {
        type: 'AUTHOR_ADD',
        objValues
    }
}

export const authorDeleted = ( bookId ) => {
    return{
        type: 'AUTHOR_DELETED',
        payload: bookId
    }
}

export const requestAuthors = ( dispatch, booksStoreService ) => () => {
    dispatch(authorsRequested()) 
    
    booksStoreService.getBooks()
        .then((dataArr) => dispatch(authorsLoaded(dataArr[1])))
        .catch((error) => dispatch(authorsError(error)))
}