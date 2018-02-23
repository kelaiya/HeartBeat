import React, {Component} from 'react'
import { connect } from 'react-redux';
import store, {fetchAppointment} from '../store'
import { Link } from 'react-router-dom';

// Profile component will show all the details of the patient.

class Profile extends Component {
  
  //ComponentDidMount will display the details of the patient.
  componentDidMount() {
    const id = this.props.match.params.id;
    const appointmentThunk = fetchAppointment(id);
    store.dispatch(appointmentThunk);
  }
   
  render() {
   	var appointment = this.props.appointment;
    return (
        <div className="container">
          {
            appointment.length > 0 ? <div>
              <h1 className="h1"> Hello {appointment[0].user.name}, enjoy your day!!! </h1>
              <div key={appointment[0].user.id} className="display">
                <img src= {appointment[0].user.image} className="image" />
                <button className="button"><Link to={`/appointment/${appointment[0].user.id}`}className="text-color2">Upcoming appointment</Link></button>
              </div>
            </div> : null
          }
        </div>
      )
    }
}

const mapStateToProps = function(state, ownProps){
	
  // state.appoinment will give all the details of the patient and its appointments.
  let info = state.appointment;
  const id = ownProps.match.params.id
  
  // To find the details of particular patient, I have used filter.
  if(id) var appointment = info.filter(data => data.user.id == id)
  return {
    appointment
  }

}

// Export the class.
export default connect(mapStateToProps)(Profile);