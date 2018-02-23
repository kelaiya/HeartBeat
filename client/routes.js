import React, {Component} from 'react'
import {Router} from 'react-router-dom'
import history from './history'
// import {user} from './store'
import {Main, Appointments} from './components'
import {Route, Switch} from 'react-router-dom'
/**
 * COMPONENT
 */
export default class Routes extends Component {

  render () {

    return (
      <Router history={history}>
        <Switch>
	        <Route exact path='/' component={Main} />
	        <Route exact path='/appointment/:id' component={Appointments} />
      	</Switch>
      </Router>
    )
  }
}

