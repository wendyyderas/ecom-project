import React, { Component } from 'react';

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
            // fetch is a promis that will give you the req info
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
                     <h1>Testimony</h1>
                     {
                         // destructering in order to use curtain info from data
                         this.state.persons.map(({LastName, FirstName, Comment})=>(
                            <div>
                                <p>LastName:</p>
                                <p>{LastName}</p>
                                <p>FirstName:</p>
                                <p>{FirstName}</p>
                                <p>Comment:</p>
                                <p>{Comment}</p>
                            </div> 
                         ))
                     }
                 </div>
             )
         }       

        }
export default Testimony