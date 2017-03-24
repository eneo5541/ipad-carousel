import React from 'react';

export default class CarouselItem extends React.Component {

	render() {
		let packshot = null,
			description = null
		if (this.props.data) {
			// Do not add unnecessary, empty DOM elements if there is nothing to render
			if (this.props.data.thumbnail) {
				let packshotUrl = `assets/images/${this.props.data.thumbnail}`;
				packshot = <img class='carousel-item-packshot' src={packshotUrl} alt={this.props.data.title}></img>
			}
			if (this.props.data.description) {
				let widthClasses = 'carousel-item-description ' + (this.props.data.thumbnail ? '' : 'full-width');
				description = <p class={widthClasses} dangerouslySetInnerHTML={{__html: this.props.data.description}}></p>
			}
		}

		return (
			<div class='row carousel-item'>
				{packshot}
				{description}
			</div>
		);
	}
}
