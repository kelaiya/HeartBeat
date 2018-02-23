import React, {Component} from 'react'
import { connect } from 'react-redux';
import store, {fetchUser} from '../store'
// Main component is the initial page displayed by default 

class Appointments extends Component {

   render() {
   	console.log("component", this.props.images)
   	var user = this.props.user;
        return (
            <div className="main">
              <h1> Welcome to HeartBeat Department of Science </h1>
            	{
            		user.map(function(data){
            			return (
            			        <div key={data.id}>
                            <h1>date of the appointment: {data.date.slice(0,10)}</h1>
            								<h1>Name of the patient: {data.name}</h1>
            								<h1>Name of the doctor: {data.docName}</h1>
            							</div>
          							)
            		})
            	}
            </div>
        )
    }
}

const mapStateToProps = function(state, ownProps){
	// images is the value of state in store
	console.log("map", state)
	let people = state.user;
  const appointment = ownProps.match.params.id
  if(appointment) var user = people.filter(data => data.id == appointment)
  return {
		user
	}

}

export default connect(mapStateToProps)(Appointments);