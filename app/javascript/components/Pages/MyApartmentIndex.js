import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'

export default class MyApartmentIndex extends Component{
    render(){
        return(
            <div className="index">
                <h3 className="heading">My Apartments</h3>
                { this.props.apartments.map((apartment, index) => {
                    return(
                        <div key={index} className="apartmentCard">
                            <h3>{apartment.street}</h3>
                            <div className="location">
                                <h3>{apartment.city}, {apartment.state}</h3>
                            </div>
                            <br/>
                            
                            <Link to={`/myapartmentshow/${apartment.id}`} className="button">
                                <Button className="info">More Info</Button>
                            </Link>
                    
                        </div>   
                    )
                })}
            </div>
        )
    }
}