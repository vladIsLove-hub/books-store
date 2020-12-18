import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Preloader } from '../preloader/preloader'
import compose from '../../utils/compose'
import hocBooksstoreService from '../HOC/hoc-booksstore-service'
import AuthorEditForm from './author-edit-form/author-edit-form'
import { getAuthorById } from '../../utils/utils'

const AuthorEditItem = ({ author, history, match }) => {
    const { first_name, last_name } = author

    return(
        <div className="container p-5">
            <div className="row d-flex justify-content-center">
                <div className="card bg-dark">
                    <h3 className="card__title card__title-border">
                        Author editing
                    </h3> 
                    <div className="block block-border">
                        <span className="block__authorFirstName">
                            Author: {`${ first_name } ${ last_name }`}
                        </span>
                    </div>
                    <div className="edit">
                        <h3 className="edit__title">
                            Edit
                        </h3>
                        <AuthorEditForm history={ history } match={ match } />
                    </div>
                </div>
            </div>
        </div>
    )
}

const AuthorEditItemContainer = ({ editId, history, match, authors }) => {
    const author = getAuthorById(authors, editId)

    const [ loading, setLoading ] = useState(true)
    setTimeout(() => setLoading(false), 400)

    if(loading){
        return <Preloader />
    }       

    return <AuthorEditItem history={ history } match={ match } author={ author } />        
}

const mapStateToProps = ({ authorsState }) => {
    return{
        authors: authorsState.authors,
    }
}

export default compose(
    hocBooksstoreService(),
    withRouter,
    connect(mapStateToProps)
)(AuthorEditItemContainer)
