import React, {Component} from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom'
export default class EditExpenceModel extends Component {
    state = {
     subCategory: '',
      date: '',
      amount: '',
      expenceListComponent:false
    }

    update=(props)=>{
        var {categoryId,id,userId} = this.props.expenceData
        console.log(categoryId, id, userId, this.subCategory)
        
        var updateExpenceData={
            categoryId:categoryId,
            id:id,
            userId:userId,
            subCategoryName:this.state.subCategory,
            transactionDate:this.state.date,
            amount:this.state.amount
        }

       // console.log({BrowserRouter,withRouter} = {react-router-dom})
        axios.put('http://localhost:3000/api/Expenses/' + id, updateExpenceData).then(res=>{
           // console.log(res.data)
            this.setState({expenceListComponent:true})
            this.refs.editModel.style.display="none"

            }).catch(error=>{
                console.log(error)
            })

        console.log(this.state.subCategory)
      
      //  this.props.history.push("/")
    }

    componentWillReceiveProps(newProps){
      console.log(newProps)
        if(newProps.modelStatus === true){
            this.setState({
                subCategory:newProps.expenceData.subCategoryName,
                date:newProps.expenceData.transactionDate,
                amount:newProps.expenceData.amount
            })

            console.log(this.state.subCategory)
        }
    }

    handleInputChange = (e) => {
        this.change = {}
            this.change[e.target.name] = e.target.value
            this.setState(this.change)
            // console.log(this.change)
      }

    render(props){
        return(
            <div className="model" ref="editModel">
            <div className="model-body">
              <div className="form-group">
                    <label>Sub Category Name</label>
                    <input type="text" name="subCategory"  className="form-control" value={this.state.subCategory} onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input type="date" name="date"  className="form-control" value={this.state.date} onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label>Amount</label>
                    <input type="text" name="amount" className="form-control" value={this.state.amount} onChange={this.handleInputChange}/>
                </div>
                <button type="submit" className="btn btn-default" onClick={this.update}>Update</button>
            </div>
            </div>
        )
    }
}