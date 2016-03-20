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
define('AUTH_KEY',         'gWh%8h+Bs~Vw68X8yq`5.kAXB8}->qZgQp|^}vFi[+[E+H`95Eg1B=WW3Nan-<>G');
define('SECURE_AUTH_KEY',  '&~Ff;s*~ySygohr1VHy^n1#C,|9:E-*XnU>|}iQvR+hY6a|eRZ/|52BdyjrdeJ*d');
define('LOGGED_IN_KEY',    ' !ME^/-41S>?p3~Ihndl--]{+bY}I7t,+rM8.rF7a3>t`,uz4QLH54Y>Im22+fb|');
define('NONCE_KEY',        '.PklK9];)U8ih1xi.MQmTSZ[/u(xpK2H,x=l+|11|,sL!+=c8Z`ezUr<wt +E7P|');
define('AUTH_SALT',        '||1oI-;G)0C%D=x)phpK`Q36dYfxyW:qf-bC4_|qS;.YJ+<]++9B,q`N5:a^FyTD');
define('SECURE_AUTH_SALT', '_X4*Nh?u_)po$>wZ@ ++X*._Rx,e;azVQua~yT}^&Sj3V a{K?7Ese.A.i:4) xv');
define('LOGGED_IN_SALT',   '?t=<T.6X>+**+Wxp}HFLqpl;Bk$9g3$k{cDNV{z4)~?/9c$o~1ZX)`RK>-[yg-l]');
define('NONCE_SALT',       '3z|*5W[!sAx^3B=KisqO=%&{TtI~EgZQS2fo9=VnWe?u8r[%mswEJra4x]a0*S8v');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'blobfish_';

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
