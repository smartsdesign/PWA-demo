# PWA

## Overview
A demo Progressive Web App leveraging Service Workers (sw-precache specifically) and Angular2 for Offline access.

## Prerequisites
* Node
* Angular-CLI
* sw-precache

## To run app

- Run `npm install`
- Install Angular-CLI if not already installed on your dev environment `npm install -g @angular/cli`

### Build for production

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### sw-precache the files

* Run `npm run sw`

### start local server

* Run `npm run static-server`. This should start the page in the browser.

Now click on the network tab and click the offline check mark and reload the page, the App should still be working.
