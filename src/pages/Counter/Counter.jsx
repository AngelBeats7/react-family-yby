import React, { Component } from 'react';
import * as appActions from '../../redux/actions/counter';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Counter extends Component {
	render() {
		return (
			<div>
				<div>当前计数为{this.props.counter.count}</div>
				<button onClick={() => this.props.actions.increment()}>自增</button>
				<button onClick={() => this.props.actions.decrement()}>自减</button>
				<button onClick={() => this.props.actions.reset()}>重置</button>
			</div>
		);
	}
}

// 将store通过props传给组件
const mapStateToProps = (state) => {
	return {
		counter: state.counter
	};
};

// 将action通过props.action传给组件调用
const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(appActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
