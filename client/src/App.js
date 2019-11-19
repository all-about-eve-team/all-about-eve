import React, {Component} from 'react';
import {Route} from 'react-router-dom'
// components
import Signup from './pages/sign-up'
import LoginForm from './pages/login-form'
import Navigation from './components/Navigation'
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
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    AOS.init();
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    API.getUserInfo(this.state.username).then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          username: this.state.username
        })
      } else {
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
        <Navigation user={this.state.username} updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p className="welcomeUser">Welcome, {this.state.username}!</p>
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
