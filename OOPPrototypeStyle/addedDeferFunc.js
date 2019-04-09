Function.prototype.defer = function(ms) {
  return (...args) => {
    setTimeout(() => {
      this(...args);
    }, ms);
  }
}

function helloWorld() {
  console.log('hello world');
}

function sum(a, b) {
  console.log(a + b);
}


helloWorld.defer(1000);
sum.defer(1000)(5,6);