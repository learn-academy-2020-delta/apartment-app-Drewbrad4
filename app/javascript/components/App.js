import React, { Component } from "react"
import PropTypes from "prop-types"

import Header from './Components/Header'
import Footer from './Components/Footer'

import ApartmentEdit from './Pages/ApartmentEdit'
import ApartmentIndex from './Pages/ApartmentIndex'
import ApartmentNew from './Pages/ApartmentNew'
import ApartmentShow from './Pages/ApartmentShow'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav, NavLink } from 'reactstrap'


export default class App extends Component {
  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <Router>

        <Header />

        <h2>Welcome!</h2>

        { logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }

        { !logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }

        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/apartmentindex" component={ ApartmentIndex } />
          <Route path="/apartmentshow/:id" component={ ApartmentShow } />
          <Route path="/apartmentnew" component={ ApartmentNew } />
          <Route path="/apartmentedit/:id" component={ ApartmentEdit } />
          <Route component={ NotFound } />
        </Switch>

        <Footer />
      </Router>
    )
  }
}
