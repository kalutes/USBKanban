import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		var firebaseConfig = {
			apiKey: ,
			authDomain: ,
			databaseURL: ,
			projectId: ,
			storageBucket: ,
			messagingSenderId: 
		};

		Firebase.initializeApp(firebaseConfig);
	}

	componentWillMount() {
		var ref = Firebase.database().ref("items");
		this.bindAsArray(ref, "items");
	}

	render() {
		return (
			<div>HELLO</div>
		);
	}
}

reactMixin(App.prototype, ReactFireMixin);