# Calendar.js
This is just a simple Vanilla Javascript calendar. It's not a package or a plugin to be used somewhere and quickly installed, but just a code example on how to have a calendar created in Javascript. You can surely fork it and try to make it usable in an application. 

## Demo
Here's a demo link to check the calendar on the web. [DEMO](https://calendarjs.codentity.net/)

## Development
I setup lite-server which is a lightweight development only node server that serves a web app, opens it in the browser, refreshes when html or javascript change, injects CSS changes using sockets, and has a fallback page when a route is not found. Before i was using a VS-Code integrated Live server but since that had some issues with SVG markups, i decided to setup lite-server which works pretty well. 

More info on the dev environment here - [Lite-Server](https://www.npmjs.com/package/lite-server) 

### Installation and Usage

For the development environment, you just need to run npm install and then the lite-server package will be also installed after node modules. Then start the environment with npm start (defined like that on package.json)

```
$ cd /path/to/project-folder
$ npm install 
$ npm start
```