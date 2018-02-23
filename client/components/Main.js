import React, {Component} from 'react'
import { connect } from 'react-redux';
import store, {fetchAppointment} from '../store'
import { Link } from 'react-router-dom';

// Main component is the initial page displayed by default 

class Main extends Component {

   componentDidMount() {
    const id = this.props.match.params.id;
    const appointmentThunk = fetchAppointment(id);
    store.dispatch(appointmentThunk);
}
   render() {
   	console.log("component", this.props.appointment)
   	var appointment = this.props.appointment;
    console.log("zero",appointment[0], appointment == true)
        return (
            <div className="container">
              <h1>hello</h1>
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
	let info = state.appointment;

  const id = ownProps.match.params.id
  console.log("name", id,"info", state)
  if(id) var appointment = info.filter(data => data.user.id == id)
  return {
    appointment
  }

}

export default connect(mapStateToProps)(Main);