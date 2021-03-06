'use strict';

const ConsoleRunner = require('./ConsoleRunner.js');
const ChakraRunner = require('./ChakraRunner.js');
const SMRunner = require('./SMRunner.js');
const D8Runner = require('./D8Runner.js');
const NodeRunner = require('./NodeRunner.js');
const BrowserRunner = require('./BrowserRunner.js');

exports.getRunner = function (path, type, args) {
  if (type === 'ch') {
    return new ChakraRunner(path, args);
  } else if (type === 'jsshell') {
    return new SMRunner(path, args);
  } else if (type === 'node') {
    return new NodeRunner(path, args);
  } else if (type === 'd8') {
    return new D8Runner(path, args);
  } else if (type === 'browser') {
    return new BrowserRunner(path, args);
  } else {
    throw new Error("Unknown runner type: " + type);
  }
}
