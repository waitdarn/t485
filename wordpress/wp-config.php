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
define('DB_NAME', 'wordpress_');

/** MySQL database username */
define('DB_USER', 'wordpress_user');

/** MySQL database password */
define('DB_PASSWORD', 'GTYHpnbZKbWNKGx1zYQM');

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
define('AUTH_KEY',         '7_AEY%D&gW{!E-_yqFoXqNS&32yYN618P+Z%QQXV5/8sP|BF_ICC-:--g*hcsdS+');
define('SECURE_AUTH_KEY',  '[&CBrK5HCTCs p?Hurk}:,eDsdk#lb2/9$&OCK EHz]*yxD:`)?W.=Fb$suRBSc=');
define('LOGGED_IN_KEY',    'KOdQ@r$H*)+f!^xWhh+5-`/e,+<+#^W!tyk+zaw1mxJmKu4)Z{F|g}n,J;b|A~jG');
define('NONCE_KEY',        'q}Y5&B(,LL]V@)z]A|a/g!VIYJLu5$)+t1F+LY<m>#YCrWa?F@MMT-z2C?K[5:|=');
define('AUTH_SALT',        'ICB_Wf#8;QZk ![Kg*$LP[Q-_pSA-@zKg3Wf[+L&M`NQ%0$9-Q8<D@^U0Gk];qh$');
define('SECURE_AUTH_SALT', 'bkM(HU)wuX#pDG,-((I$o-h{z2)?:sOM4ykfq/J[}GlxpZ`oSoD`-n2#Y^%m(C}:');
define('LOGGED_IN_SALT',   '8c_Ng>ke+SKo-ZXDxY,UW+AOfhVY}E&U2E{s]~SNAW;D(h{)~g_~^@8hbjmk_^CC');
define('NONCE_SALT',       'E.$i<`owNeR>lHFLTKeb<I-u+ZPfM9p2I.EeI4cfm7+Ipml(Bu.ik1.1Yj!2}5d}');

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
define( 'WP_ALLOW_MULTISITE', true );

define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', false);
define('DOMAIN_CURRENT_SITE', 't485.org');
define('PATH_CURRENT_SITE', '/wordpress/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
