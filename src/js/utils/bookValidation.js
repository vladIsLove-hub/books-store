import * as yup from 'yup'
import { getBookById } from './utils'

export const getInitialValues = ( books, editId ) => {
    const { title, author_id, first_public } = getBookById(books, editId)
    return {
        title,
        authorId: author_id.id,
        first_public,
    }
}

export const initialValues = {
    title: '',
    authorId: '',
    first_public: ''
}

export const validation = yup.object().shape({
    title: yup.string()
        .typeError('Сan be a string')
        .trim('Too short!')
        .min(3, '*Too Short!')
        .max(30, '*Too Long!')
        .required('*Necessarily'),
    authorId: yup.number()
        .required('*Necessarily'),
    first_public: yup.number()
        .typeError('Should be a number')
        .min(1900, '*Must be four numerals (1900-2021)')
        .max(2021, '*Must be four numerals (1900-2021)')
        .required('*Necessarily')
})
