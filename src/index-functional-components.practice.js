import React from 'react';
import ReactDOM from 'react-dom'

function MyInfo() {
   return (<div>
    <h1>Stefan Nieuwenburg</h1>
    <p> hi iam crazy about react </p>
<ul>
    <li>turkey</li>
    <li>italie</li>
    <li>ibiza</li>
</ul>
</div>
)
}


ReactDOM.render(
    <MyInfo/>,document.getElementById("root"))