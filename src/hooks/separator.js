import classnames from 'classnames';

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls, PanelColorSettings } = wp.editor;
const { addFilter } = wp.hooks;
const { __ } = wp.i18n;

// Enable spacing control on the following blocks
const enableSpacingControlOnBlocks = [
	'core/separator',
];

const colorNames = {
    '#ec008c': 'pink',
    '#231f20': 'bark-chocolate',
    '#59BACC': 'blue',
    '#58AD69': 'green',
    '#FFBC49': 'yellow',
    '#E2574C': 'orange',
    '#FFFFFF': 'white'
}

/**
 * Create HOC to add spacing control to inspector controls of block.
 */
const withColorPalettes = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		// Do nothing if it's another block than our defined ones.
		if ( ! enableSpacingControlOnBlocks.includes( props.name ) ) {
			return (
				<BlockEdit { ...props } />
			);
		}

        let { setAttributes, attributes: { borderColor, className } } = props
        let classArray = className !== undefined ? className.split(' ') : ['is-style-default']
        if (borderColor && classArray.length > 0) {
            let borderColorClassName = `has-border-color-${colorNames[borderColor]}`
            classArray = classArray.map(item => {
                let newClassName = ''
                if (item.includes('is-style')) {
                    newClassName = item
                }
                return newClassName
            })
            classArray = classArray.filter(item => item !== '')
            let classString = `${classArray.join(' ')} ${borderColorClassName}`
            props.attributes.className = classString
        }

		return (
			<Fragment>
				<BlockEdit { ...props } />
				<InspectorControls>
                    <PanelColorSettings
                        title={ __( 'Color Settings' ) }
                        colorSettings={ [
                            {
                                value: '#000000',
                                onChange: ( colorValue ) => setAttributes( { borderColor: colorValue } ),
                                label: __( 'Border Color' ),
                            }
                        ] }
                    />
				</InspectorControls>
			</Fragment>
		);
	};
}, 'withColorPalettes' );

addFilter('editor.BlockEdit', 'extend-block-separator/with-color-palettes', withColorPalettes);