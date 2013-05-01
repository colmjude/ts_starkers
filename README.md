#ts_starkers
An initial directory setup, grunt tasks and default dependencies. Intended as a starting point for building SPAs for [tiddlyspace](http://tiddlyspace.com).

## Prerequisites

* [grunt](http://gruntjs.com): `npm install -g grunt-cli grunt-init`
* [tsapp](https://github.com/cdent/tsapp.git)

##Getting Started
Firstly update the **package.json** file. This includes meta data about your SPA and the grunt dependencies.

Once it includes the dependencies required run `npm install` to actually install them.

Run the default `grunt` task will jshint js files, pull down the required js lib files (see curl config in Gruntfile.js), compass compile sass files and copy necessary files to assets folder.

##Default Grunt Tasks
The default **Gruntfile.js** comes with some predined tasks. They are:

* `ts-deploy` - pushes contents of assets folder to tiddlyspace
* `ts-serve` - runs your SPA locally
* `ts-clean` - empties the assets folder
* `ts-update` - recompiles any files that need recompiling, updates the files in the assets folder
* `deploy` - this compiles the sass files, copies src files to assets folder and then deploys to tiddlyspace