<?php
function my_child_theme_styles() {
    // Get the parent theme's stylesheet handle
    $parent_style = 'parent-style';

    // Enqueue parent theme stylesheet
    wp_enqueue_style($parent_style, get_template_directory_uri() . '/style.css');

        //slick slider enqueue
    wp_enqueue_style('slick-style', get_stylesheet_directory_uri() . '/slick/slick.css', array($parent_style), wp_get_theme()->get('Version'));
    wp_enqueue_style('slick-theme-style', get_stylesheet_directory_uri() . '/slick/slick-theme.css', array($parent_style), wp_get_theme()->get('Version'));
    wp_enqueue_script('slick-script', get_stylesheet_directory_uri() . '/slick/slick.js', array('jquery'), wp_get_theme()->get('Version'), true);

    // Enqueue child theme stylesheet
    wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/css/style.css', array($parent_style), wp_get_theme()->get('Version'));

    // Enqueue child theme javascript
    wp_enqueue_script('child-script', get_stylesheet_directory_uri() . '/js/script.js', array('jquery'), wp_get_theme()->get('Version'), true);
}
add_action('wp_enqueue_scripts', 'my_child_theme_styles',99);


function register_acf_blocks() {
    register_block_type(get_stylesheet_directory() . '/blocks/testimonials');
}
add_action('acf/init','register_acf_blocks');

add_editor_style('/css/style.css');