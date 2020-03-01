module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(203);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 129:
/***/ (function(module) {

module.exports = require("child_process");

/***/ }),

/***/ 203:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const { sh } = __webpack_require__(686);

async function gitPush() {
  await sh(
    `git pull
    git push --follow-tags`,
  );
}

gitPush().catch((err) => {
  console.error(err);
  process.exit(1);
});


/***/ }),

/***/ 669:
/***/ (function(module) {

module.exports = require("util");

/***/ }),

/***/ 686:
/***/ (function(module, __unusedexports, __webpack_require__) {

const childProcess = __webpack_require__(129);
const util = __webpack_require__(669);

const execPromise = util.promisify(childProcess.exec);
const { spawn } = childProcess;

async function sh(cmd) {
  const cmdEscaped = cmd
    .replace(/^\s*#.+$/gm, '') // Remove comments
    .replace(/[\r\n]+\s*[\r\n]+/g, '\n') // Remove empty lines
    .replace(/((?<!<<EOL.*)[\r\n]+(?!EOL))/gs, ' \\\n') // Add trailing backslash except for <<EOL EOL
    .replace(/^(((?!\b(then|else|elif|do)\b).)*) \\$/gm, '$1; \\'); // Append a semicolon command except for bash keywords

  console.info(cmdEscaped);

  await new Promise((resolve, reject) => {
    try {
      const process = spawn('sh', ['-c', cmdEscaped], { stdio: ['inherit', 'inherit', 'pipe'] });
      let error = null;

      process.stderr.on('data', (data) => {
        const message = data.toString().trim();
        console.error(message);
        error = new Error(message);
      });

      process.on('close', (code) => {
        if (code !== 0) {
          if (!error) {
            error = new Error(`Error code ${code}`);
          }
          error.code = code;
          reject(error);
          return;
        }

        resolve();
      });
    } catch (err) {
      reject(err);
    }
  });
}

async function exec(cmd, { echo = false } = {}) {
  if (echo) {
    console.info(cmd);
  }

  const { stdout } = await execPromise(cmd);

  if (echo) {
    console.info(stdout);
  }

  return stdout.trim();
}

module.exports.sh = sh;
module.exports.exec = exec;


/***/ })

/******/ });