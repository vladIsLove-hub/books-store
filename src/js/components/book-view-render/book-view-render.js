import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Preloader } from '../preloader/preloader'
import './book-view-render.scss'

const BookViewItem = ({books, bookId, history}) => {
    const [loading, setLoading] = useState(true)
    
    const timeout = setTimeout(() => {
        setLoading(false)
    }, 400)

    const book = books.find((book) => book.id === Number(bookId))
    const {title, author_id, first_public} = book

    if(loading){
        return(
            <div className="container p-5">
                <div className="row d-flex justify-content-center">
                    <Preloader/>
                </div>
            </div>
        )
    }

    return(
        <div className="container p-5">
            <div className="row d-flex justify-content-center">
                <div className="card bg-dark">
                    <h1 className="card__title">{title}</h1>
                    <div className="block">
                        <span className="block__authorFirstName block__authorFirstName-border">
                            Author: {`${author_id.first_name} ${author_id.last_name}`}
                        </span>
                        <span className="block__firstPublic">
                            First public: {first_public}
                        </span>
                        <button onClick={() => history.goBack()} className="btn btn-danger">Go back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({booksState}) => {
    return{
        books: booksState.books
    }
}

export default withRouter(connect(mapStateToProps)(BookViewItem))

