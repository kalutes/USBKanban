import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from 'firebase';
import reactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		var firebaseConfig = {
			apiKey: "AIzaSyBBxovqKSt_mQBtMl9-_MmtgC9H9duBnkI",
			authDomain: "usbkanban.firebaseapp.com",
			databaseURL: "https://usbkanban.firebaseio.com",
			projectId: "usbkanban",
			storageBucket: "usbkanban.appspot.com",
			messagingSenderId: "960459714479"
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