import './App.css';
import ColorPicker from './Components/ColorPicker';
import TextSize from './Components/TextSize';
import Result from './Components/Result';
import React, { Component } from 'react';
import Reset from './Components/Reset';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      color: 'red',
      fontSize: 8
    }
    this.onSetColor= this.onSetColor.bind(this)
    this.onSetSize=this.onSetSize.bind(this)
    this.onSetDefault=this.onSetDefault.bind(this)
    
  }
  
  onSetColor(params){
    this.setState({
      color: params
    })
  }

  onSetSize(params){
    // console.log(params)
    if(this.state.fontSize+params>=8 && this.state.fontSize+params<=36){
      this.setState(
        {fontSize: this.state.fontSize +  params}
      )
    }
  }

  onSetDefault(value){
    if(value){
      this.setState({
        color: 'red',
        fontSize: 8
      });    
    }
  }

  render(){
    return (
      <div className='App'>
        <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
        <TextSize size={this.state.fontSize} onReceiveSize={this.onSetSize} />
        <Reset onReceiveReset={this.onSetDefault} />
        <Result color={this.state.color} size={this.state.fontSize}/>
        
      </div>
    );
  }
}

export default App;
