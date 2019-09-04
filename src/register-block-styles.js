/**
 * Custom block javascript file
 * 
 * Table of contents
 * 1. Extending Quote
 * 2. Extending List
 * 3. Extending List: with background
 * 4. Extending Image
 * 5. Extending Separator
 * 
 * Authors: dFlow Team
 * Created by: Kadek Pradnyana (https://github.com/Pradnyana28)
 * 
 * WordPress Docs: https://developer.wordpress.org/block-editor/tutorials/javascript/extending-the-block-editor/
 */

const { registerBlockStyle } = wp.blocks

//  1. Extending quote ...
registerBlockStyle('core/quote', {
    name: 'critical-quote',
    label: 'Critical Quote'
});

// 2. Extending List ...
registerBlockStyle('core/list', {
    name: 'pink-list',
    label: 'Pink List'
});

// 3. Extending List ...
registerBlockStyle('core/list', {
    name: 'pink-list-background',
    label: 'With Background'
});
registerBlockStyle('core/list', {
    name: 'pink-list-with-border',
    label: 'With Border Bottom'
});

// 4. Extending Image ...
registerBlockStyle('core/image', {
    name: 'with-dark-background',
    label: 'With Dark Background'
});

// 5. Extending Separator ...
registerBlockStyle('core/separator', {
    name: 'five-dots-separator',
    label: '5 Dots'
});
registerBlockStyle('core/separator', {
    name: 'blank-separator',
    label: 'Blank'
});