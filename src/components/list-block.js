/**
 * Required components
 */
const { __ } = wp.i18n;
const { createElement } = wp.element;
const { registerBlockType } = wp.blocks;

const el = createElement;

registerBlockType(
    'dflow/block-list',
    {
	    title: __('Block List'),
	    icon: 'list',
        category: 'common',
        keywords: ['list', 'block', 'dflow'],
        edit: function (props) {
            return (
                el('div', { className: props.className },
                    el('div', { className: 'dflow-block-list-wrap' },
                        el('div', {}, 'Description'),
                        el('div', {}, 'Subscribe')
                    )
                )
            )
        },
 
        save: function (props) {
            return (
                el( 'div', { className: props.className },
                    el( 'form', { className: 'misha-block-form-wrap' },
                        el( 'input', { 'type': 'email', 'placeholder' : 'Enter your email address' } ),
                        el( 'button', {}, 
                            'Subscribe' 
                        )
                    )
                )
            );
        },
    } 
);