import React from 'react'

export const HeadTableFields = () => {
    const tableFields = [
        '',
        'First name',
        'Last name',
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