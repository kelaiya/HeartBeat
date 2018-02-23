import React, {Component} from 'react'
import { connect } from 'react-redux';
import store, {fetchUser} from '../store'

// Appointments component will show details of all the upcoming appointments.

class Appointments extends Component {

   render() {
   	var user = this.props.ans;
      return (
        <div className="container">
          {
            user.map(function(data){
              var val = ""
              if(Number(data.date.slice(11,13)) > 12) val = "pm"
              else val = "am"
            	return (
            			<div key={data.id}>
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

  // state.appointment has all the details of patient.
	let datas = state.appointment;
  const info = ownProps.match.params.id
  if(info) var ans = datas.filter(data => data.user.id == info)
  return {
		ans
	}
}

export default connect(mapStateToProps)(Appointments);