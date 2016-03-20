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
define('AUTH_KEY',         '||2[!(kv8K{;Xoo3tB|f}J6tjh&t6.,E<AIOA-;X,m.5Tx.GdlHua;4L{u|Rrtg}');
define('SECURE_AUTH_KEY',  'sg-lGuwO[(CmpO.[Z<:TpdFJn0iGG8JN9Jwb ]!xCArkQz5hkC8$Tmas0rP<a 1a');
define('LOGGED_IN_KEY',    '*0:eJS*Wv`T0@]]pG.;f(Ae==t-j_|b#}bC/Q{qABFJbg0&[[V0LL1a#^A.M|(f|');
define('NONCE_KEY',        '$aln*9|O0H_Vo2*,;ZTmRxy,O?V9S:!XYH9G[}X>La,-#>>T._:(,qi+2PXSrjwC');
define('AUTH_SALT',        '7}R.sMf];iJ?=2[9[U+?|xXGEnT|4m#Gn&3> lol0odM2&E6B,+6*<0J2fn>BB.f');
define('SECURE_AUTH_SALT', 'FtL|{8r^7 /F#$U;i-833i<kk`UOeOv-*|Iz_Zl+yqjL}-}5*3*|ObnnTEs7GQqB');
define('LOGGED_IN_SALT',   'u:bo,G|=mxx3J#@e_69xZ/~=$*re,gMbsV#rK|AJ/F?q<+Z:$[JSp>&1|?Z9Rv(X');
define('NONCE_SALT',       'CYwPf;ns7$Y-ou;(wy4,,p5nfx5*Ao8^my$WZmKCG[F&1,US4_{(?/;1_Rvf(s=f');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'dragons_';

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
