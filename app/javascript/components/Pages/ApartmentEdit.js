import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { Redirect } from 'react-router-dom'

export default class ApartmentEdit extends Component{
    constructor(props){
        super(props)
        this.state = {
          form:{
            street: this.props.apartment.street,
            city: this.props.apartment.city,
            state: this.props.apartment.state,
            manager: this.props.apartment.manager,
            email: this.props.apartment.email,
            price: this.props.apartment.price,
            bedrooms: this.props.apartment.bedrooms,
            bathrooms: this.props.apartment.bathrooms,
            pets: this.props.apartment.pets
          },
          success: false
        }
    }

    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({ form: form })
    }
    
      handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateApartment(this.state.form, this.props.apartment.id)
        this.setState({ success: true })
    }

    render(){
        let { form, success } = this.state
        return(
          <div className="form-page">
            <h3 className="heading">Edit an Apartment</h3>
            <div className="form">
              <Form>
                
                <FormGroup>
                  <Label>Street</Label>
                  <Input
                    type="text"
                    name="street"
                    onChange={ this.handleChange }
                    value={ form.street }
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>City</Label>
                  <Input
                    type="text"
                    name="city"
                    onChange={ this.handleChange }
                    value={ form.city }
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>State</Label>
                  <Input
                    type="text"
                    name="state"
                    onChange={ this.handleChange }
                    value={ form.state }
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Manager's Name</Label>
                  <Input
                    type="text"
                    name="manager"
                    onChange={ this.handleChange }
                    value={ form.manager }
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Manager's Email</Label>
                  <Input
                    type="text"
                    name="email"
                    onChange={ this.handleChange }
                    value={ form.email }
                  />
                </FormGroup>

                <FormGroup>
                        <Label>Price</Label>
                        <Input
                        type="text"
                        name="price"
                        onChange={ this.handleChange }
                        value={ form.price }
                        />
                </FormGroup>
                
                <FormGroup>
                  <Label>Number of Bedrooms</Label>
                  <Input
                    type="number"
                    name="bedrooms"
                    onChange={ this.handleChange }
                    value={ form.bedrooms }
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Number of Bathrooms</Label>
                  <Input
                    type="number"
                    name="bathrooms"
                    onChange={ this.handleChange }
                    value={ form.bathrooms }
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Pets</Label>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="pets"
                        value="yes"
                        onChange={ this.handleChange }
                        checked={ form.pets === "yes" }
                      />
                      Yes
                    </Label>
                  </FormGroup>
                  
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="pets"
                        value="no"
                        onChange={ this.handleChange }
                        checked={ form.pets === "no" }
                      />
                      No
                    </Label>
                  </FormGroup>
                </FormGroup>
                
                <Button
                name="submit"
                color="secondary"
                onClick={ this.handleSubmit }
                >
                Edit Apartment
                </Button>
              </Form>
              { success && <Redirect to="/apartmentindex" /> }
            </div>
          </div>
        )
      }
}