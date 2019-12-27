// example-01.js
// We can't get a chance to listen for them before loaded
// Function like img1.ready() is needed
var img1 = document.querySelector('.img-1');

img1.addEventListener('load', function() {
  // Window: load event - https://developer.mozilla.org/ko/docs/Web/Events/load
  console.log(`woo yey image loaded`);
});

img1.addEventListener('error', function() {
  // Window: error event - https://developer.mozilla.org/en-US/docs/Web/API/Window/error_event
  console.log(`argh everything's broken`);
});
