import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_APPOINTMENT = 'GET_APPOINTMENT'


/**
 * ACTION CREATORS
 */
const getAppointment = appointment => ({type: GET_APPOINTMENT, appointment})

/**
 * THUNK CREATORS
 */
export const fetchAppointment = (id) => {
  return dispatch =>
    axios.get(`/api/data/${id}`)
    .then(res => {
      dispatch(getAppointment(res.data))
    })
    .catch(err => console.log(err))
}

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_APPOINTMENT:
      return action.appointment
    default:
      return state
  }
}