import initialState from "./state"
import { editAuthorFromItems, addAuthor, deleteItemFromArray } from "../utils/utils"
import { setItemsToLocalStorage } from '../local-storage/local-storage'


const authorsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'AUTHORS_LOADED':
            return {
                books: [],
                authors: action.payload,
                loading: false,
                error: null
            }
        case 'AUTHORS_REQUESTED':
            return{
                books: [],
                loading: true,
                authors: [],
                error: null
            }
        case 'AUTHORS_ERROR': 
            return {
                books: [],
                authors: [],
                loading: false,
                error: action.payload
            }
        case 'AUTHOR_EDIT':
            const { payload, editId, books } = action
            const editedAuthors = editAuthorFromItems(state, payload, editId, books).getAuthors
            const editedBooks = editAuthorFromItems(state, payload, editId, books).getBooks
            setItemsToLocalStorage('books', editedBooks)
            setItemsToLocalStorage('authors', editedAuthors)
            return {
                ...state,
                authors: editedAuthors,
                // books: editedBooks
            }
        case 'AUTHOR_ADD':
            const { objValues } = action
            const updatedAuthors = addAuthor(state, objValues)
            setItemsToLocalStorage('authors', updatedAuthors)
            return {
                ...state,
                authors: updatedAuthors
            }
        case 'AUTHOR_DELETED':
            const { authors } = state
            const authorIndex = authors.findIndex(({ id }) => id === action.payload)
            const newAuthorsAfterDeleted = deleteItemFromArray(authors, authorIndex)
            setItemsToLocalStorage('authors', newAuthorsAfterDeleted)
            return {
                ...state,
                authors: newAuthorsAfterDeleted
            }
        case 'CLEAR_BOOKS':
            return {
                ...state,
                books: []
            }
        default : 
            return state
    }
}

export default authorsReducer