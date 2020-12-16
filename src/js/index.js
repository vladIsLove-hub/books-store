import '../styles/main.scss';
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './components/app/app';
import store from './store';
import { BooksStoreServiceProvider } from './components/books-store-context/books-store-context';
import BooksStoreService from './services/booksstore-service/booksstore-service';

const booksStoreService = new BooksStoreService()

ReactDOM.render(
    <Provider store={store}>
        <BooksStoreServiceProvider value={booksStoreService}>
            <Router>
                <App />
            </Router>
        </BooksStoreServiceProvider>
    </Provider>,
    document.getElementById('root')
)