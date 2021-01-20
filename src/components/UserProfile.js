import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AccountBalance from './AccountBalance';

class UserProfile extends Component {
	render() {
		let userDetailsCard = (
			<div className="card">
				<img
					className="cardImg"
					src="https://s.clipartkey.com/mpngs/s/112-1124283_profile-profile-clipart.png"
					alt="money"
				/>
				<h2 className="userDetailsText">{this.props.userName}</h2>
				{/* <div className="userDetailsText">Username: {this.props.userName}</div> */}
				<div className="userDetailsText">
					Member Since: {this.props.memberSince}
				</div>
			</div>
		);
		let debitCard = (
			<div className="card">
				<img
					className="cardImg"
					src="https://cdn0.iconfinder.com/data/icons/business-set-8/513/business-credit-card-bank-account-atm-debit-512.png"
					alt="Debit"
				/>
				<div className="container">
					<button className="myButton">
						<Link to="/debits">Debit</Link>
					</button>
				</div>
			</div>
		);

		let creditCard = (
			<div className="card">
				<img
					className="cardImg"
					src="https://i.pinimg.com/originals/6c/1e/c6/6c1ec6e34c53776e4b149166c05353f8.png"
					alt="credit"
				/>
				<div className="container">
					<button className="myButton">
						<Link to="/credit">Credit</Link>
					</button>
				</div>
			</div>
		);

		let accountBalanceCard = (
			<div className="card">
				<img
					className="cardImg"
					src="https://i.pinimg.com/474x/a0/5d/3c/a05d3ce1957d375f307c683562d67873.jpg"
					alt="money"
				/>
				<h2 className="accountBalanceContainer"> Account Balance:</h2>
				<div className="accountBalanceContainer">
					<AccountBalance
						accountBalance={this.props.accountBalance}
						debitBalance={this.props.debitBalance}
						creditBalance={this.props.creditBalance}
					/>
				</div>
			</div>
		);
		return (
			<div>
				<div className="signInLogo">
					<Link to="/">
						<img
							src="https://3k64nh47gxyj39ud4k2tc04b-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/Digital-bank-800x500.png"
							alt="bank logo"
							className="bankLogo"
						/>
					</Link>
					<h1 className="bankNameFont">Bank of React</h1>
				</div>
				<h1 className="userDetailsText">User Profile</h1>
				<div className="homeContainer">
					{userDetailsCard}
					{debitCard}
					{creditCard}
					{accountBalanceCard}
				</div>
				{/* <div>
					{this.props.user.loggedIn
						? // <Link className="linkItem" to="/debits">
						  // 	Debits
						  // </Link>
						  { debitCard }
						: ''}
				</div>
				<div>
					{this.props.user.loggedIn
						? // <Link className="linkItem" to="/credit">
						  // 	Credit
						  // </Link>
						  { creditCard }
						: ''}
				</div> */}
			</div>
		);
	}
}

export default UserProfile;
