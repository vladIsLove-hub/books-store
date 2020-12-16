import React from 'react'
import { Link } from 'react-router-dom'
import './books-main.scss'

export const BooksMain = () => {
    return (
        <main className="main container-fluid" role="main">
            <div className="cards container">
                <Link to="/books" className="cards__item col-md-5">
                    <div className="cards__book"></div>
                        Go to the books catalog
                </Link>
                <Link to="/authors" className="cards__item cards__item-author col-md-5">
                    <div className="cards__author"></div>
                        Go to the authors page
                </Link>
            </div>
        </main>
    )
}