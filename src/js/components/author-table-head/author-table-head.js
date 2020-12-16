import React from 'react'

export const  AuthorTableHead = () => {
    const tableFields = [
        '#',
        'Author surname',
        'Author name',
        'View',
        'Edit',
        'Delete'
    ]

    return(
        <thead>
            <tr>
                {
                    tableFields.map((field, idx) => {
                        return <th key={idx + 1} scope="col">{field}</th>
                    })
                }
            </tr>
        </thead>
    )
    
}