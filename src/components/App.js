import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor() {
        super();
        this.state ={
          data : "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy",
          flag : false
        }
	  };
    setData(){
      this.setState({flag:true})
    }
    render() {
    	return(
    		<div id="main">
        { /* Do not remove this main div!! */ }
        {
            this.state.flag ? <p id = "para" > {this.state.data} </p> : null
        }
        
        <button id="click" onClick = {()=>this.setData()} > Click Me </button>
    		</div>
    	);
    }
}


export default App;
