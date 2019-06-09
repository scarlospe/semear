import React, {Component} from 'react';
import {auth} from '../utils/firebase';
import WithList from './WithList';

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
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Email</label>
					<input autoComplete="email" name="email" type="text" />
				</div>
				<div>
					<label>Senha</label>
					<input autoComplete="password" name="password" type="password" />
				</div>
				<button type="submit">entrar</button>
			</form>
		);
	}

	render() {
		const {isAuth, loading} = this.state;

		if (loading) {
			return <div>loading...</div>
		}

		return isAuth ? (
			<div>
				Bem vindo!

				<button onClick={this.handleLogout}>logout</button>

				<WithList />
			</div>
		) : (
			this.renderForm()
		);
	}
}

export default WithAdmin;