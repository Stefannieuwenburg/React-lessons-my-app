import React from 'react'

function handeClick() {
    console.log('i whas clicked!')
    }
function onMouseOver() {
    console.log('i whas over!')
    }

function App() {
    return (
        <div>
            <img onMouseOver = {onMouseOver}  src="https://www.fillmurray.com/200/300" alt="pic"/>
            <br />
            <br />
            <button onClick = {handeClick}>Click me</button>
        </div>
    )
}

export default App


//Les 32. Handling Events in React 

