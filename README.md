# Webpack Boilerplate :hammer:

## Project Structure

## Unit Testing

* __Jest__ is used for unit testing both __es6__ and __node__ modules
* __\_\_test\_\___ directory will have all the unit tests
* File conventions should be \<module\>.test.js
* Code coverage reports are also generated

## Assets

### JavaScript

* All JavaScript assets should be in the directory __src/js__
* ECMA Script 6 is supported using __babel__ and should be strictly followed
* Linting is provided by __eslint__
* All external JavaScript dependencies should be installed with __npm__ only
* __Vue__ is installed and imported in __src/js/app.js__
* All the JavaScript files will be __minified__
* Sourcemaps will be generated for debugging purpose during development only

### Stylesheets

* All stylesheets should be in the directory __src/sass__
* __SASS__ is supported
* __Bootstrap 4__ is installed and imported in __src/scss/index.js__
* CSS prefixing to support all browsers is proccessed using __PostCSS__
* All the stylesheets will be __minified__
* Sourcemaps will be generated for debugging purpose during development only

### Images

* All images should be in the directiory __src/images__
* They will be compressed automatically for better performance

## Express Webserver

* Barebone express project is scaffolded in __src/app__ directory
* Hot reloading with file changes is supported with __reload.js__ :fire:

## How to use this scaffold ?

1. Install [Node.js](http://nodejs.org)

2. Clone this repo

```
git clone https://github.com/ameerthehacker/webpack-boilerplate.git
```

3. Install required dependency

```
npm install
```

## NPM Commands

* Run express webserver in production

```
npm start
```

* Run express webserver in development with __hot reloading__ on file changes

```
npm run dev
```

* Lint the JavaScript code

```
npm run lint
```

* Run unit testing with __jest__

```
npm test
```

* Get code coverage report

```
npm run coverage
```

The coverage report will be available as html in the __coverage__ directory

* Build all the JavaScript and stylesheets for __development__ (not minified / has sourcemaps)

```
npm run build:dev
```

* Build all the JavaScript and stylesheets for __production__ (minified / no sourcemaps)

```
npm run build:dev
```

* Build all the JavaScript and stylesheets for __development__ and watch for changes

```
npm run build:watch
```

## Distribution Directory

All the assets are build and placed in the directory __src/app/public__

## License ##

MIT © [Ameer Jhan](mailto:ameerjhanprof@gmail.com)