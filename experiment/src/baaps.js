import React, { Component } from 'react'
import Beeps from './Beeps'
import Freems from './freem'

class Baaps extends Component{

render() {
  var name = 'Blaaaaapppp Blooooppps';
  var list = [
    <Beeps changeName ={this.changeName}/>,
    <Beeps/>,
    <Beeps/>,
  ];

    return(
    <div>
       <Freems name={name} />
      <ul>
        {list}
      </ul>
    </div>
  );
  }
};

export default Baaps;
