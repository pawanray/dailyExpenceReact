import React, {Component} from 'react'
import axios from 'axios'
export default class IncomeCategories extends Component{

    state = {
        incomeCategories:[]
    }
    componentWillMount(){
        axios.get('http://localhost:3000/api/Categories').then(res =>{
           this.filterIncomeCategory = res.data.filter(categories=>{
                return categories.categoryType == 'income'
            })
            this.setState({incomeCategories:this.filterIncomeCategory})
          
        })
    }
    render(){
        return(
            <div className="col-md-10">
                <div className="col-md-12"><h3>Income Categories</h3></div>
                {this.state.incomeCategories.map((data, i)=>{
               return( <div className="col-sm-3" key={i}>
               <div className="categoryItem"><img src={data.iconUrl} width="150"/>
               <span className="caption">food</span>
               </div>
               </div>
                )
                })}
             
            </div>
        )
    }
}