import "./styles.css";

const urls = [
  "https://swapi.co/api/people/2/",
  "https://swapi.co/api/people/1/"
];

function httpGet(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = function() {
      if (this.status === 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });
}

Promise.all(urls.map(httpGet)).then(console.log("оба ответа получены"));
