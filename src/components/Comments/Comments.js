import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Comments extends Component {
  componentDidMount(){
    console.log( 'Comments mounted' );   
  } // end componentDidMount

  onHandleChange (event) {
    console.log('in onHandleChange Comments', event.target.value)
    console.log('reduxState Comments', this.props.reduxState);
    this.props.dispatch ({
      type: 'SET_COMMENTS',
      payload: event.target.value
    })
    }
  

  render() {
    return (
      <div>
        <h1>Comments</h1>
        <p>Any comments you want to leave?</p>
        <input type="text" id="commentField"/>
        <br></br>
        <Link to="/review"><button onChange={(event)=> this.onHandleChange(event)}>Next</button></Link>
      </div>
    ); // end return
  } // end render
} // end class

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  };

}



export default connect(mapStateToProps)(Comments);