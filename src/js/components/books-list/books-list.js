import React from 'react'
import { connect } from 'react-redux'
import compose from '../../utils/compose'
import  BooksListItem  from '../books-list-item/books-list-item'
import hocBooksstoreService from '../HOC/hoc-booksstore-service'
import { requestBooks, bookDeleted, booksLoaded } from '../../actions/booksActions'
import { requestAuthors, authorsLoaded } from '../../actions/authorsActions'
import { BooksTableHead } from '../books-table-head/books-table-head'
import { Preloader } from '../preloader/preloader'
import { ErrorIndicator } from '../error-indicator/error-indicator'
import './books-list.scss'
import BookAddItem from '../book-add-render/book-add-render'
import { getItemsFromLocalStorage } from '../../local-storage/local-storage'

export const BooksList = ({ books, authors, deleteBook }) => {
    return(
        <React.Fragment>
            <div className="row d-flex justify-content-center">
                <BookAddItem authors={ authors } />
            </div>
            <h1 className="group-title">
                Books Catalog
            </h1>
            <table className="table table-dark table-hover table-responsive-lg">
                <BooksTableHead />
                <tbody>
                    {
                        books.map(( book, idx ) => {
                            return(
                                <tr key={ idx }>
                                    <BooksListItem deleteBook={() => {
                                        deleteBook(book.id)
                                    }} idx={ idx } book={ book } />
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
}

class BooksListContainer extends React.Component{

    state = {
        requestImmitation: true
    }
    
    componentDidMount(){
        const { books, authors } = this.props
        const booksFromLocalStore = getItemsFromLocalStorage('books')
        const authorsFromLocalStore = getItemsFromLocalStorage('authors')

        if(booksFromLocalStore.length > 0){
            this.props.booksLoaded(booksFromLocalStore)
        }
        if(authorsFromLocalStore.length > 0){
            this.props.authorsLoaded(authorsFromLocalStore)
        }
        if(books.length === 0 && booksFromLocalStore.length === 0){
            this.props.requestBooks()
        } 
        if(authors.length === 0 && authorsFromLocalStore.length === 0){
            this.props.requestAuthors()
        }
    }

    render(){
        const { requestImmitation } = this.state
        const { books, loading, error, authors, deleteBook } = this.props;

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

        return <BooksList authors={ authors } deleteBook={ deleteBook } books={ books } />
    }
}

const mapStateToProps = ({ booksState, authorsState }) => {
    return {
        books: booksState.books,
        loading: booksState.loading,
        error: booksState.error,
        authors: authorsState.authors,
    }
}

const mapDispatchToProps = ( dispatch, ownProps ) => {
    const { booksStoreService } = ownProps
    return {
        requestBooks: requestBooks(dispatch, booksStoreService),
        requestAuthors: requestAuthors(dispatch, booksStoreService),
        deleteBook: ( id ) => {
            const isValid = confirm('Are you sure you want to delete this book?')
            if(isValid){
                dispatch(bookDeleted(id))
            }
        },
        booksLoaded: ( newBooks ) => {
            dispatch(booksLoaded(newBooks))
        },
        authorsLoaded: ( newAuthors ) => {
            dispatch(authorsLoaded(newAuthors))
        }
    }
}

export default compose(
    hocBooksstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BooksListContainer)


