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
    this.setState({Beems});
  }

render() {
    return(
      <div>
        <h1><Beeps changeBeems={this.changeBeems=this.changeBeems.bind(this)} title={this.state.Beems}/></h1>
        <Freems/>
      </div>
  );
  }
};

export default Baaps;
