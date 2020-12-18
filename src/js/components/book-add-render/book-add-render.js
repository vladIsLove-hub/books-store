import React from 'react'
import { Formik } from 'formik'
import { validation, initialValues } from '../../utils/bookValidation'
import { HeadTableFields } from './head-table-fields'
import { connect } from 'react-redux'
import { bookAdded } from '../../actions/booksActions'

const BookAddItem = ({ authors, bookAdded }) => {
    return(
        <Formik
            initialValues={ initialValues }
            validateOnBlur
            onSubmit={ async ( values ) => {
                if(values.authorId === 'Choose'){
                    return
                } else {
                    await bookAdded(authors, values)
                    values.title = ''
                    document.querySelector('.editForm__select').value = 'Choose'
                    values.first_public = ''
                }
            }}
            validationSchema={ validation }
        >
            {
                ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => {
                    return(
                        <table className="table table-dark table-responsive-lg">
                            <HeadTableFields />
                            <tbody>
                                <tr>
                                    <td>
                                        Add book
                                    </td>
                                    <td>
                                        <input
                                            placeholder="Enter title"
                                            className="editForm__title"
                                            type="text"
                                            name='title'
                                            required
                                            onChange={ handleChange }
                                            onBlur={ handleBlur }
                                            value={ values.title }
                                            />
                                        { touched.title && errors.title && <p className="error">{errors.title}</p> }
                                    </td>
                                    <td>
                                        <select
                                            id="select"
                                            className="editForm__select"
                                            name="authorId"
                                            value={ values.author }
                                            onChange={ handleChange }
                                            onBlur={ handleBlur }
                                            >
                                                <option value="Choose">Choose author...</option>
                                            {   
                                                authors.map(( author, idx ) => {
                                                    return(
                                                    <option key={ idx } value={ idx + 1 }>
                                                        {`${ author.first_name } ${ author.last_name }`}
                                                    </option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </td>
                                    <td>
                                        <input
                                            placeholder="Enter first public"
                                            className="editForm__title"
                                            type="number"
                                            required
                                            name='first_public'
                                            onChange={ handleChange }
                                            onBlur={ handleBlur }
                                            value={ values.first_public }
                                            />
                                        {  touched.first_public && errors.first_public && <p className="error">{errors.first_public}</p> }
                                    </td>
                                    <td>
                                        <button
                                          type="submit"
                                          onClick={ handleSubmit }
                                          disabled={ isValid && !dirty && touched }
                                          className="btn btn-success p-2"
                                          >
                                            Add
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    )
                }
            }
        </Formik>
    )
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = {
    bookAdded
}

export default connect(mapStateToProps, mapDispatchToProps)(BookAddItem)