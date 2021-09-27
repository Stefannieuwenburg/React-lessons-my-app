import React , { Component } from "react"
import ReactDOM from 'react-dom'




//#1
class Prog extends React.Component {
    render() {
        return (
        <div>
            <Header />
            <Greetting />
        </div>
        )
    }
}

//#2
class Header extends React.Component {
    render() {
        return (
        <header>
            <p>Welcome,{this.props.username}</p>
        </header>
        )

    }
}

//#3
class Greetting extends Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) {
           timeOfDay = "morning" 
        }else if (hours >= 12 && hours < 17){
            timeOfDay = "afternoon" 
        }else {
            timeOfDay = "night" 
        }
        
        return (
            <h1>good {timeOfDay} to you sir or madam!</h1>
        )
    }   
}
ReactDOM.render(<Prog />, document.getElementById("root"))