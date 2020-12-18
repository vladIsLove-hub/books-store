import React from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { bookEdited } from '../../../actions/booksActions'
import { validation, getInitialValues } from '../../../utils/bookValidation'

const BookEditForm = ({ history, authors, books, match, bookEdited }) => {
    const { editId } = match.params
    return(
        <Formik
            initialValues={getInitialValues(books, editId)}
            validateOnBlur
            onSubmit={ async ( values ) => {
                console.log(values.authorId)
                if(values.authorId === 'Choose'){
                    return
                } else {
                    await bookEdited(authors, values, editId)
                    history.push('/books')
                }               
            }}
            validationSchema={ validation }
        >
            {
                ({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
                    return (
                        <form className="editForm">
                            <div className="editForm__item">
                                <label className="editForm__label" htmlFor="newTitle">
                                    Title:
                                </label>
                                <input
                                    placeholder="Enter title"
                                    className="editForm__title"
                                    type="text"
                                    name='title'
                                    id="newTitle"
                                    required
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                    value={ values.title }
                                    />
                            </div>
                            { touched.title && errors.title && <p className="error">{errors.title}</p> }
                            <div className="editForm__item">
                                <span className="editForm__label">
                                    Choose author:
                                </span>
                                <select
                                    id="select"
                                    className="editForm__select"
                                    name="authorId"
                                    value={ values.authorId }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                    >
                                    {   
                                        authors.map(( author, idx ) => {
                                            return (
                                            <option key={idx} value={idx + 1}>
                                                {`${ author.first_name } ${ author.last_name }`}
                                            </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="editForm__item">
                                <label className="editForm__label" htmlFor="newTitle">
                                    First public:
                                </label>
                                <input
                                    placeholder="Enter first public"
                                    className="editForm__title"
                                    type="number"
                                    id="newFirstPublic"
                                    required
                                    name='first_public'
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                    value={ values.first_public }
                                    />
                            </div>
                            { touched.first_public && errors.first_public && <p className="error">{errors.first_public}</p> }
                            <div className="row d-flex justify-content-center p-3">
                                <button
                                  type="submit"
                                  onClick={handleSubmit}
                                  className="btn btn-success p-2 m-3"
                                  >
                                    Apply
                                </button>
                                <button
                                  onClick={() => history.push('/books')}
                                  className="btn btn-danger p-2 m-3"
                                  >
                                    Go back
                                </button>
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
    bookEdited
}

export default connect(mapStateToProps, mapDispatchToProps)(BookEditForm)



