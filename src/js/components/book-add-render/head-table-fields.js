import React from 'react'

export const HeadTableFields = () => {
    const tableFields = [
        '',
        'Title',
        'Author',
        'First publication',
        ''
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