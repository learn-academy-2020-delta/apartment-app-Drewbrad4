import React, { Component } from 'react';

export default class Home extends Component{
    render(){
        return(
            <div className="home">
                <h1 className="home-title">Welcome</h1>
                <h3 className="home-descrip">Find <a className="link" href="/apartmentindex">your</a> place today</h3>
            </div>
        )
    }
}