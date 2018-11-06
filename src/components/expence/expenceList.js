import React, {Component} from 'react';
import { Button, Col, Grid, Row} from 'react-bootstrap';
import Apis from '../Api/api'
import axios from 'axios';
import EditExpenceModel from './editExpenceModel'
export default class ExpenceList extends Component {
    state = {
        expenceListFood:[],
        expenceListTravel:[],
        expenceListMedical:[],
        expenceListEntertainment:[],
        expenceListGroceries:[],
        expenceListStationery:[],
        modelStatus:false
    }
    exenceListHandler = (list) => {
       var filterListFood = list.filter(categories=>{
        return categories.categoryId === '59c0b0005527a822a00885f8'
    })

    var filterListTravel = list.filter(categories=>{
        return categories.categoryId === '59c0b0765527a822a00885f9'
    })
    var filterListMedical = list.filter(categories=>{
        return categories.categoryId === '59c0b0ec5527a822a00885fb'
    })

    var filterListEntertainment = list.filter(categories=>{
        return categories.categoryId === '59c0b0f75527a822a00885fc'
    })

    var filterListGroceries = list.filter(categories=>{
        return categories.categoryId === '59c0b1015527a822a00885fd'
    })

    var filterListStationery = list.filter(categories=>{
        return categories.categoryId === '59c0b10c5527a822a00885fe'
    })

       // console.log(filterList)

        this.setState({
            expenceListFood:filterListFood,
            expenceListTravel:filterListTravel,
            expenceListMedical:filterListMedical,
            expenceListEntertainment:filterListEntertainment,
            expenceListGroceries:filterListGroceries,
            expenceListStationery:filterListStationery,
        })
        // console.log(list)
    }

    delete =(id) =>{
        axios.delete('http://localhost:3000/api/Expenses/' + id).then(res=>{
        console.log(res.data)
        }).catch(error=>{
            console.log(error)
        })
    }

    // componentDidMount(){
    //     console.log(this.subCategoryName)
    //     this.subCategoryName = false;
    //     this.date = false
    //     this.amount = false
    // }
    edit =(id,categoryId, userId, subCategoryName, transactionDate, amount) =>{
        this.refs.editExpenceModal.style.display="block"
        if(this.refs.editExpenceModal.style.display=="block"){
        this.expenceDataObj = {
            id:id,
            categoryId:categoryId,
            userId:userId,
            subCategoryName:subCategoryName,
            transactionDate:transactionDate,
            amount:amount

        }
   this.setState({modelStatus:true})
    }
   
    }

