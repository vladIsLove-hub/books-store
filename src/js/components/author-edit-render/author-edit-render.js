import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Preloader } from '../preloader/preloader'
import { requestAuthors } from '../../actions/authorsActions'
import compose from '../../utils/compose'
import hocBooksstoreService from '../HOC/hoc-booksstore-service'
import AuthorEditForm from './author-edit-form/author-edit-form'

const AuthorEditItem = ({ author, history, match }) => {
    
    const { first_name, last_name } = author

    return(
        <div className="container p-5">
            <div className="row d-flex justify-content-center">
                <div className="card bg-dark">
                    <h3 className="card__title card__title-border">Author editing</h3> 
                    <div className="block block-border">
                        <span className="block__authorFirstName">
                            Author: {`${first_name} ${last_name}`}
                        </span>
                    </div>
                    <div className="edit">
                        <h3 className="edit__title">Edit</h3>
                        <AuthorEditForm history={history} match={match} />
                    </div>
                </div>
            </div>
        </div>
    )
}

class AuthorEditItemContainer extends React.Component{

    componentDidMount(){
        if(this.props.authors.length === 0){
            this.props.requestAuthors()
        }
    }

    render(){
        const { editId, history, match, authors, loading } = this.props
        const author = authors.find((author) => author.id === Number(editId))

        if(loading){
            return(
                <div className="container p-5">
                    <div className="row d-flex justify-content-center">
                        <Preloader/>
                    </div>
                </div>
            )
        }        

        return <AuthorEditItem history={history} match={match} author={author}  />
    }

} 

const mapStateToProps = ({authorsState}) => {
    return{
        authors: authorsState.authors,
        loading: authorsState.loading
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { booksStoreService } = ownProps
    return{
        requestAuthors: requestAuthors(dispatch, booksStoreService)
    }
}

export default compose(
    hocBooksstoreService(),
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(AuthorEditItemContainer)
