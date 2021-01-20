import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import DebitItem from './DebitItem';
import { Link } from 'react-router-dom';

export default class Debits extends Component {
	constructor() {
		super();
		this.state = {
			debit: {
				id: '',
				description: '',
				amount: '',
				date: ''
			}
		};
	}

	setItems = () => {
		const results = this.props.debits;
		let data;
		data = results.map((items) => {
			return <DebitItem debits={items} key={items.id} />;
		});
		return data;
	};

	handleChange = (e) => {
		const newDebit = { ...this.state.debit };
		const input = e.target.name;
		const value = e.target.value;
		newDebit[input] = value;
		if (input === 'amount') {
			newDebit.amount = Number(value);
		}
		this.setState({ debit: newDebit });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addDebit(this.state.debit);
	};

	render() {
		return (
			<div>
				<h1>Debits</h1>
				<Link to="/">Home</Link>
				<Link to="/userProfile">User Profile</Link>
				<Link to="/credit">Credit</Link>
				<AccountBalance
					accountBalance={this.props.accountBalance}
					debitBalance={this.props.debitBalance}
					creditBalance={this.props.creditBalance}
				/>
				<p>Add Purchase</p>
				<form onSubmit={this.handleSubmit}>
					<input
						onChange={this.handleChange}
						type="text"
						name="description"
						placeholder="Description"
						value={this.state.debit.description}
					></input>
					<input
						onChange={this.handleChange}
						type="number"
						step="any"
						name="amount"
						placeholder="Amount"
						value={this.state.debit.amount}
					></input>
					<input type="submit"></input>
				</form>
				<div>{this.setItems()}</div>
			</div>
		);
	}
}
