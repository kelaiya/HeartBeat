import React, {Component} from 'react'
import {Router} from 'react-router-dom'
import history from './history'
// import {user} from './store'
import {Main, Appointments, Home, Navbar} from './components'
import {Route, Switch} from 'react-router-dom'
/**
 * COMPONENT
 */
export default class Routes extends Component {

  render () {

    return (
      <Router history={history}>
        <div>
          <Navbar />
          <Switch>
  	        <Route exact path='/' component={Home} />
            <Route exact path='/:id' component={Main} />
  	        <Route exact path='/appointment/:id' component={Appointments} />
        	</Switch>
        </div>
      </Router>
    )
  }
}

