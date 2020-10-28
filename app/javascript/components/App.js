import React, { Component } from "react"
import PropTypes from "prop-types"

import Header from './Components/Header'
import Footer from './Components/Footer'

import ApartmentEdit from './Pages/ApartmentEdit'
import ApartmentIndex from './Pages/ApartmentIndex'
import ApartmentNew from './Pages/ApartmentNew'
import ApartmentShow from './Pages/ApartmentShow'
import MyApartmentIndex from './Pages/MyApartmentIndex'
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

updateApartment = (apartment, id) => {
  console.log("Apartment:", apartment, "Id:", id);
}


  render() {
    const {
      logged_in,
      sign_in_route,
      sign_up_route,
      sign_out_route,
      current_user
    } = this.props
    console.log(current_user);
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
          
          {/* Protected Routes */}

          { logged_in &&
            <Route
              path="/apartmentnew"
              render={ (props) => {
                <ApartmentNew
                  createNewApartment={ this.createNewApartment }
                  current_user={ current_user }
                />
              } } 
            /> 
          }

          { logged_in &&
            <Route
              path="/myapartmentindex"
              render={ (props) => {
                let user = current_user.id
                let apartments = this.state.apartments.filter(apartment => apartment.user_id === user)
                return(  
                  <MyApartmentIndex
                    apartments={ apartments }
                  />
                )
              } }
            /> 
          }
          
          { logged_in &&
            <Route
              path="/apartmentedit/:id"
              render={ (props) => {
                let id = props.match.params.id
                let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
                return(  
                  <ApartmentEdit
                    updateApartment={ this.updateApartment }
                    current_user={ current_user }
                    apartment={ apartment }
                  />
                )
              } }
            /> 
          }
          
          {/* Catch all Not Found */}

          <Route component={ NotFound } />
        
        </Switch>

        <Footer />
      </Router>
    )
  }
}
