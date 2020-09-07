import React , {Component} from 'react';


class ContactForm extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            username: '',
            option: ''
        }
    }

    handleValueChange = (event) => {
        this.setState(
            {
                username: event.target.value
            }
        )
    }

    handleSubmit = event => {
        alert(`${this.state.username} chooses ${this.state.option}`)
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
                        <input type="text" value={this.state.username} onChange={this.handleValueChange} />
                        <input type="submit" value="submit button"/>
                    </label>
                </div>
                <div>
                    <select value={this.state.option} onChange={this.handleSelectChange}>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </select>
                </div>
            </form>
        );
    }
}

export default ContactForm