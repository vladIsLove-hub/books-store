import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getAuthorById } from '../../utils/utils'
import { Preloader } from '../preloader/preloader'

const AuthorViewItem = ({ authors, authorId, history }) => {
    const [ loading, setLoading ] = useState(true)
    setTimeout(() => setLoading(false), 400)

    const author = getAuthorById(authors, authorId)
    const { first_name, last_name } = author

    if(loading) {
       return <Preloader/>
    }

    return (
        <div className="container p-5">
            <div className="row d-flex justify-content-center">
                <div className="card bg-dark">
                    <h1 className="card__title">
                        {`${ first_name } ${ last_name }`}
                    </h1>
                    <div className="block">
                        <button
                          onClick={() => history.goBack()}
                          className="btn btn-danger"
                          >
                            Go back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ authorsState }) => {
    return {
        authors: authorsState.authors
    }
}

export default withRouter(connect(mapStateToProps)(AuthorViewItem))

