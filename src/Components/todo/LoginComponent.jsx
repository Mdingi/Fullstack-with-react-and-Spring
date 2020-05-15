import React,{Component} from "react";
import AuthenticationService from "./AuthenticationService.js";

class LoginComponent extends Component{
    constructor(props){
       super(props) 
       this.state = {
            username:'khangelani',
            password:'',
            hasLoginFailed:false,
            showSuccessmessage: false


       }
    //    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    //    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.LoginClicked = this.LoginClicked.bind(this)
    }
    // handleUsernameChange(event){
    //     console.log(event.target.value)
    //     this.setState(
    //         {
    //             username:event.target.value
    //         }
    //     )
    // }

    handleChange(event){
        console.log(this.state)
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        )
    }
    // handlePasswordChange(event){
    //     console.log(event.target.value)
    //     this.setState(
    //         {
    //             password:event.target.value
    //         }
    //     )
    // }
    LoginClicked(){
        if(this.state.username === 'khangelani' && this.state.password === 'dummy'){
            AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password )
            this.props.history.push(`/welcome/${this.state.username}`)
            //this.setState({showSuccessmessage:true})
            //this.setState({hasLoginFailed:false})  
        }
            

        else{
            this.setState({showSuccessmessage:false}) 
            this.setState({hasLoginFailed:true}) 
            //console.log('invalid credentials')
        }
            
        //console.log(this.state)
    }

    render(){
        return(
            
            <>
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid credentials</div>}
                    {/*<ShowSuccessLogin showSuccessmessage={this.state.showSuccessmessage}/>*/}
                    {this.state.showSuccessmessage && <div>sucessfully logIn</div>} 
                    User name : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    password  : <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button onClick = {this.LoginClicked}>login</button>
                </div>  
            </>
        )
    }
}
export default LoginComponent