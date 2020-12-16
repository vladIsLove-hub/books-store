import React from 'react'
import { Link } from 'react-router-dom'
import './books-header.scss'

export const BooksHeader = () => {
    return (
        <header className="z-index" role="header">
            <nav className="container-fluid d-flex bg-dark indent shadows">
                <div className="container nav">
                    <Link className="nav__mainLink" to="/">
                        BooksStore
                    </Link>
                    <div className="nav__links nav__links-indent">
                        <Link className="nav__item"  to="/">
                            Home
                        </Link>
                        <Link className="nav__item"  to="/books">
                            Books
                        </Link>
                        <Link className="nav__item"  to="/authors">
                            Authors
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}




