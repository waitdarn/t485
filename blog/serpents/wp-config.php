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
define('AUTH_KEY',         '>FjKp6ryXCWkit;O0=0L/-_;aBpTm>p0,?m*|)DUxHM?y/48-QL`|@6nXK>z*:nq');
define('SECURE_AUTH_KEY',  '8+~(p{-YkAb;;^~T)sN)odqnMOSKv^5BERV)k|zmYv.E@R|?,gW6Og4^lg=+?`K]');
define('LOGGED_IN_KEY',    '#9BBLu?&re?*ZSP}b)G1+awnnb3UpM= iIAR6c-}|{{5zs+NYA|lG&IUzk`;Y]!z');
define('NONCE_KEY',        '?rq--?#P/}]+GW-7|zx~$8HkjXRC`%{0SFX$+6V3Xg.qn6;|(&t<E>;MZH}*yn.E');
define('AUTH_SALT',        'f`Dpk]cho`[JcJIJ+)6*QnpCyii[C*^TawK^P%Og>yt+b7ma0iv7]+Y(8)l|TgMO');
define('SECURE_AUTH_SALT', '|Pa>#9d+G4aYmixF4*[eSXCx-xj<!xK&bKfbeoX38QN-0H&cQJ$)K-sjuyzUXtLs');
define('LOGGED_IN_SALT',   'A;>*P1:TEM Qk)78>r :mYj|w#5FZ`,Z1s}|_+w_F1Mg0Ey4P1r^x)v+gkUu9lBD');
define('NONCE_SALT',       'u{JgySD=X>d,+p+Zc;-BNh=0=+oj30gN((nZcOVo6`K}8?|LgQ;%;/<7@KL01MSx');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'serpents_';

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
