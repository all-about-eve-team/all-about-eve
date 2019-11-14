import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios'

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        const user = this.props.user
        

        return (
            <div>

                <header className="navbar App-header" id="nav-container">
                    <div className="col-4" >
                        {loggedIn ? (
                            <section className="navbar-section">
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                    <span className="text-secondary">logout</span></Link>
                                <Link to="/forum" className="btn btn-link text-secondary">
                                    <span className="text-secondary">forum</span>
                                </Link>
                                <Link to="/period" username={user} className="btn btn-link text-secondary">
                                    <span className="text-secondary">period</span>
                                </Link>
                                <Link to="/articles" username={user} className="btn btn-link text-secondary">
                                    <span className="text-secondary">articles</span>
                                </Link>
                            </section>
                        ) : (
                                <section className="navbar-section">
                                    <Link to="/" className="btn btn-link text-secondary">
                                        <span className="text-secondary">home</span>
                                    </Link>
                                    <Link to="/login" className="btn btn-link text-secondary">
                                        <span className="text-secondary">login</span>
                                    </Link>
                                    <Link to="/signup" className="btn btn-link">
                                        <span className="text-secondary">sign up</span>
                                    </Link>
                                </section>
                            )}
                   </div>
                    <div className="col-4 col-mr-auto">
                        <div id="top-filler"></div>
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                        <h1 className="App-title">All About Eve</h1>
                    </div>
                    <div className="col-4 col-mr-auto text-right">
                        <Link to="/contactus" className="btn btn-link text-secondary">
                            <span className="text-secondary ">Contact Us</span>
                        </Link>
                    </div>
                </header>
            </div>

        );

    }
}

export default Navbar