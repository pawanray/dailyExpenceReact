import React, {Component} from 'react';
import { Button, Col, Grid, Row} from 'react-bootstrap';
import Apis from '../Api/api'
import './expence.css'
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import AddExpence from '../expence/addExpence'

export default class ExpenceCategories extends Component{

    state = {
        expenceCategoies : []
    }

    
    getExpenceCategroy = (category) => {
      var fitlerExpenceCategory = category.filter(function(categoryData){
            return categoryData.categoryType != 'income'
        })

       this.setState({expenceCategoies:fitlerExpenceCategory})
    }

    handleOnClick = (id, categoryName) => {
        this.id = id;
        this.categoryName = categoryName
        this.setState({redirect: true});
      }

    render(props){
        if (this.state.redirect) {
           console.log(this.id)
           return <Redirect
           to={{
             pathname: `/AddExpence/${this.id}/${this.categoryName}`,
            //  state: { id: this.id }
           }}
         />
            // return <Redirect to="/AddExpence/:id" />;
          }
        return(
            <Col md={10}>
                <Col md={12}><h3>Expence Categories</h3></Col>
                <Col style={{marginTop:20}}>
                <Apis  expenceCategory={this.getExpenceCategroy}/>
                {this.state.expenceCategoies.map((categoryData)=>{
                    return(
                    <Col md={3} onClick={this.handleOnClick.bind(this,categoryData.id,categoryData.name)} >
                        <Col className="categoryItem">
                        <img src={categoryData.iconUrl} width="150"/>
                        <span class="caption">{categoryData.name}</span>
                        </Col>
                    </Col>
                    )
                })}
              </Col>
            </Col>
        )
    }
}