# magento2ionic
In magento 2 root directory .htaccess file need to add below lines in mod_headers.c module


 Header always set Access-Control-Allow-Origin "*"
	Header always set Access-Control-Allow-Methods "POST, GET, OPTIONS, DELETE, PUT"
	Header always set Access-Control-Max-Age "1000"
	Header always set Access-Control-Allow-Headers "x-requested-with, Content-Type, origin, authorization, accept, client-security-token"
	   # Added a rewrite to respond with a 200 SUCCESS on every OPTIONS request.
	RewriteEngine On
	RewriteCond %{REQUEST_METHOD} OPTIONS
	RewriteRule ^(.*)$ $1 [R=200,L]  
