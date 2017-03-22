import React, { Component } from 'react'
import TitleBeeps from './titleBeeps'
import Baaps from './baaps'

class Beeps extends Component{


render() {
  console.log(this.props)
  return(
    <div>
      {this.props.title}
    </div>
  )
}
};

export default Beeps;
