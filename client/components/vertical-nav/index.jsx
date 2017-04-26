/**
 * External dependencies
 */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

/**
 * Internal dependencies
 */
import style from './style';

const VerticalNav = React.createClass( {
	render() {
		console.log( style );
		console.log( style.verticalNav );
		return (
			<div className={ style.verticalNav }>
				sdfs
				{ this.props.children }
			</div>
		);
	}
} );

export default withStyles( style )( VerticalNav );
