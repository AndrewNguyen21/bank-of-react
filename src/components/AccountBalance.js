import React, { Component } from 'react';

class AccountBalance extends Component {
	render() {
		let accountBalance = this.props.accountBalance;
		let debitBalance = this.props.debitBalance;
		let creditBalance = this.props.creditBalance;
		return (
			<div>
				Balance: $
				{Math.round(
					(accountBalance - debitBalance - creditBalance + Number.EPSILON) * 100
				) / 100}
			</div>
		);
	}
}

export default AccountBalance;
