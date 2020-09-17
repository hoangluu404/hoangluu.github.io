import React, {useState} from 'react';
import NavigationBar from '../components/NavigationBar';
import ContactBox from '../components/contactForm';
import Calendly from '../components/calendly';
import Styled from 'styled-components';



const Contacts = () => {
    
    return (
        
        <div>
            <div>
                <NavigationBar/>
                
                
                <h1>Contact Me</h1>
                <p>
                    <div>I am always looking for new opportunities to improve myself in learning new things</div>
                    <div>Best way to contact me is to submit the contact form below, or just email me directly</div>
                </p>
                <ContactBox/>

                

                

                
            </div>
        </div>
        
    )
}

export default Contacts