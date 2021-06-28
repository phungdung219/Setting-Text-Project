import React, { Component } from "react";

class ColorPicker extends Component{
    constructor(props){
        super(props);
        this.state={
            colors:[
                'red', 'green', 'blue', 'gray'
            ]
        }
        
    }

    showColor(col){
        return {
            backgroundColor: col
        }
    }

    setActiveColor(col){
         this.props.onReceiveColor(col)
    }

    render(){
        var elmColors= this.state.colors.map((color,index)=>{
            return <span 
                        key={index} 
                        style={this.showColor(color)}
                        className={ this.props.color === color ? 'active' : ' ' }
                        onClick={ () => this.setActiveColor(color) }
                        ></span>
        })

        return(
            <div className='ColorPicker'>
                <h2>Pick the Color</h2>
                <h3>the color is: {this.props.color}</h3>
                {elmColors}
            </div>
        )
            
    }
}

export default ColorPicker