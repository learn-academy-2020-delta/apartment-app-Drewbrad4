import React, { Component } from 'react';
import { Nav, NavLink, NavItem } from 'reactstrap'


export default class Header extends Component{
    render(){
        const {
            logged_in,
            sign_in_route,
            sign_up_route,
            sign_out_route,
            current_user
        } = this.props
        return(
            <div id="header">
                <h3 className="title">ApartmentSeeker</h3>
                <Nav>
                    <NavItem>
                        <a href="/">Home</a>
                    </NavItem>
                    <NavItem>
                        <a href="/apartmentindex">All Apartments</a>
                    </NavItem>
                    
                    { logged_in &&
                        <>
                            <NavItem>
                                <a href="/myapartmentindex">My Apartments</a>
                            </NavItem>
                            <NavItem>
                                <a href="/apartmentnew">Create a New Listing</a>
                            </NavItem>
                            <NavItem>
                                <a href={sign_out_route}>Sign Out</a>
                            </NavItem>
                        </>
                    }

                    { !logged_in &&
                        <>
                            <NavItem>
                                <a href={sign_in_route}>Sign In</a>
                            </NavItem>
                            <NavItem>
                                <a href={sign_up_route}>Sign Up</a>
                            </NavItem>
                        </>
                    }
                </Nav>      
            </div>
        )
    }
}