import React,{ Component} from 'react'

class App extends Component{
     
   constructor(){
         super()
         this.state = {
            fullName:"",
            age:"",
            gender:"",
            destination: "",
            isVegan: false,
            isKosher: false, 
            isLactoseFree: false,
         }
    this.handleChange = this.handleChange.bind(this)
         
   }

 
handleChange(event){ 
      const {name,value,type,checked} = event.target
      type ==="checkbox" ?
      this.setState({ [name]: checked }) : this.setState({ [name] :value })
}
  
   
   render() {
      return (
      <main>
            <form onSubmit={this.handleSubmit}>
                  <input 
                        type="text"
                        name="fullName"
                        value={this.state.fullName}
                        placeholder="full name"
                        onChange={this.handleChange} 
                        />
                        <br />
                  
                        
                  <input
                        type="text"
                        name="age"
                        value={this.state.age} 
                        placeholder="age"
                        onChange={this.handleChange} 
                        /> 
                  <br />

                  <label>
                        <input 
                              type="radio"
                              name="gender"
                              value="male"
                              checked={this.state.gender === 'male'}
                              onChange={this.handleChange}
                        /> male
                  </label> 

                        <br />

                  <label>
                        <input 
                              type="radio"
                              name="gender"
                              value="female"
                              checked={this.state.gender === "female"}
                              onChange={this.handleChange}
                        /> female
                  </label>

                  <br />
                  
                  <select 
                         value ={this.state.destination} 
                         name="destination" 
                         onChange={this.handleChange}>

                         <option value = "">--please select a destination--</option>
                         <option value = "germany" >germany</option>
                         <option value = "norway" >norway</option>
                         <option value = "north pole" >north pole</option>
                         <option value = "south pole" >south pole</option>
                  </select>

                  <br />

                  <label>
                        <input 
                              type="checkbox"
                              name="isVegan"
                              value="dietaryRestriction"
                              checked={this.state.isVegan}
                              onChange={this.handleChange}
                        /> vegan?
                  </label> 

                  <br />

                  <label>
                        <input 
                              type="checkbox"
                              name="isKosher"
                              value="dietaryRestriction"
                              checked={this.state.isKosher}
                              onChange={this.handleChange}
                        /> isKosher?
                  </label> 

                  <br />

                  <label>
                        <input 
                              type="checkbox"
                              name="isLactoseFree"
                              value="dietaryRestriction"
                              checked={this.state.isLactoseFree}
                              onChange={this.handleChange}
                        /> isLactoseFree?
                  </label> 

                  <br />

                  <button>submit</button>

            </form>

                  <hr /> 

                        <h2>Entered information:</h2>
                        <p>your fullname:{this.state.fullName}</p>
                        <p>your age:{this.state.age}</p>
                        <p>your gender:{this.state.gender}</p>
                        <p>your destination:{this.state.destination}</p>
                        <hr />
                        <p>your dietaryRestriction are:</p>
                        <p>vergan:{this.state.isVegan ? "yes" : "no" }</p>
                        <p>isKosher:{this.state.isKosher ? "yes" : "no" }</p>
                        <p>isLactoseFree:{this.state.isLactoseFree ? "yes" : "no" }</p>
                      



      </main>
      
      
      )
     
  }

   
}


export default App
