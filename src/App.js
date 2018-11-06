import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Col, Grid, Row} from 'react-bootstrap';
import AppHeader from './components/appHeader/appHeader'
import Sidebar from './components/sidebar/sidebar'
import Login from './components/login/login'
// import AddExpence from './components/expence/addExpence'
// import ExpenceCategories from './components/expence/expenceCategories'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  state = {
    login : false
  }
  getLoginStatus = (status) => {
    this.setState({
      login:status
    })
  }
  render() {
    if(this.state.login === true){
    return <Login loginStatus={this.getLoginStatus}/>
    }
    else{
    return (
      <div className="container-fluid">
    <AppHeader/>
      <Row>
     <Col md={12}>
     <Sidebar/>
     </Col>
     </Row>
      </div>
    );
  }
  }

}


export default App;
