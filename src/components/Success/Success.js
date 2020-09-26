import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import {connect} from 'react-redux';
// import axios from 'axios'

class Success extends Component {
  componentDidMount(){
    console.log( 'Success mounted' );   
  } // end componentDidMount
 


  render() {
    return (
      <div>
        <h1>Thank You!</h1>
        <Link to='/'>
            <button>Leave New Feedback</button>
        </Link>
      </div>
    ); // end return
  } // end render
} // end class

export default Success;