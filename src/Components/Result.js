import React, { Component } from "react";

class Result extends Component{
    
    result(col,size){
        return{
            color: col,
            borderColor: col,
            fontSize: size,
        }
    }
    
    render(){
        
        return(
            <div className='Result' style={this.result(this.props.color, this.props.size)} >
                    Noi Dung 
            </div>
        )
            
    }
}

export default Result