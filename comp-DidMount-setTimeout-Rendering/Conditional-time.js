import React from 'react'

function Conditional(props) {
    console.log(props.isLoadig)
    switch (props.isLoadig) {
        case true:
            return (
                <h1>Loading...</h1>
            )
        default:
            return (
               <h1>some cool H1 display</h1>
            )
     
    }
    
} 


export default Conditional