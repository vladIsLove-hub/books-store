import React from 'react'

export const  BooksTableHead = () => {
    const tableFields = [
        '#',
        'Title',
        'Author surname',
        'Author name',
        'First publication',
        'View',
        'Edit',
        'Delete'
    ]

    return(
        <thead>
            <tr>
                {
                    tableFields.map(( field, idx ) => {
                        return <th key={ idx + 1 } scope="col">{ field }</th>
                    })
                }
            </tr>
        </thead>
    )
    
}