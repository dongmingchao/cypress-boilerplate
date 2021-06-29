#!/usr/bin/env node
const { execSync } = require('child_process');
// const {series} = require('async');

// series([
//   () => execSync('npm run cypress')
// ]);
const cmd = `cd ${__dirname} && npm run cypress -- -c integrationFolder=${process.cwd()}`;
console.log('cmd', cmd);
execSync(cmd);
