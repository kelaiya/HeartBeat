import React, {Component} from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../store';

// Main component is the initial page displayed by default 

class Main extends Component {

   render() {
   	console.log("component")
        return (
            <div className="main">
              <h1> Welcome to HeartBeat Department of Science </h1>
            </div>
        )
    }
}

const mapStateToProps = function(state){
	// images is the value of state in store
	return {
		images : state.user
	}

}

export default connect(mapStateToProps)(Main);