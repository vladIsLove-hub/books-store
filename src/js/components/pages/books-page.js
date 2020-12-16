import React from 'react'
import BooksList from '../books-list/books-list'

export const BooksPage = () => {
    return(
        <div>
            <div className="container p-5">
                <BooksList />
            </div>
        </div>
    )
}