import React, { Component } from 'react';
import './Signup.css' ;
import axios from 'axios';

export default class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            SignedUp: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    myChangeHandlerFirstName = (event) => {
        this.setState({firstname: event.target.value});
    }

    myChangeHandlerLastName = (event) => {
        this.setState({lastname: event.target.value});
    }

    myChangeHandlerEmail = (event) => {
        this.setState({email: event.target.value});
    }

    myChangeHandlerPassword = (event) => {
        this.setState({password: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault()
        const jsonSignUp = {
            "name": this.state.firstname + ' ' + this.state.lastname, 
            "email": this.state.email,
            "password": this.state.password,
        };
        this.sendreq(jsonSignUp)
        this.setState((state) => {
            return {SignedUp: true};
        });
    }

    async sendreq(jsonSignUp){
        const {data: response} = axios.post('http://localhost:3000/api/users', jsonSignUp)
        console.log(response)
    }


    render(){
        return (
            <form onSubmit = {this.handleSubmit} className='form'>
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" onChange = {this.myChangeHandlerFirstName} placeholder="First name" />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" onChange = {this.myChangeHandlerLastName} placeholder="Last name" />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" onChange = {this.myChangeHandlerEmail} placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" onChange = {this.myChangeHandlerPassword} placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered: <a href="/login">sign in?</a>
                    </p>
                </form>
        );
        }
    
}