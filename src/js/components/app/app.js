import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { AuthorsPage } from '../pages/authors-page'
import { BooksPage } from '../pages/books-page'
import { HomePage } from '../pages/home-page'
import './app.scss'
import { BooksHeader } from '../books-header/books-header'
import  BookViewItem  from '../book-view-render/book-view-render'
import  AuthorViewItem  from '../author-view-render/author-view-render'
import BookEditItemContainer from '../book-edit-render/book-edit-render'
import AuthorEditItemContainer from '../author-edit-render/author-edit-render'

export const App = () => {
    return(
        <div>
            <BooksHeader />
            <Switch>

                <Route path="/" exact component={HomePage} />


                <Route exact path="/books" render={() => <BooksPage/>}/>
                <Route exact path="/books/:bookId" render={({match}) => {
                    const { bookId } = match.params
                    return(
                        <BookViewItem bookId={ bookId } />
                    )
                }} />
                <Route path="/books/edit/:editId" render={({match}) => {
                    const { editId } = match.params
                    return <BookEditItemContainer editId={ editId } />
                }} />


                <Route path="/authors" exact component={AuthorsPage} />
                <Route exact path="/authors/:authorId" render={({match}) => {
                    const { authorId } = match.params
                    return(
                        <AuthorViewItem authorId={ authorId } />
                    )
                }} />
                <Route path="/authors/edit/:editId" render={({ match }) => {
                    const { editId } = match.params
                    return <AuthorEditItemContainer editId={editId} />
                }} /> 

            </Switch>
        </div>           
    )
}