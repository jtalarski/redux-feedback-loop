import React, { Component } from 'react';

class ArrayTest extends Component {
  componentDidMount(){
    console.log( 'ArrayTest' mounted' );   
  } // end componentDidMount


state = {
  ArrayTest:  ['John', 'Smith']
}


AddToArray = () => {
  this.setState {
    ...this.ArrayTest
  }
}


  render() {
    return (
      <div>
        <h1>Array Test</h1>
      </div>
    ); // end return
  } // end render
} // end class

export default _template;