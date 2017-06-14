# How to Deploy scorekeepr

## Needed applications

* Node >= 8.0.0
* npm = 4.6.1 (doesn't work with 5 yet, don't know why)
* nginx >= 1.11 (or apache, any webserver that can reverse proxy)
* forever >= 0.15.3
* nvm
* mongodb >= 3.4.4

## How to deploy (no package installation needed)

### On local machine

* check `global-config.js` in both server and app folder and change url accordingly.
* update all service keys:
  * Google Analytics in `index.html`
  * Facebook in `index.html`
* `npm run build:prod`

### On server machine

* `forever stopall`
* remove `build` and `server` directories
* using WinSCP (or any sftp client), copy
  * `build/*`
  * `build-server/*`
* rename `build-server` to `server`
* `cd ~ && ./start_scorekeepr`

## How to deploy (full deploy)

### On local machine

* check `global-config.js` in both server and app folder and change url accordingly.
* update all service keys:
  * Google Analytics in `index.html`
  * Facebook in `index.html`
* `npm run build:prod`
* using WinSCP (or any sftp client), copy
  * `build/*`
  * `build-server/*`
  * `internals/*`
  * `bootswatch/*`
  * `package.json`

### On production server

* `npm run install`
* rename `build-server` to `server`
* `cd ~ && ./start_scorekeepr`

### start script (bash)

```bash
#/bin/sh
cd {scorekeepr_directory} && NODE_ENV=production PORT={port} forever start server
```

### Stopping the server

* `forever stopall`

## nginx

* start: `sudo systemctl start nginx`
* stop: `sudo systemctl stop nginx`
* reload config: `sudo systemctl reload nginx`
* validate config: `sudo nginx -t`
* status: ``sudo systemctl status nginx``
* configurations: `/etc/nginx/sites-avaiable/default`

### nginx configuration example for scorekeepr
```apacheconf
server {
    # server's root
    listen 80;
    root /home/{user}/{scorekeepr_directory}/;

    # enabling gzip
    gzip on;
    gzip_comp_level 5;
    gzip_min_length 1000;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain application/x-javascript text/xml text/css application/xml;

    # domain
    server_name {domain_name.ext};

    # default location managed by the reverse proxy
    location / {
        proxy_pass http://127.0.0.1:{port};
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # adding a sub directory that is *NOT* manage by the reverse proxy
    location /exemple {
        root /home/{user};
    }

    # maintenance page (offline.html need to be in the server's root)
    error_page 502 @maintenance;
    location @maintenance {
        rewrite ^(.*)$ /offline.html break;
    }
}
```

## mongodb

* start: `sudo systemctl start mongod`
* stop: `sudo systemctl stop mongod`
* status: `sudo systemctl status mongod`
* data directory: `/var/lib/mongodb`
* log directory: `/var/log/mongodb`
* configurations: 
  * `/etc/systemd/system/mongod.service` (warning: *NOT* mongodb.service)
  * `/etc/mongod.conf`

## Useful links

* [nvm: command not found](https://stackoverflow.com/questions/21215059/cant-use-nvm-from-root-or-sudo/29903645#29903645)
* [mongodb on ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04)
* [how to install nginx on ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04)
* [upgrading to ubuntu 16.04 LTS](https://www.digitalocean.com/community/tutorials/how-to-upgrade-to-ubuntu-16-04-lts)
