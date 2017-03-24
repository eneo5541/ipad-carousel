import React from 'react';

import Carousel from './Carousel'

export default class Main extends React.Component {
	constructor () {
		super();

		this.state = {
			content: {
				content: []
			}
		};

		this.getContent('assets/json/content.json');
	}

	getContent (url) {
		this.getJson(url)
			.then(function (response) {
				this.changeContent(JSON.parse(response));
			}.bind(this))
			.catch(function (err) {
				console.log('Error:', err);
			});
	}

	changeContent (content) {
		this.setState({content});
	}

	getJson (url) {
		return new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', url);
			xhr.onload = function () {
				if (this.status >= 200 && this.status < 300) {
					resolve(xhr.response);
				} else {
					reject({
						status: this.status,
						statusText: xhr.statusText
					});
				}
			};
			xhr.onerror = function () {
				reject({
					status: this.status,
					statusText: xhr.statusText
				});
			};
			xhr.send();
		});
	}

	render () {
		return (
			<div class='product-tile'>
				<Carousel data={this.state.content} />
			</div>
		);
	}
}
