import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Understanding extends Component {
  componentDidMount(){
    console.log( 'Understanding mounted' );   
  } // end componentDidMount

  render() {
    return (
      <div>
          <h1>How well are you understanding the content?</h1>
        <select name="content?">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <Link to="/supported"><button>Next</button></Link>
      </div>
    ); // end return
  } // end render
} // end class

export default Understanding;