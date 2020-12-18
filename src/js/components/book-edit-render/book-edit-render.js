import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Preloader } from '../preloader/preloader'
import compose from '../../utils/compose'
import hocBooksstoreService from '../HOC/hoc-booksstore-service'
import './book-edit-render.scss'
import BookEditForm from './book-edit-form/book-edit-form'
import { getBookById } from '../../utils/utils'

const BookEditItem = ({ book, history, match, authors }) => {
    
    const { title, author_id, first_public } = book

    return(
        <div className="container p-5">
            <div className="row d-flex justify-content-center">
                <div className="card bg-dark">
                    <h3 className="card__title card__title-border">Book editing</h3> 
                    <h1 className="card__title">{title}</h1>
                    <div className="block block-border">
                        <span className="block__authorFirstName">
                            Author: {`${author_id.first_name} ${author_id.last_name}`}
                        </span>
                        <span className="block__firstPublic block__firstPublic-border">
                            First public: {first_public}
                        </span>
                    </div>
                    <div className="edit">
                        <h3 className="edit__title">Edit</h3>
                        <BookEditForm history={history} match={match} authors={authors} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const BookEditItemContainer = ({ books, editId, history, match }) => {
    const book = getBookById(books, editId)

    const [ loading, setLoading ] = useState(true)
    setTimeout(() => setLoading(false), 400)

    if(loading){
        return <Preloader/>
    }   

    return <BookEditItem book={book} history={history} match={match} />
} 

const mapStateToProps = ({ booksState }) => {
    return {
        books: booksState.books,
    }
}

export default compose(
    hocBooksstoreService(),
    withRouter,
    connect(mapStateToProps)
)(BookEditItemContainer)
