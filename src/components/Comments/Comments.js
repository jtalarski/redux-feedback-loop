import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Comments extends Component {
  componentDidMount(){
    console.log( 'Comments mounted' );   
  } // end componentDidMount

  render() {
    return (
      <div>
        <h1>Comments</h1>
        <p>Any comments you want to leave?</p>
        <input type="text" id="commentField"/>
        <br></br>
        <Link to="/review"><button>Next</button></Link>
      </div>
    ); // end return
  } // end render
} // end class

export default Comments;