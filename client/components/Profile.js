import React, {Component} from 'react'
import { connect } from 'react-redux';
import store, {fetchAppointment} from '../store'
import { Link } from 'react-router-dom';

// Main component is the initial page displayed by default 

class Profile extends Component {
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
              <div key={appointment[0].user.id} className="Search-box">
                <img src= {appointment[0].user.image} className="image" />
                <Link to={`/appointment/${appointment[0].user.id}`}className="text-color">Upcoming appointment</Link>
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