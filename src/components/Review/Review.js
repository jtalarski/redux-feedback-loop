import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Review extends Component {
  componentDidMount(){
    console.log( 'Review mounted' );   
  } // end componentDidMount

  onSubmit = () => {
    console.log('onSubmit triggered');
    axios({
      method: 'POST',
      url: '/',
      data: this.state
    }).then((response) => {
      console.log('GET response:', response);

    }).catch(err => {
      console.log('GET err', err);
    }); // end axios
  }







  render() {
    return (
      <div>
        <h1>Review Your Feedback</h1>
        <p>Feelings:  {this.props.reduxState.feelingReducer.feeling}</p>
        <p>Understanding: {this.props.reduxState.understandingReducer.understanding}</p>
        <p>Support: {this.props.reduxState.supportReducer.support}</p>
        <p>Comments: {this.props.reduxState.commentsReducer.comments}</p>
        <br></br>
        <hr></hr>
        <Link to="/success"><button onClick={this.onSubmit}>submit</button></Link>
        
      </div>
    ); // end return
  } // end render
} // end class

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  };
}
export default connect(mapStateToProps)(Review);