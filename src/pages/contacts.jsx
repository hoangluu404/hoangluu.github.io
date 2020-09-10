import React from 'react';
import NavigationBar from '../components/NavigationBar';
import ContactBox from '../components/contactForm';

const Contacts = () => {
    return (
        <div>
            <div className="App">
                <NavigationBar/>
                
                <h1>Contact Me</h1>
                <ContactBox/>
                
            </div>
        </div>
    )
}

export default Contacts