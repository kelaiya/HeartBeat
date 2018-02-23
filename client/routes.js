import React, {Component} from 'react'
import {Router} from 'react-router-dom'
import history from './history'
import {me} from './store'

/**
 * COMPONENT
 */
export default class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn} = this.props

    return (
      <Router history={history}>
        <Main>
          
        </Main>
      </Router>
    )
  }
}

