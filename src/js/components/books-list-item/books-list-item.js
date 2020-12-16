import React from 'react'
import { withRouter } from 'react-router-dom'
import EditIcon from '../icons/edit'
import TrashIcon from '../icons/trash'
import ViewIcon from '../icons/view'


const BooksListItem = ({ book, history, deleteBook, idx }) => {
    const {id, title, author_id, first_public} = book
    return(
        <React.Fragment>
            <th scope="row">{ idx + 1 }</th>
            <td>{ title }</td>
            <td>{ author_id.last_name}</td>
            <td>{ author_id.first_name }</td>
            <td>{ first_public }</td>
            <td><button title="View" onClick={() => history.push(`/books/${id}`)} className="btn btn-primary"><ViewIcon/></button></td>
            <td><button title="Edit" onClick={() => history.push(`/books/edit/${id}`)} className="btn btn-success"><EditIcon/></button></td>
            <td><button onClick={() => deleteBook()} title="Delete" className="btn btn-danger"><TrashIcon/></button></td>
        </React.Fragment>
    )
}



export default withRouter(BooksListItem)
