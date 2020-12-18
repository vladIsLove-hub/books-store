import React from 'react'
import { Link } from 'react-router-dom'
import './books-header.scss'

export const BooksHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadows p-3">
            <div className="container">
                <Link className="nav__mainLink" to="/">BooksStore</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav__item" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav__item" to="/books">Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav__item" to="/authors">Authors</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// <header className="z-index" role="header">
//             <nav className="container-fluid d-flex bg-dark indent shadows">
//                 <div className="container nav">
//                     <Link className="nav__mainLink" to="/">
//                         BooksStore
//                     </Link>
//                     <div className="nav__links nav__links-indent">
//                         <Link className="nav__item"  to="/">
//                             Home
//                         </Link>
//                         <Link className="nav__item"  to="/books">
//                             Books
//                         </Link>
//                         <Link className="nav__item"  to="/authors">
//                             Authors
//                         </Link>
//                     </div>
//                 </div>
//             </nav>
//         </header>



{/* <header className="container-fluid p-off z-index bg-dark shadows p-2" role="header">
            <div className="container">
                <nav class="navbar navbar-dark bg-dark">
                    <Link class="nav__mainLink" to="/">BooksStore</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <div className="nav__links nav__links-indent">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <Link class="nav-link nav-item" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link nav-item" to="/books">
                                        Books
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link nav-item" to="/authors">
                                        Authors
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

 */}

