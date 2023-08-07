/**
 * WordPress dependencies
 */
import { useInstanceId } from '@wordpress/compose';
import { VisuallyHidden } from '@wordpress/components';

/**
 * Internal dependencies
 */
import SidebarNavigationItem from '../sidebar-navigation-item';
import { useLink } from '../routes/link';

export default function CategoryItem( {
	count,
	icon,
	id,
	isActive,
	label,
	type,
} ) {
	const instanceId = useInstanceId( CategoryItem );
	const linkInfo = useLink( {
		path: '/patterns',
		categoryType: type,
		categoryId: id,
	} );

	if ( ! count ) {
		return;
	}

	return (
		<>
			<SidebarNavigationItem
				{ ...linkInfo }
				icon={ icon }
				suffix={ <span aria-hidden="true">{ count }</span> }
				aria-current={ isActive ? 'true' : undefined }
				aria-describedby={ `category-item-${ instanceId }` }
			>
				{ label }
			</SidebarNavigationItem>
			<VisuallyHidden id={ `category-item-${ instanceId }` }>
				{ count }
			</VisuallyHidden>
		</>
	);
}