    render(){
     
        return(
            <div>

            <div ref="editExpenceModal" style={{display:'none'}}>
            <EditExpenceModel expenceData={this.expenceDataObj} modelStatus={this.state.modelStatus}/>
            </div>

            <Col md={10}>
            <Apis expenceList={this.exenceListHandler}/>

            {/* <input type="text" ref={(input)=>{this.subCategory=input}}/> */}

            <div className="col-md-6">
            <h3>Food Category Expence</h3>
                     <table className="table table-bordered">
                     <thead>
                         <tr>
                      <th>Sub Category</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Actions</th>
                      </tr>
                      </thead>
                      {this.state.expenceListFood.map((list)=>{
                    return(
                    <tbody>

                             <tr>
                            <td>{list.subCategoryName}

                            </td>
                            <td>{list.transactionDate.split('T')[0]}</td>

                            <td>{list.amount}</td>

                            <td><button className="btn btn-primary btn-sm" onClick={this.edit.bind(this, list.id, list.categoryId, list.userId, list.subCategoryName, list.transactionDate,list.amount)}>Edit</button> <button className="btn btn-danger btn-sm" onClick={this.delete.bind(this,list.id)}>Delete</button></td>
                        </tr>
                    </tbody>

                    )
                })}
  </table>
  </div>

      <div className="col-md-6">
            <h3>Travel Category Expence</h3>
                     <table className="table table-bordered">
                     <thead>
                         <tr>
                      <th>Sub Category</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Actions</th>
                      </tr>
                      </thead>
                      {this.state.expenceListTravel.map((list)=>{
                    return(
                    <tbody>
                        <tr>
                            <td>{list.subCategoryName}</td>
                            <td>{list.transactionDate.split('T')[0]}</td>
                            <td>{list.amount}</td>
                            <td><button className="btn btn-primary btn-sm" onClick={this.edit.bind(this, list.id, list.categoryId, list.userId, list.subCategoryName, list.transactionDate,list.amount)}>Edit</button> <button className="btn btn-danger btn-sm" onClick={this.delete.bind(this,list.id)}>Delete</button></td>
                        </tr>
                    </tbody>

                    )
                })}
  </table>
  </div>
  <div className="clearfix"></div>


  <div className="col-md-6">
            <h3>Medical Category Expence</h3>
                     <table className="table table-bordered">
                     <thead>
                         <tr>
                      <th>Sub Category</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Actions</th>
                      </tr>
                      </thead>

                      {this.state.expenceListMedical.map((list)=>{

                    return(
                    <tbody>
                        <tr>
                            <td>{list.subCategoryName}</td>
                            <td>{list.transactionDate.split('T')[0]}</td>
                            <td>{list.amount}</td>
                            <td><button className="btn btn-primary btn-sm" onClick={this.edit.bind(this, list.id, list.categoryId, list.userId, list.subCategoryName, list.transactionDate,list.amount)}>Edit</button> <button className="btn btn-danger btn-sm" onClick={this.delete.bind(this,list.id)}>Delete</button></td>
                        </tr>
                    </tbody>

                    )

                })}
  </table>
  </div>


  <div className="col-md-6">
            <h3>Entertainment Category Expence</h3>
                     <table className="table table-bordered">
                     <thead>
                         <tr>
                      <th>Sub Category</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Actions</th>
                      </tr>
                      </thead>
                      {this.state.expenceListEntertainment.map((list)=>{
                    return(
                    <tbody>
                       <tr>
                            <td>{list.subCategoryName}</td>
                            <td>{list.transactionDate.split('T')[0]}</td>
                            <td>{list.amount}</td>
                            <td><button className="btn btn-primary btn-sm" onClick={this.edit.bind(this, list.id, list.categoryId, list.userId, list.subCategoryName, list.transactionDate,list.amount)}>Edit</button> <button className="btn btn-danger btn-sm" onClick={this.delete.bind(this,list.id)}>Delete</button></td>
                        </tr>
                    </tbody>

                    )
                })}
  </table>
  </div>
  <div className="clearfix"></div>
  <div className="col-md-6">
            <h3>Groceries Category Expence</h3>
                     <table className="table table-bordered">
                     <thead>
                         <tr>
                      <th>Sub Category</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Actions</th>
                      </tr>
                      </thead>
                      {this.state.expenceListGroceries.map((list)=>{
                    return(
                    <tbody>
                        <tr>
                            <td>{list.subCategoryName}</td>
                            <td>{list.transactionDate.split('T')[0]}</td>
                            <td>{list.amount}</td>
                            <td><button className="btn btn-primary btn-sm" onClick={this.edit.bind(this, list.id, list.categoryId, list.userId, list.subCategoryName, list.transactionDate,list.amount)}>Edit</button> <button className="btn btn-danger btn-sm" onClick={this.delete.bind(this,list.id)}>Delete</button></td>
                        </tr>
                    </tbody>

                    )
                })}
  </table>
  </div>

<div className="col-md-6">
            <h3>Stationery Category Expence</h3>
                     <table className="table table-bordered">
                     <thead>
                         <tr>
                      <th>Sub Category</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Actions</th>
                      </tr>
                      </thead>
                      {this.state.expenceListStationery.map((list)=>{
                    return(
                    <tbody>
                        <tr>
                            <td>{list.subCategoryName}</td>
                            <td>{list.transactionDate.split('T')[0]}</td>
                            <td>{list.amount}</td>
                            <td><button className="btn btn-primary btn-sm" onClick={this.edit.bind(this, list.id, list.categoryId, list.userId, list.subCategoryName, list.transactionDate,list.amount)}>Edit</button> <button className="btn btn-danger btn-sm" onClick={this.delete.bind(this,list.id)}>Delete</button></td>
                        </tr>
                    </tbody>

                    )
                })}
  </table>
  </div>
  <div className="clearfix"></div>
            </Col>
            </div>
        )
    }
}