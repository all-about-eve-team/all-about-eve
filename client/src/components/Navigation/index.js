import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../../App.css"
import logo from "../../images/logo.png";
import Navbar from 'react-bootstrap/Navbar'
import API from "../../utils/API"
import Nav from 'react-bootstrap/Nav'
// import Row from 'react-bootstrap/Row'


class Navigation extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        API.userLogout().then(response => {
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        const user = this.props.user


        return (
            <div>

                {/* <header className="navbar App-header" id="nav-container"> */}

                {/* <div className="col-4" > */}
                {loggedIn ? (
                    // <section className="navbar-section">
                    <Navbar collapseOnSelect expand="lg" className="nav-container">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="navbar-section mr-auto">
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                    <span className="text-secondary">logout</span></Link>
                                <Link to="/" className="btn btn-link text-secondary">
                                    <span className="text-secondary">about</span>
                                </Link>
                                <Link to="/forum" className="btn btn-link text-secondary">
                                    <span className="text-secondary">forum</span>
                                </Link>
                                <Link to="/product" username={user} className="btn btn-link text-secondary">
                                    <span className="text-secondary">product review</span>
                                </Link>
                                <Link to="/articles" username={user} className="btn btn-link text-secondary">
                                    <span className="text-secondary">articles</span>
                                </Link>
                            </Nav>
                            <Nav className="navbar-section mr-auto">
                         
                                <div id="top-filler"><img src={logo} alt="Logo"></img></div>
                       
                            </Nav>
                            <Nav className="navbar-section mr-auto text-right">
                              
                                <Link to="/contactus" className="btn btn-link text-secondary">
                                    <span className="text-secondary ">Contact Us</span>
                                </Link>
                              
                            </Nav>
                         
                        </Navbar.Collapse>
                    </Navbar>
                ) : (
                        // <section className="navbar-section">
                        <Navbar collapseOnSelect expand="lg" className="nav-container">
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="navbar-section">
                                    <Link to="/" className="btn btn-link text-secondary">
                                        <span className="text-secondary">home</span>
                                    </Link>
                                    <Link to="/login" className="btn btn-link text-secondary">
                                        <span className="text-secondary">login</span>
                                    </Link>
                                    <Link to="/signup" className="btn btn-link">
                                        <span className="text-secondary">sign up</span>
                                    </Link>
                                </Nav>
                              
                               
                                <Nav className="navbar-section mr-auto">
                                    
                                    <div id="top-filler"><img src={logo} alt="Logo"></img></div>
                                   
                                </Nav>
                                
                               
                                <Nav className="navbar-section mr-auto contactNav align-right">
                              
                                <Link to="/contactus" className="btn btn-link text-secondary">
                                    <span className="text-secondary ">Contact Us</span>
                                </Link>
                              
                            </Nav>
                             
                            </Navbar.Collapse>
                            
                        </Navbar>
                    )}


            </div>
        );

    }
}

export default Navigation