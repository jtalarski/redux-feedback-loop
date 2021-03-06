import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Comments extends Component {
  componentDidMount(){
    console.log( 'Comments mounted' );   
  } // end componentDidMount

state = {
  commentSection: null
}

  onHandleChange (event) {
    this.setState ({
      commentSection: event.target.value
    });
    console.log('in onHandleChange Comments', event.target.value);
    console.log('reduxState Comments', this.props.reduxState);
    this.props.dispatch ({
      type: 'SET_COMMENTS',
      payload: this.state.commentSection
    })
    }
  

  render() {
    return (
      <div>
        <h1>Comments</h1>
        <p>Any comments you want to leave?</p>
        <input onChange={(event)=>this.onHandleChange(event)} type="text" id="commentField"/>
        <br></br>
        <Link to="/review"><button >Next</button></Link>
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