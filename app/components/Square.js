var React = require('react');
var ReactDOM = require("react-dom");
var Component = React.Component;

class Square extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 3,
		};
	}


	render(){
		return (
			<button className="square" onClick={() => this.setState({value: 'X'})}>
				{this.state.value}
			</button>
		);
	}
}