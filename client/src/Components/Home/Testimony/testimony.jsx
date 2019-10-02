import React, { Component } from 'react';
import './testimony.css';

class Testimony extends Component {
     constructor(props){
       super(props);
         this.state={
             persons:[]
         }
        }
        //shows/renders everything once 
        componentDidMount() {
            //brings in the information from the database
            fetch('/api/persons')
            // fetch is a promise that will give you the req info
                .then((res) => res.json())
                .then(
                    (data) => {
                        console.log(data)
                        this.setState({
                            persons: data

                            
                        })
                    })
                }
         render(){
             return( 
                 <div>
                     <h4 className="reviews">Reviews</h4>
                     {
                         // destructering in order to use curtain info from data
                         this.state.persons.map(({LastName, FirstName, Comment})=>(
                            <div className="people-info">
                                 <p><strong>First Name: </strong> <span>{FirstName}</span></p>
                                <p><strong>Last Name: </strong> <span>{LastName}</span></p>
                                <p><strong>Comment: </strong><span>{Comment}</span></p>
                            </div> 
                         ))
                     }
                 </div>
             )
         }       

        }
export default Testimony