if (!XMLHttpRequest) {
  var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
}

function get(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      if (req.status == 200) {
        // console.log(req.responseText);
        resolve(req);
      } else {
        reject(Error(req.statusText));
      }
    };

    req.onerror = function() {
      reject(Error('Network Error'));
    };

    req.send();
  });
}

module.exports = get;