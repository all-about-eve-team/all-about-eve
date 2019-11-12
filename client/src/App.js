import React, { Component } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
// components
import Signup from './pages/sign-up'
import LoginForm from './pages/login-form'
import Navbar from './pages/navbar'
import Home from './pages/home'
import Forum from "./pages/forum"
import Period from "./pages/period"
import ContactUs from './pages/contactus';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    //nora commented out the below for testing
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }
//nora commented the below out for testing
componentDidMount() {
  this.getUser()
}

  updateUser(userObject) {
    this.setState(userObject)
    //nora added the below linefor testing
    // this.getUser()
  }

  getUser() {
    console.log("get user got called")
    //nora added this.state.username below
    axios.get('/user/'+this.state.username).then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log("I know the user!");
        console.log(response.data.user);
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          // username: response.data.user.username
          //nora testing added the below line
          username: this.state.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  

  render() {
    return (
      <div className="App">
{/* nora added user prop to navbar */}
        <Navbar user={this.state.username} updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p>Join the party, {this.state.username}!</p>
        }
        {/* Routes to different components */}
        <Route
          exact path="/"
          component={Home} />
        <Route
          exact path="/forum"
          render={(props) => <Forum {...props} loggedIn={this.state.loggedIn} username={this.state.username}/>}
          />
          <Route
          exact path="/period"
          // the below allows me to send the user as a prop when they go to the period page!
          render={(props) => <Period {...props} loggedIn={this.state.loggedIn} username={this.state.username}/>}
          />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup />}
        />
        <Route
        path="/contactus"
        render={() =>
          <ContactUs />}
          />

      </div>
    );
  }
}

export default App;
