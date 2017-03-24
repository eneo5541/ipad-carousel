import React from 'react';

export default class Pagination extends React.Component {
	incrementSelectedIndex (increment) {
		//No need to maintain a local copy of selectedIndex, because the parent component will pass the updated selectedIndex right back through the data model
		let selectedIndex = this.props.selectedIndex + increment;
		if (selectedIndex < 0) {
			selectedIndex = this.props.data.length - 1;
		} else if (selectedIndex > this.props.data.length - 1) {
			selectedIndex = 0;
		}
		return selectedIndex;
	}

	decreasePagination () {
		this.props.selectedIndexChanged(this.incrementSelectedIndex(-1));
	}

	increasePagination () {
		this.props.selectedIndexChanged(this.incrementSelectedIndex(1));
	}

	render () {
		let nextTitle = this.props.data.length? this.props.data[this.incrementSelectedIndex(1)].title : 'Next';

		return (
			<div class='pagination row'>
				<a role='link' href='javascript:undefined' class='pagination-label pagination-previous' onClick={this.decreasePagination.bind(this)}>
					<i class="fa fa-caret-left" aria-hidden="true"></i>
					Previous
				</a>
				<a hrole='link' href='javascript:undefined' class='pagination-label pagination-next' onClick={this.increasePagination.bind(this)}>
					{nextTitle}
					<i class="fa fa-caret-right" aria-hidden="true"></i>
				</a>
			</div>
		);
	}
}
