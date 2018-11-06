import React, {Component} from 'react';
import { Button, Col, Grid, Row} from 'react-bootstrap';
import '../appHeader/header.css'
import axios from 'axios';

export default class AppHeader extends Component{
    state = {
        username :'',
        incomeData:[]
    }
    componentWillMount(){
        axios.get('http://localhost:3000/api/AppUsers/' + localStorage.getItem('userId'),{
            headers: { Authorization: 'BtG4Cz8A2WWfkYKGBHzCi6L6eaHjzw410wZxFzBBLDnTu8eXeAgBMNPdglLiLToU' }
        }).then(res=>{
            this.setState({
                username:res.data.username
            })

        })

       var userId = localStorage.getItem('userId')
     axios.get('http://localhost:3000/api/Incomes').then(res=>{
        var income = res.data
        var filterUserIncome = income.find(userIncome=>{
       return userIncome.userId == userId
        })

        console.log(filterUserIncome)
        this.setState({
            incomeData:filterUserIncome
        })

        console.log(this.state.incomeData)
        })

       
       // console.log(localStorage.getItem('userId'))
    }

    render(){
        return(
            <Row className="app-header">
                <Col md={2} className="logo-contain"><img src={require('../../images/logo.png')}/></Col>
                <Col md={10} className="text-right username"><i className="fa fa-money"></i> {this.state.incomeData.amount} <i className="fa fa-user userIcon"></i>{this.state.username}
                </Col>
            </Row>
        )
    }
} 