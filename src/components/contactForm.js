import React , {Component} from 'react';

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


            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        First Name> <input label="Name" type="text" value={this.state.first_name} onChange={this.handleFirstNameChange} />
                        Last Name> <input type="text" value={this.state.last_name} onChange={this.handleLastNameChange} />
                        Email> <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                </div>
                <div>
                    <select value={this.state.option} onChange={this.handleSelectChange}>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </select>
                </div>
                <div>
                    <label>
                        Message><textarea type="text" value={this.state.message} onChange={this.handleMessageChange} />
                    </label>
                </div>
                <div>
                    <input type="submit" value="submit button"/>
                </div>
            </form>
        );
    }
}

export default ContactForm