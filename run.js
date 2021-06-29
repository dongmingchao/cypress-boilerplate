#!/usr/bin/env node
const { execSync } = require('child_process');

let presetArgs = `-c integrationFolder=${process.cwd()}`;

if (process.argv.length > 2) {
  presetArgs = process.argv.join(' ');
}
const cmd = `cd ${__dirname} && npm run cypress -- ${presetArgs}`;
execSync(cmd);
