import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import errorComponent from './ErrorComponent'

class TodoApplication extends Component{
    render(){
        return(
            <div className="TodoApplication">
            <Router>
                <HeaderComponent/>
                <Switch>
                    <Route path="/" exact component={LoginComponent}/>
                    <Route path="/login" component={LoginComponent}/>
                    <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                    <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                    <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                    <Route component={errorComponent}/>
                </Switch>
                <FooterComponent/>
            </Router>
            </div>
        )
    }
}


export default TodoApplication