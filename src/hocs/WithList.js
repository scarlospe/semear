import React, {Component} from 'react';
import {database} from '../utils/firebase';

class WithList extends Component {
	state = {
		items: []
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

			this.setState({items: arr})
		});
	}

	render() {
		const {items} = this.state;

		console.log(items)

		return (
			<table>
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
}

export default WithList;