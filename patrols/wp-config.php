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
define('DB_NAME', 'wp');

/** MySQL database username */
define('DB_USER', 'wp_user');

/** MySQL database password */
define('DB_PASSWORD', 'GTYHpnbZKbWNKGx1zYQM');

/** MySQL hostname */
define('DB_HOST', 'localhost');

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
define('AUTH_KEY',         '~S|@I`;H9iXK.-4?^~H_EM4hot-_P-a:Z{RgwHTO(H>-.A30H>3%y5D< fo{jcQm');
define('SECURE_AUTH_KEY',  '8<jiB{or0 *a@q2q.B0g|D_~|RF0Ywz*}F[8p+7K%=K9r{<0Uujj-1ox`LA,q++T');
define('LOGGED_IN_KEY',    'xmG8Ory$BuCDGBaVkk^G`Q>TIh^1w.-Mqx?$+Y9owKgFB|$f1h>z/+yS6~N)R,nA');
define('NONCE_KEY',        'E-|dkSLEL~&(y(z/v*G}{kgets6*^YT/3$D0iQAv~jw-!Q_-!cY>h@qbM_@-6)V>');
define('AUTH_SALT',        'K9B8lT7#q#EIqF:+:`i>6)YfrzEOm!Zen9F?Au7$0mi`mQ !Wf,B#Q%Lnv!iEH#u');
define('SECURE_AUTH_SALT', '{fu;/s6 +g;rXlFw&?b2H+~}yDSuc_AUD(Mg~5HjY+D5nsb)(f4qfNIlqAv~bZ*}');
define('LOGGED_IN_SALT',   'X:q+JV0] }z*BB0;+Y>:1RX$!..+x`}A|mhGbmbwN<|B-R,:mY&p*-Ef|{.y7O?[');
define('NONCE_SALT',       'w8O7Gqg0G2Yl:,CKj*R3&Vohz0d1ihvkCLgVx@wbe9yQDt6FV:Y_7??$HtN<-l#*');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

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
