import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'


/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})

/**
 * THUNK CREATORS
 */
export const fetchUser = () => {
  return dispatch =>
    axios.get('/api/users')
    .then(res => {
      dispatch(getUser(res.data))
    })
    .catch(err => console.log(err))
}

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    default:
      return state
  }
}