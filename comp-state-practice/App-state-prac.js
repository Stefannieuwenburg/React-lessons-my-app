import React  from "react"
import ReactDOM from 'react-dom'

class Prog extends React.Component {
    constructor() {
         super()
         this.state = {
             answer:"yes"
         }
        
    }

    render() { 
        return(
            <div>
            <h1> Its in inportent to now state import {this.state.answer}</h1>
            </div> 
        )
        
    }
}



ReactDOM.render(<Prog />, document.getElementById("root"))