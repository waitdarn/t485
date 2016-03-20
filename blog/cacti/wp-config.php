<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'patrols');

/** MySQL database username */
define('DB_USER', 'wp_user');

/** MySQL database password */
define('DB_PASSWORD', 'Yn47mWBT8EYFgbbQ');

/** MySQL hostname */
define('DB_HOST', 't485org.ipagemysql.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'PN,BUTO=-oIuRs{#ig@s3kiNcic;)mV>L2h.(}p|dKlL}^?`nwc1iEB3 ^%FED3.');
define('SECURE_AUTH_KEY',  '=%RwY&1<p:%&4RZLSPG^nQF@G[+>zUE7_D&JgE-0c{[;h}{y]]Fybn+%f]6p[;w}');
define('LOGGED_IN_KEY',    '0?gTA&^<2H}#FUD/(PwTgt9c9QJeP+w+^Yaq:| |5Q$hem)Dw5SNZIa)_H(I@u n');
define('NONCE_KEY',        'Atu2C]<(f_`rr-aU6-,s?oGC#DtJmA[^((5|?hQ!ij&+zM6,-|%1VLQt9;ZOO)ac');
define('AUTH_SALT',        '/.$Zx[XO_4io0-DwFsC)~+GSb- XH)|m-5/m?7vf|w$6.A9:{kw$i@`O2wrv:O]+');
define('SECURE_AUTH_SALT', 'C0F8_EhIez~96-r=Wlo@L&Ld*W~qd&NPR7ANtvb(%9qOik5Y%+g&zo2u{^]+5-ta');
define('LOGGED_IN_SALT',   'Q>.1is |499OF~~3VDBX^8FA5 x2Es}1=<Cfqt6YfP25`:V^KhXB|Hu|69*tC-wG');
define('NONCE_SALT',       '!id?a/:+Z&]{N5a/L7=+;+-0r27vr,V$6 {siZ</v&s&X0[B2t.g2|ejY<?9.j5j');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'cacti';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
