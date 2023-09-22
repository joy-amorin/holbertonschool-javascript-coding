#!/usr/bin/node

const request = require('request');

request('https://swapi-api.hbtn.io/api/films/' + process.argv[2], (error, response, data) => {
  if (error) {
    console.error(error);
  }
  console.log(JSON.parse(data).title);
});
