import React from 'react'
import { Formik } from 'formik'
import { validation, initialValues } from '../../utils/authorValidation'
import '../book-edit-render/book-edit-render.scss'
import { HeadTableFields } from './head-table-fields'
import { connect } from 'react-redux'
import { authorAdded } from '../../actions/authorsActions'

const AuthorAddItem = ({ authorAdded }) => {
    return(
        <Formik
            initialValues={ initialValues }
            validateOnBlur
            onSubmit={ async ( values ) => {
                    await authorAdded(values)
                    values.first_name = ''
                    values.last_name = ''
                }
            }
            validationSchema={ validation }
        >
            {
                ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => {
                    return(
                        <table className="table table-dark table-responsive-md">
                            <HeadTableFields />
                            <tbody>
                                <tr>
                                    <td>
                                        Add Author
                                    </td>
                                    <td>
                                        <input
                                            placeholder="Enter first name"
                                            className="editForm__title"
                                            type="text"
                                            name='first_name'
                                            required
                                            onChange={ handleChange }
                                            onBlur={ handleBlur }
                                            value={ values.first_name }
                                            />
                                        { touched.first_name && errors.first_name && <p className="error">{errors.first_name}</p> }
                                    </td>
                                    <td>
                                        <input
                                            placeholder="Enter last name"
                                            className="editForm__title"
                                            type="text"
                                            required
                                            name='last_name'
                                            onChange={ handleChange }
                                            onBlur={ handleBlur }
                                            value={ values.last_name }
                                            />
                                        { touched.last_name && errors.last_name && <p className="error">{errors.last_name}</p> }
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
    authorAdded
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorAddItem)