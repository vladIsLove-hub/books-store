import React from 'react'

const {
    Provider: BooksStoreServiceProvider,
    Consumer: BooksStoreServiceConsumer
} = React.createContext()

export {
    BooksStoreServiceProvider,
    BooksStoreServiceConsumer
}