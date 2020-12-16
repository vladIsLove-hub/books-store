import React from 'react'
import AuthorsList from '../authors-list/authors-list'

export const AuthorsPage = () => {
    return(
        <div>
            <div className="container p-5">
                <AuthorsList />
            </div>
        </div>
    )
}