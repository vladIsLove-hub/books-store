import React from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { bookEdited } from '../../../actions/booksActions'
import { validation, initialValues } from '../../../utils/bookValidation'

const BookEditForm = ({ history, authors, match, bookEdited }) => {
    return(
        <Formik
            initialValues={initialValues}
            validateOnBlur
            onSubmit={ async (values) => {
                if(values.authorId === 'Choose'){
                    return
                } else {
                    const { editId } = match.params
                    await bookEdited(authors, values, editId)
                    history.push('/books')
                }               
            }}
            validationSchema={validation}
        >
            {
                ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => {
                    return (
                        <form className="editForm">
                            <div className="editForm__item">
                                <label className="editForm__label" htmlFor="newTitle">New title:</label>
                                <input
                                    placeholder="Enter title"
                                    className="editForm__title"
                                    type="text"
                                    name='title'
                                    id="newTitle"
                                    required
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.title}
                                    />
                            </div>
                            {touched.title && errors.title && <p className="error">{errors.title}</p>}
                            <div className="editForm__item">
                                <span className="editForm__label">Choose author:</span>
                                <select
                                    className="editForm__select"
                                    name="authorId"
                                    value={values.author}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    >
                                        <option value="Choose">Choose author...</option>
                                    {   
                                        authors.map((author, idx) => {
                                            return(
                                            <option key={idx} value={idx + 1}>{`${author.first_name} ${author.last_name}`}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="editForm__item">
                                <label className="editForm__label" htmlFor="newTitle">New first public:</label>
                                <input
                                    placeholder="Enter first public"
                                    className="editForm__title"
                                    type="number"
                                    id="newFirstPublic"
                                    required
                                    name='first_public'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.first_public}
                                    />
                            </div>
                            {touched.first_public && errors.first_public && <p className="error">{errors.first_public}</p>}
                            <div className="row d-flex justify-content-center p-3">
                                <button type="submit" onClick={handleSubmit} disabled={isValid && !dirty && touched} className="btn btn-success p-2 m-3">Apply</button>
                                <button onClick={() => history.push('/books')} className="btn btn-danger p-2 m-3">Go back</button>
                            </div>
                        </form>
                    )
                }
            }
        </Formik>
    )
}


const mapStateToProps = () => {
    return{}
}

const mapDispatchToProps = {
    bookEdited
}

export default connect(mapStateToProps, mapDispatchToProps)(BookEditForm)



