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
define('AUTH_KEY',         'YPo>)j_kr&EekNO;h*>,L>9sG$27+;q<.`_ElFd&P+c|:3-4SVp*Zv$|fMeQcl0s');
define('SECURE_AUTH_KEY',  'z--PB<eqpGj+@^bE3f`)[@wY|YH{Acd(4K&nz-__o0bTZ&t79Jo|<dLae[G#)416');
define('LOGGED_IN_KEY',    '& /SB)*^teuV[Y+[<=lS$F$.-.O6Lqf*r1|],V:W]fl_VCl?w&9U+9)/^f)%` no');
define('NONCE_KEY',        'zl7R!XDrB$!XTT=E:VVvHyaZ;6O.p=-I-G]=u<h&Fwmgg08L3<g2-lPSh$U~gLw&');
define('AUTH_SALT',        'O:Q-P>+ZJ-LRyVJ*b <ei}+]8.U=&W$ !a|t5Hx>z(e0HEC5b*EQ|~0nY3neq~D>');
define('SECURE_AUTH_SALT', '+rrq-A^D?{N>CbMbh]uw`Dc/)D^*W1N|W6dB?xs+v[c~ 1twvD}Tsx@qF%/Ju!!*');
define('LOGGED_IN_SALT',   'L/B|^ie+0V*7~i?_tI,dHE}8XhU yJqV<kxGYf&>EhoH-xQ<<raQ/hkV%svtZBSP');
define('NONCE_SALT',       '=o=Sb^r|Md)B?m&[2d+:_$z$^-,CQ[H-2QM+|`FCv;Fl[hBb[(|e0v@AoS3f0KIx');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'hawks_';

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
