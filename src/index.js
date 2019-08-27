/**
 * Custom block javascript file
 * 
 * Table of contents
 * 1. Extending Quote
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

// 2. List
registerBlockStyle('core/list', {
    name: 'pink-list',
    label: 'Pink List'
});