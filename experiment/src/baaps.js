import React, { Component } from 'react'
import Beeps from './Beeps'
import Freems from './freem'
import TitleBeeps from './titleBeeps'

class Baaps extends Component{
  constructor(){
    super();
    this.state={ Beems:"Yo!" };
  }

  changeBeems(Beems){
    console.log('Hello from changeBeems')
    this.setState({Beems});
    console.log('Hello from changeBeems setState')
    console.log('This is the state of affairs')
    console.log(this.state.Beems)
  }

render() {
    return(
      <div>
        {console.log('Hello from renderer')}
        <h1><Beeps changeBeems={this.changeBeems=this.changeBeems.bind(this)} title={this.state.Beems}/></h1>
        <Freems/>
      </div>
  );
  }
};

export default Baaps;
