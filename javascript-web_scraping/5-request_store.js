#!/usr/bin/node

const request = require('request');
const fs = require('fs');
request(process.argv[2], (error, response, data) => {
  if (error) {
    console.error(error);
  }
  fs.writeFile(process.argv[3], data, (error) => {
    if (error) {
      console.error(error);
    }
  });
});
