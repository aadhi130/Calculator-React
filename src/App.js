import Calc from "./pages/calc"
import React,{Component} from 'react'
import "./App.css"

class App extends Component{
  render(){
    return(
      <div className="container">
        <Calc/>
      </div>
    )
  }
}
export default App