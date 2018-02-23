import React, {Component} from 'react'
import { connect } from 'react-redux';
import store, {fetchUser} from '../store'
// Main component is the initial page displayed by default 

class Appointments extends Component {

   render() {
   	console.log("component", this.props.images)
   	var user = this.props.user;
        return (
            <div className="container">
              {
            		user.map(function(data){
                  var val = ""
                  if(Number(data.date.slice(11,13)) > 12) val = "pm"
                  else val = "am"
            			return (
            			        <div key={data.id}>
                            <h1>Name of the patient: {data.name}</h1>
                            <h1>Name of the doctor: {data.docName}</h1>
                            <h1>Date of the appointment: {data.date.slice(0,10)}</h1>
                            <h1>Time of the appointment: {data.date.slice(11,16)} {val}</h1>
            							</div>
          							)
            		})
            	}
            </div>
        )
    }
}

const mapStateToProps = function(state, ownProps){

	let people = state.user;
  const appointment = ownProps.match.params.id
  if(appointment) var user = people.filter(data => data.id == appointment)
  return {
		user
	}

}

export default connect(mapStateToProps)(Appointments);