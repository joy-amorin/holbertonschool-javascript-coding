#!/usr/bin/node

const request = require('request');
const dict = {};

request(process.argv[2], (error, response, data) => {
  if (error) {
    console.error(error);
  }
  const tasks = JSON.parse(data);
  tasks.forEach((task) => {
    if (task.completed) {
      if (dict[task.userId]) {
        dict[task.userId]++;
      } else {
        dict[task.userId] = 1;
      }
    }
  });

  console.log(dict);
});
