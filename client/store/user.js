import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})

/**
 * THUNK CREATORS
 */
export const fetchUser = () =>
  dispatch =>
    axios.get('/api/user')
      .then(res => {
      	console.log("hey")
        dispatch(getUser(res.data || defaultUser))
      })
     
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    default:
      return state
  }
}