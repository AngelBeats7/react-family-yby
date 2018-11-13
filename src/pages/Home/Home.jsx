import React, { Component } from 'react';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}
	handleClick = () => {
		this.setState({
			count: ++this.state.count
		});
	};

	handleChange(num, e) {
		this.setState({
			count: this.state.count - num
		});
	}
	render() {
		return (
			<div>
				<p>this is home~777777</p>
				<p>当前计数： {this.state.count}</p>
				<button onClick={this.handleClick}>不传参函数</button>
				<button onClick={e => this.handleChange(2, e)}>传参函数</button>
			</div>
		);
	}
}
