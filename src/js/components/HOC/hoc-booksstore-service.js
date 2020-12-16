import React from 'react'
import { BooksStoreServiceConsumer } from '../books-store-context/books-store-context'

const hocBooksstoreService = () => (Wrapped) => {
    return (props) => {
        return(
            <BooksStoreServiceConsumer>
                {
                    (booksStoreService) => {
                        return (
                            <Wrapped {...props} booksStoreService={booksStoreService} />
                        )
                    }
                }
            </BooksStoreServiceConsumer>
        )
    }
}

export default hocBooksstoreService