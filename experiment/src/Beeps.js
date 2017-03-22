import React, { Component } from 'react'
import TitleBeeps from './titleBeeps'
import Baaps from './baaps'

class Beeps extends Component{
  handleChange(e){
    const title = e.target.value;
    this.props.changeBeems(title);
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
