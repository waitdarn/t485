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
define('AUTH_KEY',         'd~FCV?*-Y+Aq ]MFAmltvvG{A( P=E4`*T3+CDF0kk1< !6gG$kztTP.T`9LCN4/');
define('SECURE_AUTH_KEY',  '!5<],_i1s@^3]k6.AB383VMxnbv{Q>.V4P?aO:2fs:n!f+4Z8f}hU*9~,H~~[1qq');
define('LOGGED_IN_KEY',    'Z9/oW zoaom_$ty7jO1~Gt|k2P}FCq(Vk+-iN]toVxsZe3%cN(FN}o!{(8p_u1Kw');
define('NONCE_KEY',        '>)9Prs&w*-EPs-]MfH)D X|i|~7,G0MUMYQ/0q3khVG8#0 ?&Z)7*dUV;W$i;mh^');
define('AUTH_SALT',        '6tYsgx .<Dh<r?8sAxS=#N|2;{{N`wYE1IQX}sDK|$+IP4TWBQt:E`H:xb~NmD)G');
define('SECURE_AUTH_SALT', 'xp~V&Z Z%>v-lFzb|AiFS3f-MBb[``41NE?7M!v2VM0v|Rhqb=+!hdSqJ-$UCAq-');
define('LOGGED_IN_SALT',   'vK?iX,>99V1E9_R]ryrtzH7=a6#Db#K+Xe<`Ke?Y$y2S!H(1hWgjkZaIk|p9FZ~A');
define('NONCE_SALT',       ';/m98(&e5Bt+rl=C-Jqs63Y);gX)tRB.JNq$G1,<jDwukC78z/jDa]OSlk*EF:  ');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wildcats_';

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
