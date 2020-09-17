import React , {Component} from 'react';
import emailjs from 'emailjs-com';
import Coordinates from './coordinate';


class ContactForm extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            message: '',
            option: 'option1'
        }
    }
    
    sendEmail(e){
        

        emailjs.sendForm('gmail', 'template_hoangluu404', e.target, 'user_otENxMGrIjk8QTSwe7Iwv')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        
    }

    handleFirstNameChange = (event) => {
        this.setState(
            {
                first_name: event.target.value,
            }
        )
    }

    handleLastNameChange = (event) => {
        this.setState(
            {
                last_name: event.target.value,
            }
        )
    }

    handleEmailChange = (event) => {
        this.setState(
            {
                email: event.target.value,
            }
        )
    }

    handleMessageChange = (event) => {
        this.setState(
            {
                message: event.target.value,
            }
        )
    }

    handleSubmit = event => {
        alert(`${this.state.last_name}, ${this.state.first_name} at ${this.state.email} chooses ${this.state.option}\nMessage: ${this.state.message}`)
        event.preventDefault()
    }

    handleSelectChange = event =>{
        this.setState(
            {
                option: event.target.value
            }
        )
    }

    render(){
        return(
            <form onSubmit={this.sendEmail}>
                <div>
                    
                    <label style={{display: "flex", justifyContent: "center"}}>
                        <div><input type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.handleFirstNameChange} required/></div>
                        <div><input type="text" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.handleLastNameChange} /></div>
                        
                    </label>
                    <div><input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} required/></div>
                </div>

                <div>
                    <label>
                        <textarea type="text" name="message" placeholder="Enter a message" value={this.state.message} onChange={this.handleMessageChange} required/>
                    </label>
                </div>
                <div>
                    <input type="submit" value="Submit"/>
                </div>
                <Coordinates/>
            </form>
            );
    }
}

export default ContactForm;