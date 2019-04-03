#!/usr/bin/env node
const exec = require('child_process').execSync
const cmd = 'npm install'

module.exports = function (context) {
  console.log('Install node scripts dependencies')
  exec(cmd, function (error, stdout, stderr) {
    if (error) console.log(error)
    if (stdout) console.log(stdout)
    if (stderr) console.log(stderr)
  })
}
