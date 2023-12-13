/**
 * External dependencies
 */
import { nanoid } from 'nanoid';

/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { BaseControl, CheckboxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { PARTIAL_SYNCING_SUPPORTED_BLOCKS } from '../constants';

function PartialSyncingControls( { name, attributes, setAttributes } ) {
	const syncedAttributes = PARTIAL_SYNCING_SUPPORTED_BLOCKS[ name ];

	function updateConnections( isChecked ) {
		let updatedConnections = {
			...attributes.connections,
			attributes: { ...attributes.connections?.attributes },
		};

		if ( ! isChecked ) {
			for ( const attributeName of Object.keys( syncedAttributes ) ) {
				delete updatedConnections.attributes[ attributeName ];
			}
			if ( ! Object.keys( updatedConnections.attributes ).length ) {
				delete updatedConnections.attributes;
			}
			if ( ! Object.keys( updatedConnections ).length ) {
				updatedConnections = undefined;
			}
			setAttributes( {
				connections: updatedConnections,
			} );
			return;
		}

		for ( const attributeName of Object.keys( syncedAttributes ) ) {
			updatedConnections.attributes[ attributeName ] = {
				source: 'pattern_attributes',
			};
		}

		if ( typeof attributes.metadata?.id === 'string' ) {
			setAttributes( { connections: updatedConnections } );
			return;
		}

		const id = nanoid( 6 );
		setAttributes( {
			connections: updatedConnections,
			metadata: {
				...attributes.metadata,
				id,
			},
		} );
	}

	return (
		<InspectorControls group="advanced">
			<BaseControl __nextHasNoMarginBottom>
				<BaseControl.VisualLabel>
					{ __( 'Pattern overrides' ) }
				</BaseControl.VisualLabel>
				<CheckboxControl
					__nextHasNoMarginBottom
					label={ __( 'Allow instance overrides' ) }
					checked={ Object.keys( syncedAttributes ).some(
						( attributeName ) =>
							attributes.connections?.attributes?.[
								attributeName
							]?.source === 'pattern_attributes'
					) }
					onChange={ ( isChecked ) => {
						updateConnections( isChecked );
					} }
				/>
			</BaseControl>
		</InspectorControls>
	);
}

export default PartialSyncingControls;
