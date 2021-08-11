function testAwait() {
  return new Promise(resolve => {
    setTimeout(function () {
      console.log('testAwait');
      resolve('aaaa');
    }, 1000);
  });
}

Promise.resolve('dddd').then(console.log);
