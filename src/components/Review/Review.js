import React, { Component } from 'react';

class Review extends Component {
  componentDidMount(){
    console.log( 'Review mounted' );   
  } // end componentDidMount

  render() {
    return (
      <div>
        <h1>Review</h1>
      </div>
    ); // end return
  } // end render
} // end class

export default Review;