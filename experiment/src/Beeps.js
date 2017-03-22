import React, { Component } from 'react'
import TitleBeeps from './titleBeeps'
import Baaps from './baaps'

class Beeps extends Component{
  handleChange(e){
    console.log('value of e')
    console.log(e)
    const title = e.target.value;
    console.log('title')
    console.log(title)
    this.props.changeBeems(title);
    console.log('function maker')
  }

render() {
  return(
    <div>
      <TitleBeeps title={this.props.title}/>
      <input onChange={this.handleChange.bind(this)} />
    </div>
  );
  }
}

export default Beeps;
