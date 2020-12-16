import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Preloader } from '../preloader/preloader'
import './author-view-render.scss'

const AuthorViewItem = ({authors, authorId, history}) => {
    const [loading, setLoading] = useState(true)

    const timeout = setTimeout(() => {
        setLoading(false)
    }, 400)

    const author = authors.find((author) => author.id === Number(authorId))
    const {first_name, last_name} = author

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
                    <h1 className="card__title">{`${first_name} ${last_name}`}</h1>
                    <div className="block">
                        <button onClick={() => history.goBack()} className="btn btn-danger">Go back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({authorsState}) => {
    return{
        authors: authorsState.authors
    }
}

export default withRouter(connect(mapStateToProps)(AuthorViewItem))

