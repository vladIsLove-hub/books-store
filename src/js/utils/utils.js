export const addBook = ( state, authors, objValues ) => {
    const { books } = state
    const { title, authorId, first_public } = objValues

    const newBook = {
        id: books.length + 1 ,
        title,
        author_id: authors[ +authorId - 1 ],
        created_at: getCreatedDate(),
        first_public: `${ first_public }`
    }

    return [
        ...books,
        newBook
    ]
}

export const deleteItemFromArray = ( array, itemIdx ) => {
    return [
        ...array.slice(0, itemIdx),
        ...array.slice(itemIdx + 1)
    ]
} 

export const editBookFromItems = ( state, authors, objValues, bookEditIdx ) => {
    const { books } = state
    const { title, authorId, first_public } = objValues
    const book = getBookById(books, bookEditIdx)

    const editBook = {
        ...book,
        title,
        author_id: authors[ +authorId - 1 ],
        first_public
    }    
    const bookIndex = getBookIndexById(books, bookEditIdx)
    
    return [
        ...books.slice(0, bookIndex),
        editBook,
        ...books.slice(bookIndex + 1)
    ]
}

export const editAuthorFromItems = ( state, objValues, editId, books ) => {
    const { authors } = state
    const { first_name, last_name } = objValues
    const author = getAuthorById(authors, editId)
    const editAuthor = {
        ...author,
        first_name,
        last_name
    }

    const booksWithAuthorEdited = [
        ...books.map(( book, idx, arr ) => {
            if(book.author_id.first_name === author.first_name){
                return {
                    ...book,
                    author_id: editAuthor
                }
            }
            return arr[idx]
        })
    ]

    const authorIndex = getAuthorIndexById(authors, editId)
    return {
        getAuthors: [
            ...authors.slice(0, authorIndex),
            editAuthor,
            ...authors.slice(authorIndex + 1),
        ],
        getBooks: booksWithAuthorEdited
    }
}

export const addAuthor = ( state, newAuthorValues ) => {
    const { authors } = state
    const { first_name, last_name } = newAuthorValues

    const newAuthor = {
        id: new Date().getSeconds() * 111,
        first_name,
        last_name
    }

    return [
        ...authors,
        newAuthor
    ]
}

export function getAuthorById( authors = [], equalId ) {
    return authors.find(({ id }) => id === +equalId)
}

export function getBookById( books = [], equalId ) {
    return books.find(({ id }) => id === +equalId)
}

export function getAuthorIndexById( authors = [], equalId ) {
    return authors.findIndex(({ id }) => id === +equalId)
}

export function getBookIndexById( books = [], equalId ) {
    return books.findIndex(({ id }) => id === +equalId)
}

function getCreatedDate(){
    let date = new Date()

    let dd = date.getDate()
    dd = dd < 10 ? ('0' + dd) : dd

    let mm = date.getMonth() + 1
    mm = mm < 10 ? ('0' + mm) : mm

    let created_at = `${dd}.${mm}.${date.getFullYear()}`
    return created_at
}
