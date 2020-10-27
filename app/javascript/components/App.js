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

import MockApts from './mockApartments.js'


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: MockApts
    }
  }

createNewApartment = (newApartment) => {
  console.log(newApartment);
}


  render() {
    const {
      logged_in,
      sign_in_route,
      sign_up_route,
      sign_out_route,
      current_user
    } = this.props
    return (
      <Router>

        <Header 
          logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_up_route={sign_up_route}
          sign_out_route={sign_out_route}
          current_user={current_user}
        />

        <Switch>
          
          <Route exact path="/" component={ Home }/>
          
          <Route path="/apartmentindex" render={ (props) => <ApartmentIndex apartments={this.state.apartments}/> } />
          
          <Route 
          path="/apartmentshow/:id" 
          render={ (props) => { 
            let id = props.match.params.id 
            let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
            return(
              <ApartmentShow apartment={apartment}/>
            )
          } } />
          
          { logged_in &&
            <Route
              path="/apartmentnew"
              render={ (props) =>
                <ApartmentNew
                  createNewApartment={ this.createNewApartment }
                  current_user={ current_user }
                />
              }
            />
          }
          
          <Route path="/apartmentedit/:id" component={ ApartmentEdit } />
          
          <Route component={ NotFound } />
        
        </Switch>

        <Footer />
      </Router>
    )
  }
}
