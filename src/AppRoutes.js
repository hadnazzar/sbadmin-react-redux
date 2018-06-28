import React, { Component } from 'react'
import {
  Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'
import history from './history'
// COMPONENTS
import Home from './pages/Home'
import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';
import PageBreadcrumb from './components/PageBreadcrumb';

import Routes from './Routes'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      isAuthenticated ? (
        <Component {...props} />
      ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
        )
    )} />
  )
}

class AppRoutes extends Component {
  render() {
    return (

      <div className='wrapper'>
        <Header />
        <div className='content-wrapper'>
          <div className='container-fluid'>
            <PageBreadcrumb />
            <Router history={history}>
              <Routes />
            </Router >
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  const { user } = auth
  return { user }
}

export default connect(mapStateToProps, {})(AppRoutes)
