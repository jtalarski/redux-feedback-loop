import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Supported extends Component {
  componentDidMount(){
    console.log( 'Supported mounted' );   
  } // end componentDidMount

  render() {
    return (
      <div>
        <h1>How well are you being supported</h1>
        <select name="supported?">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <Link to="/comments"><button>Next</button></Link>
      </div>
    ); // end return
  } // end render
} // end class

export default Supported;