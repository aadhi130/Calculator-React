import React,{Component} from "react"

class Btn extends Component{
    render(){
        return(
            <button className={this.props.cls} onClick={()=>this.props.read(this.props.title)}>
                {this.props.title}</button>
        )
    }
}
export default Btn