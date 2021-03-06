import React from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { validation, getInitialValues } from '../../../utils/authorValidation'
import { authorEdited } from '../../../actions/authorsActions'

const AuthorEditForm = ({ history, match, authorEdited, books, authors }) => {
    const { editId } = match.params
    return(
        <Formik
            initialValues={getInitialValues(authors, editId)}
            validateOnBlur
            onSubmit={ async (values) => {
                await authorEdited(values, editId, books)
                history.push('/authors')
            }}
            validationSchema={validation}
        >
            {
                ({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
                    return (
                        <form className="editForm">
                            <div className="editForm__item">
                                <label className="editForm__label" htmlFor="first_name">New first Name:</label>
                                <input
                                    placeholder="Enter new first Name"
                                    className="editForm__title"
                                    type="text"
                                    name='first_name'
                                    id="first_name"
                                    required
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.first_name}
                                    />
                            </div>
                            {touched.first_name && errors.first_name && <p className="error">{errors.first_name}</p>}
                            <div className="editForm__item">
                                <label className="editForm__label" htmlFor="last_name">New last Name:</label>
                                <input
                                    placeholder="Enter new last Name"
                                    className="editForm__title"
                                    type="text"
                                    id="last_name"
                                    required
                                    name='last_name'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.last_name}
                                    />
                            </div>
                            {touched.last_name && errors.last_name && <p className="error">{errors.last_name}</p>}
                            <div className="row d-flex justify-content-center p-3">
                                <button type="submit" onClick={handleSubmit} className="btn btn-success p-2 m-3">Apply</button>
                                <button onClick={() => history.push('/authors')} className="btn btn-danger p-2 m-3">Go back</button>
                            </div>
                        </form>
                    )
                }
            }
        </Formik>
    )
}


const mapStateToProps = ({ booksState, authorsState }) => {
    return{ 
        books: booksState.books,
        authors: authorsState.authors
    }
}

const mapDispatchToProps = {
    authorEdited,
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorEditForm)



