import React, { Component } from 'react'
import Beeps from './Beeps'
import Freems from './freem'
import TitleBeeps from './titleBeeps'

class Baaps extends Component{
  constructor(){
    super();
    this.state={ Beems:"Yo!" };
  }

render() {
    var title = "FRRAAAPPPSSS!"

    return(
      <div>
        <Beeps title ={this.state.Beems}/>
        <Beeps title ={title}/>
        <Freems/>
      </div>
  );
  }
};

export default Baaps;
