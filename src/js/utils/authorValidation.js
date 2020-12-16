import * as yup from 'yup'

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
    .min(2, '*Too Short!')
    .max(15, '*Too Long!')
    .required('*Necessarily')
}
