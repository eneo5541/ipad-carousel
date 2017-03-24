import React from 'react';

import CarouselHeader from './CarouselHeader'
import CarouselItem from './CarouselItem'
import Pagination from './Pagination'

// Not a true carousel - uses a data-binding on a single item renderer to avoid rendering multiple hidden item renderers
export default class Carousel extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			selectedIndex: 0,
			collapsed: false
		};
	}

	selectedIndexChanged (selectedIndex) {
		this.setState({selectedIndex});
	}

	toggleCarousel () {
		let collapsed = !this.state.collapsed;
		this.setState({collapsed});
	}

	render () {
		let content = this.props.data && this.props.data.content ? this.props.data.content : [],
			collapsed = 'carousel ' + (this.state.collapsed ? 'collapsed' : '');

		return (
			<div class={collapsed}>
				<div class='row carousel-title'>
					<CarouselHeader data={this.props.data} onClick={this.toggleCarousel.bind(this)} />
				</div>
				<div class='row carousel-content'>
					<CarouselItem data={content[this.state.selectedIndex]} />
					<div class='row'>
						<Pagination selectedIndex={this.state.selectedIndex} data={content} selectedIndexChanged={this.selectedIndexChanged.bind(this)} />
					</div>
				</div>
			</div>
		);
	}
}
