import React, { Component } from 'react';

export default class DebitItem extends Component {
	render() {
		return (
			<div>
				<u>Description</u>: {this.props.debits.description}
				<br />
				<u>Amount</u>: {this.props.debits.amount}
				<br />
				<u>Date</u>: {this.props.debits.date}
			</div>
		);
	}
}
