import React, { Component } from "react";

class TextSize extends Component{
    changeSize(value){
        this.props.onReceiveSize(value)
    }

    render(){
        return(
            <div className='TextSize'>
                <h2>Choose the Text Size</h2>
                <h3>Size is : { this.props.size }</h3>
                <button onClick={ ()=>this.changeSize(+2) }>Tang</button>
                <button onClick={ ()=>this.changeSize(-2) }>Giam</button>
            </div>
        )
            
    }
}

export default TextSize