import React from 'react'

function Joke(props) {
    
    return (
        <div>
           <h3 style={{color:"green"}}>Question: {props.question}</h3> 
           <h3 style={{color:"red"}}>Answer: {props.punchLine}</h3>
        </div>
    )
}

export default Joke


