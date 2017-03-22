import React, { Component } from 'react'
import Baaps from './baaps'

class Beeps extends Component{
  constructor() {
    super();
    this.state = {name: 'Boops!'}
    this.changeName = this.changeName.bind(this)
  }

  changeName(name) {
    this.setState({name});
  }

  handleChange(boom) {
    const name = boom.target.value;
    this.changeName(name)
  }

render() {
  return(
    <div>
      <h1>{this.state.name}</h1>
      <input onChange={this.handleChange.bind(this)}/>
    </div>
  )
}
};

export default Beeps;
