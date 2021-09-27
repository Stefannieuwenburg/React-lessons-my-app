import React,{ Component} from 'react'

class App extends Component{
     
   constructor(){
         super()
         this.state = {
            firstName:"",
            lastName:"",
            isFriendly:false,
            gender:"",
            favColor: "",
         }

         this.handleChange = this.handleChange.bind(this)
   }
   handleChange(event){ 
         const {name,value,type,checked} = event.target
         type ==="checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name] :value })
   }

   
   
   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <input 
                  type="text" 
                  value={this.state.firstName}
                  name="firstName"
                  placeholder="first name"
                  onChange={this.handleChange} 
                  />
                  <br />
            <input
                  type="text"
                  value={this.state.lastName} 
                  name="lastname"
                  placeholder="first name"
                  onChange={this.handleChange} 
                  />
                  <br />
            <textarea
                  value={"text"} 
                  onChange={this.handleChange}
                  />
                  <br />
            <label>
                  <input 
                        type="checkbox"
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                        /> I friendly
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
            <label>
                  <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                        /> male
            </label>
           {/*formik libery for forms*/}
            <br />
            <label>favoriet color:</label>
            <select 
                  valeu={this.state.favColor}
                  onChange={this.handleChange}
                  name="favColor">
                  
                  <option valeu= "blue">blue</option>
                  <option value="green">green</option>
                  <option valeu= "red">red</option>
                  <option value="orange">orange</option>
                  <option valeu= "yellow">yellow</option>  
            </select>
            <h1> 
                  your name is:           {this.state.firstName}
                  <br />
                  you are a :             {this.state.gender}
                  <br />
                  your favorite color is: {this.state.favColor}
                  <br />
            </h1>

           

            <button>submit</button>
         
         </form>
      )
   }
}


export default App
