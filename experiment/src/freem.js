import React, { Component } from 'react'

class Freems extends Component{
  render() {
    console.log(this.props.name);
    return(
      <div>
        <h1>{this.props.name}</h1>
      </div>

    )
  };
};

export default Freems;
