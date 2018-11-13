import React, { Component } from 'react';
import './Page1.css';
import image from './images/xh.png';

export default class Page1 extends Component {
	render() {
		return (
			<div className="page-box">
				<p>这是一张图</p>
				<img src={image} alt="123" />
			</div>
		);
	}
}
	