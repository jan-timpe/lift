# Cache expiration

map $sent_http_content_type $expires {
    default off;
    text/html epoch;
    text/css max;
    application/javascript max;
    ~image/ max;
}

##

# Default server on port 80 redirects to https

server {

    listen 8080;
    listen [::]:8080;
    charset utf-8;

    root /var/www/html;
    index index.html;

    location / {
        rewrite ^ https://$host$request_uri? permanent;
    }
}


# Application served on port 443 (https)

server {

    # default server settings

    listen 8443 ssl http2 default_server;
    listen [::]:8443 ssl http2 default_server;
    server_name lift.jantimpe.com;
    charset utf-8;

    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    ##
    # logging

    access_log /dev/stdout;
    error_log /dev/stderr info;

    ## ssl settings
    ssl on;
    add_header Strict-Transport-Security "max-age=31536000" always;
    ssl_session_cache shared:SSL:20m;
    ssl_session_timeout 10m;

    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    ssl_ciphers "ECDH+AESGCM:ECDH+AES256:ECDH+AES128:!ADH:!AECDH:!MD5;";

    ssl_stapling on;
    ssl_stapling_verify on;
    resolver 8.8.8.8 8.8.4.4;

    ssl_certificate /etc/letsencrypt/live/lift.jantimpe.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/lift.jantimpe.com/privkey.pem;
    ssl_trusted_certificate /etc/letsencrypt/live/lift.jantimpe.com/chain.pem;

    access_log /dev/stdout;
    error_log /dev/stderr info;

    proxy_ssl_server_name on;

    ##
    # Caching and compression

    expires $expires;

    gzip_disable "msie6";
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_buffers 16 8k;
    gzip_min_length 256;
    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/vnd.ms-fontobject application/x-font-ttf font/opentype image/svg+xml image/x-icon;

    ##
}

##