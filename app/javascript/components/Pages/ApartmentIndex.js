import React, { Component } from 'react';

export default class ApartmentIndex extends Component{
    render(){
        return(
            <>
                <h3>Index</h3>
                { this.props.apartments.map((apartment, index) => {
                    return(
                        <div key={index}>
                            <h3>{apartment.street}</h3>
                            <h3>{apartment.city}</h3>
                            <h3>{apartment.state}</h3>
                        </div>   
                    )
                })}
            </>
        )
    }
}