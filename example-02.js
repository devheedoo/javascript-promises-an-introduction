// example-02.js
const get = require('./promise-get');

get('https://jsonplaceholder.typicode.com/todos/1').then(function(response) {
  console.log('Success!', response.responseText);
}, function(error) {
  console.error('Failed!', error);
});