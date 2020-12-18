import * as yup from 'yup'
import { getAuthorById } from './utils'

export const getInitialValues = ( authors, editId ) => {
    const { first_name, last_name } = getAuthorById(authors, editId)
    return {
        first_name,
        last_name
    }
}

export const initialValues = {
    first_name: '',
    last_name: ''
}

export const validation = yup.object().shape({
    first_name: validSetting(),
    last_name: validSetting()
})

function validSetting(){
    return  yup.string()
    .typeError('Must be a string')
    .trim('Too Short!')
    .min(2, '*Too Short!')
    .max(15, '*Too Long!')
    .required('*Necessarily')
}
