import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

export default class MyApartmentShow extends Component{
    constructor(props){
        super(props)
        this.state = {
            ownedApartment: null
        }
    }

    componentDidMount(){
        this.fetchApartment()
    }

    fetchApartment = () => {
        let { id  } = this.props.match.params 
        return fetch(`/apartments/${id}`)
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(payload => {
            console.log(payload);
            this.setState({ ownedApartment: payload})
        })
        .catch(errors => {
            console.log("fetch errors:", errors);
        })
    }

    render(){
        const {ownedApartment} = this.state
        console.log(ownedApartment);
        return(
            <div className="show">    
                { ownedApartment && 
                    <div className="apartmentCard">
                        <h3 className="heading">{ownedApartment.street}</h3>
                        <p className="apt-info">City: {ownedApartment.city}</p>
                        <p className="apt-info">State: {ownedApartment.state}</p>
                        <p className="apt-info">Manager: {ownedApartment.manager}</p>
                        <p className="apt-info">Email: {ownedApartment.email}</p>
                        <p className="apt-info">Price: {ownedApartment.price}</p>
                        <p className="apt-info">Bedrooms: {ownedApartment.bedrooms}</p>
                        <p className="apt-info">Bathrooms: {ownedApartment.bathrooms}</p>
                        <p className="apt-info">Pets: {ownedApartment.pets}</p>
                    
                        <Link to="/apartmentindex" className="button">
                            <Button className="info">Back to All Apartments</Button>
                        </Link>
                        
                        <br/>

                        <Link to={`/apartmentedit/${ownedApartment.id}`} className="button">
                            <Button className="info">Edit</Button>
                        </Link>
                        
                        <br/>
                                
                        <Link to="/myapartmentindex">
                            <Button className="info" onClick={ () => {this.props.deleteApartment(ownedApartment.id)} }>Delete Listing</Button>
                        </Link>
                    </div>
                }
            </div>
        )
    }
}