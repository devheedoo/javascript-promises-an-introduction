// example-03.js

var asyncThing1, asyncThing2, asyncThing3,  asyncThing4;
var asyncRecovery1, asyncRecovery2;

// asyncThing1().then(function() {
//   return asyncThing2();
// }).tehn(function() {
//   return asyncThing3();
// }).catch(function(err) {
//   return asyncRecovery1();
// }).then(function() {
//   return asyncThing4();
// }, function(err) {
//   return asyncRecovery2();
// }).catch(function(err) {
//   console.log(`Don't worry about it`);
// }).then(function() {
//   console.log(`All done!`);
// });

/**
 * asyncThing1 > asyncRecovery1
 * asyncThing2 > asyncRecovery1
 * asyncThing3 > asyncRecovery1
 * - asyncRecovery1 > asyncRecovery2
 * asyncThing4
 * Don't worry about it
 * All done
 */

// asyncThing1.then(function() {
//   return asyncThing2();
// }, function(err) {
//   return asyncRecovery1();
// }).catch(function(err) {
//   return asyncRecovery2();
// });

/**
 * asyncThing1 > asyncRecovery1
 * asyncThing2 
 */

function getSuccess() {
  return new Promise(function(resolve, reject) {
    console.log('success');
    resolve('success');
  })
}

function getFail() {
  return new Promise(function(resolve, reject) {
    reject(Error('fail'));
  })
}

// asyncThing1 = getSuccess;
asyncThing1 = getFail;
// asyncThing2 = getSuccess;
asyncThing2 = getFail;
asyncRecovery1 = function() { console.log('recovery1'); }
asyncRecovery2 = function() { console.log('recovery2'); }

asyncThing1().then(function() {
  return asyncThing2();
}, function(err) {
  return asyncRecovery1();
}).catch(function(err) {
  return asyncRecovery2();
});

