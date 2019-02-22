import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    numberUp:0,
    numberDown:0,
    // newNumber:[],
    total:0,
  }//end state

  handleChangeIncrease = ()=>{
    console.log('increase'); 
    this.setState({
      total: Number((this.state.total)+1),
    })
  }//end handleChangeIncrease

  handleChangeDecrease = () => {
    console.log('decrease');
    this.setState({
      total: Number((this.state.total) - 1),    
    })
  }//end handleChangeDecrease

  // handleChange= (event)=>{
  //   console.log('changed');
  //   this.setState({
  //     DisplayNumber:{

  //     }
  //   })
  // }



  render() {
    return (
      <div className="App">
        <header >
          <h1>React Components</h1>
        </header>
          <p>Enter a number and click up or down. The total will increase or decrease by that amount</p>
        
        <div>
          <button onClick={this.handleChangeIncrease} >Up</button> 
          <input type="number" placeholder="Enter Number" 
          onChange={this.handleChange}
          /> 

          <button onClick={this.handleChangeDecrease}>Down</button>
        </div>

        <div>
          <p >{this.state.total} </p>
          <button onClick={this.onSave}>Save</button>
            <p>Click save above to save the current total in the history</p>
        </div>
        
        <div>
          <h1>history</h1>

        </div>


        </div>
    );
  }
}

export default App;
