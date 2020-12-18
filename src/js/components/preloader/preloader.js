import React from 'react'
import './preloader.scss'

export const Preloader = () => {
    return(
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-warning size" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}