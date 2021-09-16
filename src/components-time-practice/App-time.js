import React from "react";

function App() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

console.log(hours);
if (hours < 12 ) {
    timeOfDay = "morning"
} else if (hours >= 12 && hours < 17){
timeOfDay = "afternoon"
}else {
    timeOfDay= "nicht"
}
  const styles = {
      color:"#ff8c00",
      backgroundColor:"#ff2d00",
      fontSize:"250px",
  }
    return(
        <h1 style={styles}>Good {timeOfDay}!</h1>
    )
}

export default App
