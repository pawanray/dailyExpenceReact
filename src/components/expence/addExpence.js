import React, {Component} from 'react';
import { Button, Col, Grid, Row} from 'react-bootstrap';
import Apis from '../Api/api'
import axios from 'axios';
export default class AddExpence extends Component{

    state = {
        categoryName:''
    }
   
    // getExpenceCategroy = (value) => {
    //    console.log(value)
    // }

    componentDidMount() {
        const { match: { params } } = this.props;
        this.categoryName = this.props.match.params.name
        this.setState({
            categoryName:this.categoryName
        })
    //   console.log(this.categoryName)
      }

    addExpenceHandler = () =>{
      var expenceCategoryObj = {
          categoryId:this.props.match.params.id,
          subCategoryName:this.subCategory.value, 
          transactionDate:this.date.value, 
          amount:this.amount.value,
          userId:localStorage.getItem('userId')
        }

        axios.post('http://localhost:3000/api/Expenses/' , expenceCategoryObj).then(res => {
          console.log(res.data)
        }).catch(function (error) {
            // handle error
            console.log(error);
          })

          this.subCategory.value = ""
        this.date.value = ""
        this.amount.value = ""
    }

    render(props){
        
        return(
                <Col md={3} className="add-expence">
                <div className="form-group">
                    <label for="email">Expence Category</label>
                    <input type="text" className="form-control" ref={(input)=>{this.expenceCateogry=input}} value={this.state.categoryName} disabled />
                </div>
                <div className="form-group">
                    <label for="sub category">Sub Category</label>
                    <input type="text" className="form-control" ref={(input)=>{this.subCategory=input}}/>
                </div>
                <div className="form-group">
                    <label for="date">Date</label>
                    <input type="date" className="form-control" ref={(input)=>{this.date=input}}/>
                </div>
                <div className="form-group">
                    <label for="amount">Amount</label>
                    <input type="text" className="form-control" ref={(input)=>{this.amount=input}}/>
                </div>
                <button type="submit" className="btn btn-default" onClick={this.addExpenceHandler}>Submit</button>
                </Col>
          
        )
    }
}