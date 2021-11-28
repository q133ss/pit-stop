<?php
//Exit if accessed directly

if ( ! defined( 'ABSPATH' ) ) {
exit; 
}

global $wpdb;

	$table_name = $wpdb->prefix . 'main_calc';
	$charset_collate = $wpdb->get_charset_collate();

	$sql = "CREATE TABLE $table_name (
	  id mediumint(9) NOT NULL AUTO_INCREMENT,
	  key tinytext NOT NULL,
	  value varchar(55) DEFAULT '' NOT NULL,
	  PRIMARY KEY  (id)
	) $charset_collate;";

	require_once ABSPATH . 'wp-admin/includes/upgrade.php';
	dbDelta( $sql );

	echo '1';