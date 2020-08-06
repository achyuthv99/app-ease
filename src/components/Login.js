import React, {Component} from 'react' ;
import axios from 'axios';

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            LoggedIn: false,
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    myChangeHandlerUserName = (event) => {
        this.setState({email: event.target.value});
    }

    myChangeHandlerPassword = (event) => {
        this.setState({password: event.target.value});
    }



    //login click method
    async handleSubmit(event) {
        event.preventDefault()
        const jsonLogin = {"email": this.state.email, "password": this.state.password};
        this.sendreq(jsonLogin)
        this.setState((state) => {
            return {LoggedIn: true};
        });
    }

    //sends login get request
    async sendreq(jsonLogin) {
        const {data: response} = await axios.post('http://localhost:3000/api/auth',  jsonLogin);
        console.log(response)
    }


    //toggle form
    displayForm() {
        if (this.state.LoggedIn === false) {
            return (
                <form onSubmit = {this.handleSubmit} className = 'form'>
                    <h3>Log In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" onChange = {this.myChangeHandlerUserName} placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" onChange = {this.myChangeHandlerPassword} placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Log In</button>
                    <p className="forgot-password text-right">
                            Forgot <a href="/">password?</a>
                    </p>
                </form>
            );
        }
        else{
            
        }
    }

    render() {
        return (
                <div>
                {this.displayForm()}
                </div>
        )
    }

    
}