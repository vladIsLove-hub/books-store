import { combineReducers } from "redux"
import authorsReducer from "./authorsReducer"
import booksReducer from "./booksReducer"

const rootReducer = combineReducers({
    booksState: booksReducer,
    authorsState: authorsReducer
})

export default rootReducer