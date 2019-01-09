#!/usr/bin/env node
const cli = require("cli-color");

let getProcessIndex = process.argv;
for (let i = 0; i < getProcessIndex.length; i++) {
  let getProcessAtt = getProcessIndex[i];
  if (getProcessIndex.length === 2) {
    console.log('Please insurt arguments!');
    process.exit(0);
  }
  else if (getProcessAtt === getProcessIndex[2]){
    console.log(cli.red.bold(getProcessIndex[2]));
  }
}
