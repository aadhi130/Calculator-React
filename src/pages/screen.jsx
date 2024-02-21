import React,{Component} from "react"

class Screen extends Component{
    render(){
        return(
            <div className="screen">
                <span className="output">{this.props.fout ? this.props.fout :'0'}</span>
                <span className="input">{this.props.finp ? this.props.finp:'0'}</span>

            </div>
        )
    }
}
export default Screen