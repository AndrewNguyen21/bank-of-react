import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';
import LogIn from './LogIn';

class Home extends Component {
	render() {
		let userProfileCard = (
			<div className="card">
				<img
					className="cardImg"
					src="https://img.freepik.com/free-vector/people-round-icons-young-couple-cartoon_18591-604.jpg?size=338&ext=jpg&ga=GA1.2.1755769574.1604102400"
					alt="Avatar"
				/>
				<div className="container">
					<button className="myButton">
						<Link to="/userProfile">User Profile</Link>
					</button>
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

		let homePage = (
			<div className="homeContainer">
				{userProfileCard}
				{debitCard}
				{creditCard}
				{accountBalanceCard}
			</div>
		);

		let logInCard = (
			<div className="logInCard">
				<LogIn mockLogIn={this.props.mockLogIn} />
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
				{/* <div className="">
					{this.props.user.loggedIn ? (
						// <Link className="" to="/userProfile">
						// 	User Profile
						// </Link>
						homePage
					) : (
						<LogIn mockLogIn={this.props.mockLogIn} />
					)}
					<div className="">
						{this.props.user.loggedIn
							? // <Link className="" to="/debits">
							  // 	Debits
							  // </Link>
							  debitCard
							: ''}
					</div>
					<div className="linkItem">
						{this.props.user.loggedIn
							? // <Link className="" to="/credit">
							  // 	Credit
							  // </Link>
							  creditCard
							: ''}
					</div>
					<div>
						{this.props.user.loggedIn
							? // <AccountBalance
							  // 	accountBalance={this.props.accountBalance}
							  // 	debitBalance={this.props.debitBalance}
							  // 	creditBalance={this.props.creditBalance}
							  // />
							  accountBalanceCard
							: ''}
					</div>
				</div> */}
				<div>{this.props.user.loggedIn ? homePage : logInCard}</div>
			</div>
		);
	}
}

export default Home;
