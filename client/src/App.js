import React, {Component} from 'react';
import axios from 'axios'
import {Route} from 'react-router-dom'
// components
import Signup from './pages/sign-up'
import LoginForm from './pages/login-form'
import Navbar from './pages/navbar'
import Home from './pages/home'
import Forum from "./pages/forum"
import ContactUs from './pages/contactus';
import Article from "./pages/article"
import API from './utils/API'
import Product from "./pages/product";
import AOS from 'aos';

// need to see when getuser is getting called

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
    console.log("running getUser below")
    //nora commenting getuser out for now
    // this.getUser()

    AOS.init();
  }

  updateUser(userObject) {
    this.setState(userObject)
    //nora added the below linefor testing
    // this.getUser()
  }

  getUser() {
    console.log("get user got called")
    //  API.getUser(this.state.username).then(response=>{
    //nora commenting out the above for a test 
    axios.get('/user/' + this.state.username).then(response => {
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
    // this.getUser()
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
          render={(props) => <Forum {...props} getUser={this.getUser} loggedIn={this.state.loggedIn} username={this.state.username} />}
        />
        <Route
          exact path="/product"
          // the below allows me to send the user as a prop when they go to the period page!
          render={(props) => <Product {...props} loggedIn={this.state.loggedIn} username={this.state.username} />}
        />
        <Route
          exact path="/articles"
          render={(props) => <Article {...props} getUser={this.getUser} loggedIn={this.state.loggedIn} username={this.state.username} />}
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
