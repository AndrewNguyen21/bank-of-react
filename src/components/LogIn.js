import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class LogIn extends Component {
	constructor() {
		super();
		this.state = {
			user: {
				userName: '',
				password: ''
			},
			redirect: false
		};
	}

	handleChange = (e) => {
		const updatedUser = { ...this.state.user };
		const inputField = e.target.name;
		const inputValue = e.target.value;
		updatedUser[inputField] = inputValue;

		this.setState({ user: updatedUser });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.mockLogIn(this.state.user);
		this.setState({ redirect: true });
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to="/" />;
		}

		return (
			<div>
				<div className="main">
					<p className="sign">Sign In</p>
					<form onSubmit={this.handleSubmit} className="form1">
						<input
							type="text"
							name="userName"
							onChange={this.handleChange}
							value={this.state.user.userName}
							className="un"
							placeholder="username"
						/>

						<input
							type="password"
							name="password"
							placeholder="password"
							className="pass"
						/>

						<button className="submit">Sign In</button>
					</form>
				</div>
			</div>
		);
	}
}

export default LogIn;
