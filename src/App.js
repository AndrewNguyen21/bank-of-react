import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Debits from './components/Debits';
import Credit from './components/Credit';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

class App extends Component {
	constructor() {
		super();

		this.state = {
			accountBalance: 14568.27,
			currentUser: {
				userName: 'bob_loblaw',
				memberSince: '08/23/99',
				loggedIn: false
			},
			debits: [],
			credit: [],
			debitBalance: 0,
			creditBalance: 0
		};
	}

	componentDidMount() {
		this.getDebits();
		this.getCredit();
	}

	//use axios to get debit API data
	getDebits = () => {
		axios
			.get(`https://moj-api.herokuapp.com/debits`)
			.then((res) => {
				const data = res.data;
				this.setState({ debits: data });
				let tempD = 0;
				for (let i of data) {
					tempD += i.amount;
				}
				tempD = Math.round((tempD + Number.EPSILON) * 100) / 100;
				this.setState({ debitBalance: tempD });
			})
			.catch((err) => console.log('Debit Error!'));
	};

	//add debit item
	addDebit = (debit) => {
		debit.id = uuid();
		let date = new Date();
		debit.date = date.toISOString();

		const newDebits = [debit, ...this.state.debits];
		let debitBalance = 0;
		for (let i = 0; i < newDebits.length; i++) {
			debitBalance += newDebits[i].amount;
		}
		debitBalance = Math.round((debitBalance + Number.EPSILON) * 100) / 100;
		this.setState({ debits: newDebits, debitBalance: debitBalance });
	};

	//use axios to get credit API data
	getCredit = () => {
		axios
			.get(`https://moj-api.herokuapp.com/credits`)
			.then((res) => {
				const data = res.data;
				this.setState({ credit: data });
				let tempC = 0;
				for (let i of data) {
					tempC += i.amount;
				}
				tempC = Math.round((tempC + Number.EPSILON) * 100) / 100;
				this.setState({ creditBalance: tempC });
			})
			.catch((err) => console.log('Credit Error!'));
	};

	//add credit item
	addCredit = (credit) => {
		credit.id = uuid();
		let date = new Date();
		credit.date = date.toISOString();

		const newCredit = [credit, ...this.state.credit];
		let creditBalance = 0;
		for (let i = 0; i < newCredit.length; i++) {
			creditBalance += newCredit[i].amount;
		}
		creditBalance = Math.round((creditBalance + Number.EPSILON) * 100) / 100;
		this.setState({ credit: newCredit, creditBalance: creditBalance });
	};

	mockLogIn = (logInInfo) => {
		const newUser = { ...this.state.currentUser };
		newUser.userName = logInInfo.userName;
		newUser.loggedIn = true;
		this.setState({ currentUser: newUser });
	};

	render() {
		const HomeComponent = () => (
			<Home
				accountBalance={this.state.accountBalance}
				debitBalance={this.state.debitBalance}
				creditBalance={this.state.creditBalance}
				user={this.state.currentUser}
				mockLogIn={this.mockLogIn}
			/>
		);

		const UserProfileComponent = () => (
			<UserProfile
				userName={this.state.currentUser.userName}
				memberSince={this.state.currentUser.memberSince}
				accountBalance={this.state.accountBalance}
				debitBalance={this.state.debitBalance}
				creditBalance={this.state.creditBalance}
				user={this.state.currentUser}
				loggedIn={this.state.loggedIn}
			/>
		);

		const LogInComponent = () => (
			<LogIn
				user={this.state.currentUser}
				mockLogIn={this.mockLogIn}
				{...this.props}
			/>
		);

		const DebitsComponent = () => (
			<Debits
				accountBalance={this.state.accountBalance}
				debitBalance={this.state.debitBalance}
				debits={this.state.debits}
				addDebit={this.addDebit}
				creditBalance={this.state.creditBalance}
				user={this.state.currentUser}
			/>
		);

		const CreditComponent = () => (
			<Credit
				accountBalance={this.state.accountBalance}
				creditBalance={this.state.creditBalance}
				credit={this.state.credit}
				addCredit={this.addCredit}
				debitBalance={this.state.debitBalance}
				user={this.state.currentUser}
			/>
		);

		return (
			<Router>
				<Switch>
					<Route exact path="/" render={HomeComponent} />
					<Route exact path="/login" render={LogInComponent} />
					<Route exact path="/userProfile" render={UserProfileComponent} />
					<Route exact path="/debits" render={DebitsComponent} />
					<Route exact path="/credit" render={CreditComponent} />
				</Switch>
			</Router>
		);
	}
}

export default App;
