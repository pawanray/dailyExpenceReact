import React, {Component} from 'react';
import axios from 'axios'
import '../login/login.css'
import AppHeader from '../appHeader/appHeader'
export default class Login extends Component {
    
    state={
        appHeader:false
    }
    login = ()=>{
        var userObj = {
            username:this.username.value,
            password:this.password.value
            }

        axios.post('http://localhost:3000/api/AppUsers/login', userObj).then(res =>{
          //  console.log(res.data.userId)
         localStorage.setItem('userId',res.data.userId)
         this.props.loginStatus(true)
        // this.setState({appHeader:true})
        })
        
    }

    render(){
        return(
            
            <div className="login">
                 <div className="form-group">
                    <label for="email">Username</label>
                    <input type="text" className="form-control" ref={(input)=>{this.username=input}} />
                </div>
                <div className="form-group">
                    <label for="sub category">Password</label>
                    <input type="text" className="form-control" ref={(input)=>{this.password=input}}/>
                </div>
        
                <button type="submit" className="btn btn-default" onClick={this.login}>Login</button>
            </div>
        )
    }
}