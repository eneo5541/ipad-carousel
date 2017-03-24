import React from 'react';

export default class CarouselHeader extends React.Component {

	render() {
		let title = this.props.data && this.props.data.title ? <h4 class='title'>{this.props.data.title}</h4> : null;
		// Return undefined in href so page does not reload or scroll. Anchors with no href cannot receive focus via keyboard
		return (
			<a class='toggle-carousel' role='link' href='javascript:undefined' onClick={this.props.onClick}>
				<i class="fa fa-file" aria-hidden="true" title="Toggle carousel contents"></i>
				{title}
				<i class="fa fa-caret-up" aria-hidden="true" title="Toggle carousel contents"></i>
			</a>
		);
	}
}
