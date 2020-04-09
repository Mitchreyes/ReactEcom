import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FormSearchBar(props) {
	return (
		<div className="search-bar-grid">
			<FontAwesomeIcon className={`${props.className} icon-search`} icon="search" />
			<input
				className={`${props.className} form-search-bar search-bar-grid__input`}
				{...props.input}
				type="text"
				placeholder={`${props.placeholder}`}
			/>
		</div>
	);
}

{
	/* <i class="fas fa-search"></i> */
}

class ShopSearchBar extends Component {
	render() {
		const { className, handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
				<Field
					name="query"
					className="shop-search-bar__form-search-bar"
					placeholder="search"
					component={FormSearchBar}
				/>
			</form>
		);
	}
}

ShopSearchBar = reduxForm({
	form: 'ShopSearchBar'
})(ShopSearchBar);

export default ShopSearchBar;
