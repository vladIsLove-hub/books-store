import { deleteItemFromArray, editBookFromItems, addBook, getBookIndexById } from "../utils/utils"
import { setItemsToLocalStorage } from '../local-storage/local-storage'
import initialState from "./state"

const booksReducer = ( state = initialState, action ) => {
    switch(action.type){
        case 'BOOKS_REQUESTED': 
            return {
                ...state,
                authors: [],
                books: [],
                loading: true,
                error: null
            }
        case 'BOOKS_LOADED': 
            return {
                ...state,
                authors: [],
                books: action.payload,
                loading: false,
                error: null
            }
        case 'BOOKS_ERROR':
            return {
                ...state,
                authors: [],
                books: [],
                loading: false,
                error: action.payload
            }
        case 'BOOK_ADD':
            const newBooks = addBook(state, action.payload, action.objValues)
            setItemsToLocalStorage('books', newBooks)
            return{
                ...state,
                books: newBooks,
            }
        case 'BOOK_EDIT':
            const  { payload, objValues, editId } = action
            const editedBooks = editBookFromItems(state, payload, objValues, editId)
            setItemsToLocalStorage('books', editedBooks)
            return{
                ...state,
                books: editedBooks,
            }
        case 'BOOK_DELETED':
            const { books } = state
            const bookIndex = getBookIndexById(books, action.payload)
            const newBooksAfterDeleted = deleteItemFromArray(books, bookIndex)
            setItemsToLocalStorage('books', newBooksAfterDeleted)
            return {
                ...state,
                books: newBooksAfterDeleted,
            }
        default :   
            return state
    }
    
}

export default booksReducer