Angular Font-Selector
=====================

A fontselect directive for AngularJS


Building
--------

We use [Grunt](http://gruntjs.com/) for building and
[Karma](http://karma-runner.github.io/) for testing.  
Before you can use the `grunt` command you need to install our
npm package dependencies and bower components by executing

```bash
npm install
bower install
```

Then you should be able to execute the following commands:

__Complete build:__ `grunt`

__All tests without build:__ `grunt test`

__Watch and test headless on every file change:__ `grunt watch:start`


Sandbox
-------

There is a Sandbox for building castles and end to end testing.
In the projects root folder execute `node-dev test/sandbox/web-server.js`

Then go to http://localhost:8000/test/sandbox/index.html in your favorite browser.


End to End Testing
------------------

Make sure you have a silenium standalone server running at port 4444
See [protractor README](https://github.com/angular/protractor/blob/master/README.md) 
for details.

Start the [Sandbox](#sandbox)

Execute `grunt protractor`



Future Features
---------------

* We'd like to have the ability to filter/extend the font collection per directive.
