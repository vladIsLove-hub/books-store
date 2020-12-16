
export const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    }
}

const booksRequeted = () => {
    return {
        type: 'BOOKS_REQUESTED'
    }
}

const booksError = (error) => {
    return {
        type: 'BOOKS_ERROR',
        payload: error
    }
}

export const bookDeleted = (bookId) => {
    return{
        type: 'BOOK_DELETED',
        payload: bookId
    }
}

export const bookEdited = (authors, objValues, editId) => {
    return{
        type: 'BOOK_EDIT',
        payload: authors,
        objValues,
        editId,
    }
}

export const bookAdded = (authors, objValues) => {
    return{
        type: 'BOOK_ADD',
        payload: authors,
        objValues
    }
}

export const requestBooks = (dispatch, booksStoreService) => () => {
    // dispatch(booksRequeted()) 
    
    booksStoreService.getBooks()
        .then((dataArr) => dispatch(booksLoaded(dataArr[0])))
        .catch((error) => dispatch(booksError(error)))
}