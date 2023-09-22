#!/usr/bin/node

const request = require('request');
let count = 0;

request(process.argv[2], (error, response, data) => {
  if (error) {
    console.error(error);
    return;
  }

  const movies = JSON.parse(data).results;
  for (const movie of movies) {
    const characters = movie.characters;
    for (const characterUrl of characters) {
      if (characterUrl.includes('18')) {
        count++;
      }
    }
  }

  console.log(count);
});
