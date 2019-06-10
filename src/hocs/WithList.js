import React, {Component} from 'react';
import {database} from '../utils/firebase';
import Loading from '../components/Loading';

class WithList extends Component {
	state = {
		items: [],
		loading: true
	}

	componentDidMount() {
		database.ref('/users').once('value').then(snapshot => {
			const obj = snapshot.val();

			if (!obj) return;

			let arr = [];

			Object.keys(obj).forEach(item => {
				arr = [
					...arr,
					obj[item]
				];
			});

			this.setState({items: arr, loading: false})
		});
	}

	renderTable() {
		const {items} = this.state;

		return (
			<table className="table">
				<thead>
					<tr>
						<th>Nome</th>
						<th>Email</th>
						<th>Opção</th>
					</tr>
				</thead>
				<tbody>
					{items.map(({name, email, option}, index) => (
						<tr key={index}>
							<td>{name}</td>
							<td>{email}</td>
							<td>{option}</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	}

	renderLoading() {
		return <Loading />;
	}

	render() {
		const {loading} = this.state;

		return !loading ? this.renderTable() : this.renderLoading();
	}
}

export default WithList;