import React, { Component } from 'react';

class App extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		this.getDetails();
	}

	getDetails = () => {
		letrequest = newXMLHttpRequest();
		request.open("GET", `http://localhost:7777/chatRooms/${id}​​​​​​​​/messages`);
		request.onreadystatechange = () => {
			if (R.equals(request.readyState, 4)) {
				const res = JSON.parse(request.response);
				alert('apisuccess',res);
				console.log('apirespone',res);
			} else {
				alert('apifailed',request);
				console.log('apirespone',request);
			}

		};
		request.setRequestHeader("Content-Type", "application/json");
		request.send();
	}

	render() {
		return (
			<div>
				sample react project
      </div>
		);
	}
}

export default App;
