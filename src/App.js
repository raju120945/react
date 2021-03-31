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
		let requestBody = {
			"params":"hostt=172.22.110.190 cmdd=pwd",
			"tag":"test",
			"path":"/home/mounika.motam/fortigate/end.yml"
		};
		request.setRequestHeader("Content-Type", "application/json");
		request.send("POST", 'http://172.22.110.190:9020/task_list/', JSON.stringify(requestBody));
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
		// request.send();
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
