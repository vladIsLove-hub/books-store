import React from 'react'
import { withRouter } from 'react-router-dom'
import EditIcon from '../icons/edit'
import TrashIcon from '../icons/trash'
import ViewIcon from '../icons/view'


const AuthorsListItem = ({ author, deleteAuthor, history, idx }) => {
    const {id, first_name, last_name} = author
    return(
        <React.Fragment>
            <th scope="row">{ idx + 1 }</th>
            <td>{ last_name }</td>
            <td>{ first_name }</td>
            <td><button onClick={() => history.push(`/authors/${id}`)} className="btn btn-primary"><ViewIcon/></button></td>
            <td><button onClick={() => history.push(`/authors/edit/${id}`)} className="btn btn-success"><EditIcon/></button></td>
            <td><button onClick={() => deleteAuthor()} title="Delete" className="btn btn-danger"><TrashIcon/></button></td>
        </React.Fragment>
    )
}

export default withRouter(AuthorsListItem)