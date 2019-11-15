import React, { Component } from 'react'
import axios from 'axios'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			age: '',
			email: '',
			icon: '',
			redirectTo: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	// validate email function from: https://www.w3resource.com/javascript/form/email-validation.php
	ValidateEmail(mail) 
	{
	 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
	  {
		return (true)
	  }
		alert("You have entered an invalid email address!")
		return (false)
	}

	handleSubmit(event) {
		event.preventDefault();
		let validEmail = this.ValidateEmail(this.state.email);
		(this.state.username && this.state.password && validEmail) ? (
		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password,
			age: this.state.age,
			email: this.state.email,
			icon: this.state.icon
		})
			.then(response => {
				console.log(response)
				console.log(response.data.errmsg)
				
				if (!response.data.errmsg || response.data.errmsg==="undefined") {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
		) : (
			alert("Please enter a username, password, and e-mail.")
		)
	}


	render() {
		return (
			<div className="SignupForm">
				<h4>Sign up</h4>
				<form className="form-horizontal">
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="username">Username</label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								type="text"
								id="username"
								name="username"
								placeholder="Username"
								value={this.state.username}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="password">Password: </label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								placeholder="password"
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="age">Age: </label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								placeholder="age"
								type="age"
								name="age"
								value={this.state.age}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="email">Email: </label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								placeholder="email"
								type="email"
								name="email"
								value={this.state.email}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="icon">Icon: </label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								placeholder="icon"
								type="icon"
								name="icon"
								value={this.state.icon}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group ">
						<div className="col-7"></div>
						<button
							className="btn btn-primary col-1 col-mr-auto"
							onClick={this.handleSubmit}
							type="submit"
						>Sign up</button>
					</div>
				</form>
			</div>

		)
	}
}

export default Signup
