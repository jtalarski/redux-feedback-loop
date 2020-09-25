import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

class Feeling extends Component {
  componentDidMount(){
    console.log( 'Feeling mounted' );   
  } // end componentDidMount

  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <select name="feeling?">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
       
       <Link to="/understanding"><button>Next</button></Link>
      </div>
    ); // end return
  } // end render
} // end class

export default Feeling;