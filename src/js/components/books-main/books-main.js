import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Preloader } from '../preloader/preloader'
import './books-main.scss'

export const BooksMain = () => {
    const [ loading, setLoading ] = useState(true)
    setTimeout(() => setLoading(false), 400)

    if(loading){
        return (
            <main className="main container-fluid" role="main">
                <div className="cards container">
                    <Preloader />
                </div>
            </main>
        )
    }

    return (
        <main className="main container-fluid" role="main">
            <div className="cards container">
                <Link to="/books" className="cards__item">
                    <div className="cards__book"></div>
                        Go to the books catalog
                </Link>
                <Link to="/authors" className="cards__item cards__item-author">
                    <div className="cards__author"></div>
                        Go to the authors page
                </Link>
            </div>
        </main>
    )
}