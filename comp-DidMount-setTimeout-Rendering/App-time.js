import React from 'react'
import Conditional from './Conditional'

class App extends React.Component {
   constructor() {
      super()
      this.state = {
         isLoading: true
      }

   }
   componentDidMount() {
      setTimeout(() => {
         this.setState({ 
            isLoading: false 
         })
      },1800)
   }

   
   
   render() {
      return (
         <div>
            <Conditional isLoading = {this.state.isLoading}/>
         </div>
      )
   }
}

export default App