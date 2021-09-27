import React,{ Component} from 'react'


class App extends Component {
    constructor(props){
        super()
        this.state = {
            name:"sally",
            age:13,
        }
    }                           
    render() {

            return (
                <div>
                    <h1>{this.state.name}</h1>
                    <h3>{this.state.age}years old</h3>
                </div> 
            )
            

        }
 
    
}

export default App