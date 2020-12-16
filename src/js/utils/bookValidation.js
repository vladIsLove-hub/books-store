import * as yup from 'yup'

export const initialValues = {
    title: '',
    authorId: '',
    first_public: ''
}

export const validation = yup.object().shape({
    title: yup.string()
        .typeError('Сan be a string')
        .min(3, '*Too Short!')
        .max(30, '*Too Long!')
        .required('*Necessarily'),
    authorId: yup.string()
        .required('*Necessarily'),
    first_public: yup.number()
        .typeError('Should be a number')
        .min(1900, '*Must be four numerals (1900-2021)')
        .max(2021, '*Must be four numerals (1900-2021)')
        .required('*Necessarily')
})
