import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Redirect } from 'react-router-dom'

export default class ApartmentNew extends Component{
    constructor(props){
        super(props)
        this.state = {
          form:{
            street: "",
            city: "",
            state: "",
            manager: "",
            email: "",
            price: "",
            bedrooms: "",
            bathrooms: "",
            pets: "no",
            user_id: this.props.current_user.id
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
        let { form } = this.state
        this.props.createNewApartment(form)
        this.setState({ success: true })
    }  

    render(){
        let { form, success } = this.state
        return(
            <div className="form-page">
                <h3 className="heading">Add an Apartment</h3>
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
                            checked={ form.pets === "yes" }
                            onChange={ this.handleChange }
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
                            checked={ form.pets === "no" }
                            onChange={ this.handleChange }
                            />
                            No
                        </Label>
                        </FormGroup>
                    
                    </FormGroup>


                    <Button
                    name="submit"
                    className="form-submit-btn"
                    onClick={ this.handleSubmit }
                    >
                    Add a New Apartment
                    </Button>
                    </Form>
                </div>

                { success && <Redirect to="/apartmentindex" /> }
                {/* { success && <Redirect to="/myindex" /> } */}
                
            </div>
        )
    }
}
