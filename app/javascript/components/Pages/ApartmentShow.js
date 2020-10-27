import React, { Component } from 'react';

export default class ApartmentShow extends Component{
    render(){
        const {apartment} = this.props
        return(
            <div className="show">    
                <div className="apartmentCard">
                    <h3 className="heading">{apartment.street}</h3>
                    <p className="apt-info">City: {apartment.city}</p>
                    <p className="apt-info">State: {apartment.state}</p>
                    <p className="apt-info">Manager: {apartment.manager}</p>
                    <p className="apt-info">Email: {apartment.email}</p>
                    <p className="apt-info">Price: {apartment.price}</p>
                    <p className="apt-info">Bedrooms: {apartment.bedrooms}</p>
                    <p className="apt-info">Bathrooms: {apartment.bathrooms}</p>
                    <p className="apt-info">Pets: {apartment.pets}</p>
                </div>
            </div>
        )
    }
}