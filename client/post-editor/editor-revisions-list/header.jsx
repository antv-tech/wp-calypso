/**
 * External dependencies
 */
import { localize } from 'i18n-calypso';
import React, { PureComponent, PropTypes } from 'react';

/**
 * Internal dependencies
 */
import Button from 'components/button';

class EditorRevisionsListHeader extends PureComponent {
	constructor() {
		super();
		this.loadRevision = this.loadRevision.bind( this );
	}

	loadRevision() {
		this.props.loadRevision();
	}

	render() {
		return (
			<div className="editor-revisions-list__header">
				<h3>{ this.props.translate( 'You\'re seeing the latest changes' ) }</h3>
				<Button
					className="editor-revisions-list__restore-revision"
					onClick={ this.loadRevision }
					compact={ true }
				>
					{ this.props.translate( 'Load revision' ) }
				</Button>
			</div>
		);
	}
}

EditorRevisionsListHeader.propTypes = {
	loadRevision: PropTypes.func,
	translate: PropTypes.func,
};

export default localize( EditorRevisionsListHeader );
