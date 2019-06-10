import React, {Component} from 'react';
import {auth} from '../utils/firebase';
import WithList from './WithList';
import Loading from '../components/Loading';

class WithAdmin extends Component {
	state = {
		isAuth: false,
		loading: true
	}

	constructor() {
		super();

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	}

	componentDidMount() {
		auth.onAuthStateChanged(user => {
			if (user) {
				this.setState({isAuth: true});
			}

			this.setState({loading: false});
		});
	}

	handleLogout() {
		auth.signOut().then(() => {
			this.setState({isAuth: false});
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		const {email, password} = event.target;

		this.authUser(email.value, password.value);
	}

	authUser(email, password) {
		auth.signInWithEmailAndPassword(email, password).then(({operationType, user}) => {
			if (user) {
				this.setState({isAuth: true});
			}

			this.setState({loading: false});
		});
	}

	renderForm() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
						<div className="card card-signin my-5">
							<div className="card-body">
								<h5 className="card-title text-center">Semear <span className="badge badge-light">CHATBOT</span></h5>
								<form className="form-signin" onSubmit={this.handleSubmit}>
									<div className="form-group">
										<input autoComplete="email" name="email" type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
									</div>

									<div className="form-group">
										<input autoComplete="password" name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required />
									</div>

									<button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	renderContent() {
		return (
			<div className="container mt-5">
				<div className="card">
					<div className="card-body">
						<div className="d-flex justify-content-between align-center mb-3">
							<h5 className="card-title m-0">Semear Users</h5>
							<button className="btn btn-primary" onClick={this.handleLogout}>Sign out</button>
						</div>

						<WithList />
					</div>
				</div>
			</div>
		);
	}

	renderLoading() {
		return (
			<div className="container mt-5">
				<div className="card">
					<div className="card-body">
						<Loading />
					</div>
				</div>
			</div>
		);
	}

	render() {
		const {isAuth, loading} = this.state;

		if (loading) {
			return this.renderLoading()
		}

		return isAuth ? (
			this.renderContent()
		) : (
			this.renderForm()
		);
	}
}

export default WithAdmin;