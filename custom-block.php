<?php
/*
Plugin Name: Custom Block
Description: A custom style block that extends existing Guternberg block
Author: dFlow Team
Author URI: https://dflow.com.au/
Text Domain: custom-block
Version: 1.0.0
*/

function guternberg_scripts_enqueue() {
    wp_enqueue_script( 'custom-block-script', plugins_url( 'build/index.js', __FILE__ ), ['wp-blocks', 'wp-editor'] );
}
add_action( 'enqueue_block_editor_assets', 'guternberg_scripts_enqueue' );

function guternberg_styles_enqueue() {
    wp_enqueue_style( 'custom-block-style', plugins_url( 'src/style.css', __FILE__ ) );
    if ( is_admin() ) {
        // we already import this on theme enqueue
        wp_enqueue_style( 'custom-block-font-style', 'https://use.typekit.net/bvf3vyl.css' );
    }
}
add_action( 'enqueue_block_assets', 'guternberg_styles_enqueue' );