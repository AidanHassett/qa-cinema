import React from 'react'
import { Toast } from 'react-bootstrap'

const Info = () => {
    return (
        <>

<div className="beauty">
        <Toast.Header className="goldenHours">
          <strong style={{ color: 'red' }}>Information</strong>
        </Toast.Header>
        <Toast.Body className="goldenHours">

            <h2> Movie Classifications </h2>
            <hr />

            <p> 
            The purpose of the British Board of Film Classification, besides vetting films to make sure that they don't contain material deemed unsuitable, is to classify films into various categories to provide an advance warning of what the audience might expect in terms of suitability for particular age groups.
            </p>

            <p>
                Classifications currently in use are Uc, U, PG, 12, 12A, 15, 18 and R18, but quite a few more have been featured on film posters throughout the last century.
            </p>

            <a style={{ color: 'red' }}
                href="https://www.bbfc.co.uk/about-classification"
                rel="noreferrer"
                target="_blank"
            >Addition Info from the BBFC website
            </a>
            </Toast.Body>
</div>

        </>
    )
}

export default Info