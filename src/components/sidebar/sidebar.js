import React, {Component} from 'react';
import { Button, Col, Grid, Row} from 'react-bootstrap';
import Login from '../login/login'
import ExpenceCategories from '../expence/expenceCategories'
import AddExpence from '../expence/addExpence'
import ExpenceList from '../expence/expenceList'
import IncomeCategories from '../income/incomeCategories'

import '../sidebar/sidebar.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Sidebar extends Component{
    render(){
        return(
            <Router>
            <Row>
                <Col md={2} className="sidebar">
            <ul className="sidebar-menu">
               <li><a href=""><i className="fa fa-tachometer"></i> Dashboard</a></li>
             <li><a href=""><i className="fa fa-money"></i> Income <i className="fa fa-angle-down pull-right"></i></a>
               <ul>
               <li><Link to="/IncomeCategories"><i className="fa fa-money"></i>Income Category</Link></li>
                   <li><a href=""><i className="fa fa-money"></i> Add Income</a></li>
               </ul>
               </li>
                <li><Link to="/"> Expence <i className="fa fa-angle-down pull-right"></i></Link> 
                <ul>
                <li><Link to="/ExpenceCategories"> <i className="fa fa-cart-plus"></i> Expence Category</Link></li>
                  {/* <li><Link to="/AddExpence/:id/:name"><i className="fa fa-cart-plus"></i> Add Expence</Link></li> */}
                <li><Link to="/ExpenceList"><i className="fa fa-list"></i> Expence List</Link></li>
                </ul>
            </li>
              </ul> 
            </Col>
            
              <Route exact path="/" component={ExpenceCategories} />
              <Route path="/IncomeCategories" component={IncomeCategories} />
              <Route path="/ExpenceCategories" component={ExpenceCategories} />
              <Route path="/AddExpence/:id/:name" component={AddExpence} />
              <Route path="/ExpenceList" component={ExpenceList} />
            </Row>
          </Router>
        );
        
     
        
    }
} 