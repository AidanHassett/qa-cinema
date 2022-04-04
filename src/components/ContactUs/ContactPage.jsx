import React from 'react'
import OpeningPage from '../OpeningTimes/OpeningPage'
import ContactForm from './ContactForm'

const ContactPage = () => {
    return (
        <div className="container" style={{paddingTop: '20vmin'}}>
          

            <ContactForm/>
            <OpeningPage/>
        </div>
    )
}

export default ContactPage