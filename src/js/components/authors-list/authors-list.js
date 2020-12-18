import React from 'react'
import { connect } from 'react-redux'
import compose from '../../utils/compose'
import hocBooksstoreService from '../HOC/hoc-booksstore-service'
import { requestAuthors, authorDeleted, authorsLoaded } from '../../actions/authorsActions'
import { AuthorTableHead } from '../author-table-head/author-table-head'
import  AuthorsListItem  from '../authors-list-item/authors-list-item'
import { Preloader } from '../preloader/preloader'
import { ErrorIndicator } from '../error-indicator/error-indicator'
import { requestBooks } from '../../actions/booksActions'
import AuthorAddItem from '../author-add-render/author-add-render'
import { getItemsFromLocalStorage } from '../../local-storage/local-storage'

const AuthorsList = ({ authors, deleteAuthor }) => {
    return(
        <React.Fragment>
            <AuthorAddItem />
            <h1 className="group-title">
                Authors Catalog
            </h1>
            <table className="table table-dark table-hover table-responsive-md">
                <AuthorTableHead />
                <tbody>
                    {
                        authors.map(( author, idx ) => {
                            return(
                                <tr key={ author.id }>
                                    <AuthorsListItem
                                      deleteAuthor={() => deleteAuthor(author.id)}
                                      idx={ idx } author={ author } />
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table> 
        </React.Fragment>
    )
}

class AuthorsListContainer extends React.Component {

    state = {
        requestImmitation: true
    }

    componentDidMount(){
        const { authors, books } = this.props
        const authorsFromLocalStore = getItemsFromLocalStorage('authors')
        const booksFromLocalStore = getItemsFromLocalStorage('books')

        if(authorsFromLocalStore.length > 0){
            this.props.authorsLoaded(authorsFromLocalStore)
        }
        if(authors.length === 0 && authorsFromLocalStore.length === 0){
            this.props.requestAuthors()
        }
        if(books.length === 0 && booksFromLocalStore.length === 0){
            this.props.requestBooks()
        } 
    }

    render(){
        const {authors, loading, error, deleteAuthor} = this.props
        const { requestImmitation } = this.state
        setTimeout(() => {
            this.setState({
                requestImmitation: false
            })
        }, 600)

        if(loading || requestImmitation){
            return <Preloader />
        }

        if(error){
            return <ErrorIndicator />
        }

        return <AuthorsList deleteAuthor={ deleteAuthor } authors={ authors } />
    }
}

const mapStateToProps = ({ booksState , authorsState }) => {
    return{
        books: booksState.books,
        authors: authorsState.authors,
        loading: authorsState.loading,
        error: authorsState.error
    }
}

const mapDispatchToProps = ( dispatch, ownProps ) => {
    const { booksStoreService } = ownProps
    return{
        requestBooks: requestBooks(dispatch, booksStoreService),
        requestAuthors: requestAuthors(dispatch,booksStoreService),
        deleteAuthor: ( id ) => {
            const isValid = confirm('Are you sure you want to delete this author?')
            if(isValid){
                dispatch(authorDeleted(id))
            }
        },
        authorsLoaded: ( newAuthors ) => {
            dispatch(authorsLoaded(newAuthors))
        }
    }
}

export default compose(
    hocBooksstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(AuthorsListContainer)