import React, {Component} from 'react'
import {Router} from 'react-router-dom'
import history from './history'
import {me} from './store'
import {Main} from './components'

/**
 * COMPONENT
 */
export default class Routes extends Component {

  render () {
    const {isLoggedIn} = this.props

    return (
      <Router history={history}>
        <Main />
      </Router>
    )
  }
}

