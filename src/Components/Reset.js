import React, { Component } from "react";

class Reset extends Component{
    onReset=()=>{
        this.props.onReceiveReset(true)
    }

    render(){
        return(
            <div className='Reset'>
                <button onClick={this.onReset}  >Resett</button>
            </div>
        )
            
    }
}

export default Reset