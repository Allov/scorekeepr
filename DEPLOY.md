# How to Deploy scorekeepr

## Needed applications

* Node >= 8.0.0
* npm = 4.6.1 (doesn't work with 5 yet, don't know why)
* nginx >= 1.11 (or apache, any webserver that can reverse proxy)
* forever >= 0.15.3
* nvm

## How to deploy

### On local machine

* check `global-config.js` in both server and app folder and change url accordingly.
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
cd scorekeepr && NODE_ENV=production PORT=1339 forever start server
```

### Stopping the server

* `forever stopall`

## Useful links

* [nvm: command not found](https://stackoverflow.com/questions/21215059/cant-use-nvm-from-root-or-sudo/29903645#29903645)
