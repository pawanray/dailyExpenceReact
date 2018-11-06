import React, {Component} from 'react';
import axios from 'axios';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
class Apis extends Component {

    expenceCategoriesHandler= () =>{
       // this.props.sendData("Amit");
        axios.get(`http://localhost:3000/api/Categories`)
        .then(res => {
          const expenceCategories = res.data;
           this.props.expenceCategory(expenceCategories)
        })
      }

      expenceListHandler= () =>{
        // this.props.sendData("Amit");
         axios.get(`http://localhost:3000/api/Expenses`)
         .then(res => {
           const expenceListData = res.data;
            this.props.expenceList(expenceListData)
         })
       }

        componentWillMount(){
            if(window.location.href === "http://localhost:3003/ExpenceList"){
                this.expenceListHandler()
            }
            else if(window.location.href === "http://localhost:3003/ExpenceCategories"){
                this.expenceCategoriesHandler()
            }
        }




    render(){
        // this.props.expenceCategory("vipin")
    return (
        <div>
            {/* <button onClick={this.expenceListHandler}>Click</button>
            <button onClick={this.expenceCategoriesHandler}>List Click</button> */}
        </div>
    )
}

}


export default Apis
